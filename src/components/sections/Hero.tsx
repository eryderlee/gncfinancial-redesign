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
    <section className="hero-bg text-white relative h-[calc(100vh-4rem)] flex flex-col overflow-hidden">

      {/* Cinematic ambient — deep indigo bloom, breathes slowly */}
      <div
        className="absolute pointer-events-none z-0"
        aria-hidden="true"
        style={{
          width: 900,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(30,50,180,0.55) 0%, transparent 65%)",
          filter: "blur(70px)",
          top: "5%",
          left: "10%",
          animation: "heroAmbient 22s ease-in-out infinite",
        }}
      />

      {/* Logo stripe motif — 3 gold diagonal bars echoing the GNC logo mark */}
      <div className="absolute top-0 left-0 z-0 pointer-events-none" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute bg-brand-gold"
            style={{
              width: 80,
              height: 1000,
              top: -80,
              left: 140 + i * 110,
              opacity: 1,
              transform: "rotate(30deg)",
              transformOrigin: "top center",
              borderRadius: 4,
              overflow: "visible",
              animation: "stripeGlow 3.5s ease-in-out infinite",
            }}
          >
            {/* Side glow that sweeps top → bottom, same timing on all bars */}
            <div
              style={{
                position: "absolute",
                left: "-120%",
                top: 0,
                width: "340%",
                height: "18%",
                background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(248,185,23,0.3), transparent 70%)",
                filter: "blur(12px)",
                animation: "stripeFlow 3.5s ease-in-out infinite",
                animationDelay: "0s",
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-14 lg:pt-28 lg:pb-20 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: headline + CTAs */}
          <div className="space-y-8">
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


          {/* Right: glassmorphism contact card with backlight */}
          <Backlight blur={50}>
          <div className="glass-card rounded-2xl p-8 shadow-2xl shadow-black/40" style={{ background: "rgba(20, 38, 120, 0.55)" }}>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-1">
              Free Consultation
            </p>
            <h2 className="text-white text-xl font-semibold mb-6">
              Request an Appointment
            </h2>
            <HeroContactForm dark />
          </div>
          </Backlight>
        </div>

      </div>

      {/* Full-width stats bar */}
      <div className="relative z-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="px-8 py-7 text-center hover:bg-white/5 transition-colors duration-300"
          >
            <p className="text-brand-gold text-4xl font-bold tracking-tight">{stat.value}</p>
            <p className="text-white/50 text-xs uppercase tracking-widest mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
