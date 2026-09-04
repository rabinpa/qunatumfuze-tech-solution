# Development Guide

## Prerequisites

- **Node.js** 20+ (see `package.json` → `"engines": { "node": ">=20.0.0" }`)
- **npm** 10+ (comes with Node 20)
- **PostgreSQL** — for local development, use a local instance or a cloud provider (Neon/Supabase)
- A code editor with TypeScript and Tailwind CSS support (VS Code recommended)

## Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd quantumfuze-website
npm install
```

### 2. Environment Variables

```bash
cp .env.example .env.local
```

Fill in the values:

```bash
# .env.local

# ─── Site Configuration ─────────────────────────────────────────────────
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# ─── Database ───────────────────────────────────────────────────────────
DATABASE_URL=postgresql://user:password@localhost:5432/quantumfuze

# ─── Email ──────────────────────────────────────────────────────────────
RESEND_API_KEY=re_xxxxxxxx
FROM_EMAIL=noreply@quantumfuze.com
CONTACT_NOTIFICATION_EMAIL=hello@quantumfuze.com

# ─── Cloudflare Turnstile ───────────────────────────────────────────────
NEXT_PUBLIC_TURNSTILE_SITE_KEY=1x00000000000000000000000000000000AA
TURNSTILE_SECRET_KEY=1x00000000000000000000000000000000AA

# ─── Rate Limiting (optional — dev uses in-memory) ─────────────────────
UPSTASH_REDIS_URL=
UPSTASH_REDIS_TOKEN=
```

### 3. Database Setup

If using a local PostgreSQL instance:

```bash
# Create the database
createdb quantumfuze

# Push the schema directly (development only)
npm run db:push

# Or generate a migration and run it
npm run db:generate
npm run db:migrate

# Open Drizzle Studio to inspect data
npm run db:studio
```

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Development Workflow

### Making Changes

1. Create a feature branch: `git checkout -b feat/my-feature`
2. Make changes following the code conventions below
3. Run checks: `npm run lint && npm run typecheck && npm run test`
4. Ensure the build passes: `npm run build`
5. Create a pull request

### Code Conventions

- **Components:** Use function declarations, not arrow functions for named components
- **TypeScript:** Use `type` not `interface` for union-compatible props (follow existing patterns)
- **Imports:** Use `@/` alias for internal imports, ordered by: external → internal → relative
- **CSS:** Use Tailwind utility classes. Custom styles go in `src/styles/globals.css`
- **Components:** Use `forwardRef` for reusable components that need ref forwarding
- **Naming:** `index.ts` barrel exports in component folders and `data/`

### Component Creation Checklist

- [ ] Follow the `components/` category structure
- [ ] Export via the folder's `index.ts` barrel file
- [ ] Use `cn()` for conditional class merging
- [ ] Add `useReducedMotion` if using animation
- [ ] Use `focus-visible:` variants for keyboard accessibility
- [ ] Write at least one unit test

### Testing

Tests use **Vitest** + **Testing Library**:

```bash
npm run test          # Run once
npm run test:watch    # Run in watch mode
```

Test files are colocated with source files as `*.test.ts` or `*.test.tsx`.

### Database Migrations

The schema lives in `src/db/schema.ts`. To make changes:

```bash
# 1. Edit src/db/schema.ts
# 2. Generate migration
npm run db:generate
# 3. Apply migration
npm run db:migrate
# 4. Push directly (dev only, skips migration file)
npm run db:push
```

### API Routes

API routes live in `src/app/api/`. They are Dynamic (SSR) by default because they write to the database and send emails. Each route:

1. Applies rate limiting
2. Parses and validates the request body with Zod
3. Runs spam checks (honeypot + timing)
4. Verifies Turnstile tokens
5. Writes to the database
6. Sends emails (non-blocking)

## Project Commands Reference

| Command              | What it does                              |
|----------------------|-------------------------------------------|
| `npm run dev`        | Start dev server (Turbopack)              |
| `npm run build`      | Production build                           |
| `npm run start`      | Serve production build locally            |
| `npm run lint`       | Lint all files with ESLint                 |
| `npm run typecheck`  | TypeScript type check (no emit)            |
| `npm run test`       | Run all tests once                         |
| `npm run test:watch` | Run tests in watch mode                    |
| `npm run db:generate`| Generate Drizzle migration                 |
| `npm run db:migrate` | Run migrations                             |
| `npm run db:push`    | Push schema to DB (dev only)               |
| `npm run db:studio`  | Open Drizzle Studio GUI                    |
| `npm run cf:build`   | Cloudflare Pages build command             |
