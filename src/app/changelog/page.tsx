"use client";
import Link from "next/link";
import { Sparkles, Calendar, Zap, Bug, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const changelog = [
  {date:"July 26, 2026",version:"v2.4",title:"Footer Links & Google Auth Fix",changes:[
    {icon:Star,text:"Fixed all footer links — now point to real pages instead of #"},
    {icon:Zap,text:"Google OAuth sign-in now works on Login & Signup pages"},
    {icon:Star,text:"Added affiliate program page with 3 commission tiers (20/30/40%)"},
    {icon:Star,text:"Premium homepage: trust badges, demo preview, CSS animations"},
    {icon:Star,text:"Social media icons in footer — fully colored brand style"},
    {icon:Star,text:"Professional blog, contact, about & careers pages"},
  ]},
  {date:"July 20, 2026",version:"v2.3",title:"Dashboard & Analytics Update",changes:[
    {icon:Star,text:"Complete dashboard redesign with analytics, content, billing tabs"},
    {icon:Zap,text:"Real-time credit usage tracking with progress bars"},
    {icon:Bug,text:"Fixed Next.js 15.5.6 compatibility issues"},
    {icon:Star,text:"Improved mobile responsiveness across all pages"},
  ]},
  {date:"July 10, 2026",version:"v2.2",title:"AI Engine v3 & Repurposing Pipeline",changes:[
    {icon:Zap,text:"Upgraded to GPT-4o for 2x better content quality"},
    {icon:Star,text:"New repurposing pipeline with platform-specific optimization"},
    {icon:Star,text:"Added TikTok script format with hook + trending sounds"},
    {icon:Bug,text:"Fixed token counting issues on long-form content"},
  ]},
  {date:"June 20, 2026",version:"v2.1",title:"Paddle Billing Integration",changes:[
    {icon:Star,text:"Integrated Paddle for global payments, tax handling"},
    {icon:Star,text:"Monthly & yearly billing with 17% annual discount"},
    {icon:Bug,text:"Fixed webhook signature verification"},
  ]},
  {date:"June 1, 2026",version:"v2.0",title:"Public Launch 🚀",changes:[
    {icon:Rocket,text:"ContentForge AI officially launched to the public!"},
    {icon:Star,text:"3 pricing tiers: Starter ($29), Professional ($59), Agency ($149)"},
    {icon:Star,text:"Full platform support: Twitter/X, LinkedIn, Instagram, TikTok, YouTube, Newsletter, Blog"},
    {icon:Star,text:"3 free generations for every new user — no credit card required"},
  ]},
];

export default function ChangelogPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Changelog</h1><p className="text-lg text-gray-500 dark:text-gray-400">Stay up to date with the latest ContentForge AI updates.</p></div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4">
      {changelog.map((release, i) => (
        <div key={i} className="relative pl-8 pb-12 last:pb-0">
          {i < changelog.length - 1 && <div className="absolute left-[15px] top-10 bottom-0 w-px bg-gray-200 dark:bg-gray-800"/>}
          <div className="absolute left-0 top-1.5 w-[30px] h-[30px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><div className="w-2.5 h-2.5 rounded-full bg-white"/></div>
          <div className="flex items-center gap-3 mb-2"><span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">{release.version}</span><span className="text-sm text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3"/>{release.date}</span></div>
          <h3 className="text-xl font-bold mb-4">{release.title}</h3>
          <div className="space-y-2">
            {release.changes.map((c, j) => (<div key={j} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"><c.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${c.icon === Bug ? "text-red-500" : c.icon === Zap ? "text-amber-500" : c.icon === Rocket ? "text-purple-500" : "text-green-500"}`}/><span>{c.text}</span></div>))}
          </div>
        </div>
      ))}
    </div></section>
    <Footer/>
  </div>);
}
