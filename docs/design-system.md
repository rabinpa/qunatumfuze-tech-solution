# Design System

## Color Palette

### Navy (Primary Dark)

| Token           | Hex       | Tailwind Class | Usage                |
|-----------------|-----------|----------------|----------------------|
| `--color-navy`  | `#071A33` | `navy`         | Primary dark text/background |
| Navy Deep       | `#04111F` | `navy-deep`    | Deep gradient stop, dark surfaces |
| Navy Surface    | `#0B2445` | `navy-surface` | Elevated dark surfaces |

### Sky (Primary Accent)

| Token              | Hex       | Tailwind Class | Usage                |
|--------------------|-----------|----------------|----------------------|
| `--color-sky`      | `#38BDF8` | `sky`          | Primary accent, links |
| `--color-sky-bright` | `#0EA5E9` | `sky-bright`  | Hover states, active links |
| Sky Soft           | `#E0F2FE` | `sky-soft`     | Subtle backgrounds   |
| Sky Pale           | `#F0F9FF` | `sky-pale`     | Light backgrounds, badges |

### Green (Success / Secondary)

| Token             | Hex       | Tailwind Class | Usage                |
|-------------------|-----------|----------------|----------------------|
| `--color-green`   | `#22C55E` | `green`        | Success, icons        |
| `--color-green-deep` | `#16A34A` | `green-deep`  | Darker green         |
| Green Soft        | `#DCFCE7` | `green-soft`   | Success backgrounds   |

### Neutrals

| Token                   | Hex       | Tailwind Class   | Usage                |
|-------------------------|-----------|------------------|----------------------|
| `--color-white`         | `#FFFFFF` | `neutral-white`  | Backgrounds          |
| `--color-off-white`     | `#F8FAFC` | `neutral-offwhite` | Page backgrounds  |
| `--color-light-gray`    | `#F1F5F9` | `neutral-lightgray` | Borders, dividers |
| `--color-border`        | `#E2E8F0` | `neutral-border` | Input borders        |
| `--color-text`          | `#0F172A` | `neutral`        | Default text color    |
| `--color-text-secondary` | `#475569` | `neutral-secondary` | Secondary text   |
| `--color-text-dark`     | `#020617` | `neutral-dark`   | Dark text            |

## Typography

### Font Families

| Font    | Variable              | Usage              |
|---------|-----------------------|--------------------|
| Geist   | `--font-geist-sans`   | Body, UI, display  |
| Geist Mono | `--font-geist-mono` | Code, monospace   |

### Font Sizes

| Size      | CSS                        | Tailwind    | Line Height | Letter Spacing |
|-----------|----------------------------|-------------|-------------|----------------|
| Display   | `clamp(3rem, 6vw, 5.5rem)` | `text-display` | 1.05       | -0.02em        |
| h1        | `clamp(2.5rem, 5vw, 4.25rem)` | `text-h1`  | 1.1         | -0.02em        |
| h2        | `clamp(2rem, 3.5vw, 3.25rem)` | `text-h2`  | 1.15        | -0.01em        |
| h3        | `clamp(1.5rem, 2vw, 2rem)`    | `text-h3`  | 1.25        | -0.01em        |
| Body      | `clamp(1rem, 1.1vw, 1.1875rem)` | `text-body` | 1.6       | —              |
| Body LG   | `1.125rem`                  | `text-body-lg` | 1.6       | —              |
| Small     | `clamp(0.875rem, 0.9vw, 1rem)` | `text-small` | 1.5      | —              |

## Spacing

| Token | CSS   | Use Case              |
|-------|-------|-----------------------|
| xs    | 4px   | Micro padding/gap     |
| sm    | 8px   | Small padding/gap     |
| md    | 16px  | Default padding/gap   |
| lg    | 24px  | Section padding       |
| xl    | 32px  | Large elements        |
| 2xl   | 48px  | Spacing between blocks|
| 3xl   | 64px  | Section margins       |
| 4xl   | 96px  | Page margins          |
| 5xl   | 128px | Page max width        |

### Custom Spacing (Tailwind config)

| Token | CSS    | Use Case              |
|-------|--------|-----------------------|
| 4.5   | 1.125rem | Button icon gaps     |
| 18    | 4.5rem  | Extra section padding |
| 22    | 5.5rem  | Extra section padding |
| 30    | 7.5rem  | Hero section padding  |

## Border Radius

| Token | CSS   | Usage              |
|-------|-------|--------------------|
| sm    | 8px   | Small elements     |
| md    | 16px  | Cards, buttons      |
| lg    | 24px  | Large cards          |

## Shadows

| Token        | CSS                            | Usage              |
|--------------|--------------------------------|--------------------|
| `shadow-card` | `0 8px 30px rgba(7, 26, 51, 0.08)` | Card rest state |
| `shadow-card-hover` | `0 12px 40px rgba(7, 26, 51, 0.12)` | Card hover  |

## Max Widths

| Token       | CSS      | Usage              |
|-------------|----------|--------------------|
| `max-w-content` | 1280px | Standard content width |
| `max-w-prose`   | 65ch   | Long-form text     |
| `max-w-[1400px]` | 1400px | Wide containers    |

## Animations

### CSS Animations (Tailwind config)

| Animation            | Duration | Usage              |
|----------------------|----------|--------------------|
| `animate-fade-in`    | 0.5s     | Fade in            |
| `animate-slide-up`   | 0.5s     | Slide up on entry  |
| `animate-breathe`    | 4s       | Gentle pulse       |
| `animate-gradient-reveal` | 0.4s | Gradient reveal   |
| `animate-float`      | 6s       | Floating motion    |
| `animate-glow-pulse` | 3s       | Glow pulse         |
| `animate-spin-slow`  | 20s      | Slow rotation      |

### Reduced Motion

All animations respect `prefers-reduced-motion: reduce`:

- **CSS:** `globals.css` disables all animations/transitions via `@media (prefers-reduced-motion: reduce)`
- **JavaScript:** The `useReducedMotion()` hook is used in all animation components to conditionally render static fallbacks

### Framer Motion Variants

- `Hero` — initial fade/slide, staggered children
- `ScrollReveal` — fade + slide on scroll (opacity-only fallback when reduced motion)
- `HowWeThink` — stage activation with scale animation (disabled when reduced motion)
- `FeaturedWork` — card hover effects (disabled when reduced motion)

## Transitions

Default timing function: `ease-out-soft` (`cubic-bezier(0.22, 1, 0.36, 1)`)

## Focus States

All interactive elements use `focus-visible:` for keyboard-only focus indicators:

```css
:focus-visible {
  outline: 2px solid #38BDF8;  /* sky */
  outline-offset: 2px;
}
```

This is applied globally in `src/styles/globals.css`.

## Component Patterns

### Button Variants

| Variant    | Styles                        |
|------------|-------------------------------|
| `primary`  | `bg-sky text-navy`            |
| `secondary`| `bg-transparent border border-neutral-border` |
| `ghost`    | `bg-transparent text-neutral` |
| `outline`  | `bg-transparent border border-neutral-secondary` |

### Card Variants

| Variant        | Background            |
|----------------|-----------------------|
| `white` (default) | `bg-neutral-white border-neutral-border` |
| `navy-surface` | `bg-navy-surface border-navy-surface` |
| `gradient`     | `bg-gradient-to-br from-sky-pale to-green-soft/30` |
