import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Accountant Castle Hill – GNC Financial",
  description:
    "GNC Financial provides expert accounting and tax services to businesses and individuals in Castle Hill. Local knowledge, professional service, 30+ years experience.",
  path: SLUGS.castleHill,
});

export default function CastleHillPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accountant Castle Hill</h1>
          <p className="text-white/80 text-xl">GNC Financial serving Castle Hill and surrounds</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port from /accountant-castle-hill/ via site teardown */}
          <p>[Castle Hill page content — port in Phase 1]</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
