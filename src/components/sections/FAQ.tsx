"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-[#1e2f8a]" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Got Questions?
          </p>
          <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Common Questions About Our Accounting Services
          </h2>
        </div>

        <dl className="space-y-3" data-reveal="blur" data-delay="1">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-xl border overflow-hidden transition-all duration-200",
                  isOpen
                    ? "border-white/25 bg-white/8"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                )}
              >
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 text-left font-semibold text-white text-sm sm:text-base"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 flex-shrink-0 text-brand-gold transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-4 sm:px-6 pb-5 text-white/65 text-sm leading-relaxed">
                    {faq.answer}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
