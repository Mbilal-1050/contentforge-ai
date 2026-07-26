"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  Globe,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Check,
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Shield,
  Clock,
  Heart,
  Play,
  Menu,
  X,
  ChevronRight,
  Copy,
  Download,
  Share2,
  Wand2,
} from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { PRICING_PLANS } from "@/lib/constants";

const features = [
  {
    icon: Wand2,
    title: "AI-Powered Repurposing",
    description:
      "Our advanced AI understands context, tone, and platform-specific best practices to create content that actually performs.",
  },
  {
    icon: Globe,
    title: "8+ Platform Formats",
    description:
      "Twitter threads, LinkedIn posts, Instagram captions, TikTok scripts, newsletters, YouTube scripts, blog summaries, and more.",
  },
  {
    icon: Zap,
    title: "10x Faster Output",
    description:
      "What used to take 5 hours now takes 5 minutes. Upload once, get 10+ pieces of content optimized for every platform.",
  },
  {
    icon: TrendingUp,
    title: "Growth Optimized",
    description:
      "Every output is crafted with platform algorithms in mind — hooks that stop scrolls, CTAs that drive clicks.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Track your content performance, credit usage, and repurposing ROI from a beautiful analytics dashboard.",
  },
  {
    icon: Shield,
    title: "Your Content, Safe",
    description:
      "Enterprise-grade security. Your content is never used to train AI models. SOC 2 compliant infrastructure.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Content Creator, 120K followers",
    avatar: "👩‍💻",
    content:
      "ContentForge AI saved me 15 hours per week. I now post 5x more content across all platforms without burning out. My engagement is up 340%.",
    stars: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Agency Owner",
    avatar: "🧑‍💼",
    content:
      "We use ContentForge for all 23 of our clients. The quality is insane — our clients think we hired 5 new copywriters. Best ROI tool in our stack.",
    stars: 5,
  },
  {
    name: "Priya Patel",
    role: "SaaS Founder",
    avatar: "👩‍🚀",
    content:
      "Our blog posts now automatically become Twitter threads, LinkedIn posts, and newsletter content. Our organic traffic doubled in 60 days.",
    stars: 5,
  },
];

