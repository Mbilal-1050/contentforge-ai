# ContentForge AI — Deployment Guide (Neon.tech + NextAuth.js)

## 🚀 10-Minute Deploy

### 1. Neon.tech (Free PostgreSQL) — 2 mins

1. Go to https://neon.tech → Sign up with GitHub/Google
2. Create a new project → copy the **DATABASE_URL**
3. Go to **SQL Editor** → paste & run `db-migration.sql`
4. Done! Copy the DATABASE_URL

### 2. Google OAuth (Optional) — 2 mins

1. Go to https://console.cloud.google.com → Create Project
2. APIs & Services → OAuth consent screen → External → Fill in
3. Credentials → Create OAuth Client ID → Web Application
4. Authorized redirect URI: `https://yourdomain.vercel.app/api/auth/callback/google`
5. Copy **Client ID** and **Client Secret**

### 3. Vercel Environment Variables

```
DATABASE_URL                    = postgresql://user:pass@ep-xxxx.neon.tech/neondb?sslmode=require

AUTH_SECRET                     = (run: openssl rand -base64 32)
AUTH_URL                        = https://yourdomain.vercel.app

AUTH_GOOGLE_ID                  = (Google OAuth Client ID — optional)
AUTH_GOOGLE_SECRET              = (Google OAuth Client Secret — optional)

NEXT_PUBLIC_PADDLE_CLIENT_TOKEN = (Paddle client token)
PADDLE_API_KEY                  = (Paddle API key)
PADDLE_WEBHOOK_SECRET           = (Paddle webhook secret)
PADDLE_ENVIRONMENT              = sandbox

OPENAI_API_KEY                  = sk-...

NEXT_PUBLIC_APP_URL             = https://yourdomain.vercel.app
NEXT_PUBLIC_APP_NAME            = ContentForge AI
```

### 4. Paddle Setup (5 mins)

1. https://sandbox-vendors.paddle.com → sign up
2. Catalog → Products → Create 3 products (Starter $29, Pro $59, Agency $149)
3. Copy price IDs → update `src/lib/constants.ts`
4. Developer Tools → Authentication → generate API key + client token
5. Developer Tools → Events → add webhook: `https://yourdomain.vercel.app/api/paddle/webhook`

### 5. Deploy on Vercel

1. Connect GitHub: https://github.com/Mbilal-1050/contentforge-ai
2. Framework: Next.js (auto-detected)
3. Add all environment variables
4. Deploy!

### 6. Post-Deploy

- [ ] Test signup/login
- [ ] Test content upload + repurpose
- [ ] Test Paddle checkout (sandbox mode)
- [ ] Configure Domain (optional)
- [ ] Switch Paddle to production (live mode)

## 📦 Tech Stack (Updated)

| Layer | Before | After |
|-------|--------|-------|
| Auth | Supabase Auth | **NextAuth.js v5** |
| Database | Supabase (PostgreSQL) | **Neon.tech (PostgreSQL)** |
| ORM | Drizzle ORM | Drizzle ORM (same) |
| Payments | Paddle | Paddle (same) |
| AI | OpenAI/Anthropic | OpenAI/Anthropic (same) |

## 💰 Why This Stack?

- **Neon.tech**: Free PostgreSQL (0.5GB), serverless, branches, no project limits
- **NextAuth.js**: Free, self-contained, no third-party auth service needed
- **Paddle**: Merchant of Record, handles global tax/VAT, works everywhere
- **No monthly cost** until you have paying users!
