import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Phone, Calendar } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// Phase 1: Structurally faithful hero — content matches live site.
// Phase 2: Replace layout, imagery, and form treatment per VISUAL_PLAN.md
// ─────────────────────────────────────────────────────────────

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
          {/* Phase 2 TODO: replace with image/split layout per VISUAL_PLAN.md */}
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

function HeroContactForm() {
  // Phase 1: static form — wire to server action or API route in technical phase
  return (
    <form className="space-y-4" aria-label="Contact form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="hero-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="hero-name"
            type="text"
            placeholder="Your full name"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="hero-email"
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
            required
          />
        </div>
        <div>
          <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="hero-phone"
            type="tel"
            placeholder="Your phone number"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="hero-date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            id="hero-date"
            type="date"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="hero-message" className="block text-sm font-medium text-gray-700 mb-1">
          Any special requests
        </label>
        <textarea
          id="hero-message"
          rows={3}
          placeholder="Tell us what you need help with..."
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brand-gold text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
      >
        Send Request
      </button>
    </form>
  );
}
