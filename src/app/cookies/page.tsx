"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const sections = [
  {title:"What Are Cookies?",content:"Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and improve your experience."},
  {title:"How We Use Cookies",content:"ContentForge AI uses cookies for: (a) Authentication — to keep you logged in securely. (b) Preferences — remembering your theme choice (light/dark mode). (c) Analytics — understanding how our service is used (via Vercel Analytics, no advertising tracking). We do NOT use third-party advertising or tracking cookies."},
  {title:"Types of Cookies We Use",content:"Essential Cookies: Required for the service to function — session management, CSRF protection. Preference Cookies: Theme settings (light/dark), language. Analytics Cookies: Aggregated, anonymous usage data via Vercel Analytics."},
  {title:"Cookie Duration",content:"Session cookies: deleted when you close your browser. Persistent cookies: remain for 30 days (authentication) or 1 year (preferences)."},
  {title:"Managing Cookies",content:"You can control cookies through your browser settings — block, delete, or set preferences. However, disabling essential cookies may affect service functionality."},
  {title:"Third-Party Cookies",content:"We use Vercel Analytics for anonymous usage tracking. No advertising or social media tracking cookies are used."},
];

export default function CookiesPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Cookie Policy</h1><p className="text-gray-500">Last updated: July 26, 2026</p></div></section>
    <section className="py-12"><div className="max-w-3xl mx-auto px-4"><div className="space-y-8">{sections.map((s,i) => (<div key={i}><h2 className="text-xl font-bold mb-3">{s.title}</h2><p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.content}</p></div>))}</div></div></section>
    <Footer/>
  </div>);
}
