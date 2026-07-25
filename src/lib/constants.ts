export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for solo creators getting started",
    monthlyPriceId: process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
      ? "pri_01hxxxxx_starter_monthly"
      : "pri_01hxxxxx_starter_monthly_test",
    monthlyPrice: 29,
    yearlyPriceId: process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
      ? "pri_01hxxxxx_starter_yearly"
      : "pri_01hxxxxx_starter_yearly_test",
    yearlyPrice: 290,
    features: [
      "10 content pieces/month",
      "All platform formats",
      "Basic AI tones",
      "Export as text",
      "Email support",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    id: "pro",
    name: "Professional",
    description: "For serious content creators & marketers",
    monthlyPriceId: process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
      ? "pri_01hxxxxx_pro_monthly"
      : "pri_01hxxxxx_pro_monthly_test",
    monthlyPrice: 59,
    yearlyPriceId: process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
      ? "pri_01hxxxxx_pro_yearly"
      : "pri_01hxxxxx_pro_yearly_test",
    yearlyPrice: 590,
    features: [
      "50 content pieces/month",
      "All platform formats",
      "All AI tones + custom",
      "Video-to-text repurposing",
      "Priority support",
      "Analytics dashboard",
      "Bulk repurpose",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    id: "agency",
    name: "Agency",
    description: "For teams & agencies at scale",
    monthlyPriceId: process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
      ? "pri_01hxxxxx_agency_monthly"
      : "pri_01hxxxxx_agency_monthly_test",
    monthlyPrice: 149,
    yearlyPriceId: process.env.NEXT_PUBLIC_PADDLE_ENV === "production"
      ? "pri_01hxxxxx_agency_yearly"
      : "pri_01hxxxxx_agency_yearly_test",
    yearlyPrice: 1490,
    features: [
      "Unlimited content pieces",
      "All platform formats",
      "Custom AI tones & templates",
      "White-label exports",
      "Team collaboration (5 seats)",
      "API access",
      "Dedicated support",
      "Custom integrations",
    ],
    highlighted: false,
    cta: "Start Free Trial",
  },
];

export const PLATFORMS = [
  { id: "twitter", name: "Twitter / X", icon: "Twitter", formats: ["thread", "single_tweet"] },
  { id: "linkedin", name: "LinkedIn", icon: "Linkedin", formats: ["post", "article_summary"] },
  { id: "instagram", name: "Instagram", icon: "Instagram", formats: ["caption", "carousel_script"] },
  { id: "facebook", name: "Facebook", icon: "Facebook", formats: ["post", "group_post"] },
  { id: "tiktok", name: "TikTok", icon: "Video", formats: ["script", "hook_ideas"] },
  { id: "newsletter", name: "Email Newsletter", icon: "Mail", formats: ["full_newsletter", "preview_blurb"] },
  { id: "blog_summary", name: "Blog Summary", icon: "FileText", formats: ["tl_dr", "bullet_points"] },
  { id: "youtube_script", name: "YouTube Script", icon: "Youtube", formats: ["full_script", "shorts_script"] },
];

export const TONES = [
  { id: "professional", name: "Professional", emoji: "💼" },
  { id: "casual", name: "Casual & Friendly", emoji: "✌️" },
  { id: "witty", name: "Witty & Humorous", emoji: "😄" },
  { id: "inspirational", name: "Inspirational", emoji: "✨" },
];

export const MAX_FREE_GENERATIONS = 3;
export const CONTENT_MIN_LENGTH = 50;
export const CONTENT_MAX_LENGTH = 50000;
