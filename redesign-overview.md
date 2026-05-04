# GNC Financial — Redesign Overview

A short, plain-English summary of what the original site was trying to do, where the execution undermined those goals, and how each change in this redesign addresses one (or more) of them.

---

## What the old site set out to do

- **Conversion** — drive bookings via the contact form / phone CTAs.
- **SEO** — rank for "Baulkham Hills accountant" and related terms by carrying a lot of long-form copy and location keywords.
- **Branding** — communicate trust and professionalism using their navy + gold palette and logo.

Each goal on its own was sensible. The issue was the execution.

---

## Where the old execution worked against itself

| Goal | What the old site did | Why it hurt the goal |
|---|---|---|
| **Conversion** | Buried the contact form and CTAs in dense sections | Visitors didn't know where to act; no visual hierarchy guiding them to the form. |
| **SEO** | Long copy paragraphs stacked vertically as walls of text | Content was technically present but unreadable, especially on mobile, so users bounced before any of it landed. |
| **Branding** | Bright "school-bus" yellow used as full backgrounds, flat colours, mismatched logo identity | The brand felt loud and dated — the palette didn't match the actual logo's metallic gold, and gold-on-blue had poor contrast. |

The three goals were also actively fighting each other: more copy made layout worse, bad layout hid the form, weak branding undercut the trust the copy was building.

---

## What changed and why each change matters

### Branding — making it match the logo
1. **New gold sourced directly from the logo** (`#ffb02e`) replaces the flat school-bus yellow. Better contrast against navy, reads as warm "metallic gold" instead of cheap yellow.
2. **Metallic button treatment** — gold CTAs now use a vertical gradient with subtle inset highlights and a warm glow shadow, echoing the metallic foil look of the logo's stripes instead of flat fills.
3. **Hero stripe motif** echoes the diagonal stripes inside the logo — three slim metallic gold bars sliding in from above as the page loads, anchoring the hero in the brand mark.
4. **"Financial Advice" gold accent flickers** like an LED — small detail, but it gives the headline a premium "neon sign" feel that ties into the metallic theme.
5. **Live partner logos** (Xero, MYOB, QuickBooks) replace generic coloured initials in the Cloud Accounting section — the firm is genuinely certified, the visual now says so credibly.
6. **CTA section redesign** — the old gold-wall final section is now a dark navy "cinematic" close with a slow gold glow pulse and the logo's diagonal motif. Same brand, different posture: confident rather than loud.
7. **Animated outline ring** on the header CTA — a thin rotating gold/navy gradient border that gives the button a subtle "alive" quality without being a banner ad.

### Conversion — making the form unmissable
1. **Contact form lifted into the hero** with a glowing animated backlight (blue-and-gold box-shadow rotating around the card). The eye is drawn to it the moment the page loads.
2. **Animated gradient outline** on the contact card pulses in the same colours as the backlight — reinforces the form as the focal point of the page.
3. **Sticky header with persistent "Book Consultation" CTA** — the action is one tap away on every section, on every screen size.
4. **Mobile CTAs inside the slide-in menu** — both "Book Free Consultation" and a tap-to-call number are pinned to the bottom of the menu so they're always reachable.
5. **Stats animate from 0 on scroll-in** — `30+ Years`, `1,000+ Clients`, `4.9★`, `24h response`. Trust signals that *move* draw attention; static numbers got skipped.
6. **Form input legibility on mobile fixed** — date input no longer overflows the card, all inputs match heights, "Preferred Date" is usable.
7. **Hero email pill** — wrapped in a backdrop-blur pill so it stays readable through the rotating backlight glow. Previously it disappeared into the gold phase.

### SEO / Content — keeping the copy, making it scan
1. **"For Individuals" rebuilt as a tabbed panel** — same three blocks of copy as before, but only one is on screen at a time. Auto-rotates every 7s; users can tap the tab they want. Less visual noise, all the keywords retained.
2. **"Our Difference" symmetrical 3+2 grid** — the previous 5-card grid left a single orphan in the bottom row; users read it as "incomplete". New layout reads as a clean, intentional set.
3. **Google reviews badge with the real Google G icon** — both in the hero-adjacent local intro and on the testimonials. The familiar logo signals trust faster than text alone.
4. **30+ Years experience badge** added next to the Google reviews badge — pairs two trust anchors in the same eyeline, lifting credibility for the local-SEO copy that follows.
5. **Animated entrance choreography** in the hero (stripes → headline → paragraph → CTA → form → stats) keeps users engaged through the first 2 seconds rather than dumping the whole page on them.
6. **Section-level paddings and rhythm** rebalanced — every section now has a clear eyebrow → headline → body cadence so users can skim or read in depth without losing their place.

### Mobile — fixes affecting all three goals
1. **Every section overhauled for mobile** — text sizes, padding, grid breakpoints, image aspect ratios. Previously users could pinch to "zoom out" and see whitespace beside the layout; that's now impossible.
2. **Hero stripes scale with viewport** and tuck to the left edge on mobile so they no longer overlap the headline.
3. **Backlight glow shrinks at narrow laptop widths** so the contact card's shadow doesn't reach the headline column.
4. **Mobile nav rebuilt** — slide-in panel with backdrop, sticky CTAs, no z-index conflicts with `backdrop-filter` ancestors. Header stays pinned and visible while the menu is open.

### Trust / polish — small things, big impact
1. **Loading screen** renders on first paint instead of popping in after the page loads — the entrance feels intentional.
2. **Cookie banner** delayed by 5 seconds (or appears on first scroll) so it doesn't obscure the hero on landing.
3. **Animated gradient backing plate** behind the LocalIntro photos — slow drift / scale loop, gives the section a living quality.
4. **Smooth scroll reveals** — every section's content fades up just before it enters the viewport, so users never see static placeholders pop into motion.
5. **All animations honour `prefers-reduced-motion`** — accessibility requirement, also a quality signal.

---

## Net result

The old site had the *right ingredients* — copy for SEO, a form for conversion, brand assets for trust. The redesign keeps every one of those ingredients but rearranges them so they reinforce each other instead of fighting:

- Copy is still there, presented in scannable layouts → **SEO holds, content actually gets read**.
- Form is now the anchor of the hero → **conversion path is obvious from the first frame**.
- Palette, type, motion and motifs all derive from the logo → **brand reads as premium and current**.

The numbers that matter (form submissions, time-on-page, mobile bounce) should improve because the site is no longer asking users to forgive the execution before they engage with the content.
