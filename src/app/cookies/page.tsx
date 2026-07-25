import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Cookie Policy — ContentForge AI", description: "How ContentForge AI uses cookies." };

export default function CookiesPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 25, 2026</p>
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <div><h2 className="text-xl font-semibold mb-3">What Are Cookies?</h2><p className="text-gray-600 dark:text-gray-400">Small text files stored on your device to remember preferences and improve your experience.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">How We Use Them</h2><p className="text-gray-600 dark:text-gray-400">Essential cookies for auth & security. Analytics cookies (Vercel) to understand usage — all anonymized.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">Managing Cookies</h2><p className="text-gray-600 dark:text-gray-400">Most browsers let you control cookies. Disabling essentials may break some features.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">Third-Party</h2><p className="text-gray-600 dark:text-gray-400">Paddle (payments) and Vercel (hosting/analytics) set their own cookies.</p></div>
      </div>
    </main>
  </div>);
}
