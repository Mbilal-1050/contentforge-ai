import { PLATFORMS, TONES } from "@/lib/constants";

interface RepurposeRequest {
  content: string;
  title: string;
  sourceType: string;
  targetPlatforms: string[];
  tone: string;
  language: string;
}

interface GeneratedPiece {
  platform: string;
  format: string;
  content: string;
  wordCount: number;
}

const PLATFORM_PROMPTS: Record<string, (content: string, title: string, tone: string) => string> = {
  twitter: (content, title, tone) => `
You are an expert Twitter/X content strategist. Repurpose the following content into a high-engagement Twitter thread (5-7 tweets). 

Source Title: "${title}"
Tone: ${tone}

Rules:
- First tweet must be a powerful hook
- Use line breaks for readability
- Include 1-2 relevant emojis per tweet
- Add a subtle CTA at the end
- Max 280 chars per tweet
- Number tweets as 1/7, 2/7, etc.

Content to repurpose:
${content}

Return ONLY the thread, formatted clearly with tweet numbers and line breaks.`,

  linkedin: (content, title, tone) => `
You are an expert LinkedIn content strategist. Repurpose the following content into a compelling LinkedIn post.

Source Title: "${title}"
Tone: ${tone}

Rules:
- Start with a bold hook or surprising stat
- Use 3-4 short paragraphs with line breaks
- Include bullet points for key takeaways
- End with a discussion question or CTA
- 150-300 words
- Professional but engaging

Content to repurpose:
${content}

Return ONLY the LinkedIn post.`,

  instagram: (content, title, tone) => `
You are an expert Instagram content strategist. Repurpose the following content into an engaging Instagram caption with a carousel script suggestion.

Source Title: "${title}"
Tone: ${tone}

Rules:
- Caption 125-200 words
- Start with attention-grabbing opening
- Include 3-5 hashtag suggestions at the end
- After the caption, add "---CAROUSEL SCRIPT---" and list 5-7 slide ideas

Content to repurpose:
${content}

Return the caption and carousel script.`,

  facebook: (content, title, tone) => `
You are an expert Facebook content strategist. Repurpose the following content into an engaging Facebook post.

Source Title: "${title}"
Tone: ${tone}

Rules:
- Conversational and shareable
- Start with a question or bold statement
- 100-250 words
- Include a clear call-to-action

Content to repurpose:
${content}

Return ONLY the Facebook post.`,

  tiktok: (content, title, tone) => `
You are an expert TikTok content strategist. Repurpose the following content into a TikTok video script (60-90 seconds).

Source Title: "${title}"
Tone: ${tone}

Rules:
- Hook in first 2 seconds (write the hook line)
- 3-5 key points with visual suggestions in [brackets]
- Include text overlay suggestions
- End with a pattern-interrupt or CTA
- Format: [HOOK] -> [BODY] -> [CTA]

Content to repurpose:
${content}

Return ONLY the TikTok script.`,

  newsletter: (content, title, tone) => `
You are an expert email newsletter writer. Repurpose the following content into a compelling email newsletter.

Source Title: "${title}"
Tone: ${tone}

Rules:
- Subject line suggestions (3 options)
- Preview text
- Engaging intro paragraph
- Main content with subheadings
- P.S. section with CTA
- 300-500 words total

Content to repurpose:
${content}

Return the complete newsletter.`,

  blog_summary: (content, title, tone) => `
You are an expert content summarizer. Create a concise blog summary from the following content.

Source Title: "${title}"
Tone: ${tone}

Rules:
- TL;DR (2-3 sentences)
- Key takeaways (5 bullet points)
- Actionable insights (2-3)
- Reading time estimate
- 150-250 words

Content to repurpose:
${content}

Return ONLY the blog summary.`,

  youtube_script: (content, title, tone) => `
You are an expert YouTube scriptwriter. Repurpose the following content into a YouTube video script.

Source Title: "${title}"
Tone: ${tone}

Rules:
- Intriguing intro hook (5 seconds)
- Chapter markers with timestamps
- 5-8 minute estimated script
- Include B-roll suggestions in [brackets]
- End with subscribe CTA

Content to repurpose:
${content}

Return ONLY the YouTube script with chapters.`,
};

export async function repurposeContent(
  request: RepurposeRequest,
  useAnthropic: boolean = false
): Promise<GeneratedPiece[]> {
  const toneObj = TONES.find((t) => t.id === request.tone);
  const toneName = toneObj?.name || "Professional";

  const results: GeneratedPiece[] = [];

  for (const platform of request.targetPlatforms) {
    const platformInfo = PLATFORMS.find((p) => p.id === platform);
    if (!platformInfo) continue;

    const promptFn = PLATFORM_PROMPTS[platform];
    if (!promptFn) continue;

    const prompt = promptFn(request.content, request.title, toneName);

    try {
      let generatedText: string;

      if (useAnthropic) {
        generatedText = await callAnthropic(prompt);
      } else {
        generatedText = await callOpenAI(prompt);
      }

      console.log(`✅ Generated content for ${platform}: ${generatedText.length} chars`);

      for (const format of platformInfo.formats) {
        results.push({
          platform,
          format,
          content: generatedText,
          wordCount: generatedText.split(/\s+/).length,
        });
      }
    } catch (error: any) {
      console.error(`❌ Error generating for ${platform}:`, error.message || error);
      // Don't add mock data here — let it fail silently so we can see actual error in logs
    }
  }

  return results;
}

async function callOpenAI(prompt: string): Promise<string> {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey || apiKey === "your_openai_api_key_here" || apiKey.startsWith("sk-your-")) {
    throw new Error("OPENAI_API_KEY not set or using placeholder. Add real key in Vercel env vars.");
  }
  console.log("Using OpenAI key:", apiKey.substring(0, 8) + "...");
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo", // Using 3.5-turbo which works with all OpenAI keys
      messages: [
        {
          role: "system",
          content:
            "You are a world-class content repurposing AI. You create high-quality, platform-optimized content. Always follow the instructions exactly. Never add meta-commentary or explanations beyond what's requested.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.8,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    const errText = await response.text();
    console.error(`OpenAI HTTP ${response.status}:`, errText.substring(0, 500));
    if (response.status === 401) throw new Error("OpenAI API key invalid/expired. Check platform.openai.com/api-keys");
    if (response.status === 429) throw new Error("OpenAI rate limit/quota exceeded. Check platform.openai.com billing");
    throw new Error("OpenAI error " + response.status + ": " + errText.substring(0, 200));
  }

  const data = await response.json();
  if (!data.choices?.[0]?.message?.content) {
    console.error("OpenAI returned empty response:", JSON.stringify(data));
    throw new Error("OpenAI returned empty response");
  }
  return data.choices[0].message.content;
}

async function callAnthropic(prompt: string): Promise<string> {
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.ANTHROPIC_API_KEY!,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      system:
        "You are a world-class content repurposing AI. You create high-quality, platform-optimized content. Always follow the instructions exactly. Never add meta-commentary or explanations beyond what's requested.",
    }),
  });

  if (!response.ok) {
    throw new Error(`Anthropic API error: ${response.status}`);
  }

  const data = await response.json();
  return data.content[0].text;
}
