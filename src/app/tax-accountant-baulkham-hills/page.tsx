import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SERVICES, SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Tax Accountant Baulkham Hills – GNC Financial",
  description:
    "Expert tax accountant in Baulkham Hills. Individual and business tax returns, GST, BAS, PAYG, capital gains, fringe benefits, and year-round tax planning to minimise your bill.",
  path: SLUGS.tax,
});

const service = SERVICES.find((s) => s.id === "tax")!;

export default function TaxPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tax Accountant Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">{service.summary}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port full content from /tax-accountant-baulkham-hills/ via site teardown */}
          <h2>Tax Services That Save You Coin</h2>
          <p>Smart tax planning is more than just claiming all your deductions at tax time. It's about setting up your business properly, making strategic decisions throughout the year, and using every legitimate strategy available to minimise your tax bill.</p>
          <p>As an experienced tax accountant in Baulkham Hills, GNC Financial stays on top of all the latest ATO rules and tax changes so you don't have to. We'll work with you year-round to identify opportunities to save tax, structure things the right way, and make sure you never get caught out by surprise tax bills.</p>
          <h3>What We Cover</h3>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <CTA heading="Ready to Stop Overpaying Tax?" />
    </>
  );
}
