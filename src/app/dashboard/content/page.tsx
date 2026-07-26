"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Plus, Trash2, Zap } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export default function ContentPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [sources, setSources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") { router.push("/login"); return; }
    if (status !== "authenticated") return;

    fetch("/api/content")
      .then(r => r.json())
      .then(data => { setSources(data.sources || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, [status]);

  const deleteSource = async (id: string) => {
    await fetch(`/api/content?id=${id}`, { method: "DELETE" });
    setSources(prev => prev.filter(s => s.id !== id));
    toast.success("Content deleted");
  };

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold font-display tracking-tight">My Content</h1>
          <p className="text-gray-500 mt-1">Manage your content sources</p>
        </div>
        <Link href="/dashboard/new"><Button><Plus className="w-4 h-4 mr-2" />Add Content</Button></Link>
      </div>
      <div className="space-y-4">
        {sources.length === 0 && !loading ? (
          <Card><CardContent className="p-12 text-center">
            <FileText className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No content yet</h3>
            <p className="text-gray-500 mb-4">Upload your first piece of content</p>
            <Link href="/dashboard/new"><Button>Add Your First Content</Button></Link>
          </CardContent></Card>
        ) : (
          sources.map((source: any) => (
            <Card key={source.id}><CardContent className="p-4 flex items-center justify-between">
              <div className="min-w-0">
                <h3 className="font-medium truncate">{source.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs capitalize">{source.sourceType || source.source_type}</Badge>
                  <span className="text-xs text-gray-400">{source.wordCount || source.word_count} words</span>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link href={`/dashboard/new?id=${source.id}`}><Button variant="outline" size="sm"><Zap className="w-4 h-4 mr-1" />Repurpose</Button></Link>
                <Button variant="ghost" size="sm" onClick={() => deleteSource(source.id)}><Trash2 className="w-4 h-4 text-gray-400" /></Button>
              </div>
            </CardContent></Card>
          ))
        )}
      </div>
    </DashboardLayout>
  );
    </div>
  );
}