const platforms = [
  { icon: Twitter, name: "Twitter/X" },
  { icon: Linkedin, name: "LinkedIn" },
  { icon: Instagram, name: "Instagram" },
  { icon: Youtube, name: "YouTube" },
  { icon: Share2, name: "Facebook" },
  { icon: Play, name: "TikTok" },
  { icon: Copy, name: "Newsletter" },
  { icon: Download, name: "Blog" },
];

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                Content<span className="text-primary">Forge</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#testimonials" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                Testimonials
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/login">
                <Button variant="ghost" size="sm">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Get Started Free <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#how-it-works" className="block text-sm py-2" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
              <a href="#pricing" className="block text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" className="block text-sm py-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <div className="pt-3 space-y-2">
                <Link href="/login"><Button variant="outline" className="w-full">Sign In</Button></Link>
                <Link href="/signup"><Button className="w-full">Get Started Free</Button></Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="gradient-hero absolute inset-0" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 px-4 py-2 text-sm bg-indigo-50 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800 animate-pulse-glow">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-Powered Content Repurposing
          </Badge>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[1.1] mb-6">
            Turn One Piece of Content
            <br />
            Into{" "}
            <span className="text-gradient">
              10+ High-Performing
            </span>{" "}
            Assets
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10">
            Upload your blog, video, or podcast. Our AI repurposes it into optimized posts
            for Twitter, LinkedIn, Instagram, TikTok, newsletters, and more — in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex -space-x-2">
              {["👩‍💻", "🧑‍💼", "👩‍🚀", "🧑‍🎨", "👨‍💻"].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-white dark:border-gray-950 flex items-center justify-center text-lg"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <strong className="text-gray-900 dark:text-white">15,000+</strong> creators already repurposing
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
            <Link href={email ? `/signup?email=${encodeURIComponent(email)}` : "/signup"}>
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90 whitespace-nowrap">
                Start Free <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            No credit card required • 3 free generations • Cancel anytime
          </p>
        </div>
      </section>

      {/* Platform icons bar */}
      <section className="py-8 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">Repurpose to all major platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#1DA1F2]/10 flex items-center justify-center group-hover:bg-[#1DA1F2]/20 transition-colors"><Twitter className="w-6 h-6 text-[#1DA1F2]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#1DA1F2] transition-colors">Twitter/X</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors"><Linkedin className="w-6 h-6 text-[#0A66C2]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#0A66C2] transition-colors">LinkedIn</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#E4405F]/10 flex items-center justify-center group-hover:bg-[#E4405F]/20 transition-colors"><Instagram className="w-6 h-6 text-[#E4405F]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#E4405F] transition-colors">Instagram</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#FF0000]/10 flex items-center justify-center group-hover:bg-[#FF0000]/20 transition-colors"><Youtube className="w-6 h-6 text-[#FF0000]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#FF0000] transition-colors">YouTube</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#1877F2]/10 flex items-center justify-center group-hover:bg-[#1877F2]/20 transition-colors"><Share2 className="w-6 h-6 text-[#1877F2]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#1877F2] transition-colors">Facebook</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"><Play className="w-6 h-6 text-gray-700 dark:text-gray-300" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">TikTok</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center group-hover:bg-[#FF6B35]/20 transition-colors"><Copy className="w-6 h-6 text-[#FF6B35]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#FF6B35] transition-colors">Newsletter</span>
            </div>
            <div className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 flex items-center justify-center group-hover:bg-[#10B981]/20 transition-colors"><Download className="w-6 h-6 text-[#10B981]" /></div>
              <span className="text-xs font-medium text-gray-500 group-hover:text-[#10B981] transition-colors">Blog</span>
            </div>
          </div>
        </div>

      </section>
      {/* Trust badges */}
      <section className="trust-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted by creators worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">15,000+</span>
              <span className="text-xs text-gray-500">Active Creators</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">500K+</span>
              <span className="text-xs text-gray-500">Pieces Generated</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">4.9/5</span>
              <span className="text-xs text-gray-500">Average Rating</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">15hr</span>
              <span className="text-xs text-gray-500">Avg. Time Saved/wk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Preview */}
      <section id="demo" className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
              <Play className="w-4 h-4" /> See It In Action
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              One Input → <span className="text-gradient">Magic Output</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Watch how ContentForge AI transforms a single blog post into platform-optimized content in seconds.
            </p>
          </div>

          {/* Demo Grid */}
          <div className="grid lg:grid-cols-2 gap-10 items-start max-w-5xl mx-auto">
            {/* INPUT — Terminal Window */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl bg-gray-900">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs text-gray-400 ml-3 font-mono">blog-post.md</span>
                </div>
                {/* Content */}
                <div className="p-5 font-mono text-sm space-y-3 min-h-[320px]">
                  <div className="animate-fade-in-up">
                    <span className="text-green-400">❯</span> <span className="text-gray-300">Uploading blog post...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-200">
                    <span className="text-green-400">❯</span> <span className="text-gray-300">Analyzing content: <span className="text-indigo-400">2,147 words</span></span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-400">
                    <span className="text-green-400">❯</span> <span className="text-gray-300">Detecting key topics...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-600">
                    <span className="text-amber-400">⚠</span> <span className="text-gray-500">Extracting hooks for Twitter/X...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-600">
                    <span className="text-indigo-400">⚡</span> <span className="text-gray-500">Optimizing for LinkedIn algorithm...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-600">
                    <span className="text-pink-400">📸</span> <span className="text-gray-500">Generating Instagram captions...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-800">
                    <span className="text-gray-500">Generating TikTok scripts...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-800">
                    <span className="text-gray-500">Formatting newsletter content...</span>
                  </div>
                  <div className="animate-fade-in-up animation-delay-800 pt-2">
                    <span className="text-green-400">✓</span> <span className="text-green-300 font-bold">Done! 8 assets generated in 12 seconds</span>
                  </div>
                </div>
              </div>
              {/* Arrow */}
              <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg animate-pulse-glow">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* OUTPUT — Platform Cards */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /> AI OUTPUT — 8 Platform-Optimized Versions
              </p>
              {[
                { icon: Twitter, platform: "Twitter/X", color: "border-l-[#1DA1F2]", bg: "bg-[#1DA1F2]/5", text: "text-[#1DA1F2]", desc: "5-tweet thread with curiosity hook, data-backed points, and CTA" },
                { icon: Linkedin, platform: "LinkedIn", color: "border-l-[#0A66C2]", bg: "bg-[#0A66C2]/5", text: "text-[#0A66C2]", desc: "Professional post with story opening, key lessons, and engagement question" },
                { icon: Instagram, platform: "Instagram", color: "border-l-[#E4405F]", bg: "bg-[#E4405F]/5", text: "text-[#E4405F]", desc: "Caption + 15 hashtags + carousel slide ideas with visual cues" },
                { icon: Play, platform: "TikTok", color: "border-l-gray-900 dark:border-l-gray-500", bg: "bg-gray-100 dark:bg-gray-900", text: "text-gray-800 dark:text-gray-300", desc: "60-sec script with pattern interrupt hook + trending audio suggestion" },
                { icon: Copy, platform: "Newsletter", color: "border-l-[#FF6B35]", bg: "bg-[#FF6B35]/5", text: "text-[#FF6B35]", desc: "Email body with 3 subject line variants + preview text" },
              ].map((item, i) => (
                <div key={item.platform} className={`flex items-start gap-3 p-4 rounded-xl border-l-4 ${item.color} ${item.bg} border border-gray-100 dark:border-gray-800 animate-fade-in-up hover:shadow-md transition-all`} style={{ animationDelay: `${0.2 + i * 0.15}s` }}>
                  <item.icon className={`w-5 h-5 ${item.text} mt-0.5 flex-shrink-0`} />
                  <div>
                    <p className={`text-sm font-bold ${item.text}`}>{item.platform}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                  <Check className="w-4 h-4 text-green-500 ml-auto flex-shrink-0 mt-0.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">How It Works</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              From one piece to everywhere in 3 steps
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              No complex setup. No manual rewriting. Just upload and let AI do the heavy lifting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                icon: Copy,
                title: "Upload Your Content",
                desc: "Paste your blog post, upload a transcript, or drop a YouTube link. We support text, video transcripts, and podcast episodes.",
                color: "from-indigo-500 to-blue-500",
              },
              {
                step: "02",
                icon: Wand2,
                title: "Choose Your Platforms",
                desc: "Select which platforms you want content for. Pick your tone — professional, casual, witty, or inspirational.",
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                icon: Download,
                title: "Get 10+ Assets",
                desc: "AI generates platform-optimized content in seconds. Copy, download, or share directly to your scheduler.",
                color: "from-pink-500 to-rose-500",
              },
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500" style={{
                  backgroundImage: `linear-gradient(to right, var(--${item.color.split("-")[1]}), var(--${item.color.split("-")[3]}))`
                }} />
                <div className="relative p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 group-hover:border-transparent transition-all">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-200 dark:text-gray-800 mb-3">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Features</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              Everything you need to scale your content
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Purpose-built for creators who want maximum output with minimum effort.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 hover:shadow-lg transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center mb-4 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors">
                  <feature.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Start free. Upgrade when you need more firepower.
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${billingInterval === "monthly" ? "font-semibold" : "text-gray-500"}`}>Monthly</span>
            <button
              onClick={() => setBillingInterval(billingInterval === "monthly" ? "yearly" : "monthly")}
              className={`relative w-14 h-7 rounded-full transition-colors ${billingInterval === "yearly" ? "bg-indigo-600" : "bg-gray-300 dark:bg-gray-700"}`}
            >
              <div className={`absolute top-1 w-5 h-5 rounded-full bg-white transition-transform ${billingInterval === "yearly" ? "left-8" : "left-1"}`} />
            </button>
            <span className={`text-sm flex items-center gap-1 ${billingInterval === "yearly" ? "font-semibold" : "text-gray-500"}`}>
              Yearly
              <Badge className="ml-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 border-green-200 dark:border-green-800 text-xs">
                Save 17%
              </Badge>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl border transition-all ${
                  plan.highlighted
                    ? "border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-xl scale-[1.02]"
                    : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:border-indigo-200 dark:hover:border-indigo-800"
                }`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${billingInterval === "monthly" ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12)}
                  </span>
                  <span className="text-gray-500">/mo</span>
                  {billingInterval === "yearly" && (
                    <p className="text-sm text-gray-400 mt-1">
                      ${plan.yearlyPrice} billed annually
                    </p>
                  )}
                </div>
                <Link href={`/signup?plan=${plan.id}`}>
                  <Button
                    className={`w-full mb-6 ${
                      plan.highlighted
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                        : ""
                    }`}
                    variant={plan.highlighted ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
              ⭐ Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              Loved by creators worldwide
            </h2>
          </div>

          <div className="relative">
            <div className="flex gap-6 animate-marquee">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="p-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 w-[350px] flex-shrink-0 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.stars)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    &ldquo;{t.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center text-xl">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Gradient fades on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50/50 dark:from-gray-900/50 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50/50 dark:from-gray-900/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                Ready to 10x your content output?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Join 15,000+ creators who publish more content in less time with AI-powered repurposing.
              </p>
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="text-lg px-10 py-6 h-auto">
                  Start Free — No Credit Card <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <p className="mt-4 text-sm text-white/60">
                3 free generations • Set up in 60 seconds
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}