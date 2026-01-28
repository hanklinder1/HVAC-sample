# Riggins Heating & Air Conditioning — Demo Website

Modern, conversion-focused HVAC website demo built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Run locally

```bash
cd riggins-hvac-demo
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Edit business info (single data file)

All editable business details + all site copy live in:

- `riggins-hvac-demo/app/lib/siteData.ts`

Update the name, phone, hours, services, reviews, service areas, and all on-page text there.

## Replace images / video

Drop (or replace) these files:

- `riggins-hvac-demo/public/images/hero-hvac.jpg`
- `riggins-hvac-demo/public/images/hvac-tech.jpg`
- `riggins-hvac-demo/public/images/happy-family.jpg`
- `riggins-hvac-demo/public/images/service-van.jpg`

Optional hero video (autoplays muted/looped if present):

- `riggins-hvac-demo/public/video/hero.mp4`

## Deploy to Vercel

1. Import this repo in Vercel.
2. Set **Root Directory** to `riggins-hvac-demo`.
3. Use default build settings (Vercel will detect Next.js).

## Notes

- Phone is **click-to-call** throughout the site.
- Contact form logs payload to the console and shows an inline success state (see TODO in `riggins-hvac-demo/app/contact/page.tsx` for email integration).
