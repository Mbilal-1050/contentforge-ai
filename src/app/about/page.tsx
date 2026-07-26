"use client";
import Link from "next/link";
import { Sparkles, Zap, Globe, Users, Shield, Heart, Target, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const values = [
  {icon:Zap,title:"Speed",desc:"We believe content creation shouldn't be a bottleneck. Our AI delivers 10x faster output."},
  {icon:Users,title:"Creator-First",desc:"Everything we build starts with the creator's workflow and pain points."},
  {icon:Shield,title:"Trust & Security",desc:"Your content is never used to train AI models. Enterprise-grade security."},
  {icon:Heart,title:"Quality Obsessed",desc:"Every AI output is optimized for platform-specific best practices."},
  {icon:Globe,title:"Global Reach",desc:"Supporting 30+ languages so creators worldwide can repurpose content."},
  {icon:Target,title:"Results-Driven",desc:"Our metrics: time saved, reach gained, content quality — not vanity numbers."},
];

export default function AboutPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-7xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">About ContentForge AI</h1><p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-6">We're on a mission to help creators publish 10x more content without working 10x harder.</p><div className="flex items-center justify-center gap-6 text-sm text-gray-500"><span><strong className="text-gray-900 dark:text-white text-lg">15K+</strong> Creators</span><span className="w-px h-4 bg-gray-300 dark:bg-gray-700"/><span><strong className="text-gray-900 dark:text-white text-lg">500K+</strong> Pieces Generated</span><span className="w-px h-4 bg-gray-300 dark:bg-gray-700"/><span><strong className="text-gray-900 dark:text-white text-lg">30+</strong> Languages</span></div></div></section>
    <section className="py-16"><div className="max-w-3xl mx-auto px-4"><h2 className="text-3xl font-bold mb-6">Our Story</h2><div className="space-y-4 text-gray-600 dark:text-gray-400"><p>ContentForge AI was born from a simple frustration: content creators spend more time reformatting content than creating it. A single blog post needs to become a Twitter thread, a LinkedIn post, an Instagram caption, a newsletter — and that's just the basics.</p><p>We asked: what if AI could handle the repurposing automatically? Not generic spam, but intelligent, platform-optimized content that actually performs.</p><p>Today, ContentForge AI helps over 15,000 creators, marketers, and agencies publish more high-quality content across every platform — in minutes, not hours.</p></div></div></section>
    <section className="py-16 bg-gray-50 dark:bg-gray-900"><div className="max-w-7xl mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">{values.map(v => (<div key={v.title} className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all"><div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4"><v.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400"/></div><h3 className="font-semibold mb-2">{v.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400">{v.desc}</p></div>))}</div></div></section>
    <section className="py-16"><div className="max-w-2xl mx-auto px-4 text-center"><h2 className="text-2xl font-bold mb-4">Ready to 10x your content?</h2><Link href="/signup"><Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600">Get Started Free <ChevronRight className="w-4 h-4 ml-1"/></Button></Link></div></section>
    <Footer/>
  </div>);
}
