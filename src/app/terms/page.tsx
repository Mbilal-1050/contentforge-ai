"use client";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const sections = [
  {title:"1. Acceptance of Terms",content:"By accessing or using ContentForge AI, you agree to be bound by these Terms of Service. If you do not agree, you may not use the service."},
  {title:"2. Account Registration",content:"You must create an account to use ContentForge AI. You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate, complete information and keep it updated."},
  {title:"3. Subscription & Payments",content:"ContentForge AI offers free trials and paid subscription plans. Paid plans automatically renew unless cancelled. Prices are subject to change with 30 days notice. All payments are processed securely via Paddle."},
  {title:"4. Content Ownership",content:"You retain full ownership of all content you upload and generate through ContentForge AI. We do not claim any rights to your content. We do not use your content to train AI models."},
  {title:"5. Acceptable Use",content:"You agree not to use ContentForge AI for: generating spam, illegal content, hate speech, or content that violates others' rights. We reserve the right to suspend accounts that violate these terms."},
  {title:"6. Service Availability",content:"We strive for 99.9% uptime but do not guarantee uninterrupted service. We may perform scheduled maintenance during off-peak hours with advance notice."},
  {title:"7. Limitation of Liability",content:"ContentForge AI is provided 'as is'. We are not liable for any damages resulting from the use or inability to use the service. Our total liability is limited to the amount paid in the last 12 months."},
  {title:"8. Termination",content:"Either party may terminate the agreement at any time. Upon termination, your account access will cease. Refunds are processed per our refund policy."},
  {title:"9. Changes to Terms",content:"We may update these terms from time to time. Material changes will be communicated via email. Continued use after changes constitutes acceptance."},
  {title:"10. Governing Law",content:"These terms are governed by the laws of the jurisdiction where ContentForge AI is registered. Disputes shall be resolved through binding arbitration."},
];

export default function TermsPage() {
  return (<div className="min-h-screen bg-white dark:bg-gray-950">
    <nav className="border-b border-gray-100 dark:border-gray-800 py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white"/></div><span className="font-bold">ContentForge AI</span></Link><Link href="/"><Button variant="ghost" size="sm">← Back Home</Button></Link></div></nav>
    <section className="py-16 bg-gradient-to-b from-indigo-50/50 to-white dark:from-indigo-950/20 dark:to-gray-950"><div className="max-w-3xl mx-auto px-4 text-center"><h1 className="text-4xl sm:text-5xl font-bold font-display mb-4">Terms of Service</h1><p className="text-gray-500">Last updated: July 26, 2026</p></div></section>
    <section className="py-12"><div className="max-w-3xl mx-auto px-4"><div className="prose prose-gray dark:prose-invert max-w-none space-y-8">{sections.map((s,i) => (<div key={i}><h2 className="text-xl font-bold mb-3">{s.title}</h2><p className="text-gray-600 dark:text-gray-400 leading-relaxed">{s.content}</p></div>))}</div></div></section>
    <Footer/>
  </div>);
}
