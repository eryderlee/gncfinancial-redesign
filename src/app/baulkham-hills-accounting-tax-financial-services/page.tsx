import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SERVICES, SLUGS } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Baulkham Hills Accounting, Tax & Financial Advisory Services",
  description:
    "GNC Financial offers comprehensive accounting, tax, bookkeeping, SMSF, and business advisory services in Baulkham Hills and across the Hills District.",
  path: SLUGS.services,
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Baulkham Hills Accounting, Tax &amp; Financial Advisory Services
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Personalised financial services in Baulkham Hills and across the Hills District.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="content-prose max-w-3xl mb-12">
            <p>
              At GNC Financial, our aim is simple: to help you stay compliant, reduce your tax, and grow your financial future with confidence. Our team delivers smart, tailored solutions for individuals, families, tradies, and businesses across Baulkham Hills and the Hills District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.id} href={service.slug} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h2 className="text-2xl font-bold text-brand-navy mb-3">{service.title}</h2>
                  <p className="text-brand-gray-text mb-6 flex-1">{service.summary}</p>
                  <ul className="space-y-2 mb-6">
                    {service.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-gray-text">
                        <span className="text-brand-gold mt-1 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:text-brand-gold transition-colors">
                    View {service.title} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
