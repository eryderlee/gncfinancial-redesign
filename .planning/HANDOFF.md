# GNC Financial Redesign — Agent Handoff Document

**Project:** gncfinancial.com.au full redesign
**Repo:** https://github.com/eryderlee/gncfinancial-redesign
**Date:** 2026-05-02
**Status:** Skeleton complete — ready for Phase 1 content porting

---

## What Has Been Built

A complete Next.js 15 project skeleton is live and building successfully (23 static routes, 0 errors).

### Tech stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** Tailwind CSS with custom brand tokens
- **Components:** lucide-react icons, custom ui/layout/section components
- **SEO:** Per-page metadata via `pageMeta()` factory, JSON-LD LocalBusiness schema in root layout, sitemap.ts, robots.ts

### What's in the repo

```
.planning/
  GNC-Technical-Redesign-Plan.md   ← full technical plan (READ THIS FIRST)
  INSPIRATION.md                   ← inspo references (to be filled by owner)
  VISUAL_PLAN.md                   ← Phase 2 design template
  HANDOFF.md                       ← this file
  screenshots/                     ← existing site captures
  source-html/                     ← drop Ctrl+U HTML here

src/
  lib/constants.ts                 ← ALL site data (slugs, nav, services, FAQs, etc)
  lib/metadata.ts                  ← SEO metadata factory + JSON-LD schema
  lib/utils.ts                     ← cn() helper
  components/layout/               ← Header, Footer, MobileNav (complete)
  components/sections/             ← Hero, ServicesGrid, WhyChooseUs, Industries,
                                      Testimonials, CloudAccounting, CTA, FAQ, ContactForm
  components/ui/                   ← Button, Card, Badge
  app/                             ← 23 routes (see URL map below)
```

---

## URL Map (exact live site slugs preserved)

| Route file | URL | Status |
|---|---|---|
| `app/page.tsx` | `/` | Skeleton complete |
| `app/about-gnc-financial-baulkham-hills/` | `/about-gnc-financial-baulkham-hills` | Skeleton complete |
| `app/baulkham-hills-accounting-tax-financial-services/` | `/baulkham-hills-accounting-tax-financial-services` | Skeleton complete |
| `app/tax-accountant-baulkham-hills/` | `/tax-accountant-baulkham-hills` | Skeleton complete |
| `app/small-business-accountant-baulkham-hills/` | `/small-business-accountant-baulkham-hills` | Skeleton complete |
| `app/smsf-accounting-services-baulkham-hills/` | `/smsf-accounting-services-baulkham-hills` | Skeleton complete |
| `app/financial-advisor-baulkham-hills/` | `/financial-advisor-baulkham-hills` | Skeleton complete |
| `app/accountant-castle-hill/` | `/accountant-castle-hill` | Skeleton complete |
| `app/accountant-norwest/` | `/accountant-norwest` | Skeleton complete |
| `app/accountant-hills-district/` | `/accountant-hills-district` | Skeleton complete |
| `app/tax-accountant-castle-hill/` | `/tax-accountant-castle-hill` | **NEW page — needs content written** |
| `app/tax-accountant-kellyville/` | `/tax-accountant-kellyville` | **NEW page — needs content written** |
| `app/blog/` | `/blog` | Stub only |
| `app/baulkham-hills-accounting-faq/` | `/baulkham-hills-accounting-faq` | Content in constants.ts |
| `app/book-now/` | `/book-now` | Stub — needs booking widget |
| `app/contact-gnc-financial-baulkham-hills-sydney-cbd/` | `/contact-gnc-financial-baulkham-hills-sydney-cbd` | Form built, needs server action |
| `app/disclaimer/` | `/disclaimer` | Stub only |
| `app/privacy-policy/` | `/privacy-policy` | Stub only |

---

## Two Open Items (confirm with client before finalising)

