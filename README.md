# NeuralFlow AI — Landing Page

A premium, high-converting, fully responsive SaaS landing page for an AI-driven data automation platform. Built for the FB Round 1 Speed Run challenge.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + scoped `<style>` blocks with CSS custom properties
- **Animations:** Native CSS transitions/animations + Web Animations API only
- **No banned libraries:** Zero Shadcn, Radix, Framer Motion, or HeadlessUI

---

## Setup & Run

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve production build
```

---

## Project Structure

```
neuralflow/
├── app/
│   ├── layout.tsx        # Root layout with full SEO metadata + OG tags
│   ├── page.tsx          # Page assembler (single IntersectionObserver)
│   └── globals.css       # Design tokens, base styles, utility classes
├── components/
│   ├── Navbar.tsx         # Sticky glass nav with scroll-aware blur
│   ├── HeroSection.tsx    # Full-viewport hero, ≤500ms entry animations
│   ├── BentoAccordion.tsx # Feature 2: Bento Grid + Accordion + Context Lock
│   ├── PricingSection.tsx # Feature 1: Matrix pricing, isolated DOM updates
│   ├── SocialProof.tsx    # Testimonials, stats bar, logo strip
│   ├── Footer.tsx         # Semantic footer, social SVG icons
│   ├── useScrollReveal.ts # Single shared IntersectionObserver hook
│   └── svgs/
│       ├── LogoSVG.tsx    # Brand logo
│       └── Icons.tsx      # All feature + UI icons (inline SVG only)
```

---

## Architecture Decisions

### Feature 1 — Pricing State Isolation
The billing toggle and currency switcher **never call `useState`**. Both values live in `useRef`. On toggle/change, only the specific `<span>` text nodes containing price strings are mutated via `ref.current.textContent = ...`. This means:
- Zero React re-renders on currency/billing change
- No parent component reflow
- Verifiable in Chrome DevTools → Performance: no purple Layout bars outside the price nodes

### Feature 2 — Bento-to-Accordion Context Lock
The `activeIndex` (which bento card is hovered) is stored in a `useRef`, not `useState`. A single `ResizeObserver` on `document.documentElement` detects breakpoint crossings (≥768px ↔ <768px). On crossing:
- Desktop → Mobile: `activeIndexRef.current` is read and applied to the accordion via direct class toggle + `max-height` mutation
- Mobile → Desktop: reverse transfer with auto-reset after 600ms
- All accordion transitions use CSS `max-height` and `opacity` — zero JS animation engines

### SEO
- Single `<h1>` in hero, logical H2 → H3 hierarchy throughout
- Every `<section>` has `aria-label` or `aria-labelledby`
- Full Open Graph + Twitter Card metadata in `layout.tsx`
- All SVGs have `aria-hidden="true"` (decorative) or descriptive `aria-label`
- Price values are in crawlable `textContent` nodes (not canvas or images)

### Performance
- Entry animations: staggered CSS `animation-delay`, total ≤ 500ms
- All animations: `transform` + `opacity` only (composite-only, no layout triggers)
- Single `IntersectionObserver` instance for all `.reveal` elements (registered in `page.tsx`)
- Fonts: loaded via Google Fonts with `font-display: swap` and `<link rel="preconnect">`

### Motion Spec
| Interaction type | Duration | Easing |
|---|---|---|
| Hover, toggle, micro | 160ms | `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out) |
| Layout reflow, accordion | 360ms | `cubic-bezier(0.65, 0, 0.35, 1)` (ease-in-out) |

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect the GitHub repository to Vercel dashboard for automatic CI/CD.

---

## Scoring Checklist

| Criterion | Implementation |
|---|---|
| Feature 1: Dynamic matrix pricing | `PRICING_MATRIX` config object, `computePrice()` pure function |
| Feature 1: State isolation | `useRef` only, `textContent` mutation, zero `useState` |
| Feature 2: Bento-to-Accordion | CSS Grid → hidden + `display:block` accordion on `<768px` |
| Feature 2: Context Lock | `ResizeObserver` + `activeIndexRef` transfer |
| Feature 2: Zero dependencies | Custom from scratch, no accordion library |
| Semantic HTML | `<main>`, `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<figure>`, `<blockquote>` |
| SEO metadata | title, description, keywords, OG, Twitter Card, canonical, robots |
| Performance ≤500ms | CSS `animation-delay` stagger, composite-only properties |
| Responsive | Mobile (320px+), tablet, desktop breakpoints |
| Motion accuracy | 160ms ease-out micro, 360ms ease-in-out layout |
| Asset compliance | Inline SVG pack, Sora + DM Sans fonts, hex color palette |
