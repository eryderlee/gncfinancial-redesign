import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";

export const metadata: Metadata = pageMeta({
  title: "Disclaimer – GNC Financial",
  description: "Legal disclaimer for GNC Financial services and website content.",
  path: "/disclaimer",
  noIndex: true,
});

export default function DisclaimerPage() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Disclaimer</h1>
        {/* Phase 1 TODO: port disclaimer content from live site */}
        <p>[Disclaimer content — port from live site in Phase 1]</p>
      </div>
    </section>
  );
}
