"use client";
import Link from "next/link";
import { Sparkles, ArrowRight, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const posts = [
  {title:"How AI Content Repurposing Saves 15+ Hours Per Week",slug:"ai-content-repurposing",excerpt:"Creators spend 60% of time reformatting content. See how AI cuts that to zero.",date:"July 20, 2026",readTime:"6 min",category:"Productivity",image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"},
  {title:"The Ultimate Social Media Content Strategy in 2026",slug:"social-media-strategy-2026",excerpt:"Algorithms change. Learn strategies that work across X, LinkedIn, Instagram & TikTok.",date:"July 15, 2026",readTime:"8 min",category:"Strategy",image:"https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop"},
  {title:"Why Repurposing is the #1 Growth Hack for Creators",slug:"repurposing-growth-hack",excerpt:"Top creators create 1 great piece then repurpose it. Here's the data.",date:"July 10, 2026",readTime:"5 min",category:"Growth",image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"},
  {title:"LinkedIn vs X: Which Platform to Prioritize in 2026",slug:"linkedin-vs-x-2026",excerpt:"Both offer massive reach but require different approaches. Compare.",date:"July 5, 2026",readTime:"7 min",category:"Platforms",image:"https://images.unsplash.com/photo-1611944213489-0b8b8f6e3c50?w=800&h=400&fit=crop"},
  {title:"From Blog Post to 10 Platforms: Complete Workflow",slug:"blog-to-10-platforms",excerpt:"See how ContentForge transforms one post into Twitter threads, LinkedIn & more.",date:"June 28, 2026",readTime:"10 min",category:"Tutorial",image:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"},
  {title:"5 AI Tools Every Content Creator Needs in 2026",slug:"ai-tools-creators-2026",excerpt:"From writing to design to repurposing — the AI tools giving creators an edge.",date:"June 20, 2026",readTime:"6 min",category:"Tools",image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"},
];

export default function BlogPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl z-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-7xl mx-auto px-4 sm:px-6 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">ContentForge <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Blog</span></h1><p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Tips, strategies & insights to create better content — faster.</p></div></section>
    <section className="py-16"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map(p => (
        <article key={p.slug} className="group rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 bg-white dark:bg-gray-900">
          <div className="aspect-[2/1] bg-gray-100 dark:bg-gray-800 overflow-hidden"><img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy"/></div>
          <div className="p-6"><div className="flex items-center gap-3 mb-3"><span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">{p.category}</span><span className="text-xs text-gray-400 flex items-center gap-1"><Calendar className="w-3 h-3"/>{p.date}</span><span className="text-xs text-gray-400 flex items-center gap-1"><Clock className="w-3 h-3"/>{p.readTime}</span></div><h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{p.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">{p.excerpt}</p><Link href={`/blog/${p.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:underline">Read More <ArrowRight className="w-3 h-3"/></Link></div>
        </article>
      ))}
    </div></div></section>
    <section className="py-16 bg-gray-50 dark:bg-gray-900"><div className="max-w-2xl mx-auto px-4 text-center"><h2 className="text-2xl font-bold mb-2">Stay in the loop</h2><p className="text-gray-500 mb-6">Get content tips & product news in your inbox.</p><div className="flex gap-3 max-w-md mx-auto"><input type="email" placeholder="your@email.com" className="flex-1 h-12 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"/><Button className="h-12 bg-gradient-to-r from-indigo-600 to-purple-600">Subscribe</Button></div></div></section>
    <Footer/>
  </div>);
}
