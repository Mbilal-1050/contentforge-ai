"use client";

import { Footer } from "@/components/ui/footer";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Settings, CreditCard, Save, LogOut } from "lucide-react";
import { toast } from "sonner";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function SettingsPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [profile, setProfile] = useState<any>({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/profile").then(r => r.json()).then(d => {
      setProfile(d.profile || {});
      setName(d.profile?.name || "");
      setBio(d.profile?.bio || "");
      setCompany(d.profile?.company || "");
      setWebsite(d.profile?.website || "");
    }).catch(() => {});
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name, bio, company, website }) });
      toast.success("Profile updated!");
    } catch { toast.error("Failed"); }
    setSaving(false);
  };

  const handleSignOut = async () => { await signOut({ redirect: false }); router.push("/"); };

  return (
    <DashboardLayout>
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold font-display tracking-tight mb-2">Settings</h1>
        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList>
            <TabsTrigger value="profile"><User className="w-4 h-4 mr-2" />Profile</TabsTrigger>
            <TabsTrigger value="billing"><CreditCard className="w-4 h-4 mr-2" />Billing</TabsTrigger>
            <TabsTrigger value="account"><Settings className="w-4 h-4 mr-2" />Account</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2"><Label>Full Name</Label><Input value={name} onChange={e => setName(e.target.value)} /></div>
                <div className="space-y-2"><Label>Bio</Label><Textarea value={bio} onChange={e => setBio(e.target.value)} /></div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2"><Label>Company</Label><Input value={company} onChange={e => setCompany(e.target.value)} /></div>
                  <div className="space-y-2"><Label>Website</Label><Input value={website} onChange={e => setWebsite(e.target.value)} /></div>
                </div>
                <Button onClick={handleSave} disabled={saving}>{saving ? "Saving..." : <><Save className="w-4 h-4 mr-2" />Save</>}</Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="billing">
            <Card>
              <CardHeader><CardTitle>Billing</CardTitle></CardHeader>
              <CardContent>
                <p>Credits: {profile?.creditsRemaining} / {profile?.creditsTotal}</p>
                <Link href="/dashboard/billing"><Button className="mt-4">Manage Billing</Button></Link>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="account">
            <Card>
              <CardHeader><CardTitle>Account</CardTitle></CardHeader>
              <CardContent><Button variant="destructive" onClick={handleSignOut}><LogOut className="w-4 h-4 mr-2" />Sign Out</Button></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
      <Footer />
    </div>
  );
}
