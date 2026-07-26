"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  Upload,
  Link as LinkIcon,
  FileText,
  Sparkles,
  Check,
  Loader2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Download,
  RefreshCw,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Facebook,
  Video,
  Mail,
  Share2,
  Star,
  Trash2,
} from "lucide-react";
import { PLATFORMS, TONES, PRICING_PLANS } from "@/lib/constants";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import Link from "next/link";

const platformIcons: Record<string, any> = {
  twitter: Twitter,
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
  tiktok: Video,
  newsletter: Mail,
  blog_summary: FileText,
  youtube_script: Youtube,
};

function NewRepurposePageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sourceId = searchParams.get("id");
  const { data: session } = useSession();

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<any>(null);

  // Step 1: Content input
  const [title, setTitle] = useState("");
  const [sourceType, setSourceType] = useState("blog");
  const [sourceUrl, setSourceUrl] = useState("");
  const [content, setContent] = useState("");
  const [inputMode, setInputMode] = useState<"paste" | "url">("paste");

  // Step 2: Platform selection
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [tone, setTone] = useState("professional");

  // Step 3: Results
  const [generatedResults, setGeneratedResults] = useState<any[]>([]);
  const [generating, setGenerating] = useState(false);

  useEffect(() => {
    async function load() {
      if (!session) return;

      const res = await fetch("/api/profile");
      if (res.ok) {
        const data = await res.json();
        if (data.profile) setProfile(data.profile);
      }

      if (sourceId) {
        const srcRes = await fetch(`/api/content?limit=100`);
        if (srcRes.ok) {
          const data = await srcRes.json();
          const src = (data.sources || []).find((s: any) => s.id === sourceId);
          if (src) {
            setTitle(src.title);
            setSourceType(src.sourceType || src.source_type);
            setContent(src.content);
            if (src.sourceUrl || src.source_url) { setSourceUrl(src.sourceUrl || src.source_url); setInputMode("url"); }
          }
        }
      }
    }
    load();
  }, [sourceId, session]);

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platformId) ? prev.filter((p) => p !== platformId) : [...prev, platformId]
    );
  };

  const handleSaveContent = async () => {
    if (!title || !content) {
      toast.error("Please add a title and content");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, sourceType, sourceUrl: sourceUrl || undefined, content }),
      });

      if (!res.ok) throw new Error("Failed to save");
      toast.success("Content saved!");
      setStep(2);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    if (selectedPlatforms.length === 0) {
      toast.error("Select at least one platform");
      return;
    }

    setGenerating(true);
    try {
      // Get most recent saved content
      const contentRes = await fetch("/api/content?limit=1");
      const contentData = await contentRes.json();
      const source = contentData.sources?.[0];

      const res = await fetch("/api/repurpose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contentId: source?.id,
          targetPlatforms: selectedPlatforms,
          tone,
          language: "en",
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Generation failed");
      }

      const data = await res.json();
      setGeneratedResults(data.generated || []);
      setStep(3);

      // Refresh profile credits
      const profileRes = await fetch("/api/profile");
      if (profileRes.ok) {
        const profData = await profileRes.json();
        if (profData.profile) setProfile(profData.profile);
      }

      toast.success(`Generated ${data.generated.length} pieces!`);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Steps progress */}
        <div className="flex items-center gap-3 mb-8">
          {[
            { num: 1, label: "Add Content" },
            { num: 2, label: "Customize" },
            { num: 3, label: "Generate" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                step > s.num ? "bg-green-500 text-white" :
                step === s.num ? "bg-primary text-white" :
                "bg-gray-200 dark:bg-gray-800 text-gray-500"
              }`}>
                {step > s.num ? <Check className="w-4 h-4" /> : s.num}
              </div>
              <span className={`text-sm font-medium hidden sm:block ${step >= s.num ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>{s.label}</span>
              {i < 2 && <ArrowRight className="w-4 h-4 text-gray-300" />}
            </div>
          ))}

          <div className="ml-auto flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-gray-500">
              {profile?.creditsRemaining || 0} credits left
            </span>
          </div>
        </div>

        {/* Step 1: Add Content */}
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Add Your Content</CardTitle>
              <CardDescription>Paste your content or enter a URL to repurpose</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Content Title</Label>
                <Input
                  placeholder="e.g., How to Build a SaaS in 2026"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label>Source Type</Label>
                <div className="flex gap-2">
                  {["blog", "video", "podcast", "social"].map((type) => (
                    <Badge
                      key={type}
                      variant={sourceType === type ? "default" : "outline"}
                      className="cursor-pointer capitalize"
                      onClick={() => setSourceType(type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              <Tabs value={inputMode} onValueChange={(v) => setInputMode(v as any)}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="paste">
                    <FileText className="w-4 h-4 mr-2" /> Paste Content
                  </TabsTrigger>
                  <TabsTrigger value="url">
                    <LinkIcon className="w-4 h-4 mr-2" /> From URL
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="paste" className="space-y-2 mt-4">
                  <Label>Paste your content here</Label>
                  <Textarea
                    placeholder="Paste your blog post, transcript, or any text content..."
                    className="min-h-[300px]"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <p className="text-xs text-gray-400">
                    {content.split(/\s+/).filter(Boolean).length} words • Min 50, max 50,000
                  </p>
                </TabsContent>
                <TabsContent value="url" className="space-y-2 mt-4">
                  <Label>Content URL</Label>
                  <Input
                    placeholder="https://yourblog.com/post-url"
                    value={sourceUrl}
                    onChange={(e) => setSourceUrl(e.target.value)}
                  />
                  <p className="text-xs text-gray-400">We'll extract the content from the URL automatically.</p>
                  <div className="pt-2">
                    <Label>Or paste content manually</Label>
                    <Textarea
                      className="min-h-[200px] mt-2"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                </TabsContent>
              </Tabs>

              <Button
                className="w-full"
                size="lg"
                onClick={handleSaveContent}
                disabled={loading || content.length < 50}
              >
                {loading ? (
                  <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Saving...</>
                ) : (
                  <>Continue <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Customize */}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Customize Your Output</CardTitle>
              <CardDescription>Choose platforms and tone for your repurposed content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Platforms */}
              <div className="space-y-3">
                <Label>Select Target Platforms</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {PLATFORMS.map((platform) => {
                    const Icon = platformIcons[platform.id] || Share2;
                    const isSelected = selectedPlatforms.includes(platform.id);
                    return (
                      <button
                        key={platform.id}
                        onClick={() => togglePlatform(platform.id)}
                        className={`p-4 rounded-xl border-2 text-center transition-all ${
                          isSelected
                            ? "border-primary bg-primary/5 shadow-sm"
                            : "border-gray-200 dark:border-gray-800 hover:border-gray-300"
                        }`}
                      >
                        <Icon className={`w-8 h-8 mx-auto mb-2 ${isSelected ? "text-primary" : "text-gray-400"}`} />
                        <p className="text-sm font-medium">{platform.name}</p>
                        <p className="text-xs text-gray-400 mt-1">{platform.formats.join(", ")}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tone */}
              <div className="space-y-3">
                <Label>Content Tone</Label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {TONES.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTone(t.id)}
                      className={`p-3 rounded-xl border-2 text-center transition-all ${
                        tone === t.id
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 dark:border-gray-800"
                      }`}
                    >
                      <span className="text-2xl">{t.emoji}</span>
                      <p className="text-sm font-medium mt-1">{t.name}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button
                  className="flex-1"
                  size="lg"
                  onClick={handleGenerate}
                  disabled={generating || selectedPlatforms.length === 0}
                >
                  {generating ? (
                    <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Generating...</>
                  ) : (
                    <><Sparkles className="w-4 h-4 mr-2" /> Generate Content ({selectedPlatforms.length} platforms)</>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Results */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold font-display">Your Repurposed Content ✨</h2>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => { setStep(1); setGeneratedResults([]); }}>
                  <RefreshCw className="w-4 h-4 mr-2" /> Start New
                </Button>
              </div>
            </div>

            {generatedResults.map((item, i) => {
              const Icon = platformIcons[item.platform] || FileText;
              return (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="bg-gray-50/50 dark:bg-gray-900/50 pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 border flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <CardTitle className="text-base capitalize">
                            {item.platform} — {item.format.replace("_", " ")}
                          </CardTitle>
                          <CardDescription>{item.word_count} words</CardDescription>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => copyToClipboard(item.content)}>
                          <Copy className="w-4 h-4 mr-1" /> Copy
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-1" /> Export
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap text-sm leading-relaxed">
                      {item.content}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default function NewRepurposePage() {
  return (
    <Suspense fallback={
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </DashboardLayout>
    }>
      <NewRepurposePageInner />
    </Suspense>
  );
}
