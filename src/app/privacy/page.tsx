"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const sections = [
  {title:"1. Information We Collect",content:"We collect: (a) Account data — your name, email, and profile information when you sign up. (b) Content data — the content you upload for repurposing and the AI-generated outputs. (c) Usage data — how you interact with our service, including features used and time spent. (d) Payment data — billing information processed securely through Paddle (we do not store full card details)."},
  {title:"2. How We Use Your Information",content:"Your data is used to: provide and improve our service, process your subscription payments, send service-related communications (updates, billing), respond to your support requests, and analyze usage trends to improve our product."},
  {title:"3. AI & Content Privacy",content:"Your uploaded content and AI-generated outputs are private to you. We NEVER use your content to train or improve AI models. Content is processed in-memory during generation and not stored beyond what's needed for your account history. You can delete your data at any time."},
  {title:"4. Data Storage & Security",content:"We use industry-standard encryption (TLS 1.3) for data in transit and AES-256 for data at rest. Our infrastructure runs on secure cloud providers with SOC 2 certification. We implement regular security audits and penetration testing."},
  {title:"5. Third-Party Services",content:"We use the following third-party services: OpenAI (content generation), Paddle (payment processing), Neon.tech (database hosting), Vercel (hosting). Each provider has its own privacy policy and security measures."},
  {title:"6. Cookies",content:"We use essential cookies for authentication and session management. Analytics cookies (Vercel Analytics) help us understand how our service is used. No third-party advertising cookies. See our Cookie Policy for details."},
  {title:"7. Data Retention",content:"Account data: retained while your account is active. Content data: you can delete individual items or your entire account at any time. Payment records: retained for legal/compliance (typically 7 years). Deleted data is permanently removed within 30 days."},
  {title:"8. Your Rights",content:"You have the right to: access your personal data, correct inaccurate data, delete your data, export your data (data portability), opt out of marketing communications, and lodge complaints with data protection authorities."},
  {title:"9. International Data Transfers",content:"Your data may be processed in servers located in the United States and EU. We ensure appropriate safeguards (Standard Contractual Clauses) for international transfers."},
  {title:"10. Contact Us",content:"For privacy-related inquiries: privacy@contentforge.ai. Data Protection Officer: dpo@contentforge.ai. Response time: within 30 days as required by GDPR."},
];

export default function PrivacyPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Privacy Policy</h1><p className="text-gray-500">Last updated: July 26, 2026</p></div></section>
    <section className="py-12"><div className="max-w-3xl mx-auto px-4"><div className="space-y-8">{sections.map((s,i) => (<div key={i}><h2 className="text-xl font-bold mb-3">{s.title}</h2><p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.content}</p></div>))}</div></div></section>
    <Footer/>
  </div>);
}
