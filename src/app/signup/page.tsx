"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Mail, Lock, User, Eye, EyeOff, Check } from "lucide-react";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

function SignUpPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) setEmail(emailParam);
  }, [searchParams]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Register first
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Registration failed");
      }
      // Auto sign in
      const result = await signIn("credentials", { email, password, redirect: false });
      if (result?.error) throw new Error(result.error);
      toast.success("Account created!");
      router.push("/dashboard");
    } catch (err: any) {
      toast.error(err.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  const plans = [
    { name: "Starter", price: "$29", pieces: "10 pieces/mo", popular: false },
    { name: "Professional", price: "$59", pieces: "50 pieces/mo", popular: true },
    { name: "Agency", price: "$149", pieces: "Unlimited", popular: false },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold font-display">
            Content<span className="text-primary">Forge</span>
          </span>
        </Link>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>
              Start with 3 free generations — no credit card required
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Step indicator */}
            <div className="flex items-center justify-center gap-2 mb-6">
              {["Account", "Plan", "Done"].map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    i <= step ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-500"
                  }`}>
                    {i < step ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <span className={`text-xs ml-2 hidden sm:block ${i <= step ? "text-primary font-medium" : "text-gray-400"}`}>
                    {s}
                  </span>
                  {i < 2 && <div className="w-8 h-px bg-gray-200 dark:bg-gray-800 mx-2" />}
                </div>
              ))}
            </div>

            {step === 0 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(1); }} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input id="password" type={showPassword ? "text" : "password"} placeholder="Min. 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 pr-10" required minLength={8} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                      {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                    </button>
                  </div>
                </div>
                <Button type="submit" className="w-full">Continue</Button>

                <div className="relative my-4">
                  <Separator />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-950 px-3 text-xs text-gray-500">
                    OR
                  </span>
                </div>
                <Button variant="outline" className="w-full">
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Continue with Google
                </Button>
              </form>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <p className="text-sm text-center text-gray-500 mb-4">Choose your plan (you can change later)</p>
                {plans.map((plan) => (
                  <button
                    key={plan.name}
                    onClick={() => setStep(2)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      plan.popular
                        ? "border-primary bg-primary/5"
                        : "border-gray-200 dark:border-gray-800 hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold flex items-center gap-2">
                          {plan.name}
                          {plan.popular && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">Popular</span>
                          )}
                        </div>
                        <div className="text-sm text-gray-500">{plan.pieces}</div>
                      </div>
                      <div className="text-xl font-bold">{plan.price}<span className="text-sm text-gray-400">/mo</span></div>
                    </div>
                  </button>
                ))}
                <Button variant="ghost" className="w-full" onClick={() => setStep(2)}>Skip — start free</Button>
                <Button variant="ghost" className="w-full" onClick={() => setStep(0)}>← Back</Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">You&apos;re all set!</h3>
                  <p className="text-sm text-gray-500">Create your account and start repurposing content instantly.</p>
                </div>
                <Button className="w-full" onClick={handleSignUp} disabled={loading}>
                  {loading ? "Creating account..." : "Create Account & Start Free"}
                </Button>
                <Button variant="ghost" className="w-full" onClick={() => setStep(1)}>← Back</Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    }>
      <SignUpPageInner />
    </Suspense>
  );
}
