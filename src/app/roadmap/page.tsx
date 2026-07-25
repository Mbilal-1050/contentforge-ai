import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, CheckCircle, Circle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const items = [
  { status: "done", title: "AI Content Repurposing Engine", desc: "Core AI engine for multi-platform repurposing" },
  { status: "done", title: "8+ Platform Support", desc: "Twitter, LinkedIn, Instagram, TikTok, Facebook, Newsletter, Blog, YouTube" },
  { status: "done", title: "User Authentication", desc: "Email/password + Google OAuth" },
  { status: "done", title: "Paddle Payments", desc: "3 pricing tiers subscription management" },
  { status: "done", title: "Analytics Dashboard", desc: "Credit usage, content stats" },
  { status: "in-progress", title: "Video Upload Support", desc: "Direct video upload with AI transcription" },
  { status: "in-progress", title: "Team Collaboration", desc: "Multi-user workspaces for agencies" },
  { status: "planned", title: "API Access", desc: "REST API for programmatic repurposing" },
  { status: "planned", title: "Scheduler Integration", desc: "Direct posting to Buffer, Hootsuite" },
  { status: "planned", title: "Custom AI Templates", desc: "User-defined repurposing templates" },
  { status: "planned", title: "White-Label Exports", desc: "Branded PDF and document exports" },
  { status: "planned", title: "Mobile App", desc: "iOS and Android apps" },
];

export const metadata: Metadata = { title: "Roadmap — ContentForge AI", description: "See what's coming next." };

export default function RoadmapPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Roadmap</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">Have a request? <a href="mailto:feedback@contentforge.ai" className="text-indigo-600 hover:underline">Let us know!</a></p>
      <div className="space-y-4">{items.map((item, i) => (<div key={i} className="flex gap-4 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50"><div className="mt-1 shrink-0">{item.status==="done"?<CheckCircle className="w-5 h-5 text-green-500"/>:item.status==="in-progress"?<Clock className="w-5 h-5 text-amber-500"/>:<Circle className="w-5 h-5 text-gray-400"/>}</div><div><h3 className="font-semibold">{item.title}</h3><p className="text-sm text-gray-500">{item.desc}</p><span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${item.status==="done"?"bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300":item.status==="in-progress"?"bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300":"bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"}`}>{item.status==="done"?"Shipped":item.status==="in-progress"?"In Progress":"Planned"}</span></div></div>))}</div>
    </main>
  </div>);
}
