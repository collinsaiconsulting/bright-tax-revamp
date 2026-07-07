# Bright Tax Solutions — Site Revamp

A redesign of brighttaxfl.com. Structure and motion language take cues from
the "Neuralyn" landing-page theme (motionsites.ai) — liquid-glass UI, Framer
Motion parallax hero over video, scroll-driven word-reveal testimonial — but
reworked into Bright Tax's own light identity: a **Deep Plum & Champagne**
palette (warm cream base, deep plum ink, champagne-rose accent with soft rose
glows), Inter + Instrument Serif italic accents, and a light-inverted hero
video. All of Bright Tax's real content is kept (services, stats, process,
contact, portal). All cards, buttons, inputs, and containers use a soft
rounded (24px) radius scale.

**Stack:** React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Local development

```bash
npm install
npm run dev
```

## Before going live

- **Client Portal link**: `CLIENT_PORTAL_URL` is wired to the real ShareFile
  portal (`https://btfclients.sharefile.com/`) in
  [`src/components/Navbar.tsx`](src/components/Navbar.tsx) and
  [`src/components/Footer.tsx`](src/components/Footer.tsx), opening in a new tab.
  Update both if the portal URL changes.
- **Placeholder assets** in `public/` — swap for real ones:
  `logo.svg`, `hero-dashboard.svg` (light dashboard mockup shown over the
  hero video), `testimonial-avatar.svg`.
- **Hero video**: streams from the theme's CDN URL in
  [`src/components/Hero.tsx`](src/components/Hero.tsx), lightened via a CSS
  invert filter — replace with your own (ideally natively light) hosted
  video before production, and remove the `filter` style if the footage is
  already light.
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