1. **Phone number** — Two numbers exist on the live site: `02 8403 2770` and `02 8860 6520`.
   Currently using `02 8403 2770` in `src/lib/constants.ts`. Confirm and update `SITE.phone` and `SITE.phoneHref`.

2. **Address** — Two addresses exist on the live site:
   - Body copy: "Level 5, Nexus Building, Norwest Business Park"
   - Footer: "111/33 Lexington Drive East Block – Level 1, Bella Vista NSW 2153"
   Currently using Bella Vista. Confirm and update `SITE.address` in `src/lib/constants.ts`.

All site data lives in one place: `src/lib/constants.ts` — update there and it flows everywhere.

---

## Phase 1 — What Needs to Be Done

### Step 1: Run `/site-teardown` on each live page
The `/site-teardown` skill is installed globally. Run it to get a complete blueprint of each page before porting content.

**Order of priority:**
1. `https://gncfinancial.com.au/` (homepage — most complex)
2. `https://gncfinancial.com.au/baulkham-hills-accounting-tax-financial-services/`
3. `https://gncfinancial.com.au/tax-accountant-baulkham-hills/`
4. `https://gncfinancial.com.au/smsf-accounting-services-baulkham-hills/`
5. `https://gncfinancial.com.au/financial-advisor-baulkham-hills/`
6. `https://gncfinancial.com.au/small-business-accountant-baulkham-hills/`
7. `https://gncfinancial.com.au/about-gnc-financial-baulkham-hills/`
8. `https://gncfinancial.com.au/baulkham-hills-accounting-faq/`
9. `https://gncfinancial.com.au/contact-gnc-financial-baulkham-hills-sydney-cbd/`
10. Location pages: `/accountant-castle-hill/`, `/accountant-norwest/`, `/accountant-hills-district/`
11. Disclaimer + Privacy Policy

Teardown outputs save to `.planning/research/` automatically.

### Step 2: Port content into each page file
After teardown, update each page component with the real content extracted from the live site.
Key things to preserve per page (from technical plan):
- Title tag (keep location keyword)
- Meta description (same rule)
- Single H1, keyword-aligned
- Heading hierarchy H1 > H2 > H3
- All internal links (update hrefs to new slug format if needed)
- Phone number + address (once confirmed)

### Step 3: Implement technical improvements from the plan

Read `.planning/GNC-Technical-Redesign-Plan.md` in full. Key tasks:

