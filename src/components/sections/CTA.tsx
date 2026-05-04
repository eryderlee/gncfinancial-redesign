import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Phone, Calendar } from "lucide-react";

interface CTAProps {
  heading?: string;
  body?: string;
}

export default function CTA({
  heading = "Take Control of Your Finances Today",
  body = "Tax time doesn\u2019t have to be a nightmare. With the right accountant in Baulkham Hills on your side, you can stay compliant, minimise your tax, and build wealth with confidence.",
}: CTAProps) {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden" aria-labelledby="cta-heading">
      {/* Gold bg */}
      <div className="absolute inset-0 bg-brand-gold" />
      {/* Dot grid — navy dots, visible at corners */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(6,14,36,0.15) 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px",
        }}
      />
      {/* Radial mask — gold centre dissolves dots inward, corners remain dotted */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 75% at 50% 50%, #e89018 0%, #e89018 50%, rgba(232,144,24,0.4) 80%, transparent 100%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative element above heading */}
        <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8" data-reveal>
          <div className="h-px w-10 sm:w-16 bg-brand-navy/25" />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-brand-navy/35" />
            ))}
          </div>
          <div className="h-px w-10 sm:w-16 bg-brand-navy/25" />
        </div>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl lg:text-6xl font-black text-brand-navy mb-5 sm:mb-6 leading-tight"
          data-reveal="scale"
          data-delay="1"
        >
          {heading}
        </h2>
        <p
          className="text-brand-navy/70 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-base sm:text-lg"
          data-reveal
          data-delay="2"
        >
          {body}
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center" data-reveal data-delay="3">
          <Link
            href={SLUGS.contact}
            className="inline-flex items-center justify-center gap-2 bg-brand-navy text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl hover:bg-brand-navy/90 transition-colors shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Make Appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 text-brand-navy font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border-2 border-brand-navy/30 hover:border-brand-navy hover:bg-brand-navy/10 transition-all"
          >
            <Phone className="w-5 h-5" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
