import type { Metadata } from "next";
import { pageMeta, faqPageSchema, breadcrumbSchema } from "@/lib/metadata";
import { SLUGS } from "@/lib/constants";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = pageMeta({
  title: "Accounting FAQ – Baulkham Hills Questions Answered",
  description:
    "Common questions about GNC Financial's accounting services in Baulkham Hills — pricing, software, crypto tax, tax returns, lodgment deadlines, and more.",
  path: SLUGS.faq,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={faqPageSchema} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "FAQ", url: SLUGS.faq }])} />
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Baulkham Hills Accounting FAQ</h1>
          <p className="text-white/80 text-xl">Everything you need to know about working with GNC Financial</p>
        </div>
      </section>

      <FAQ />
      <CTA />
    </>
  );
}
