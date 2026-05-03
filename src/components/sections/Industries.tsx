import Image from "next/image";
import { INDUSTRIES } from "@/lib/constants";
import CountUp from "@/components/CountUp";

export default function Industries() {
  return (
    <section className="py-14 sm:py-20 bg-white" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left: text + hover pill tags */}
          <div>
            <p
              className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3"
              data-reveal
            >
              Sectors We Serve
            </p>
            <h2
              id="industries-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-3"
              data-reveal
              data-delay="1"
            >
              Industries We Work With in Baulkham Hills
            </h2>
            <div className="w-12 h-1 bg-brand-gold rounded-full mb-5 sm:mb-6" data-reveal data-delay="2" />
            <p className="text-brand-gray-text mb-6 sm:mb-8" data-reveal data-delay="3">
              No matter what industry you&rsquo;re in, we&rsquo;ve got the expertise to understand your
              specific challenges and provide practical accounting solutions that work.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {INDUSTRIES.map((industry, i) => (
                <div
                  key={industry.label}
                  className="group inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-brand-navy/20 bg-white text-brand-navy text-xs sm:text-sm font-medium hover:bg-brand-navy hover:text-white hover:border-brand-navy transition-all duration-250 cursor-default"
                  data-reveal
                  data-delay={String(Math.min(i + 1, 5))}
                >
                  {industry.label}
                  <span className="text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs">
                    →
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: real image with overlay */}
          <div
            className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl"
            data-reveal="scale"
          >
            <Image
              src="/images/sections/financial-advisor.jpg"
              alt="GNC Financial serves businesses across multiple industries in Baulkham Hills"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/20 to-transparent" />
            <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 text-white">
              <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-1">
                Industries Served
              </p>
              <p className="text-4xl sm:text-5xl font-black leading-none">
                <CountUp value="8+" />
              </p>
              <p className="text-white/65 text-xs sm:text-sm mt-1">Sectors Across the Hills District</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
