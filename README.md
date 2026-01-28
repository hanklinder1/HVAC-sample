# Riggins Heating & Air Conditioning — Demo Website

Modern, conversion-focused HVAC website demo built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Edit business info (single data file)

All editable business details + all site copy live in:

- `app/lib/siteData.ts`

Update the name, phone, hours, services, reviews, service areas, and all on-page text there.

## Replace images / video

Drop (or replace) these files:

- `public/images/hero-hvac.jpg`
- `public/images/hvac-tech.jpg`
- `public/images/happy-family.jpg`
- `public/images/service-van.jpg`

Optional hero video (autoplays muted/looped if present):

- `public/video/hero.mp4`

## Deploy to Vercel

1. Import this repo in Vercel.
2. Use default build settings (Vercel will detect Next.js).

## Notes

- Phone is **click-to-call** throughout the site.
- Contact form logs payload to the console and shows an inline success state (see TODO in `app/contact/page.tsx` for email integration).
