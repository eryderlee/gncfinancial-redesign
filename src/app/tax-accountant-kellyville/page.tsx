import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Tax Accountant Kellyville – GNC Financial",
  description:
    "Expert tax accountant serving Kellyville. Individual and business tax returns, BAS, GST, and year-round tax planning for Kellyville residents and businesses.",
  path: SLUGS.taxKellyville,
});

export default function TaxKellyvillePage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tax Accountant Kellyville</h1>
          <p className="text-white/80 text-xl">Expert tax services for Kellyville residents and businesses</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: create 1500+ word page per technical plan recommendations */}
          <p>[Tax accountant Kellyville content — new page to be written in Phase 1]</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
