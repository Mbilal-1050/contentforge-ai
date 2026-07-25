"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { createSupabaseBrowserClient } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";
import {
  BarChart3,
  TrendingUp,
  FileText,
  Zap,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
} from "lucide-react";

export default function AnalyticsPage() {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();
  const [stats, setStats] = useState({
    totalSources: 0,
    totalGenerated: 0,
    byPlatform: {} as Record<string, number>,
    totalWords: 0,
    recentActivity: [] as any[],
  });

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) { router.push("/login"); return; }

      const { data: sources } = await supabase.from("content_sources").select("*").eq("user_id", user.id);
      const { data: generated } = await supabase.from("generated_content").select("*").eq("user_id", user.id);

      const byPlatform: Record<string, number> = {};
      let totalWords = 0;
      (generated || []).forEach((g: any) => {
        byPlatform[g.platform] = (byPlatform[g.platform] || 0) + 1;
        totalWords += g.word_count || 0;
      });

      setStats({
        totalSources: sources?.length || 0,
        totalGenerated: generated?.length || 0,
        byPlatform,
        totalWords,
        recentActivity: (generated || []).slice(0, 10),
      });
    }
    load();
  }, []);

  const platformIcons: Record<string, any> = {
    twitter: Twitter,
    linkedin: Linkedin,
    instagram: Instagram,
    youtube_script: Youtube,
    newsletter: Mail,
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold font-display tracking-tight mb-8">Analytics</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Content Sources", value: stats.totalSources, icon: FileText, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950" },
          { label: "Total Generated", value: stats.totalGenerated, icon: Zap, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950" },
          { label: "Total Words Output", value: stats.totalWords.toLocaleString(), icon: TrendingUp, color: "text-green-500", bg: "bg-green-50 dark:bg-green-950" },
          { label: "Avg Per Source", value: stats.totalSources > 0 ? Math.round(stats.totalGenerated / stats.totalSources) : 0, icon: BarChart3, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-950" },
        ].map((stat, i) => (
          <Card key={i}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Content by Platform</CardTitle>
            <CardDescription>Distribution of generated content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(stats.byPlatform).map(([platform, count]) => {
                const Icon = platformIcons[platform] || FileText;
                const pct = stats.totalGenerated > 0 ? Math.round((count / stats.totalGenerated) * 100) : 0;
                return (
                  <div key={platform} className="flex items-center gap-3">
                    <Icon className="w-4 h-4 text-gray-400" />
                    <span className="flex-1 text-sm font-medium capitalize">{platform.replace("_", " ")}</span>
                    <span className="text-sm text-gray-500">{count} ({pct}%)</span>
                    <div className="w-24 bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
                      <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
              {Object.keys(stats.byPlatform).length === 0 && (
                <p className="text-sm text-gray-400 text-center py-4">No data yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity Summary</CardTitle>
            <CardDescription>Your content repurposing summary</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500">Content Sources Created</p>
                <p className="text-2xl font-bold">{stats.totalSources}</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500">Pieces Generated</p>
                <p className="text-2xl font-bold">{stats.totalGenerated}</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900">
                <p className="text-sm text-gray-500">Average Words per Piece</p>
                <p className="text-2xl font-bold">
                  {stats.totalGenerated > 0 ? Math.round(stats.totalWords / stats.totalGenerated) : 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
