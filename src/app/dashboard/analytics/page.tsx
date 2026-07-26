"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Zap, TrendingUp, BarChart3 } from "lucide-react";

export default function AnalyticsPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [stats, setStats] = useState<any>({ totalSources: 0, totalGenerated: 0, byPlatform: {}, totalWords: 0 });

  useEffect(() => {
    if (status === "unauthenticated") { router.push("/login"); return; }
    if (status !== "authenticated") return;

    async function load() {
      const [cRes, gRes] = await Promise.all([
        fetch("/api/content?limit=200"),
        fetch("/api/generated?limit=200"),
      ]);
      const sources = (await cRes.json()).sources || [];
      const generated = (await gRes.json()).generated || [];

      const byPlatform: Record<string, number> = {};
      let tw = 0;
      generated.forEach((g: any) => { byPlatform[g.platform] = (byPlatform[g.platform] || 0) + 1; tw += g.wordCount || g.word_count || 0; });

      setStats({ totalSources: sources.length, totalGenerated: generated.length, byPlatform, totalWords: tw });
    }
    load();
  }, [status]);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold font-display tracking-tight mb-8">Analytics</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { l: "Content Sources", v: stats.totalSources, i: FileText, c: "text-indigo-500", b: "bg-indigo-50 dark:bg-indigo-950" },
          { l: "Total Generated", v: stats.totalGenerated, i: Zap, c: "text-amber-500", b: "bg-amber-50 dark:bg-amber-950" },
          { l: "Total Words Output", v: stats.totalWords.toLocaleString(), i: TrendingUp, c: "text-green-500", b: "bg-green-50 dark:bg-green-950" },
          { l: "Avg Per Source", v: stats.totalSources > 0 ? Math.round(stats.totalGenerated / stats.totalSources) : 0, i: BarChart3, c: "text-purple-500", b: "bg-purple-50 dark:bg-purple-950" },
        ].map((s, i) => (
          <Card key={i}><CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div><p className="text-sm text-gray-500">{s.l}</p><p className="text-2xl font-bold mt-1">{s.v}</p></div>
              <div className={`w-10 h-10 rounded-lg ${s.b} flex items-center justify-center`}><s.i className={`w-5 h-5 ${s.c}`} /></div>
            </div>
          </CardContent></Card>
        ))}
      </div>
      {Object.keys(stats.byPlatform).length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-4">
            <h3 className="font-semibold mb-4">By Platform</h3>
            {Object.entries(stats.byPlatform).map(([p, c]) => (
              <div key={p} className="flex items-center gap-3 mb-2">
                <span className="flex-1 text-sm capitalize">{p.replace("_", " ")}</span>
                <span className="text-sm text-gray-500">{c as number}</span>
                <div className="w-24 bg-gray-200 dark:bg-gray-800 rounded-full h-1.5"><div className="bg-indigo-600 h-1.5 rounded-full" style={{width:`${((c as number)/stats.totalGenerated)*100}%`}}/></div>
              </div>
            ))}
          </CardContent></Card>
        </div>
      )}
    </DashboardLayout>
  );
}
