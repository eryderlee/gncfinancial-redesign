import Link from "next/link";
import { SITE, SLUGS, LOCATIONS } from "@/lib/constants";
import { Calendar } from "lucide-react";

export default function LocationCTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="location-cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2
            id="location-cta-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6"
          >
            Book Your Chat with GNC Financial Today
          </h2>
          <p className="text-brand-gray-text leading-relaxed">
            Ready to experience what it&rsquo;s like having a proper accountant who actually
            cares about your success? Whether you need help with your annual tax return,{" "}
            <Link
              href={SLUGS.smallBusiness}
              className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-gold transition-colors"
            >
              comprehensive business accounting support
            </Link>
            , or{" "}
            <Link
              href={SLUGS.financialAdvisor}
              className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-gold transition-colors"
            >
              strategic financial advice
            </Link>
            , the GNC Financial team in Baulkham Hills is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service area */}
          <div className="bg-brand-cream rounded-2xl p-8">
            <h3 className="text-xl font-bold text-brand-navy mb-4">
              Servicing Baulkham Hills and the Hills District
            </h3>
            <p className="text-brand-gray-text text-sm leading-relaxed mb-6">
              While we&rsquo;re based in Baulkham Hills (Level 5, Nexus Building, Norwest
              Business Park), we proudly help clients throughout the Hills District and
              Greater Sydney, including:
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="text-sm">
                  {loc.slug ? (
                    <Link
                      href={loc.slug}
                      className="text-brand-blue font-medium hover:text-brand-gold transition-colors underline underline-offset-2"
                    >
                      {loc.name}
                    </Link>
                  ) : (
                    <span className="text-brand-gray-text">{loc.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Get started */}
          <div className="bg-brand-navy rounded-2xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Get Started – No Obligation</h3>
              <div className="space-y-4 text-white/80 text-sm leading-relaxed">
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
                  or fill out our online form to book your free, no-obligation
                  consultation.
                </p>
              </div>
            </div>
            <div className="mt-8">
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
