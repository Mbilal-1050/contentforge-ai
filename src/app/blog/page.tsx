import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  { title: "How to 10x Your Content Output with AI Repurposing", date: "2026-07-25", excerpt: "The exact workflow top creators use to turn one piece into 10+ posts.", readTime:"5 min read", emoji:"🚀" },
  { title: "The Ultimate Guide to Cross-Platform Content Strategy", date: "2026-07-20", excerpt: "Every platform has different algorithms. Here's how to win on each.", readTime:"8 min read", emoji:"📱" },
  { title: "Why Manual Repurposing Fails (And How AI Fixes It)", date: "2026-07-15", excerpt: "Burnout is real. AI-powered repurposing = 10x output without stress.", readTime:"4 min read", emoji:"💡" },
  { title: "LinkedIn vs Twitter vs Instagram: Strategy Compared", date: "2026-07-10", excerpt: "Each platform rewards different styles. Optimize without rewriting.", readTime:"6 min read", emoji:"🎯" },
];

export const metadata: Metadata = { title: "Blog — ContentForge AI", description: "Content strategy, AI tips, and creator insights." };

export default function BlogPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Blog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Content strategy, AI tips, and creator insights.</p>
      <div className="grid md:grid-cols-2 gap-6">{posts.map((post, i) => (<div key={i} className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 hover:shadow-lg transition-all group"><div className="text-4xl mb-4">{post.emoji}</div><p className="text-xs text-gray-500 mb-2">{post.date} · {post.readTime}</p><h2 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{post.title}</h2><p className="text-sm text-gray-500 mb-4">{post.excerpt}</p><span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center gap-1 group-hover:gap-2">Read more <ArrowRight className="w-4 h-4"/></span></div>))}</div>
    </main>
  </div>);
}
