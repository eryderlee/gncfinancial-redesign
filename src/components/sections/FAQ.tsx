"use client";

import { useState } from "react";
import { FAQS } from "@/lib/constants";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Common Questions About Our Accounting Services
          </h2>
        </div>

        <dl className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                <dt>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-brand-navy hover:bg-brand-cream transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 flex-shrink-0 transition-transform",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                </dt>
                {isOpen && (
                  <dd className="px-6 py-4 bg-brand-cream text-brand-gray-text text-sm leading-relaxed">
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
