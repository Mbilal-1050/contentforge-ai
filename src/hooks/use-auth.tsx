"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useAuth() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    const result = await (window as any).__nextAuthSignIn?.("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      throw new Error(result.error === "CredentialsSignin"
        ? "Invalid email or password"
        : result.error);
    }

    return result;
  };

  const signUp = async (email: string, password: string, name: string) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, name }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Registration failed");
    }

    // Auto sign in after registration
    return signIn(email, password);
  };

  const signOut = async () => {
    await fetch("/api/auth/signout", { method: "POST" });
    router.push("/");
  };

  const updateProfile = async (data: Record<string, string>) => {
    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error("Failed to update profile");
    await update();
  };

  const refreshProfile = async () => {
    await update();
  };

  return {
    user: session?.user || null,
    profile: session?.user
      ? {
          id: (session.user as any).id,
          email: session.user.email || "",
          name: session.user.name || "",
          image: session.user.image,
        }
      : null,
    loading: status === "loading",
    signIn: async (email: string, password: string) => {
      const { signIn: nextAuthSignIn } = await import("next-auth/react");
      const result = await nextAuthSignIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.error) {
        throw new Error(result.error === "CredentialsSignin"
          ? "Invalid email or password"
          : result.error);
      }
    },
    signUp,
    signOut,
    updateProfile,
    refreshProfile,
  };
}
