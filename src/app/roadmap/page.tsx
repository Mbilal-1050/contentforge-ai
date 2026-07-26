"use client";
import Link from "next/link";
import { Sparkles, Check, Clock, Zap, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const columns = [
  {title:"Done ✅",color:"bg-green-500",items:[
    {status:"done",title:"User Authentication",desc:"Email/password + Google OAuth with NextAuth.js v5"},
    {status:"done",title:"AI Repurposing Engine",desc:"GPT-4o powered — blog/video/podcast to 10+ formats"},
    {status:"done",title:"Dashboard & Analytics",desc:"Real-time credit tracking, analytics, content history"},
    {status:"done",title:"Paddle Billing",desc:"Subscription management, invoices, webhook handling"},
    {status:"done",title:"Neon.tech Database",desc:"Serverless PostgreSQL with Drizzle ORM migrations"},
    {status:"done",title:"Responsive Landing Page",desc:"Premium design with animations, trust badges, demo preview"},
  ]},
  {title:"In Progress 🚧",color:"bg-amber-500",items:[
    {status:"in_progress",title:"Affiliate Dashboard",desc:"Track referrals, commissions, payout history in dashboard"},
    {status:"in_progress",title:"Team Collaboration",desc:"Multi-seat accounts with role-based access control"},
    {status:"in_progress",title:"API Access",desc:"REST API for developers to integrate ContentForge into their workflows"},
    {status:"in_progress",title:"Content Calendar",desc:"Schedule and plan repurposed content across platforms"},
  ]},
  {title:"Planned 💡",color:"bg-gray-400",items:[
    {status:"planned",title:"AI Video Generator",desc:"Auto-create short-form videos from blog content"},
    {status:"planned",title:"Platform Auto-Publishing",desc:"One-click publish directly to Twitter, LinkedIn, etc."},
    {status:"planned",title:"Advanced Analytics",desc:"Engagement predictions, content scoring, A/B suggestions"},
    {status:"planned",title:"Custom Brand Voice",desc:"Train AI on your writing style for consistent brand voice"},
    {status:"planned",title:"Mobile App",desc:"iOS & Android apps for on-the-go content repurposing"},
  ]},
];

export default function RoadmapPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Product Roadmap</h1><p className="text-lg text-gray-500 dark:text-gray-400">See what we're building, what's in progress, and what's next.</p></div></section>
    <section className="py-16"><div className="max-w-7xl mx-auto px-4"><div className="grid md:grid-cols-3 gap-8">
      {columns.map(col => (<div key={col.title}><h3 className="text-lg font-bold mb-6 flex items-center gap-2"><div className={`w-3 h-3 rounded-full ${col.color}`}/>{col.title}</h3><div className="space-y-4">{col.items.map((item,i) => (<div key={i} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"><div className="flex items-center gap-2 mb-2">{item.status === "done" ? <Check className="w-4 h-4 text-green-500"/> : item.status === "in_progress" ? <Wrench className="w-4 h-4 text-amber-500"/> : <Clock className="w-4 h-4 text-gray-400"/>}<h4 className="font-semibold">{item.title}</h4></div><p className="text-sm text-gray-500 dark:text-gray-400">{item.desc}</p></div>))}</div></div>))}
    </div></div></section>
    <Footer/>
  </div>);
}
