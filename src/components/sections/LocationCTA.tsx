import Link from "next/link";
import { SITE, SLUGS, LOCATIONS } from "@/lib/constants";
import { Calendar, MapPin } from "lucide-react";

export default function LocationCTA() {
  return (
    <section className="py-20 bg-[#f0f2ff]" aria-labelledby="location-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Based in Baulkham Hills
          </p>
          <h2
            id="location-cta-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-3"
          >
            Book Your Chat with GNC Financial Today
          </h2>
          <div className="w-12 h-1 bg-brand-gold rounded-full mb-5" />
          <p className="text-brand-gray-text leading-relaxed max-w-3xl">
            Ready to experience what it&rsquo;s like having a proper accountant who actually
            cares about your success? Whether you need help with your annual tax return,{" "}
            <Link
              href={SLUGS.smallBusiness}
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-gold transition-colors"
            >
              comprehensive business accounting support
            </Link>
            , or{" "}
            <Link
              href={SLUGS.financialAdvisor}
              className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-gold transition-colors"
            >
              strategic financial advice
            </Link>
            , the GNC Financial team in Baulkham Hills is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Service area card */}
          <div
            className="bg-white rounded-2xl p-8 border-l-4 border-brand-navy shadow-sm"
            data-reveal="left"
            data-delay="1"
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-brand-navy flex-shrink-0" />
              <h3 className="text-xl font-bold text-brand-navy">
                Servicing the Hills District
              </h3>
            </div>
            <p className="text-brand-gray-text text-sm leading-relaxed mb-6">
              While we&rsquo;re based in Baulkham Hills, we proudly help clients throughout
              the Hills District and Greater Sydney, including:
            </p>
            <ul className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.name}>
                  {loc.slug ? (
                    <Link
                      href={loc.slug}
                      className="inline-flex items-center text-sm px-3 py-1.5 rounded-full border border-brand-navy/20 text-brand-navy hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-200 font-medium"
                    >
                      {loc.name}
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-sm px-3 py-1.5 rounded-full border border-gray-200 text-brand-gray-text">
                      {loc.name}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA card */}
          <div
            className="relative bg-brand-navy rounded-2xl p-8 text-white flex flex-col justify-between overflow-hidden shadow-xl"
            data-reveal="right"
            data-delay="2"
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 70% 30%, rgba(255,255,255,0.07) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h3 className="text-xl font-bold mb-4">Get Started – No Obligation</h3>
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  Tax time doesn&rsquo;t have to be a nightmare. With the right accountant in
                  Baulkham Hills on your side, you can stay compliant, minimise your tax,
                  and build wealth with confidence.
                </p>
                <p>
                  Let GNC Financial take care of your accounting needs so you can focus
                  on what matters: running your business, spending time with family, and
                  enjoying life.
                </p>
                <p>
                  Call us on{" "}
                  <a
                    href={SITE.phoneHref}
                    className="text-brand-gold font-semibold hover:underline"
                  >
                    {SITE.phone}
                  </a>{" "}
                  or fill out our online form to book your free, no-obligation consultation.
                </p>
              </div>
            </div>
            <div className="mt-8 relative">
              <Link
                href={SLUGS.contact}
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
              >
                <Calendar className="w-5 h-5" />
                Make Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
