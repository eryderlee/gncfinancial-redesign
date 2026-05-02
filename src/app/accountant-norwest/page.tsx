import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Accountant Norwest – GNC Financial",
  description:
    "GNC Financial is based at Norwest Business Park, providing accounting and tax services to businesses in Norwest and across the Hills District.",
  path: SLUGS.norwest,
});

export default function NorwestPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accountant Norwest</h1>
          <p className="text-white/80 text-xl">GNC Financial at Norwest Business Park</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port from /accountant-norwest/ */}
          <p>[Norwest page content — port in Phase 1]</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
