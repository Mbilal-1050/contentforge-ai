"use client";

import { AuthProvider } from "@/hooks/use-auth";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
