import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Contact Us — ContentForge AI", description: "Get in touch with the ContentForge AI team." };

export default function ContactPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">We&apos;d love to hear from you!</p>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="w-12 h-12 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mb-4"><Mail className="w-6 h-6 text-indigo-600"/></div>
          <h3 className="font-semibold mb-2">Email Support</h3>
          <p className="text-sm text-gray-500 mb-3">General inquiries, billing, support.</p>
          <a href="mailto:support@contentforge.ai" className="text-indigo-600 hover:underline text-sm font-medium">support@contentforge.ai</a>
        </div>
        <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-950 flex items-center justify-center mb-4"><MessageSquare className="w-6 h-6 text-purple-600"/></div>
          <h3 className="font-semibold mb-2">Live Chat</h3>
          <p className="text-sm text-gray-500 mb-3">For Pro & Agency subscribers.</p>
          <p className="text-gray-400 text-sm">Pro & Agency plans</p>
        </div>
        <div className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="w-12 h-12 rounded-lg bg-pink-50 dark:bg-pink-950 flex items-center justify-center mb-4"><Clock className="w-6 h-6 text-pink-600"/></div>
          <h3 className="font-semibold mb-2">Response Time</h3>
          <ul className="text-sm text-gray-500 space-y-1"><li>Free: 24-48 hrs</li><li>Pro: 4-8 hrs</li><li>Agency: 1-2 hrs</li></ul>
        </div>
      </div>
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900">
        <h2 className="text-2xl font-bold mb-3">Need help right now?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Check our documentation or dashboard.</p>
        <Link href="/dashboard"><Button className="bg-indigo-600 hover:bg-indigo-700">Go to Dashboard</Button></Link>
      </div>
    </main>
  </div>);
}
