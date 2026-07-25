import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const entries = [
  { date: "2026-07-25", version: "v1.0.0", title: "Official Launch 🚀", items: ["Full platform launch with AI content repurposing", "8+ platform support", "Paddle payments integration", "Analytics dashboard", "Free tier with 3 generations"] },
  { date: "2026-07-20", version: "v0.9.0", title: "Beta Release", items: ["Initial beta deployment", "Core repurposing engine", "User authentication", "Dashboard MVP"] },
];

export const metadata: Metadata = { title: "Changelog — ContentForge AI", description: "Latest updates and improvements." };

export default function ChangelogPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Changelog</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">All the latest updates, improvements, and fixes.</p>
      <div className="space-y-8">{entries.map((entry, i) => (<div key={i} className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"><div className="flex items-center gap-3 mb-4"><Badge variant="secondary">{entry.version}</Badge><span className="text-sm text-gray-500">{entry.date}</span></div><h2 className="text-xl font-bold mb-3">{entry.title}</h2><ul className="space-y-2">{entry.items.map((item, j) => (<li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"><span className="text-indigo-500 mt-1">•</span>{item}</li>))}</ul></div>))}</div>
    </main>
  </div>);
}
