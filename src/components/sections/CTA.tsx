import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Phone, Calendar } from "lucide-react";

interface CTAProps {
  heading?: string;
  body?: string;
}

export default function CTA({
  heading = "Take Control of Your Finances Today",
  body = "Tax time doesn’t have to be a nightmare. With the right accountant in Baulkham Hills on your side, you can stay compliant, minimise your tax, and build wealth with confidence.",
}: CTAProps) {
  // Split heading so the last word renders in gold
  const headingWords = heading.split(" ");
  const lastWord = headingWords.pop();
  const headingLead = headingWords.join(" ");

  return (
    <section
      className="cta-bg relative py-20 sm:py-28 overflow-hidden text-white"
      aria-labelledby="cta-heading"
    >
      {/* Animated gold radial glow — sits behind the heading */}
      <div className="cta-glow absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Diagonal stripe motif — very faint, echoes the logo */}
      <div className="cta-stripes absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <span key={i} className={`cta-stripe cta-stripe-${i}`} />
        ))}
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, transparent 45%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, transparent 45%, black 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-7 sm:mb-9" data-reveal>
          <div className="h-px w-10 sm:w-14 bg-brand-gold/50" />
          <p className="text-brand-gold text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em]">
            Take Action
          </p>
          <div className="h-px w-10 sm:w-14 bg-brand-gold/50" />
        </div>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mb-5 sm:mb-6 leading-[1.1]"
          data-reveal="scale"
          data-delay="1"
        >
          {headingLead}{" "}
          <span className="text-brand-gold">{lastWord}</span>
        </h2>

        <p
          className="text-white/65 max-w-2xl mx-auto mb-9 sm:mb-12 leading-relaxed text-base sm:text-lg"
          data-reveal
          data-delay="2"
        >
          {body}
        </p>

        <div
          className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center"
          data-reveal
          data-delay="3"
        >
          <Link
            href={SLUGS.contact}
            className="btn-gold inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl"
          >
            <Calendar className="w-5 h-5" />
            Make Appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/30 hover:border-white hover:bg-white/5 transition-all"
          >
            <Phone className="w-5 h-5" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
