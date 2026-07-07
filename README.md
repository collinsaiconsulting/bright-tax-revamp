# Bright Tax Solutions — Site Revamp

A ground-up redesign of brighttaxfl.com: interactive parallax hero, animated
glass-style CTA buttons, scroll-reveal sections, and a clearly separated
Client Portal link — built as a lean React + TypeScript + Vite + Tailwind CSS
project with zero animation dependencies (no framer-motion/GSAP), so it's
easy to read, edit, and hand off.

## Local development

```bash
npm install
npm run dev
```

## Before going live

- **Client Portal link**: `CLIENT_PORTAL_URL` is a placeholder
  (`#client-portal-placeholder`) in [`src/components/Navbar.tsx`](src/components/Navbar.tsx)
  and [`src/components/Footer.tsx`](src/components/Footer.tsx). Replace both
  with the real external portal URL.
- **Hero visual**: the hero background is a generative gradient/parallax
  composition (no stock photography used). Swap in real firm photography in
  [`src/components/Hero.tsx`](src/components/Hero.tsx) if desired.
- **Copy**: services, stats, and contact details reflect the real Bright Tax
  Solutions business but have been rewritten — review before publishing.

## Importing into Lovable

1. In Lovable, choose "Import from GitHub" and point it at this repository.
2. Lovable will pick up the existing Vite + React + TypeScript + Tailwind
   setup automatically — no config changes needed.
3. Finish visual polish, connect a form backend for the contact form, and
   swap in the real Client Portal URL and any final photography.

## Structure

```
src/
  components/       Navbar, Hero, TrustStats, About, Services, Process,
                     Testimonials, BlogPreview, Contact, Footer
  components/ui/     AnimatedButton, ScrollReveal
  hooks/             useScrollReveal, useParallax, useCountUp
  styles/index.css   design tokens, fonts, keyframes
```