**Content fixes (do first, they're pre-design bugs):**
- [ ] Fix duplicate content blocks on homepage (services list + Why Choose both render twice on live site — our skeleton doesn't have this but verify)
- [ ] Fix typos: "forover 30 years,and", "ASIC compliances", stray `>` character
- [ ] NAP consistency once phone/address confirmed with client
- [ ] Rewrite all alt text to be descriptive (not keyword-stuffed)
- [ ] Replace stock photo references with placeholder `[real photo needed]` comments

**Schema markup:**
- [ ] Sitewide: LocalBusiness schema (already in `layout.tsx` via `localBusinessSchema` — verify and expand)
- [ ] Homepage: AccountingService schema
- [ ] FAQ page: FAQPage schema (wire FAQS array from `constants.ts` to JSON-LD)
- [ ] Service pages: Service schema
- [ ] Location pages: LocalBusiness schema with that suburb in `areaServed`
- [ ] Blog posts: Article schema
- [ ] Person schema for Glenn

**Forms:**
- [ ] Wire contact form and hero form to a server action or API route (`src/app/api/contact/route.ts`)
- [ ] Book Now page: integrate booking widget (Calendly or custom)
- [ ] Test form submission end-to-end (lead lands in inbox)

**Analytics & tracking:**
- [ ] Google Analytics 4 via `next/script` in `layout.tsx`
- [ ] Conversion events: form submit, phone click, email click, booking click
- [ ] Meta Pixel
- [ ] Google Search Console: verify + submit sitemap
- [ ] Optional: Microsoft Clarity

**Cookie consent:**
- [ ] Replace stub with proper Accept/Decline banner (not just "Ok")
- [ ] Separate consent for marketing vs essential cookies
- [ ] Privacy policy references Australian Privacy Act 1988

**Performance:**
- [ ] All images use `next/image` (already done for accreditations)
- [ ] Convert accreditation images to local WebP copies in `public/images/`
- [ ] Lazy load below-fold images
- [ ] Add `<link rel="preconnect">` for Google Fonts in `layout.tsx`

**Navigation:**
- [ ] Plan recommends two new pillar hub pages (see below)

### Step 4: New pillar pages (recommended by technical plan)

The plan recommends creating two hub pages that currently don't exist on the live site:

1. **Tax accounting hub** — parent for `/tax-accountant-baulkham-hills/`, `/tax-accountant-castle-hill/`, `/tax-accountant-kellyville/`
   - 1500+ words
   - Links to all tax suburb child pages
   - Suggested slug: `/tax-accountant-hills-district/` or `/tax-accounting-services-baulkham-hills/`

2. **Accountant by suburb hub** — parent for `/accountant-castle-hill/`, `/accountant-norwest/`, `/accountant-hills-district/`
   - 1500+ words
   - Links to all suburb child pages

Both stubs (`/tax-accountant-castle-hill/` and `/tax-accountant-kellyville/`) are already in the repo as empty pages.

---

## Phase 2 — Visual Redesign (do AFTER Phase 1 is stable)

Only start Phase 2 after:
- All Phase 1 content is ported and correct
- Lighthouse scores: Performance 85+, Accessibility 95+, SEO 95+
- All forms working
- Technical plan checklist complete

Phase 2 work:
1. Owner fills `.planning/INSPIRATION.md` with reference sites
2. Agree on colour palette update (base: navy `#1a2f5e`, gold `#f0a500` — modernise from there)
3. Typography system (swap `var(--font-inter)` + add a heading font in `layout.tsx`)
4. Redesign section components one at a time (start with Hero, then ServicesGrid)
5. Replace stock photo placeholders with real imagery
6. Add micro-interactions (Framer Motion or CSS transitions)
7. Final QA across breakpoints (375px / 768px / 1280px / 1536px)

Update design tokens in `tailwind.config.ts` → `theme.extend.colors.brand`.

---

## Key Files Reference

| File | What it does |
|---|---|
| `src/lib/constants.ts` | All site data — edit here first |
| `src/lib/metadata.ts` | `pageMeta()` factory + `localBusinessSchema` |
| `src/app/layout.tsx` | Root layout, global metadata, JSON-LD injection |
| `src/components/layout/Header.tsx` | Top bar + nav + mobile hamburger |
| `src/components/layout/Footer.tsx` | Footer 3-col layout |
| `src/components/sections/Hero.tsx` | Hero with inline booking form |
| `src/components/sections/FAQ.tsx` | Accordion FAQ (data from constants.ts) |
| `src/components/sections/ContactForm.tsx` | Contact form (needs server action) |
| `src/app/sitemap.ts` | XML sitemap (auto-generated, uses SLUGS) |
| `src/app/robots.ts` | robots.txt |
| `tailwind.config.ts` | Brand colour tokens |
| `.planning/GNC-Technical-Redesign-Plan.md` | Full 12-section technical plan |

---

## How to Run Locally

```bash
cd "e:/websites/redesign for gncfinancial"
npm run dev
# → http://localhost:3000
```

---

## Verification Checklist for Phase 1 Completion

- [ ] `npm run build` passes with 0 errors
- [ ] All routes have real content (no `[port in Phase 1]` placeholders remaining)
- [ ] Phone/address confirmed and updated in `constants.ts`
- [ ] Forms submit and lead arrives in inbox
- [ ] Lighthouse mobile: Performance 85+, Accessibility 95+, SEO 95+
- [ ] Schema validates at search.google.com/test/rich-results
- [ ] Sitemap submitted in Google Search Console
- [ ] All existing live URLs confirmed present in new build
