import { Metadata } from "next";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = { title: "Privacy Policy — ContentForge AI", description: "ContentForge AI privacy policy." };

export default function PrivacyPage() {
  return(<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: July 25, 2026</p>
      <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
        <div><h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2><p className="text-gray-600 dark:text-gray-400">We collect your name, email, and content you upload for repurposing. Payments are processed by Paddle — we never store full credit card numbers.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">2. How We Use Your Info</h2><p className="text-gray-600 dark:text-gray-400">To provide our services, process payments, send account updates. Your uploaded content is used ONLY for repurposing — never to train AI models.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">3. Data Security</h2><p className="text-gray-600 dark:text-gray-400">Encryption at rest & in transit, regular audits, SOC 2 compliant infrastructure.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2><p className="text-gray-600 dark:text-gray-400">OpenAI/Anthropic (AI), Paddle (payments), Neon.tech (database), Vercel (hosting). Each has its own privacy policy.</p></div>
        <div><h2 className="text-xl font-semibold mb-3">5. Your Rights</h2><p className="text-gray-600 dark:text-gray-400">Access, correct, or delete your data. Export anytime. Contact: <a href="mailto:privacy@contentforge.ai" className="text-indigo-600 hover:underline">privacy@contentforge.ai</a>.</p></div>
      </div>
    </main>
  </div>);
}
