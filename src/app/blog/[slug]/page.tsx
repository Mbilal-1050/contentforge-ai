"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Sparkles, ArrowLeft, Calendar, Clock, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";

const posts: Record<string, any> = {
  "ai-content-repurposing": {
    title: "How AI Content Repurposing Saves 15+ Hours Per Week",
    date: "July 20, 2026",
    readTime: "6 min read",
    category: "Productivity",
    author: "ContentForge Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    content: [
      "Content creators know the struggle: you spend hours crafting a brilliant blog post or recording an insightful video, but that's just the beginning. To build an audience across platforms, you need to reformat that content for Twitter/X, LinkedIn, Instagram, TikTok, newsletters, and more.",
      "According to our research, creators spend an average of 15 hours per week just reformatting and adapting content for different platforms. That's nearly two full workdays — time that could be spent creating new content, engaging with audiences, or growing your business.",
      "Enter AI-powered content repurposing. ContentForge AI uses advanced language models (GPT-4o) to automatically transform any piece of content into platform-optimized versions in minutes, not hours.",
      "The AI understands the nuances of each platform: Twitter threads need punchy hooks and threaded storytelling, LinkedIn posts require professional tone with practical insights, Instagram captions demand visual thinking and strategic hashtags, and newsletters need engaging subject lines and scannable formats.",
      "Creators using ContentForge AI report saving an average of 12-15 hours per week, posting 5x more content across platforms, seeing a 340% increase in engagement, and growing their following 2x faster.",
      "Ready to reclaim your time? Start with 3 free generations — no credit card required."
    ]
  },
  "social-media-strategy-2026": {
    title: "The Ultimate Social Media Content Strategy in 2026",
    date: "July 15, 2026",
    readTime: "8 min read",
    category: "Strategy",
    author: "ContentForge Team",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=600&fit=crop",
    content: [
      "Social media in 2026 looks very different from even two years ago. Algorithms have evolved, attention spans have shortened, and the content arms race has intensified. Here's what works now.",
      "Platform-specific optimization is the #1 success factor. Each platform rewards different formats, tones, and lengths. Twitter/X favors threads with data-backed insights, LinkedIn rewards storytelling and professional wisdom, Instagram prioritizes visual storytelling, and TikTok values raw, trend-aware content.",
      "The key strategy? Create once, repurpose everywhere — but adapt intelligently. Don't just copy-paste. Each platform needs content that feels native to it.",
      "Consistency beats virality. Our data shows creators who post 3-5 times weekly on 3+ platforms grow 4x faster than those chasing viral moments.",
      "AI tools like ContentForge make this scalable. Upload one piece of content and get 10+ platform-optimized versions instantly."
    ]
  },
  "repurposing-growth-hack": {
    title: "Why Repurposing is the #1 Growth Hack for Creators",
    date: "July 10, 2026", readTime: "5 min read", category: "Growth", author: "ContentForge Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    content: ["Top creators don't create 10 different pieces of content. They create 1 great piece and intelligently repurpose it across platforms.", "The math is simple: one 1,500-word blog post can become 2 Twitter threads, 3 LinkedIn posts, 2 Instagram carousel ideas, 1 newsletter, 2 TikTok script concepts, and 1 YouTube short script.", "That's 11 pieces of content from one source — a 10x productivity multiplier."]
  },
  "linkedin-vs-x-2026": {
    title: "LinkedIn vs X: Which Platform to Prioritize in 2026", date: "July 5, 2026", readTime: "7 min read", category: "Platforms", author: "ContentForge Team",
    image: "https://images.unsplash.com/photo-1611944213489-0b8b8f6e3c50?w=1200&h=600&fit=crop",
    content: ["Both LinkedIn and X (Twitter) offer massive organic reach in 2026, but they serve different purposes. Here's how to choose.", "LinkedIn: best for B2B, professional services, thought leadership, job-seeking audiences. X: best for tech, media, breaking news, entertainment."]
  },
  "blog-to-10-platforms": {
    title: "From Blog Post to 10 Platforms: Complete Workflow", date: "June 28, 2026", readTime: "10 min read", category: "Tutorial", author: "ContentForge Team",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    content: ["Here's exactly how ContentForge AI transforms one blog post into platform-ready content for 10 platforms.", "Step 1: Upload your content. Step 2: Select target platforms. Step 3: Choose tone and style. Step 4: Get 10+ assets in seconds.", "Each output is optimized for the specific platform's algorithm, character limits, and audience expectations."]
  },
  "ai-tools-creators-2026": {
    title: "5 AI Tools Every Content Creator Needs in 2026", date: "June 20, 2026", readTime: "6 min read", category: "Tools", author: "ContentForge Team",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop",
    content: ["The AI tool landscape has exploded. Here are the 5 essential tools: ContentForge AI (repurposing), ChatGPT (brainstorming), Canva AI (design), Descript (video editing), Notion AI (organization)."]
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-500 mb-6">Blog post not found.</p>
          <Link href="/blog"><Button>← Back to Blog</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <nav className="border-b border-gray-100 dark:border-gray-800 py-4 sticky top-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white" /></div>
            <span className="font-bold">ContentForge AI</span>
          </Link>
          <Link href="/blog"><Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog</Button></Link>
        </div>
      </nav>

      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300">{post.category}</span>
            <h1 className="text-3xl sm:text-4xl font-bold font-display mt-4 mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime}</span>
              <span>by {post.author}</span>
            </div>
          </div>

          {post.image && (
            <img src={post.image} alt={post.title} className="w-full rounded-2xl mb-10 object-cover aspect-[2/1]" />
          )}

          <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
            {post.content.map((p: string, i: number) => (
              <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{p}</p>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Ready to repurpose your content?</h2>
            <p className="text-white/80 mb-6">Start with 3 free generations — no credit card required.</p>
            <Link href="/signup">
              <Button size="lg" variant="secondary">Get Started Free</Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
