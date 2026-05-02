# GNC Financial – Visual Redesign Plan (Phase 2)

> Fill this out after Phase 1 is complete and INSPIRATION.md has been populated.

---

## Colour System

| Token | Current | Updated |
|-------|---------|---------|
| Primary (navy) | `#1a2f5e` | TBD |
| Primary mid (blue) | `#2d4fa3` | TBD |
| Accent (gold) | `#f0a500` | TBD |
| Background | white | TBD |
| Text | dark | TBD |

Update these in `tailwind.config.ts` → `theme.extend.colors.brand`.

---

## Typography

| Role | Current | Updated |
|------|---------|---------|
| Heading font | default WP theme | TBD |
| Body font | default WP theme | TBD |
| Scale | — | TBD |

Update in `tailwind.config.ts` → `theme.extend.fontFamily` and `src/app/layout.tsx`.

---

## Component Redesign Notes

### Hero
- [ ] Layout direction (split, full-width image, video bg, gradient)
- [ ] CTA placement
- [ ] Form treatment (inline vs modal vs separate page)

### Navigation
- [ ] Sticky or static
- [ ] Mega menu for Services dropdown
- [ ] Mobile nav style

### Services Grid
- [ ] Card style (border, shadow, icon-only, icon + text)
- [ ] Layout (3-col, 2-col, alternating)

### Testimonials
- [ ] Carousel vs grid
- [ ] Photo or initials avatar

### Footer
- [ ] 3-col vs 4-col
- [ ] Background (dark navy vs light)

---

## Imagery Direction

- [ ] Professional photography vs illustration vs icon-driven
- [ ] Stock library: Unsplash / Pexels / custom shoot
- [ ] Remove current stock photos (older couple with paperwork)

---

## Animation & Interaction

- [ ] Scroll-triggered fade-ins (Framer Motion or CSS)
- [ ] Button hover states
- [ ] Nav underline / active indicator
- [ ] Service card hover effect

---

## Breakpoint QA Checklist

- [ ] Mobile (375px)
- [ ] Tablet (768px)
- [ ] Desktop (1280px)
- [ ] Large (1536px)
