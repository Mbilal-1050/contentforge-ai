import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const sourceId = searchParams.get("sourceId");
    const limit = parseInt(searchParams.get("limit") || "50");

    let query = supabase
      .from("generated_content")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(limit);

    if (sourceId) {
      query = query.eq("source_id", sourceId);
    }

    const { data: generated, error } = await query;

    if (error) throw error;

    return NextResponse.json({ generated });
  } catch (error) {
    console.error("Generated content fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch generated content" },
      { status: 500 }
    );
  }
}
