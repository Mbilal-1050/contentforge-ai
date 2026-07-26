"use client";

import { Footer } from "@/components/ui/footer";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import { toast } from "sonner";
import { useEffect, useState } from "react";

export default function BillingPage() {
  const { data: session } = useSession();
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    fetch("/api/profile").then(r => r.json()).then(d => setProfile(d.profile)).catch(() => {});
  }, []);

  const handleCheckout = async (priceId: string) => {
    try {
      const res = await fetch("/api/paddle/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ priceId }) });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else toast.error("Failed to start checkout");
    } catch { toast.error("Checkout error"); }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold font-display tracking-tight mb-2">Billing</h1>
        <p className="text-gray-500 mb-8">Current plan: <Badge className="ml-1 capitalize text-sm">{profile?.plan || "free"}</Badge></p>
        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_PLANS.map(plan => (
            <Card key={plan.id} className={plan.highlighted ? "border-primary shadow-lg" : ""}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">{plan.name}{plan.highlighted && <Badge>Popular</Badge>}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-2"><span className="text-3xl font-bold">${plan.monthlyPrice}</span><span className="text-gray-500">/mo</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">{plan.features.map((f, i) => <li key={i} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />{f}</li>)}</ul>
                <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} onClick={() => handleCheckout(plan.monthlyPriceId)} disabled={profile?.plan === plan.id}>
                  {profile?.plan === plan.id ? "Current Plan" : <>{plan.cta} <ArrowRight className="w-4 h-4 ml-1" /></>}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
      <Footer />
    </div>
  );
}
