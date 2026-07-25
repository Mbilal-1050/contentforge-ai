import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

export const contentUploadSchema = z.object({
  title: z.string().min(1, "Title is required").max(200),
  sourceType: z.enum(["blog", "video", "podcast", "social"]),
  sourceUrl: z.string().url().optional().or(z.literal("")),
  content: z.string().min(50, "Content must be at least 50 characters"),
});

export const repurposeSchema = z.object({
  contentId: z.string(),
  targetPlatforms: z.array(z.enum([
    "twitter", "linkedin", "instagram", "facebook",
    "tiktok", "newsletter", "blog_summary", "youtube_script"
  ])).min(1, "Select at least one platform"),
  tone: z.enum(["professional", "casual", "witty", "inspirational"]).default("professional"),
  language: z.string().default("en"),
});

export const profileSchema = z.object({
  name: z.string().min(2).max(100),
  bio: z.string().max(500).optional(),
  company: z.string().max(100).optional(),
  website: z.string().url().optional().or(z.literal("")),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type ContentUploadInput = z.infer<typeof contentUploadSchema>;
export type RepurposeInput = z.infer<typeof repurposeSchema>;
export type ProfileInput = z.infer<typeof profileSchema>;
