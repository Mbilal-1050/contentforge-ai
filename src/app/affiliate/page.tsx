"use client";

import Link from "next/link";
import { Sparkles, DollarSign, Users, TrendingUp, Gift, Share2, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Silver",
    commission: "20%",
    threshold: "0-10 referrals",
    color: "from-gray-400 to-gray-600",
    perks: ["Monthly payout", "Referral dashboard", "Marketing assets"],
  },
  {
    name: "Gold",
    commission: "30%",
    threshold: "11-50 referrals",
    color: "from-yellow-500 to-amber-600",
    popular: true,
    perks: ["Silver perks +", "Priority support", "Custom affiliate link", "Bonus $100 after 25th signup"],
  },
  {
    name: "Platinum",
    commission: "40%",
    threshold: "51+ referrals",
    color: "from-purple-500 to-indigo-600",
    perks: ["Gold perks +", "Dedicated account manager", "Early access to features", "Co-branded landing page"],
  },
];

const steps = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Sign Up",
    desc: "Join our affiliate program in seconds — no approval required.",
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: "Share Your Link",
    desc: "Promote ContentForge AI with your unique referral link on social media, blogs, or email.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Earn Commission",
    desc: "Earn recurring commission every time someone signs up with your link and stays subscribed.",
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: "Get Rewarded",
    desc: "Cash out monthly via PayPal or bank transfer — no minimum payout threshold.",
  },
];

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
            <DollarSign className="w-4 h-4" /> Affiliate Program
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Earn While You{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Share
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Recommend ContentForge AI and earn up to <strong className="text-gray-900 dark:text-white">40% recurring commission</strong> — 
            every month your referrals stay, you get paid.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8">
              <Link href="/signup" className="flex items-center gap-2">Join Now <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="#how-it-works">How It Works</Link>
            </Button>
          </div>
        </div>
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl" />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Start earning in less than 5 minutes
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gray-200 dark:bg-gray-800" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white">{step.icon}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-sm font-bold text-indigo-600 dark:text-indigo-400 mx-auto mb-2">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commission Tiers */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Commission Tiers</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              The more you refer, the more you earn
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-8 relative ${
                  tier.popular
                    ? "bg-white dark:bg-gray-800 ring-2 ring-indigo-500 shadow-xl scale-105"
                    : "bg-white dark:bg-gray-800 shadow-sm"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tier.color} flex items-center justify-center mb-4`}>
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <div className="text-3xl font-extrabold mb-2">
                  {tier.commission}
                  <span className="text-base font-normal text-gray-400">/sale</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">{tier.threshold}</p>
                <ul className="space-y-2">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Join Our{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Affiliate Program?
                </span>
              </h2>
              <div className="space-y-4">
                {[
                  { title: "Recurring Commission", desc: "Earn every month your referrals remain active — not just a one-time payout." },
                  { title: "High Conversion Rate", desc: "Our free 3-generation trial makes it easy for anyone to try and love ContentForge AI." },
                  { title: "Real-Time Dashboard", desc: "Track clicks, signups, conversions, and earnings in your affiliate dashboard." },
                  { title: "Monthly Payouts", desc: "Get paid reliably every month via PayPal, Stripe, or bank transfer." },
                  { title: "Marketing Kit Included", desc: "Access banners, email templates, and social media graphics to boost your referrals." },
                  { title: "No Cap on Earnings", desc: "Sky's the limit — refer as many people as you want and keep earning." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Check className="w-3 h-3 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <DollarSign className="w-10 h-10 mx-auto mb-2 opacity-50" />
                <p className="text-lg font-semibold">Potential Monthly Earnings</p>
                <p className="text-sm opacity-75">Based on avg. $59/mo plan</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span>10 referrals</span>
                  <span className="font-bold">$118/mo</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span>25 referrals</span>
                  <span className="font-bold">$443/mo</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/10">
                  <span>50 referrals</span>
                  <span className="font-bold">$1,180/mo</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span>100 referrals</span>
                  <span className="font-bold">$2,360/mo</span>
                </div>
              </div>
              <p className="text-xs text-center mt-6 opacity-60">*Gold tier (30%) — higher at Platinum (40%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Earning?
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto">
            Join hundreds of creators already earning passive income with ContentForge AI.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-10">
            <Link href="/signup" className="flex items-center gap-2">Become an Affiliate <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
