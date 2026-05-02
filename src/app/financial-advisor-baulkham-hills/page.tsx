import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SERVICES, SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Financial Advisor Baulkham Hills – GNC Financial",
  description:
    "Comprehensive financial advisory services in Baulkham Hills. Investment property tax, estate planning, crypto tax, workers compensation, and strategic financial guidance.",
  path: SLUGS.financialAdvisor,
});

const service = SERVICES.find((s) => s.id === "financial-advisory")!;

export default function FinancialAdvisorPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Financial Advisor Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">{service.summary}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port full content from /financial-advisor-baulkham-hills/ */}
          <h2>Strategic Financial Guidance for Everyday Australians</h2>
          <p>Whether you have an investment property, a self-managed super fund, or crypto assets, getting the right financial advice can make a significant difference to your wealth-building strategy and tax position.</p>
          <h3>What We Cover</h3>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <CTA heading="Get Expert Financial Advice" />
    </>
  );
}
