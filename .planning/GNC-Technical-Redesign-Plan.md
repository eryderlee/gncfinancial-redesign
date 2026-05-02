# GNC Financial Website Redesign: Technical Plan

Use this as the reference doc throughout the redesign. Lock the structure first, then do creative work on top. The goal is zero loss of SEO equity while improving every other technical aspect.

---

## 1. Pre-Redesign Baseline (do this BEFORE touching anything)

Capture current state so you can compare and recover.

1. Full site backup: database + WordPress files (use UpdraftPlus or similar)
2. Screaming Frog crawl exported as CSV (every URL, title, H1, meta description, status code)
3. Google Search Console export: top 50 ranking queries, top 50 landing pages, last 90 days of impressions and clicks
4. PageSpeed Insights scores saved for: home, services hub, one tax page, one suburb page (mobile and desktop)
5. Save current sitemap.xml and robots.txt locally
6. Screenshot every page (mobile and desktop) for visual reference
7. Validate and save current schema markup using Google Rich Results Test
8. Export Google Analytics conversion data (last 6 months)
9. Map current internal linking (which page links to which)
10. Note current Core Web Vitals from Search Console

---

## 2. Locked Site Hierarchy

This is the structure the redesign must preserve. URLs here do not change. If a URL must change, 301 redirect old to new and update every internal link.

```
Home (/)
├── About
│   └── /about-gnc-financial-baulkham-hills/
├── Services [hub: /baulkham-hills-accounting-tax-financial-services/]
│   ├── Tax Accounting [recommend creating new pillar page]
│   │   ├── /tax-accountant-baulkham-hills/
│   │   ├── /tax-accountant-castle-hill/
│   │   └── /tax-accountant-kellyville/
│   ├── /small-business-accountant-baulkham-hills/
│   ├── /smsf-accounting-services-baulkham-hills/
│   ├── /financial-advisor-baulkham-hills/
│   └── Accountant by Suburb [recommend creating new pillar page]
│       ├── /accountant-castle-hill/
│       ├── /accountant-hills-district/
│       └── /accountant-norwest/
├── Blog (/blog/)
├── FAQ (/baulkham-hills-accounting-faq/)
├── Book Appointment (/book-now/)
└── Contact (/contact-gnc-financial-baulkham-hills-sydney-cbd/)
```

### Hierarchy note

The current menu uses "Accountant" and "Tax accountant" as dropdown labels with no destination page. This wastes ranking opportunity for the head terms. Recommended addition: two new pillar hub pages, one for tax accounting and one for "accountant by suburb", each 1500+ words and internally linking to all their child suburb pages. Existing URLs all stay intact, you're just adding parent hubs.

---

## 3. URL Rules

1. Do not change any existing URL
2. If a URL must change, 301 redirect immediately, then update every internal link pointing to it
3. Keep URLs lowercase and hyphen-separated
4. New pages follow existing pattern: /service-suburb/
5. Update XML sitemap after any structural change

---

## 4. On-Page Elements to Preserve (per page)

For every existing page, preserve these during redesign:

1. URL slug
2. Title tag (review and improve weak ones, but never strip the location keyword)
3. Meta description (same rule)
4. Single H1, keyword-aligned
5. Heading hierarchy: H1 > H2 > H3, no skipping levels
6. All schema markup
7. Internal links into and out of the page
8. Phone number (must match sitewide)
9. Address (must match sitewide)
10. Canonical tag

---

## 5. Critical Pre-Design Fixes

Do these BEFORE any visual work. They are content and structural errors, not aesthetic.

### Duplicate content blocks
1. Services list block on homepage (Tax Services, Business Accounting, Bookkeeping, Business Advisory, Specialist Services) is rendered twice. Remove one.
2. "Why Choose" boxes (Qualified Team, No Hidden Fees, Quick Turnaround, Available, Proactive) also rendered twice. Remove one.

### NAP inconsistency
1. Two phone numbers on one page: 02 8403 2770 and 02 8860 6520. Confirm correct number with owner. One number sitewide, in GMB, and in every directory citation.
2. Two different addresses: "Level 5, Nexus Building, Norwest Business Park" in body, "111 / 33 Lexington Drive East Block, Level 1, Bella Vista" in footer. Confirm correct address with owner. One address sitewide.

### Typos and errors
1. "forover 30 years,and" (missing spaces)
2. "ASIC compliances" (should read "ASIC compliance")
3. Stray ">" character before "Company secretarial services"
4. Full human proofread of every page, not just spellcheck

