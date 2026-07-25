import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { PRICING_PLANS } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = (session.user as any).id;
    const body = await req.json();
    const { priceId } = body;

    const plan = PRICING_PLANS.find(
      (p) => p.monthlyPriceId === priceId || p.yearlyPriceId === priceId
    );
    if (!plan) {
      return NextResponse.json({ error: "Invalid price ID" }, { status: 400 });
    }

    const [user] = await db
      .select({ paddleCustomerId: users.paddleCustomerId, email: users.email })
      .from(users)
      .where(eq(users.id, userId))
      .limit(1);

    const customerId = user?.paddleCustomerId;

    const apiUrl = `https://${process.env.PADDLE_ENVIRONMENT === "production" ? "api" : "sandbox-api"}.paddle.com/transactions`;

    const paddleResponse = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.PADDLE_API_KEY}`,
      },
      body: JSON.stringify({
        items: [{ price_id: priceId, quantity: 1 }],
        customer_id: customerId || undefined,
        customer: customerId ? undefined : { email: user?.email || session.user.email! },
        checkout: {
          url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
        },
      }),
    });

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
      return NextResponse.json({ error: "No checkout URL" }, { status: 500 });
    }

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
