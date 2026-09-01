# MY3 Wellness Spa — Website

Marketing website for MY3 Wellness Spa, a luxury day spa in Gachibowli, Hyderabad.
Static site, no backend — all bookings route to phone/WhatsApp.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui (base-ui primitives, not Radix — see `AGENTS.md`)
- Framer Motion for reveal/parallax animation, GSAP-free by design (kept minimal)
- Lenis for smooth scrolling
- next-themes for dark mode

## Project structure

```
src/
  app/                 Routes (App Router). One folder per page.
  components/
    layout/            Header, Footer, mobile CTA bar, command menu, etc.
    home/               Homepage-only sections
    ui/                 shadcn/ui primitives (generated — prefer `npx shadcn add` over hand-editing)
    ui-custom/          Reusable design-system pieces (cards, reveal wrapper, page hero, ...)
    seo/                JSON-LD renderer
    providers/          Theme, smooth-scroll, service-worker registration
  content/              Typed content data: services, pricing, blog posts, FAQs, testimonials, gallery, journey, membership
  lib/
    site-config.ts       Single source of truth for business info (address, phone, hours, nav)
    schema.ts             JSON-LD builders (LocalBusiness/DaySpa, FAQPage, Breadcrumb, Service, BlogPosting)
    links.ts               tel: / wa.me / mailto: link builders
public/
  images/                Photography + brand assets (see `images/brand/`)
  icons/                  Generated PWA icon set
```

To change a price, service description, FAQ, or blog post, edit the corresponding file in `src/content/` — every page reads from there, nothing is hardcoded per-page.

## Content that needs a final pass before launch

This codebase started life as a build for a different, unrelated spa and has since been
rebranded end-to-end to MY3 Wellness Spa (name, logo, colors, fonts, copy). The pieces
below are **placeholders** left in place of that previous business's real data and must
be replaced with MY3's actual details before going live:

- **Street address** (`siteConfig.address` in `src/lib/site-config.ts`) — phone and email are MY3's real, confirmed details; the exact building/floor is still a placeholder. Confirm before launch.
- **Domain** (`siteConfig.url`) — set to `https://my3wellnessspa.in`, MY3's real domain.
- **Analytics IDs** (`siteConfig.gtmId` / `googleAdsId` / `ga4Id`) — placeholder `GTM-XXXXXXX` / `AW-XXXXXXXXXX` / `G-XXXXXXXXXX`. Fill in MY3's own containers — do not reuse a previous owner's IDs.
- **Google Maps embed** (`siteConfig.address.mapsEmbedSrc`) — uses a keyless address-search embed until MY3 has a real Google Business Profile to pull a proper "Share > Embed a map" link from.
- **Social handles** (`siteConfig.social`) — illustrative, not verified to exist. Replace with MY3's real profiles.
- **Business hours** (`siteConfig.hours`) — placeholder (10 AM–9 PM daily). Confirm and update.
- **Testimonials** (`src/content/testimonials.ts`) — illustrative placeholders, not real guest quotes. Replace with verified reviews before launch.
- **Membership tiers & pricing** (`src/content/membership.ts`) — proposed program per the original site brief; review pricing/benefits before launch.
- **Photography** — gallery/hero images are inherited from the original build. Commission photography that matches MY3's actual space before launch.
- **Google review count / rating** — intentionally not included as structured data (`aggregateRating`) since no verified rating exists yet. Add once you have a real, current Google rating to cite.

## Brand

- **Logo**: `public/images/brand/my3-logo.webp` (full wordmark lockup, used site-wide via `src/components/ui-custom/logo.tsx`) and `public/images/brand/my3-icon.png` (square medallion crop, used for favicons/app icons/JSON-LD).
- **Fonts**: Playfair Display (headings), Jost (uppercase nav/labels/buttons), Work Sans (body) — wired up in `src/app/layout.tsx`.
- **Colors**: gold (`--color-gold`), olive-green (`--color-olive`), warm bronze (`--color-taupe`), sampled directly from the logo. Full palette in `src/app/globals.css`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — also type-checks and lints
npm run start    # serve the production build locally
npm run lint
```

## Deployment (Vercel)

This is a static-first Next.js app with no environment variables or database required.

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Import it in [Vercel](https://vercel.com/new) — it will detect Next.js automatically.
3. `siteConfig.url` in `src/lib/site-config.ts` is already set to MY3's real domain (`https://my3wellnessspa.in`) — update it here if that ever changes.
4. Deploy.

## SEO/PWA notes

- `sitemap.ts`, `robots.ts`, `manifest.ts`, and `opengraph-image.tsx` are Next.js file-convention routes — edit those files directly rather than static XML/JSON.
- JSON-LD (`DaySpa`/LocalBusiness, `FAQPage`, `BreadcrumbList`, `Service`, `BlogPosting`) is generated per-page via `src/lib/schema.ts` and rendered with `src/components/seo/json-ld.tsx`.
- A minimal service worker (`public/sw.js`) caches static assets and provides an `/offline` fallback for navigation; it only registers in production builds.
