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
              <strong className="text-gray-900 dark:text-white">2,500+</strong> creators already repurposing
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
          <p className="text-center text-sm text-gray-500 mb-4">Repurpose to all major platforms</p>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
            {platforms.map(({ icon: Icon, name }) => (
              <div key={name} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>

      </section>
      {/* Trust badges */}
      <section className="trust-strip">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">Trusted by creators worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">2,500+</span>
              <span className="text-xs text-gray-500">Active Creators</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">150K+</span>
              <span className="text-xs text-gray-500">Pieces Generated</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">4.9/5</span>
              <span className="text-xs text-gray-500">Average Rating</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-gradient">12hr</span>
              <span className="text-xs text-gray-500">Avg. Time Saved/wk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo / Preview */}
      <section id="demo" className="py-20 sm:py-28 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">See It In Action</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              One Input → <span className="text-gradient">Magic Output</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
              Watch how ContentForge AI transforms a single blog post into platform-optimized content in seconds.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Input side */}
            <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 animate-fade-in-up">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="text-xs text-gray-400 ml-2">blog-post.md</span>
              </div>
              <div className="space-y-3">
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-4/5" />
              </div>
              <div className="mt-6 flex justify-center">
                <div className="animate-pulse-glow rounded-full p-1">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full px-6 py-3 text-white text-sm font-bold flex items-center gap-2">
                    <Wand2 className="w-4 h-4" /> Repurpose Now
                  </div>
                </div>
              </div>
              <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 text-indigo-400 animate-float" />
            </div>

            {/* Output side */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg animate-scale-in animation-delay-200">
                <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">AI OUTPUT ↑ 8 Platform-Optimized Versions</p>
                <div className="space-y-3">
                  {[
                    { platform: "Twitter/X", color: "bg-blue-50 dark:bg-blue-950", text: "text-blue-700 dark:text-blue-300", desc: "Thread with 5 high-engagement tweets..." },
                    { platform: "LinkedIn", color: "bg-indigo-50 dark:bg-indigo-950", text: "text-indigo-700 dark:text-indigo-300", desc: "Professional post with story hook & CTA..." },
                    { platform: "Instagram", color: "bg-pink-50 dark:bg-pink-950", text: "text-pink-700 dark:text-pink-300", desc: "Caption + hashtag set + carousel ideas..." },
                    { platform: "TikTok", color: "bg-gray-50 dark:bg-gray-900", text: "text-gray-700 dark:text-gray-300", desc: "60-sec script + hook + trending sounds..." },
                    { platform: "Newsletter", color: "bg-amber-50 dark:bg-amber-950", text: "text-amber-700 dark:text-amber-300", desc: "Email body + subject line variants..." },
                  ].map((item) => (
                    <div key={item.platform} className={`flex items-center gap-3 p-3 rounded-xl ${item.color} animate-fade-in-up`}>
                      <div className="w-2 h-2 rounded-full bg-current opacity-50 flex-shrink-0" />
                      <div>
                        <p className={`text-xs font-semibold ${item.text}`}>{item.platform}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                      </div>
                      <Check className="w-4 h-4 text-green-500 ml-auto flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
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
      <section id="testimonials" className="py-20 sm:py-28 bg-gray-50/50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
              Loved by creators worldwide
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 rounded-xl bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xl">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzEuNjU3IDAgMy0xLjM0MyAzLTNzLTEuMzQzLTMtMy0zLTMgMS4zNDMtMyAzIDEuMzQzIDMgMyAzem0tNiAyNGMtMS42NTcgMC0zIDEuMzQzLTMgM3MxLjM0MyAzIDMgMyAzLTEuMzQzIDMtMy0xLjM0My0zLTMtM3oiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display mb-4">
                Ready to 10x your content output?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
                Join 2,500+ creators who publish more content in less time with AI-powered repurposing.
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

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">ContentForge AI</span>
              </div>
              <p className="text-sm text-gray-500">
                AI-powered content repurposing for modern creators and marketers.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="#features" className="block hover:text-gray-900 dark:hover:text-white">Features</a>
                <a href="#pricing" className="block hover:text-gray-900 dark:hover:text-white">Pricing</a>
                <a href="/changelog" className="block hover:text-gray-900 dark:hover:text-white">Changelog</a>
                <a href="/roadmap" className="block hover:text-gray-900 dark:hover:text-white">Roadmap</a>
                <a href="/affiliate" className="block hover:text-gray-900 dark:hover:text-white">Affiliates</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="/about" className="block hover:text-gray-900 dark:hover:text-white">About</a>
                <a href="/blog" className="block hover:text-gray-900 dark:hover:text-white">Blog</a>
                <a href="/careers" className="block hover:text-gray-900 dark:hover:text-white">Careers</a>
                <a href="/contact" className="block hover:text-gray-900 dark:hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-500">
                <a href="/privacy" className="block hover:text-gray-900 dark:hover:text-white">Privacy Policy</a>
                <a href="/terms" className="block hover:text-gray-900 dark:hover:text-white">Terms of Service</a>
                <a href="/cookies" className="block hover:text-gray-900 dark:hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
                    {/* Social Media */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <a href="https://x.com/contentforgeai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300" aria-label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/Mbilal-1050/contentforge-ai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#181717] hover:text-white transition-all duration-300" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/company/contentforgeai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://instagram.com/contentforgeai" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white transition-all duration-300" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>

          <div className="pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ContentForge AI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
