"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#060e24] py-24 overflow-hidden" aria-labelledby="testimonials-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 100%, rgba(82,113,255,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Client Reviews
          </p>
          <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mt-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-white/70 text-xs font-medium">4.9 · Google Reviews</span>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto" data-reveal data-delay="2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              <blockquote className="text-white/80 text-lg leading-relaxed mb-8">
                &ldquo;{TESTIMONIALS[active].body}&rdquo;
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center shrink-0">
                  <span className="text-brand-gold text-xs font-bold">{TESTIMONIALS[active].initials}</span>
                </div>
                <div className="text-left">
                  <p className="text-white text-sm font-semibold">{TESTIMONIALS[active].name}</p>
                  <p className="text-white/40 text-xs">{TESTIMONIALS[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-brand-gold w-6 h-2"
                    : "bg-white/20 hover:bg-white/40 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
