"use client";

import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Michael R.",
    role: "Small Business Owner, Castle Hill",
    body: "Glenn and the team at GNC have been looking after our business tax for over 8 years. They're proactive, always available, and have saved us thousands through legitimate tax strategies we wouldn't have known about. Wouldn't go anywhere else.",
    initials: "MR",
  },
  {
    name: "Sarah T.",
    role: "Freelancer, Baulkham Hills",
    body: "I was completely overwhelmed starting out as a sole trader. GNC sorted everything quickly, explained exactly what I needed to know, and I ended up with a much better refund than expected. Genuinely helpful every step of the way.",
    initials: "ST",
  },
  {
    name: "David & Lisa K.",
    role: "SMSF Clients, Kellyville",
    body: "We've had GNC manage our SMSF for years. The annual statements, audit coordination, and ATO compliance are handled seamlessly. Glenn gives great strategic advice — not just the numbers.",
    initials: "DK",
  },
  {
    name: "James P.",
    role: "Plumber, Winston Hills",
    body: "As a tradie running my own business, I needed someone who explains things in plain English without the jargon. GNC does exactly that — bookkeeping, BAS, and tax sorted every year. Wouldn't look elsewhere.",
    initials: "JP",
  },
  {
    name: "Priya M.",
    role: "Medical Specialist, Norwest",
    body: "Glenn has been my accountant since I set up my practice. His advice on business structure saved me significantly from day one. Responsive, thorough, and they genuinely care about your outcomes.",
    initials: "PM",
  },
];

const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden" aria-labelledby="testimonials-heading">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-14" data-reveal>
        <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
          Client Feedback
        </p>
        <h2
          id="testimonials-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-3"
        >
          What Our Clients Say
        </h2>
        <div className="w-12 h-1 bg-brand-gold rounded-full mx-auto mb-5 sm:mb-6" />
        {/* Rating badge */}
        <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gray-200 bg-gray-50">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            ))}
          </div>
          <span className="text-gray-500 text-xs sm:text-sm font-medium">4.9 · Google Reviews</span>
        </div>
      </div>

      {/* Scrolling card strip */}
      <div className="relative" data-reveal data-delay="2">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-ticker" style={{ animationDuration: "55s" }}>
          {doubled.map((t, i) => (
            <div
              key={i}
              className="w-[280px] sm:w-[340px] mx-3 sm:mx-4 flex-shrink-0 bg-white border border-gray-100 rounded-2xl p-5 sm:p-6 shadow-sm"
            >
              {/* Card header */}
              <div className="flex items-center justify-between mb-4 gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-navy flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">{t.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-brand-navy text-sm font-semibold leading-tight truncate">{t.name}</p>
                    <p className="text-gray-400 text-xs mt-0.5 truncate">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-px flex-shrink-0">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  ))}
                </div>
              </div>

              {/* Review body */}
              <p className="text-gray-500 text-sm leading-relaxed">
                &ldquo;{t.body}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
