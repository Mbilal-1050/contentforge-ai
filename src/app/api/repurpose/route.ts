import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { generatedContent, contentSources, users } from "@/lib/db/schema";
import { repurposeContent } from "@/lib/ai/repurpose";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;

    // Check credits
    const [user] = await db
      .select({ creditsRemaining: users.creditsRemaining, plan: users.plan })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    if (!user || user.creditsRemaining <= 0) {
      return NextResponse.json(
        { error: "No credits remaining. Please upgrade your plan." },
        { status: 402 }
      );
    }

    const body = await req.json();
    const { contentId, targetPlatforms, tone = "professional", language = "en" } = body;

    if (!contentId || !targetPlatforms?.length) {
      return NextResponse.json(
        { error: "contentId and targetPlatforms are required" },
        { status: 400 }
      );
    }

    // Fetch source content
    const [sourceContent] = await db
      .select()
      .from(contentSources)
      .where(eq(contentSources.id, contentId))
      .limit(1);

    if (!sourceContent || sourceContent.userId !== userId) {
      return NextResponse.json(
        { error: "Content source not found" },
        { status: 404 }
      );
    }

    // Generate repurposed content
    const generated = await repurposeContent({
      content: sourceContent.content,
      title: sourceContent.title,
      sourceType: sourceContent.sourceType,
      targetPlatforms,
      tone,
      language,
    });

    // Save to DB
    const savedItems = [];
    for (const item of generated) {
      const [saved] = await db
        .insert(generatedContent)
        .values({
          userId,
          sourceId: contentId,
          platform: item.platform,
          format: item.format,
          tone,
          content: item.content,
          wordCount: item.wordCount,
        })
        .returning();

      if (saved) savedItems.push(saved);
    }

    // Deduct credit
    await db
      .update(users)
      .set({ creditsRemaining: user.creditsRemaining - 1 })
      .where(eq(users.id, userId));

    return NextResponse.json({
      success: true,
      generated: savedItems,
      creditsRemaining: user.creditsRemaining - 1,
    });
  } catch (error) {
    console.error("Repurpose error:", error);
    return NextResponse.json(
      { error: "Failed to repurpose content" },
      { status: 500 }
    );
  }
}
