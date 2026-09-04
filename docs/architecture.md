# Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                CLOUDFLARE EDGE NETWORK                         │
│  DNS · CDN · SSL · WAF · DDoS · Turnstile · Rate Limiting    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   CLOUDFLARE PAGES                             │
│           Next.js (SSR/SSG) · Edge Runtime (OG)               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                  NEXT.JS APPLICATION                           │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │  Pages   │ │Components│ │   API    │ │  Libs    │        │
│  │ (App R.) │ │          │ │ Routes   │ │  Hooks   │        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                 POSTGRESQL DATABASE                            │
│       (Neon/Supabase) · Drizzle ORM · Future RLS              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   EMAIL SERVICE                                │
│              (Resend · Transactional)                          │
└─────────────────────────────────────────────────────────────────┘
```

## Routes

| Route                          | Type   | Description                          |
|--------------------------------|--------|--------------------------------------|
| `/`                            | SSG    | Homepage with animated sections      |
| `/about`                       | SSG    | Company story, values, principles    |
| `/contact`                     | SSG    | Contact form with Turnstile          |
| `/services`                    | SSG    | Services overview grid               |
| `/services/[slug]`             | SSG    | Service detail pages (5 static)      |
| `/work`                        | SSG    | Portfolio/project overview grid      |
| `/work/[slug]`                 | SSG    | Case study pages                     |
| `/work/projectflow`            | SSG    | Featured case study (ProjectFlow)    |
| `/process`                     | SSG    | 5-stage process with FAQ accordion   |
| `/insights`                    | SSG    | Blog/archive page (coming soon)      |
| `/insights/[slug]`             | Dynamic| Individual article (placeholder)     |
| `/privacy`                     | SSG    | Privacy policy                       |
| `/terms`                       | SSG    | Terms of service                     |
| `/sitemap.xml`                 | SSG    | Generated XML sitemap                |
| `/robots.txt`                  | SSG    | Generated robots.txt                 |
| `/opengraph-image`             | Edge   | Dynamic OG image (1200×630)          |
| `/api/contact`                 | Dynamic| POST — contact form submission        |
| `/api/newsletter`              | Dynamic| POST — newsletter subscription        |

## Key Decisions

### Why Next.js 16?
- **App Router** for file-based routing that matches the sitemap 1:1
- **Turbopack** for fast builds and Hot Module Replacement
- **SSR/SSG** for SEO and performance — all marketing pages are statically prerendered
- **Dynamic OG images** for social link previews

### Why Cloudflare Pages?
- Global edge network for low latency
- Automatic preview deployments on every PR
- Integrated DNS/SSL/CDN/WAF/DDoS protection
- Pages Functions for API routes (Edge-compatible)
- The `wrangler.toml` configures the build and production security headers

### Why Tailwind CSS?
- Fast development with design-token enforcement
- Small production CSS footprint (purge CSS via JIT)
- Consistent spacing and color system across all components

### Why PostgreSQL + Drizzle ORM?
- Managed, reliable relational database with JSONB support
- Drizzle provides type-safe schema and queries
- The schema supports future Row Level Security (RLS) implementation
- Works with Neon, Supabase, or local PostgreSQL

### Why Framer Motion + Canvas?
- Framer Motion for declarative, accessible animations (with reduced-motion support)
- Custom Canvas (`HeroNodes`) for the ambient floating node background, rendered only on desktop and disabled when `prefers-reduced-motion` is set

## Data Flow

### Contact Form Flow
1. User fills out the form (client-side)
2. Zod validates the form schema via React Hook Form resolver
3. User solves Cloudflare Turnstile challenge
4. Form submits via `fetch` to `POST /api/contact`
5. Rate limiter checks (5/hour/IP) — returns 429 if exceeded
6. Server validates body with Zod (`contactSchema.safeParse`)
7. Spam checks: honeypot field + form completion timing
8. Turnstile token verified against Cloudflare API
9. Inquiry inserted into `inquiries` table via Drizzle ORM
10. Confirmation email sent to user (Resend)
11. Internal notification email sent to team (Resend)
12. Success response returned — UI shows success state

### Newsletter Flow
1. User enters email in footer form
2. Client-side regex validation
3. Form submits to `POST /api/newsletter`
4. Rate limiter checks (10/hour/IP)
5. Zod validates email
6. Spam check (honeypot only)
7. Turnstile verification
8. Upsert into `newsletter_subscribers` (deduped on email)
9. Success response — UI shows confirmation

## Rendering Strategy

| Component          | Strategy | Reason                                   |
|--------------------|----------|------------------------------------------|
| Marketing pages    | SSG      | SEO, fast loads, no dynamic data         |
| Service detail     | SSG      | Content is static, prerendered at build  |
| Work/portfolio     | SSG      | Content is static, prerendered at build  |
| API routes         | Dynamic  | Server-side logic, DB writes, email      |
| OG image           | Edge     | Fast global image generation             |
| Insights detail    | Dynamic  | Content not yet available (placeholder)  |

## Component Architecture

```
components/
├── ui/              → Stateless, reusable primitives (no page logic)
├── navigation/      → Navbar + MobileMenu (client component)
├── layout/           → PageShell (wraps children with Navbar + Footer)
├── sections/         → Homepage section components
├── services/         → Service-page-specific components
├── work/             → Portfolio/case-study components
├── process/          → Process-page-specific components
├── about/            → About-page-specific components
├── forms/            → Form components (ContactForm, NewsletterForm, TurnstileWidget)
└── animations/       → Reusable animation wrappers (ScrollReveal, HeroNodes, etc.)
```

### Client vs Server Component Convention

- **Client components** (`'use client'`): Navbar, MobileMenu, ContactForm, NewsletterForm, TurnstileWidget, all animation components, MagneticButton, and all `ui/` components that use event handlers
- **Server components**: All page files, Hero, CapabilitySection, Footer, and most section components
- **Hybrid**: Components like `Hero` contain client sub-components (`HeroNodes`, `LogoShowcase`) via composition

## Future Enhancements

- Admin panel with Supabase Auth (`/admin/` routes)
- CMS integration for insights/blog content
- Upstash Redis for distributed rate limiting
- Drizzle ORM upgrade past v0.38 (after resolving advisory)
- Cloudflare Hyperdrive for database connection pooling
