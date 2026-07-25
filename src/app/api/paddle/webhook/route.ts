import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { db } from "@/lib/db";
import { users, subscriptions } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { PRICING_PLANS } from "@/lib/constants";

function verifyWebhook(payload: string, signature: string | null, secret: string): boolean {
  if (!signature) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(digest), Buffer.from(signature));
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const signature = req.headers.get("paddle-signature");
    const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET || "";

    if (!verifyWebhook(payload, signature, webhookSecret)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(payload);

    switch (event.event_type) {
      case "transaction.completed": {
        const { customer_id, items, subscription_id } = event.data;
        const priceId = items?.[0]?.price?.id;
        if (!priceId) break;

        const plan = PRICING_PLANS.find(
          (p) => p.monthlyPriceId === priceId || p.yearlyPriceId === priceId
        );
        if (!plan) break;

        // Find user by paddle_customer_id or email
        let [user] = await db
          .select()
          .from(users)
          .where(eq(users.paddleCustomerId, customer_id))
          .limit(1);

        if (!user && event.data.customer?.email) {
          [user] = await db
            .select()
            .from(users)
            .where(eq(users.email, event.data.customer.email))
            .limit(1);
        }

        if (!user) break;

        const creditsTotal = plan.id === "starter" ? 10 : plan.id === "pro" ? 50 : 999999;

        await db
          .update(users)
          .set({
            plan: plan.id,
            paddleCustomerId: customer_id,
            subscriptionStatus: "active",
            creditsTotal,
            creditsRemaining: creditsTotal,
          })
          .where(eq(users.id, user.id));

        if (subscription_id) {
          await db.insert(subscriptions).values({
            userId: user.id,
            paddleSubscriptionId: subscription_id,
            paddleCustomerId: customer_id,
            planId: plan.id,
            status: "active",
            currentPeriodStart: new Date(),
            currentPeriodEnd: new Date(Date.now() + 30 * 86400000),
          });
        }
        break;
      }

      case "subscription.updated": {
        const { id: subId, status, customer_id } = event.data;
        await db
          .update(subscriptions)
          .set({ status, updatedAt: new Date() })
          .where(eq(subscriptions.paddleSubscriptionId, subId));

        if (status === "canceled" || status === "paused") {
          await db
            .update(users)
            .set({ subscriptionStatus: "inactive", plan: "free" })
            .where(eq(users.paddleCustomerId, customer_id));
        }
        break;
      }

      case "subscription.canceled": {
        const { customer_id } = event.data;
        await db
          .update(users)
          .set({
            subscriptionStatus: "inactive",
            plan: "free",
            creditsTotal: 3,
            creditsRemaining: 3,
          })
          .where(eq(users.paddleCustomerId, customer_id));
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
