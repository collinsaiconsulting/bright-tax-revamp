# Bright Tax Solutions — Site Revamp

A redesign of brighttaxfl.com styled after the "Neuralyn" dark landing-page
theme (motionsites.ai): pure-black monochrome palette, Inter + Instrument
Serif italic accents, liquid-glass UI, Framer Motion parallax hero over
video, and a scroll-driven word-reveal testimonial — while keeping all of
Bright Tax's real content (services, stats, process, contact, portal).

**Stack:** React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

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
- **Placeholder assets** in `public/` — swap for real ones:
  `logo.svg`, `hero-dashboard.svg` (dashboard mockup shown over the hero
  video with luminosity blend), `testimonial-avatar.svg`.
- **Hero video**: streams from the theme's CDN URL in
  [`src/components/Hero.tsx`](src/components/Hero.tsx) — replace with your
  own hosted video before production.
- **Copy**: services, stats, and contact details reflect the real Bright Tax
  Solutions business but have been rewritten — review before publishing.

## Importing into Lovable

1. In Lovable, choose "Import from GitHub" and point it at this repository.
2. Lovable picks up the Vite + React + TS + Tailwind setup automatically.
3. Finish polish, connect a form backend, and swap the placeholder assets
   and Client Portal URL.

## Structure

```
src/
  components/       Navbar, Hero (parallax + video), Testimonials
                     (scroll word-reveal), TrustStats, Services, About,
                     Process, BlogPreview, Contact, Footer
  components/ui/     AnimatedButton, ScrollReveal
  hooks/             useScrollReveal, useCountUp
  styles/index.css   HSL theme tokens, liquid-glass CSS, reveal keyframes
```
