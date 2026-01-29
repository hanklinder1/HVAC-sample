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

## Email Setup (Contact Form)

The contact form sends emails using **Resend**. To enable email delivery:

1. **Sign up for Resend** (free tier available): https://resend.com
2. **Get your API key** from https://resend.com/api-keys
3. **Set environment variable**:
   - **Local**: Create `.env.local` file (copy from `.env.example`) and add `RESEND_API_KEY=re_xxxxx`
   - **Vercel**: Go to Project Settings → Environment Variables → Add `RESEND_API_KEY` with your key
4. **Update business email** in `app/lib/siteData.ts` (find `business.email`)
5. **Optional**: Verify your domain in Resend to use a custom "from" address (instead of `onboarding@resend.dev`)

After setup, form submissions will send emails to the business email address.

## Notes

- Phone is **click-to-call** throughout the site.
- Contact form sends emails via Resend API (requires `RESEND_API_KEY` environment variable).
