import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { contentUploadSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const parsed = contentUploadSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid content", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { title, sourceType, sourceUrl, content } = parsed.data;
    const wordCount = content.split(/\s+/).length;

    const { data: source, error } = await supabase
      .from("content_sources")
      .insert({
        user_id: user.id,
        title,
        source_type: sourceType,
        source_url: sourceUrl || null,
        content,
        word_count: wordCount,
      })
      .select()
      .single();

    if (error) throw error;

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
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "20");
    const offset = parseInt(searchParams.get("offset") || "0");

    const { data: sources, error } = await supabase
      .from("content_sources")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1);

    if (error) throw error;

    return NextResponse.json({ sources });
  } catch (error) {
    console.error("Content fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch content" }, { status: 500 });
  }
}
