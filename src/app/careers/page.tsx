import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Careers — ContentForge AI", description: "Join the ContentForge AI team." };

export default function CareersPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
      <div className="w-20 h-20 rounded-2xl bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mx-auto mb-6"><Briefcase className="w-10 h-10 text-indigo-600"/></div>
      <h1 className="text-4xl font-bold mb-4">Careers</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">We&apos;re a small, fast-moving team building the future of AI content creation.</p>
      <div className="p-8 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 inline-block">
        <p className="text-xl font-semibold mb-2">No open positions right now</p>
        <p className="text-gray-500">Check back soon or email us at <a href="mailto:careers@contentforge.ai" className="text-indigo-600 hover:underline">careers@contentforge.ai</a></p>
      </div>
    </main>
  </div>);
}
