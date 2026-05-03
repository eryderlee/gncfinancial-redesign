import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Phone, Mail, ArrowRight } from "lucide-react";
import HeroContactForm from "@/components/sections/HeroContactForm";
import { Backlight } from "@/components/ui/Backlight";

const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "1,000+", label: "Clients Served" },
  { value: "4.9★", label: "Google Rating" },
  { value: "24h", label: "Response Time" },
];

export default function Hero() {
  return (
    <section className="hero-bg text-white relative min-h-[calc(100vh-4rem)] flex flex-col overflow-hidden">

      {/* Cinematic ambient — deep indigo bloom, breathes slowly */}
      <div
        className="hero-ambient absolute pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Logo stripe motif — 3 gold diagonal bars echoing the GNC logo mark */}
      <div className="hero-stripes absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`hero-stripe hero-stripe-${i}`}>
            <div className="hero-stripe-glow" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-28 lg:pb-20 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">

          {/* Left: headline + CTAs */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.15] lg:leading-[1.1] tracking-tight">
              Expert Accounting &amp;{" "}
              <span className="text-brand-gold">Financial Advice</span>{" "}
              You Can Actually Rely On
            </h1>

            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-lg">
              GNC Financial — your local Baulkham Hills accountant. Tax, bookkeeping,
              SMSF, and business advisory for individuals and businesses across the
              Hills District. Over 30 years of honest, straight-shooting advice.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link
                href={SLUGS.bookNow}
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-semibold px-6 sm:px-7 py-3.5 rounded-lg hover:bg-brand-gold-light transition-colors duration-200 text-sm"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 sm:px-7 py-3.5 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
            </div>

            {/* Email */}
            <a
              href={SITE.emailHref}
              className="inline-flex items-center gap-2 text-white/40 hover:text-brand-gold text-sm transition-colors duration-200 break-all"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              {SITE.email}
            </a>
          </div>


          {/* Right: glassmorphism contact card with backlight */}
          <Backlight>
          <div className="glass-card rounded-2xl p-5 sm:p-8 shadow-2xl shadow-black/40" style={{ background: "rgba(20, 38, 120, 0.55)" }}>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-1">
              Free Consultation
            </p>
            <h2 className="text-white text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
              Request an Appointment
            </h2>
            <HeroContactForm dark />
          </div>
          </Backlight>
        </div>

      </div>

      {/* Full-width stats bar */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="px-3 sm:px-8 py-5 sm:py-7 text-center hover:bg-white/5 transition-colors duration-300"
          >
            <p className="text-brand-gold text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{stat.value}</p>
            <p className="text-white/50 text-[10px] sm:text-xs uppercase tracking-widest mt-1.5 sm:mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
