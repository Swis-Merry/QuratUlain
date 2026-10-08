# Qurat Ul Ain — Personal Branding Website

Premium editorial website for **Qurat Ul Ain**, Co-Founder & Chief Leadership Officer (CLO) of DRE Homes Real Estate, Dubai.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Motion · Zod · Resend (email via REST)

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in values
npm run dev                   # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript (`tsc --noEmit`) |
| `npm run build` | Production build |

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Production | Final approved domain. Drives canonical URLs, sitemap, robots and Open Graph. Falls back to the Vercel URL. |
| `RESEND_API_KEY` | For contact form | Resend API key (server-only). |
| `CONTACT_TO_EMAIL` | For contact form | Recipient(s), comma-separated. |
| `CONTACT_FROM_EMAIL` | For contact form | Verified Resend sender, e.g. `Qurat Ul Ain Website <enquiries@domain.com>`. |

If the email variables are missing, the form validates normally but the API returns `503` with a friendly message.
Spam protection: hidden honeypot field, minimum fill-time check, per-IP rate limiting and server-side Zod validation.

## Updating content

All copy and data live in `src/content/` — no component changes required.

| File | What it controls |
| --- | --- |
| `site.ts` | Name, title, tagline, navigation, **social links** |
| `awards.ts` | `personalAwards` (individual honours) and `companyAwards` (DRE Homes recognitions) |
| `press.ts` | Media & Press cards (year/publication filters are generated automatically) |
| `story.ts` | Journey timeline, verified quotations, leadership philosophy, gallery images |
| `sources.ts` | Every source URL referenced on the site |

Images go in `public/images/`. For gallery items set `focus` (CSS `object-position`) to keep faces in frame.
Only add **verified** facts and quotations — each award, milestone and quote must reference a URL in `sources.ts`.

## Verified sources

- DRE Homes management profile — https://drehomes.com/management/qurat-ul-ain
- Arabian Business, Real Estate Legends 2024 (#22) — https://www.arabianbusiness.com/powerlists/real-estate-legends-revealing-the-biggest-brokers-across-the-uae
- Entrepreneur Middle East, 100 Real Estate Agents (Aug 2026) — https://mena.entrepreneur.com/leadership/100-real-estate-agents-qurat-ul-ain-co-founder-dre-homes-real-estate
- Gulf News, Excellence Awards (Jun 2024) — https://gulfnews.com/gn-focus/excellence-awards-qurat-ul-ain---leading-from-the-front-1.1718952068236
- Gulf News, Black Onyx Platinum Award (Sep 2024) — https://gulfnews.com/gn-focus/dre-awarded-prestigious-black-onyx-platinum-award-by-dubai-holdings-1.1727429139243
- Gulf News, personalised service interview (Sep 2024) — https://gulfnews.com/gn-focus/for-dre-its-all-about-staying-focused-on-personalised-service-1.1727687083694
- Khaleej Times, "From ice cream scoops to skyscrapers" (Jun 2024) — https://www.khaleejtimes.com/uae/from-ice-cream-scoops-to-skyscrapers-how-dubai-woman-built-business-selling-properties-worth-billio
- Khaleej Times, "The Power of Passion" (Mar 2022) — https://www.khaleejtimes.com/uae/the-power-of-passion
- Property Time interview (Oct 2025) — https://www.propertytime.ae/featured/trust-transparency-dres-18-year-old-legacy/
- Estate Magazine feature (Dec 2025) — https://estatemagazine.ae/kurat-ul-ain-inspires-success-in-dubai-real/
- UAE Times interview (Mar 2022) — https://uaetimes.ae/qurat-ul-ain-facilitating-luxury-and-comfort-with-drehomes/
- DRE Homes company news: Arabian Business, Danube Properties award, Ahlan Dubai feature, Entrepreneur ME recognition
- LinkedIn: Qurat Ul Ain profile; Ultimate Realty Awards post; DRE Homes Best Places to Work post

## Outstanding approvals / content gaps

- **Designation:** "Chief Leadership Officer" is confirmed by Entrepreneur Middle East (2026), Gulf News (2024) and DRE news; some DRE pages and a podcast use "Chief Legal Officer", and older articles use "Founder & Chairperson". Final sign-off required.
- **Ultimate Realty Awards title** appears as both "Top Female Entrepreneur in Real Estate" (DRE) and "Female Entrepreneur of Real Estate" (LinkedIn); the brief's "Leading Female Entrepreneur" wording was not found in sources.
- **Estate Magazine** feature is dated **Dec 2025** (brief listed 2026) and is an editorial profile rather than a formal award.
- **Breakthrough deal details** differ between Khaleej Times (13 additional floors, Abdul Latif Jameel) and Property Time (16 floors in JLT, 2012); copy is deliberately generic.
- **Instagram / other social handles** not verified — only LinkedIn is linked.
- **Video** content and additional event photography (award ceremonies, speaking) needed for the gallery.
- **Image rights:** press images were sourced from official DRE Homes news pages; confirm usage rights for third-party publication artwork.
- **Privacy policy** is a draft pending legal review.
- **Domain** and contact-form recipient to be confirmed.
