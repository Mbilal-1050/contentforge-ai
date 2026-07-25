import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { PRICING_PLANS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { priceId } = body;

    const plan = PRICING_PLANS.find(
      (p) => p.monthlyPriceId === priceId || p.yearlyPriceId === priceId
    );
    if (!plan) {
      return NextResponse.json({ error: "Invalid price ID" }, { status: 400 });
    }

    // Get or create Paddle customer
    const { data: profile } = await supabase
      .from("profiles")
      .select("paddle_customer_id, email")
      .eq("id", user.id)
      .single();

    let customerId = profile?.paddle_customer_id;

    // Create Paddle transaction
    const paddleResponse = await fetch(
      `https://${process.env.PADDLE_ENVIRONMENT === "production" ? "api" : "sandbox-api"}.paddle.com/transactions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
        },
        body: JSON.stringify({
          items: [{ price_id: priceId, quantity: 1 }],
          customer_id: customerId || undefined,
          customer: customerId
            ? undefined
            : { email: user.email! },
          checkout: {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
          },
        }),
      }
    );

    if (!paddleResponse.ok) {
      const error = await paddleResponse.text();
      console.error("Paddle error:", error);
      return NextResponse.json(
        { error: "Failed to create checkout" },
        { status: 500 }
      );
    }

    const transaction = await paddleResponse.json();
    const checkoutUrl = transaction.data?.checkout?.url;

    if (!checkoutUrl) {
      return NextResponse.json(
        { error: "No checkout URL returned" },
        { status: 500 }
      );
    }

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
