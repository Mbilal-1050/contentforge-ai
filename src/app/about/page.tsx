import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "About — ContentForge AI", description: "Our mission to help creators publish 10x more content." };

export default function AboutPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About ContentForge AI</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">We help creators publish 10x more content without burning out.</p>
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <div><h2 className="text-2xl font-semibold mb-3">Our Story</h2><p className="text-gray-600 dark:text-gray-400">Born from frustration: creators spend hours manually repurposing content. We built ContentForge so you can focus on ideas, not formatting.</p></div>
        <div><h2 className="text-2xl font-semibold mb-3">Our Values</h2><ul className="space-y-3 text-gray-600 dark:text-gray-400"><li><strong className="text-gray-900 dark:text-white">Quality First</strong> — AI outputs optimized for real engagement.</li><li><strong className="text-gray-900 dark:text-white">Creator-First</strong> — Your content is yours. We never train AI on it.</li><li><strong className="text-gray-900 dark:text-white">Global Access</strong> — Paddle payments enable 200+ countries.</li></ul></div>
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900 text-center">
          <h2 className="text-2xl font-bold mb-3">Join 2,500+ creators</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Start repurposing with AI today.</p>
          <Link href="/signup"><Button className="bg-indigo-600 hover:bg-indigo-700">Get Started Free</Button></Link>
        </div>
      </div>
    </main>
  </div>);
}
