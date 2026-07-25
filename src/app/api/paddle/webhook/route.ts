import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { getServiceSupabase } from "@/lib/supabase/client";
import { PRICING_PLANS } from "@/lib/constants";

function verifyPaddleWebhook(
  payload: string,
  signature: string | null,
  secret: string
): boolean {
  if (!signature) return false;
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(digest),
    Buffer.from(signature)
  );
}

export async function POST(req: NextRequest) {
  try {
    const payload = await req.text();
    const signature = req.headers.get("paddle-signature");

    const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET || "";
    if (!verifyPaddleWebhook(payload, signature, webhookSecret)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(payload);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase: any = getServiceSupabase();

    switch (event.event_type) {
      case "transaction.completed": {
        const { customer_id, items, subscription_id } = event.data;
        const priceId = items?.[0]?.price?.id;

        if (!priceId) break;

        const plan = PRICING_PLANS.find(
          (p) => p.monthlyPriceId === priceId || p.yearlyPriceId === priceId
        );

        if (!plan) break;

        // Find user by paddle_customer_id or customer email
        const { data: profiles } = (await supabase
          .from("profiles")
          .select("id")
          .eq("paddle_customer_id", customer_id)
          .limit(1)) as { data: Array<{ id: string }> | null };

        let userId = profiles?.[0]?.id;

        if (!userId && event.data.customer?.email) {
          const { data: emailProfiles } = (await supabase
            .from("profiles")
            .select("id")
            .eq("email", event.data.customer.email)
            .limit(1)) as { data: Array<{ id: string }> | null };
          userId = emailProfiles?.[0]?.id;
        }

        if (!userId) break;

        // Update profile
        const creditsTotal =
          plan.id === "starter" ? 10 : plan.id === "pro" ? 50 : 999999;

        await supabase
          .from("profiles")
          .update({
            plan: plan.id,
            paddle_customer_id: customer_id,
            subscription_status: "active",
            credits_total: creditsTotal,
            credits_remaining: creditsTotal,
          })
          .eq("id", userId);

        // Create subscription record
        if (subscription_id) {
          await supabase.from("subscriptions").upsert({
            user_id: userId,
            paddle_subscription_id: subscription_id,
            paddle_customer_id: customer_id,
            plan_id: plan.id,
            status: "active",
            current_period_start: new Date().toISOString(),
            current_period_end: new Date(
              Date.now() + 30 * 24 * 60 * 60 * 1000
            ).toISOString(),
          });
        }
        break;
      }

      case "subscription.updated": {
        const { id: subId, status, customer_id } = event.data;

        await supabase
          .from("subscriptions")
          .update({ status, updated_at: new Date().toISOString() })
          .eq("paddle_subscription_id", subId);

        if (status === "canceled" || status === "paused") {
          await supabase
            .from("profiles")
            .update({ subscription_status: "inactive", plan: "free" })
            .eq("paddle_customer_id", customer_id);
        }
        break;
      }

      case "subscription.canceled": {
        const { customer_id } = event.data;
        await supabase
          .from("profiles")
          .update({
            subscription_status: "inactive",
            plan: "free",
            credits_total: 3,
            credits_remaining: 3,
          })
          .eq("paddle_customer_id", customer_id);
        break;
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
