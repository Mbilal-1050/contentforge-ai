import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { repurposeContent } from "@/lib/ai/repurpose";
import { repurposeSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Check credits
    const { data: profile } = await supabase
      .from("profiles")
      .select("credits_remaining, plan")
      .eq("id", user.id)
      .single();

    if (!profile || profile.credits_remaining <= 0) {
      return NextResponse.json(
        { error: "No credits remaining. Please upgrade your plan." },
        { status: 402 }
      );
    }

    const body = await req.json();
    const parsed = repurposeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { contentId, targetPlatforms, tone, language } = parsed.data;

    // Fetch source content
    const { data: sourceContent } = await supabase
      .from("content_sources")
      .select("*")
      .eq("id", contentId)
      .eq("user_id", user.id)
      .single();

    if (!sourceContent) {
      return NextResponse.json(
        { error: "Content source not found" },
        { status: 404 }
      );
    }

    // Generate repurposed content
    const generated = await repurposeContent({
      content: sourceContent.content,
      title: sourceContent.title,
      sourceType: sourceContent.source_type,
      targetPlatforms,
      tone,
      language,
    });

    // Save generated content to DB
    const savedItems = [];
    for (const item of generated) {
      const { data: saved } = await supabase
        .from("generated_content")
        .insert({
          user_id: user.id,
          source_id: contentId,
          platform: item.platform,
          format: item.format,
          tone,
          content: item.content,
          word_count: item.wordCount,
        })
        .select()
        .single();

      if (saved) savedItems.push(saved);
    }

    // Deduct credit
    await supabase
      .from("profiles")
      .update({
        credits_remaining: profile.credits_remaining - 1,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id);

    return NextResponse.json({
      success: true,
      generated: savedItems,
      creditsRemaining: profile.credits_remaining - 1,
    });
  } catch (error) {
    console.error("Repurpose error:", error);
    return NextResponse.json(
      { error: "Failed to repurpose content" },
      { status: 500 }
    );
  }
}
