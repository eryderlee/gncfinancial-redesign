import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Accountant Hills District – GNC Financial",
  description:
    "GNC Financial provides expert accounting, tax, and financial advisory services across the Hills District including Baulkham Hills, Castle Hill, Kellyville, and more.",
  path: SLUGS.hillsDistrict,
});

export default function HillsDistrictPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accountant Hills District</h1>
          <p className="text-white/80 text-xl">Serving the entire Hills District for over 30 years</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port from /accountant-hills-district/ */}
          <p>[Hills District page content — port in Phase 1]</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
