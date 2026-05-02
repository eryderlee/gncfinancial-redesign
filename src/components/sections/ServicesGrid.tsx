import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, Receipt, BookOpen, TrendingUp, ShieldCheck, BarChart3 } from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  "receipt-tax": <Receipt className="w-5 h-5" />,
  "book-open": <BookOpen className="w-5 h-5" />,
  "trending-up": <TrendingUp className="w-5 h-5" />,
  "shield-check": <ShieldCheck className="w-5 h-5" />,
  "chart-bar": <BarChart3 className="w-5 h-5" />,
};

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-[#f0f2ff]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 id="services-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-3">
            Everything Under One Roof – No Mucking About
          </h2>
          <div className="w-12 h-1 bg-brand-gold rounded-full mx-auto mb-4" />
          <p className="text-brand-gray-text max-w-2xl mx-auto">
            Unlike accounting firms that only do the bare minimum, GNC Financial covers
            the whole spectrum of accounting and financial services.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={service.slug}
              className="group"
              data-reveal
              data-delay={String(i + 1)}
            >
              <div className="h-full bg-white rounded-2xl p-7 flex flex-col border-l-4 border-brand-gold hover:border-brand-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm">
                {/* Icon in circle */}
                <div className="w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center mb-5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="font-bold text-brand-navy text-lg mb-3">{service.title}</h3>
                <p className="text-brand-gray-text text-sm leading-relaxed flex-1">
                  {service.summary}
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
