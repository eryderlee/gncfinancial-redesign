import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Phone, Mail, ArrowRight } from "lucide-react";
import HeroContactForm from "@/components/sections/HeroContactForm";

const STATS = [
  { value: "30+", label: "Years Experience" },
  { value: "1,000+", label: "Clients Served" },
  { value: "4.9★", label: "Google Rating" },
  { value: "24h", label: "Response Time" },
];

export default function Hero() {
  return (
    <section className="hero-bg text-white relative">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 lg:pt-28 lg:pb-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: headline + CTAs + stats */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-xs font-medium text-white/60 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              Baulkham Hills &amp; Hills District
            </div>

            <h1 className="text-4xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight">
              Expert Accounting &amp;{" "}
              <span className="text-brand-gold">Financial Advice</span>{" "}
              You Can Actually Rely On
            </h1>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg">
              GNC Financial — your local Baulkham Hills accountant. Tax, bookkeeping,
              SMSF, and business advisory for individuals and businesses across the
              Hills District. Over 30 years of honest, straight-shooting advice.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={SLUGS.bookNow}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-7 py-3.5 rounded-lg hover:bg-brand-gold-light transition-colors duration-200 text-sm"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-lg hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                {SITE.phone}
              </a>
            </div>

            {/* Email */}
            <a
              href={SITE.emailHref}
              className="inline-flex items-center gap-2 text-white/40 hover:text-brand-gold text-sm transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5" />
              {SITE.email}
            </a>
          </div>

          {/* Right: glassmorphism contact card */}
          <div className="glass-card rounded-2xl p-8 shadow-2xl shadow-black/40">
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-1">
              Free Consultation
            </p>
            <h2 className="text-white text-xl font-semibold mb-6">
              Request an Appointment
            </h2>
            <HeroContactForm dark />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300 px-6 py-5 text-center"
            >
              <p className="text-brand-gold text-3xl font-bold tracking-tight">{stat.value}</p>
              <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
