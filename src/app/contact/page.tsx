"use client";
import Link from "next/link";
import { useState } from "react";
import { Sparkles, Mail, MessageSquare, Clock, Send, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/ui/footer";
import { toast } from "sonner";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setSending(true);
    await new Promise(r => setTimeout(r, 1000));
    toast.success("Message sent! We'll get back within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" }); setSending(false);
  };
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-7xl mx-auto px-4 sm:px-6 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Contact Us</h1><p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">We'd love to hear from you! Questions, feedback, or need help — reach out.</p></div></section>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12"><div className="grid lg:grid-cols-3 gap-12">
      <div className="space-y-6">
        {[
          {icon:Mail,color:"indigo",title:"Email Support",desc:"General inquiries, billing, support.",detail:"support@contentforge.ai",link:"mailto:support@contentforge.ai"},
          {icon:MessageSquare,color:"purple",title:"Live Chat",desc:"For Pro & Agency subscribers.",detail:"Go to Dashboard →",link:"/dashboard"},
          {icon:Clock,color:"amber",title:"Response Time",desc:"🟢 Free: 24–48 hrs | 🟡 Pro: 4–8 hrs | 🔴 Agency: 1–2 hrs",detail:"",link:""},
        ].map((c, i) => (
          <div key={i} className={`p-6 rounded-xl bg-${c.color}-50 dark:bg-${c.color}-950/30 border border-${c.color}-100 dark:border-${c.color}-900`}>
            <c.icon className={`w-8 h-8 text-${c.color}-600 mb-3`}/>
            <h3 className="font-semibold mb-1">{c.title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{c.desc}</p>
            {c.link && <a href={c.link} className={`text-${c.color}-600 dark:text-${c.color}-400 text-sm font-medium hover:underline`}>{c.detail}</a>}
          </div>
        ))}
      </div>
      <div className="lg:col-span-2">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8">
          <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Fill out the form and we'll get back ASAP.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div><label className="block text-sm font-medium mb-2">Full Name *</label><Input placeholder="John Doe" value={form.name} onChange={e => setForm({...form,name:e.target.value})} required className="h-12"/></div>
              <div><label className="block text-sm font-medium mb-2">Email Address *</label><Input type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required className="h-12"/></div>
            </div>
            <div><label className="block text-sm font-medium mb-2">Subject</label><Input placeholder="How can we help?" value={form.subject} onChange={e => setForm({...form,subject:e.target.value})} className="h-12"/></div>
            <div><label className="block text-sm font-medium mb-2">Message *</label><Textarea placeholder="Tell us more..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} required className="min-h-[140px]"/></div>
            <Button type="submit" disabled={sending} className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">{sending ? "Sending..." : <span className="flex items-center gap-2"><Send className="w-4 h-4"/> Send Message</span>}</Button>
          </form>
        </div>
      </div>
    </div></div>
    <Footer/>
  </div>);
}