### Images
1. Replace stock photos with real photos of Glenn, the team, and the office. Minimum: a real headshot of Glenn for E-E-A-T.
2. Rename image files descriptively before upload (baulkham-hills-tax-accountant-glenn.jpg, not pexels-kampus-8441811.jpg)
3. Rewrite all alt text to describe the actual image, not stuff keywords. Alt text should make sense when read aloud.
4. Convert images to WebP or AVIF
5. Add proper srcset for responsive sizing
6. Lazy load all below-the-fold images

### Author and trust signals (E-E-A-T)
1. Glenn bio with credentials: CPA or CA membership, Tax Agent registration number, IPA membership number
2. Real headshot
3. Author byline on every blog post
4. Person schema for Glenn
5. Outbound links to ato.gov.au where the ATO is referenced

---

## 6. Schema Markup

Validate every page after implementation using Google Rich Results Test.

1. Sitewide: Organization or LocalBusiness schema with NAP, hours, geo coordinates, social profiles
2. Homepage: AccountingService schema with priceRange, areaServed, serviceType
3. Service pages: Service schema nested under Organization
4. Suburb pages: LocalBusiness schema with that suburb in areaServed
5. FAQ page and any pages with FAQ blocks: FAQPage schema
6. Blog posts: Article schema with author, datePublished, dateModified
7. Testimonials: Review and AggregateRating schema (using real reviewer names from Google reviews)
8. Sitewide nav: BreadcrumbList schema

---

## 7. Performance Targets

After redesign, hit these on PageSpeed Insights mobile (this is the harder one to hit):

1. Performance score: 85+
2. Largest Contentful Paint (LCP): under 2.5s
3. Cumulative Layout Shift (CLS): under 0.1
4. Interaction to Next Paint (INP): under 200ms
5. Total page weight: under 2MB
6. HTTP requests: under 60

How to get there:
1. WebP or AVIF images, properly compressed
2. Lazy load below-the-fold media
3. Defer non-critical JavaScript
4. Inline critical CSS, defer the rest
5. Preconnect to font and analytics origins
6. Caching plugin: WP Rocket, FlyingPress, or LiteSpeed Cache
7. CDN: Cloudflare free tier minimum
8. Remove unused WordPress plugins
9. Trim Google Fonts to only the weights actually used

---

## 8. Mobile and Accessibility

1. Tap targets minimum 44x44px
2. WCAG AA color contrast (4.5:1 body text, 3:1 large text)
3. Form fields have visible labels, not placeholder-only labels
4. Visible focus states on all interactive elements
5. Descriptive alt text on every image
6. Headings used for hierarchy, never for styling
7. Test on real devices: iOS Safari, Android Chrome

---

## 9. Tracking and Analytics

1. Google Analytics 4 installed and verified
2. Google Search Console verified, sitemap submitted
3. Google Business Profile linked, NAP matches site exactly
4. Conversion events configured: form submit, phone click, email click, booking link click
5. Meta Pixel installed (relevant for BaseAim's ads work)
6. LinkedIn Insight Tag (already present, confirm it fires)
7. Optional: Microsoft Clarity for behavior insight during launch validation

---

## 10. Cookie and Privacy

1. Replace current "Ok" only cookie banner with one offering Accept and Decline
2. Privacy policy references the Australian Privacy Act 1988
3. Separate consent toggle for marketing pixels vs essential cookies

---

## 11. Pre-Launch Checklist

1. All URLs from baseline crawl still exist or have 301s
2. Every page has a unique title and meta description
3. Every page has one H1
4. Schema markup validates on Rich Results Test
5. Mobile rendering checked on real iPhone and Android
6. PageSpeed Insights meets targets
7. Forms tested end to end (lead actually lands in inbox or CRM)
8. Click-to-call tested on mobile
9. Booking link tested
10. Friendly 404 page exists
11. SSL valid
12. robots.txt allows crawling of public pages
13. XML sitemap current and submitted
14. GA4 firing on every page
15. Final human proofread of every page

---

## 12. Post-Launch Checklist (first 30 days)

1. Submit updated sitemap in Search Console
2. Request indexing of new or significantly changed pages
3. Monitor Search Console for crawl errors daily, first week
4. Track rankings for top 20 keywords against baseline
5. Watch Core Web Vitals report
6. Watch Analytics for traffic anomalies
7. Watch form submissions and phone clicks vs baseline
8. Update directory citations (Yellow Pages, True Local, Yelp AU) with consistent NAP
9. Update Google Business Profile if NAP changed
