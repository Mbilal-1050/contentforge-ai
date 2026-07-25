import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { contentSources, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();

    if (!body.title || !body.content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    const wordCount = (body.content as string).split(/\s+/).length;

    const [source] = await db
      .insert(contentSources)
      .values({
        userId: (session.user as any).id,
        title: body.title,
        sourceType: body.sourceType || "blog",
        sourceUrl: body.sourceUrl || null,
        content: body.content,
        wordCount,
      })
      .returning();

    return NextResponse.json({ success: true, source }, { status: 201 });
  } catch (error) {
    console.error("Content upload error:", error);
    return NextResponse.json(
      { error: "Failed to save content" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "20");

    const sources = await db
      .select()
      .from(contentSources)
      .where(eq(contentSources.userId, userId))
      .orderBy(contentSources.createdAt)
      .limit(limit);

    return NextResponse.json({ sources });
  } catch (error) {
    console.error("Content fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch content" },
      { status: 500 }
    );
  }
}
