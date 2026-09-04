# QuantumFuze Tech Solutions

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-orange)](https://cloudflare.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://typescriptlang.org)
[![TypeScript](https://img.shields.io/badge/Tests-52%20passing-brightgreen)]()

> **Production-ready.** Lint passes, TypeScript passes, all 52 tests pass, build succeeds.

## Overview

QuantumFuze Tech Solutions is a full-service digital agency offering web development, digital marketing, graphic design, and mobile app development under one roof. The site is a Next.js 16 application built with TypeScript, Tailwind CSS, Framer Motion, and a PostgreSQL database via Drizzle ORM.

**Live Site:** [https://quantumfuze.com](https://quantumfuze.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router) + React 19, Turbopack bundler
- **Language:** TypeScript 5.9 (strict mode)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion + custom Canvas (HeroNodes)
- **Database:** PostgreSQL + Drizzle ORM (postgres.js driver)
- **Email:** Resend
- **Security:** Cloudflare Turnstile + rate limiting + honeypot + timing checks
- **Deployment:** Cloudflare Pages
- **Testing:** Vitest 2.1 + Testing Library
- **Validation:** Zod + React Hook Form

## Project Structure

```
src/
├── app/                    → Next.js App Router (routes + API)
│   ├── api/
│   │   ├── contact/route.ts   → Contact form POST endpoint
│   │   └── newsletter/route.ts → Newsletter POST endpoint
│   ├── (page)/page.tsx        → Page components
│   ├── layout.tsx             → Root layout (metadata, schema.org, OG)
│   └── opengraph-image.tsx    → Dynamic OG image generator (edge runtime)
├── components/
│   ├── ui/              → Base UI primitives (Button, Input, Card, Badge, Tag, etc.)
│   ├── navigation/      → Navbar, MobileMenu
│   ├── layout/           → PageShell (with skip link), Footer
│   ├── sections/         → Homepage sections (Hero, Capabilities, etc.)
│   ├── services/         → Service detail components (Hero, Capabilities, FAQs)
│   ├── work/             → Portfolio components (Hero, ProjectCard, CaseStudy)
│   ├── process/          → Process page components (StageItem, FAQs)
│   ├── about/            → About page components (ValueCard, PrincipleCard)
│   ├── forms/            → Contact/Newsletter forms, TurnstileWidget
│   ├── animations/       → Custom animation components (HeroNodes, ScrollReveal, etc.)
│   └── __tests__/        → Component unit tests
├── data/                 → Static content (services, projects, capabilities, etc.)
├── db/                   → Drizzle ORM schema (src/db/schema.ts)
├── hooks/                → Custom hooks (useScroll, useScrollProgress, useReducedMotion)
├── lib/                  → Utilities (validation, spam-protection, rate-limit, db, cn, env)
│   └── __tests__/        → Library unit tests
├── styles/               → Global CSS with Tailwind
└── types/                → Shared TypeScript interfaces
```

## Development

### Prerequisites

- Node.js 20+
- A PostgreSQL database (Neon, Supabase, or local)
- A Resend API key (for email delivery)
- A Cloudflare Turnstile site key + secret key

### Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in all required values. See [docs/development.md](docs/development.md#environment-variables) for details.

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Available Scripts

| Script              | Description                                      |
|---------------------|--------------------------------------------------|
| `npm run dev`       | Start the Next.js development server (Turbopack) |
| `npm run build`     | Build for production                             |
| `npm run start`     | Start the production server                      |
| `npm run lint`      | Run ESLint                                       |
| `npm run typecheck` | Run TypeScript type checking (no emit)           |
| `npm run test`      | Run tests once                                   |
| `npm run test:watch`| Run tests in watch mode                          |
| `npm run db:generate` | Generate Drizzle migration from schema changes |
| `npm run db:migrate` | Run pending migrations                           |
| `npm run db:push`    | Push schema changes directly (dev only)         |
| `npm run db:studio`  | Open Drizzle Studio GUI                         |
| `npm run cf:build`   | Cloudflare Pages build command                  |

### Run Tests

```bash
npm run test
```

### Type Check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

## Deployment

The site is deployed on **Cloudflare Pages**. See [docs/deployment.md](docs/deployment.md) for the full deployment guide.

```bash
npm run cf:build     # Build command used by Cloudflare Pages
```

### Environment Variables (Cloudflare Pages)

Configure in the Cloudflare Pages dashboard:

| Variable                     | Description                          |
|------------------------------|--------------------------------------|
| `DATABASE_URL`               | PostgreSQL connection string         |
| `RESEND_API_KEY`             | Resend email API key                 |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile public key   |
| `TURNSTILE_SECRET_KEY`       | Cloudflare Turnstile secret key      |
| `CONTACT_NOTIFICATION_EMAIL` | Team notification email address      |
| `NEXT_PUBLIC_SITE_URL`       | Site URL (set to `https://quantumfuze.com`) |
| `UPSTASH_REDIS_URL`          | Upstash Redis URL (production rate limiting) |
| `UPSTASH_REDIS_TOKEN`        | Upstash Redis token                  |

## Architecture

See [docs/architecture.md](docs/architecture.md) for the full system architecture, data flow diagrams, and key technical decisions.

## Data Flow — Contact Form

1. Client-side validation (Zod + React Hook Form)
2. POST `/api/contact`
3. Rate limiting (5 submissions/hour/IP, in-memory or Upstash Redis)
4. Server-side validation (Zod)
5. Spam checks (honeypot + timing)
6. Turnstile verification (server-side)
7. Database insertion (Drizzle ORM)
8. Confirmation + notification emails (Resend)
9. Success response → UI state update

## Database Schema

See [docs/database.md](docs/database.md) for the full schema documentation. The schema is defined in `src/db/schema.ts` with tables for:

- `inquiries` — Contact form submissions
- `newsletter_subscribers` — Newsletter signups
- `projects` — Case studies (content in `data/projects.ts`, DB for future CMS)
- `services` — Service offerings (content in `data/services.ts`, DB for future CMS)
- `insights` — Blog posts (future)
- `admin_users` — Admin access (future)

## Security

See [docs/security.md](docs/security.md) for the full security documentation. Key measures:

- Row Level Security (RLS) ready on all database tables
- Server-side validation with Zod
- Cloudflare Turnstile for spam protection
- Rate limiting on contact and newsletter endpoints
- CSP and security headers configured
- HTML escaping on all user content in emails

## Accessibility

See [docs/accessibility.md](docs/accessibility.md). The site meets WCAG 2.1 AA standards:

- `lang="en"` set on the HTML document
- Semantic HTML (header, nav, main, section, footer)
- Skip-to-content link for keyboard users
- `:focus-visible` outlines (2px Sky Blue)
- `prefers-reduced-motion` support (CSS + JavaScript hook)
- ARIA attributes on navigation, forms, and interactive elements
- Form inputs with associated labels and error messaging

## Design System

See [docs/design-system.md](docs/design-system.md) for colors, typography, spacing, shadows, and motion guidelines.

## SEO

See [docs/seo.md](docs/seo.md). The site includes:

- Dynamic metadata on all pages
- XML sitemap (`src/app/sitemap.ts`)
- robots.txt (`src/app/robots.ts`)
- OpenGraph + Twitter Card metadata
- Schema.org JSON-LD (Organization, Service)
- Dynamic OG image generation (edge runtime)

## Documentation

| Doc                          | Description                                      |
|------------------------------|--------------------------------------------------|
| [docs/architecture.md](docs/architecture.md)       | System architecture, data flow, key decisions  |
| [docs/deployment.md](docs/deployment.md)           | Cloudflare Pages deployment guide              |
| [docs/development.md](docs/development.md)           | Development environment setup & workflows      |
| [docs/design-system.md](docs/design-system.md)     | Colors, typography, spacing, motion            |
| [docs/accessibility.md](docs/accessibility.md)       | Accessibility audit & WCAG compliance          |
| [docs/seo.md](docs/seo.md)                           | SEO strategy, metadata, sitemap                |
| [docs/cloudflare.md](docs/cloudflare.md)             | Cloudflare Pages, Workers, Turnstile           |
| [docs/database.md](docs/database.md)                 | Schema, migrations, connection pooling         |
| [docs/security.md](docs/security.md)                 | Security architecture & best practices         |

## Known Issues

- **drizzle-orm v0.38.4** has a high-severity advisory for SQL injection via improperly escaped identifiers. This does not affect the current codebase (all queries use parameterized inputs and Zod validation), but upgrading to `drizzle-orm@0.45.2+` is recommended in a future major update. See [docs/security.md#vulnerabilities](docs/security.md#vulnerabilities).
- **Edge Runtime** deprecation warning on `opengraph-image.tsx` (uses `runtime = 'edge'`). This is non-breaking; see [docs/cloudflare.md](docs/cloudflare.md).

## License

All rights reserved. © QuantumFuze Tech Solutions.
