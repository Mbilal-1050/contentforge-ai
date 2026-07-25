import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Terms of Service — ContentForge AI", description: "Terms of Service for ContentForge AI." };

export default function TermsPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 25, 2026</p>
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <div><h2 className="text-xl font-semibold mb-3">1. Acceptance</h2><p className="text-gray-600 dark:text-gray-400">By using ContentForge AI, you agree to these Terms.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">2. Account</h2><p className="text-gray-600 dark:text-gray-400">Provide accurate info. Keep credentials secure.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">3. Subscriptions & Payments</h2><p className="text-gray-600 dark:text-gray-400">Paid plans billed via Paddle. Cancel anytime. No refunds for partial months. Free tier: 3 generations, no card needed.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">4. Content & Usage</h2><p className="text-gray-600 dark:text-gray-400">You retain all rights to your content. Don&apos;t generate spam, hate speech, or illegal content. Review AI output before publishing.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">5. Service Availability</h2><p className="text-gray-600 dark:text-gray-400">We aim for 99.9% uptime. No guaranteed uninterrupted service. We may modify features with notice.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">6. Limitation of Liability</h2><p className="text-gray-600 dark:text-gray-400">Service provided as-is. We are not liable for damages from use. AI content should be reviewed before publishing.</p></div>
      </div>
    </main>
  </div>);
}
