import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "ContentForge AI — Repurpose Content 10x Faster",
    template: "%s | ContentForge AI",
  },
  description:
    "Turn one piece of content into 10+ high-performing assets for every platform. AI-powered content repurposing for creators, marketers, and agencies.",
  keywords: [
    "content repurposing",
    "AI content tool",
    "social media content",
    "content marketing",
    "AI content generator",
    "repurpose content",
    "content automation",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://contentforge.ai",
    siteName: "ContentForge AI",
    title: "ContentForge AI — Repurpose Content 10x Faster",
    description:
      "Turn one piece of content into 10+ high-performing assets for every platform.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentForge AI — Repurpose Content 10x Faster",
    description:
      "Turn one piece of content into 10+ high-performing assets for every platform.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster richColors closeButton position="top-center" />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
