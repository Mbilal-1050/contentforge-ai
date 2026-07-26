"use client";
import Link from "next/link";
import { Sparkles, Briefcase, MapPin, Clock, DollarSign, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const jobs = [
  {title:"Senior Full-Stack Engineer",type:"Full-time",location:"Remote (Worldwide)",salary:"$120K–$180K",dept:"Engineering"},
  {title:"AI/ML Engineer — Content",type:"Full-time",location:"Remote (Worldwide)",salary:"$130K–$200K",dept:"Engineering"},
  {title:"Product Designer",type:"Full-time",location:"Remote (Worldwide)",salary:"$100K–$150K",dept:"Design"},
  {title:"Growth Marketing Manager",type:"Full-time",location:"Remote (Americas/EMEA)",salary:"$90K–$140K",dept:"Marketing"},
  {title:"Customer Success Manager",type:"Full-time",location:"Remote (Worldwide)",salary:"$70K–$100K",dept:"Support"},
];

const perks = ["🌍 Remote-first — work from anywhere","💰 Competitive salary + equity","🏥 Health, dental, vision coverage","🏖️ Unlimited PTO (we mean it)","💻 Latest MacBook Pro + home office stipend","📚 $2K/year learning budget","🕐 Flexible hours — async culture","🎉 Annual team retreats"];

export default function CareersPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-20 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950 text-center"><div className="max-w-3xl mx-auto px-4"><div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6"><Briefcase className="w-4 h-4"/> We're Hiring!</div><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Build the Future of <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">AI Content</span></h1><p className="text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto">Join our remote-first team and help millions of creators publish better content — faster.</p></div></section>
    <section className="py-16"><div className="max-w-4xl mx-auto px-4"><h2 className="text-2xl font-bold mb-8">Open Positions</h2><div className="space-y-4">{jobs.map(job => (<div key={job.title} className="p-5 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-700 hover:shadow-md transition-all group bg-white dark:bg-gray-900"><div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"><div><h3 className="font-semibold group-hover:text-indigo-600 transition-colors">{job.title}</h3><div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500"><span className="flex items-center gap-1"><MapPin className="w-3 h-3"/>{job.location}</span><span className="flex items-center gap-1"><Clock className="w-3 h-3"/>{job.type}</span><span className="flex items-center gap-1"><DollarSign className="w-3 h-3"/>{job.salary}</span></div></div><span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 whitespace-nowrap">{job.dept}</span></div></div>))}</div></div></section>
    <section className="py-16 bg-gray-50 dark:bg-gray-900"><div className="max-w-4xl mx-auto px-4"><h2 className="text-3xl font-bold text-center mb-4">Why Work at ContentForge?</h2><p className="text-center text-gray-500 mb-10">We take care of our team so they can do their best work.</p><div className="grid sm:grid-cols-2 gap-3">{perks.map(p => (<div key={p} className="p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-sm font-medium">{p}</div>))}</div></div></section>
    <section className="py-16 text-center"><div className="max-w-xl mx-auto px-4"><h2 className="text-2xl font-bold mb-4">Don't see the right role?</h2><p className="text-gray-500 mb-6">We're always looking for talented people.</p><Link href="/contact"><Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600">Get in Touch <ChevronRight className="w-4 h-4 ml-1"/></Button></Link></div></section>
    <Footer/>
  </div>);
}
