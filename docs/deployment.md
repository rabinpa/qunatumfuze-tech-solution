# Deployment

## Overview

QuantumFuze is deployed on **Cloudflare Pages** with a global edge network. Every merge to `main` triggers a production deployment. Pull requests generate preview URLs for review.

## Prerequisites

- Cloudflare account
- Custom domain (`quantumfuze.com`)
- GitHub repository connected to Cloudflare Pages

## Cloudflare Pages Setup

### 1. Connect Repository

1. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/)
2. Click **Create application** → **Pages** → Connect to your Git provider
3. Select the GitHub repository
4. Configure build settings:

| Setting           | Value              |
|-------------------|--------------------|
| Framework         | Next.js            |
| Build command     | `npm run cf:build` |
| Build output dir  | `.next`            |
| Node.js version   | 20+                |

### 2. Environment Variables

Configure in the Cloudflare Pages dashboard → your project → **Settings → Variables**:

| Variable                        | Environment | Description                     |
|---------------------------------|-------------|---------------------------------|
| `DATABASE_URL`                  | Production  | PostgreSQL connection string   |
| `RESEND_API_KEY`                | Production  | Resend API key                 |
| `NEXT_PUBLIC_SITE_URL`          | Both        | `https://quantumfuze.com`      |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY`| Both        | Turnstile public key           |
| `TURNSTILE_SECRET_KEY`          | Both        | Turnstile secret key           |
| `CONTACT_NOTIFICATION_EMAIL`    | Production  | Team notification email        |
| `UPSTASH_REDIS_URL`             | Production  | Upstash Redis (rate limiting)  |
| `UPSTASH_REDIS_TOKEN`           | Production  | Upstash Redis token            |

> **Note:** The `wrangler.toml` file at the project root also defines `[vars]` and `[env.production.vars]` for `NEXT_PUBLIC_SITE_URL`. For production, use the Cloudflare Pages dashboard for secrets (do not hardcode).

### 3. Custom Domain

1. Go to Pages → your project → **Custom domains**
2. Add `quantumfuze.com`
3. Cloudflare automatically configures DNS and provisions an SSL certificate

### 4. Preview Deployments

Every pull request to `main` creates a preview deployment with a unique URL. Review the build and site before merging.

### 5. Production Deployments

Merging to `main` triggers an automatic production deployment. The build uses `npm run cf:build` (which runs `next build`).

## Build Verification Checklist

Before deploying, always verify:

```bash
npm ci      # Clean install from lockfile
npm run lint      # 0 errors
npm run typecheck    # No type errors
npm run test     # All tests pass
npm run build      # Production build succeeds
```

## Rollback

To roll back a failed deployment:

1. Go to Cloudflare Pages → your project → **Deployments**
2. Find the last known-good deployment
3. Click **...** → **Rollback**

## Edge Runtime Note

The `opengraph-image.tsx` route uses `runtime = 'edge'`. Next.js 16 may show a deprecation warning recommending the `"nodejs"` runtime. This is non-breaking. To silence it, change `export const runtime = 'edge'` to `export const runtime = 'nodejs'` — but this will increase OG image generation latency.
