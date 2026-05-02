import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar } from "lucide-react";
import HeroContactForm from "@/components/sections/HeroContactForm";

// Phase 2 TODO: Replace layout, imagery, and form treatment per VISUAL_PLAN.md

export default function Hero() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline + CTAs */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              GNC Financial –{" "}
              <span className="text-brand-gold">Your Local Accountant</span>{" "}
              in Baulkham Hills
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Expert accounting, tax, and financial advisory services for individuals,
              tradies, and small businesses across the Hills District. Over 30 years of
              honest, straight-shooting advice.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={SLUGS.contact}>
                <Button variant="primary" size="lg">
                  <Calendar className="w-5 h-5" />
                  Make Appointment
                </Button>
              </Link>
              <a href={SITE.phoneHref}>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-brand-navy">
                  <Phone className="w-5 h-5" />
                  {SITE.phone}
                </Button>
              </a>
            </div>
          </div>

          {/* Right: quick contact form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h2 className="text-brand-navy text-xl font-semibold mb-6">
              Request an Appointment
            </h2>
            <HeroContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
