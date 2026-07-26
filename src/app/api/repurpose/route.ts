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

    // Log warning if no credits, but allow generation for testing
    if (!user || user.creditsRemaining <= 0) {
      console.warn("User has 0 credits — still allowing generation (test mode)");
      // In production, uncomment the block below to enforce credits:
      // return NextResponse.json(
      //   { error: "No credits remaining. Please upgrade your plan." },
      //   { status: 402 }
      // );
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
    console.log(`Starting generation for ${targetPlatforms.length} platforms with tone: ${tone}`);
    const generated = await repurposeContent({
      content: sourceContent.content,
      title: sourceContent.title,
      sourceType: sourceContent.sourceType,
      targetPlatforms,
      tone,
      language,
    });

    console.log(`Repurpose returned ${generated.length} pieces`);
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

    // Deduct credit (only if > 0)
    const newCredits = Math.max(0, (user?.creditsRemaining || 0) - 1);
    await db
      .update(users)
      .set({ creditsRemaining: newCredits })
      .where(eq(users.id, userId));

    return NextResponse.json({
      success: true,
      generated: savedItems,
      creditsRemaining: newCredits,
    });
  } catch (error: any) {
    console.error("Repurpose error:", error?.message || error);
    return NextResponse.json(
      { error: error?.message || "Failed to repurpose content. Please check your OpenAI API key." },
      { status: 500 }
    );
  }
}
