"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Plus, Upload, FileText, TrendingUp, CreditCard, Zap,
  ArrowRight, Twitter, Linkedin, Instagram, MessageSquare, ExternalLink,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [profile, setProfile] = useState<any>(null);
  const [sources, setSources] = useState<any[]>([]);
  const [generated, setGenerated] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    if (status !== "authenticated") return;

    async function loadData() {
      try {
        const [profileRes, contentRes, generatedRes] = await Promise.all([
          fetch("/api/profile"),
          fetch("/api/content?limit=5"),
          fetch("/api/generated?limit=10"),
        ]);

        if (profileRes.ok) {
          const data = await profileRes.json();
          setProfile(data.profile);
        }
        if (contentRes.ok) {
          const data = await contentRes.json();
          setSources(data.sources || []);
        }
        if (generatedRes.ok) {
          const data = await generatedRes.json();
          setGenerated(data.generated || []);
        }
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    loadData();
  }, [status]);

  if (loading || status === "loading") {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </DashboardLayout>
    );
  }

  const platformIcons: Record<string, any> = { twitter: Twitter, linkedin: Linkedin, instagram: Instagram };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold font-display tracking-tight">
          Welcome back{profile?.name ? `, ${profile.name.split(" ")[0]}` : ""} 👋
        </h1>
        <p className="text-gray-500 mt-1">Ready to turn your content into high-performing assets?</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Credits Remaining", value: profile?.creditsRemaining || 0, icon: Zap, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950" },
          { label: "Total Repurposed", value: generated.length, icon: FileText, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950" },
          { label: "Content Sources", value: sources.length, icon: Upload, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950" },
          { label: "Plan", value: profile?.plan || "free", icon: CreditCard, color: "text-green-500", bg: "bg-green-50 dark:bg-green-950" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1 capitalize">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {profile && (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold">Credit Usage</h3>
                <p className="text-sm text-gray-500">{profile.creditsRemaining} of {profile.creditsTotal} credits</p>
              </div>
              {profile.plan === "free" && (
                <Link href="/#pricing"><Button size="sm" className="bg-primary">Upgrade <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
              )}
            </div>
            <Progress value={((profile.creditsTotal - profile.creditsRemaining) / profile.creditsTotal) * 100} className="h-2" />
          </CardContent>
        </Card>
      )}

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-dashed border-2 border-gray-300 dark:border-gray-700 hover:border-primary/50 transition-colors">
            <CardContent className="p-6">
              <Link href="/dashboard/new" className="flex items-center justify-center gap-3 text-gray-500 hover:text-primary transition-colors">
                <Plus className="w-5 h-5" /><span className="font-medium">Create New Repurpose Project</span>
              </Link>
            </CardContent>
          </Card>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Recent Content Sources</h2>
              <Link href="/dashboard/content"><Button variant="ghost" size="sm">View All <ArrowRight className="w-4 h-4 ml-1" /></Button></Link>
            </div>
            {sources.length === 0 ? (
              <Card><CardContent className="p-6 text-center">
                <Upload className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500 mb-4">No content yet.</p>
                <Link href="/dashboard/new"><Button>Upload Content</Button></Link>
              </CardContent></Card>
            ) : (
              <div className="space-y-3">
                {sources.map((source: any) => (
                  <Card key={source.id} className="hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="min-w-0">
                          <h3 className="font-medium truncate">{source.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="secondary" className="text-xs">{source.sourceType || source.source_type}</Badge>
                            <span className="text-xs text-gray-400">{source.wordCount || source.word_count} words</span>
                          </div>
                        </div>
                        <Link href={`/dashboard/new?id=${source.id}`}>
                          <Button size="sm" variant="outline"><Zap className="w-4 h-4 mr-1" />Repurpose</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader><CardTitle className="text-lg">Recently Generated</CardTitle></CardHeader>
            <CardContent>
              {generated.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-4">No generated content yet</p>
              ) : (
                <div className="space-y-3">
                  {generated.slice(0, 5).map((item: any) => {
                    const Icon = platformIcons[item.platform] || FileText;
                    return (
                      <div key={item.id} className="flex items-start gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900">
                        <Icon className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-sm font-medium capitalize">{item.platform} — {item.format.replace("_", " ")}</p>
                          <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{(item.content || "").slice(0, 80)}...</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
