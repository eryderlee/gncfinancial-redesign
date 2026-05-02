import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SERVICES, SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "SMSF Accounting Services Baulkham Hills – GNC Financial",
  description:
    "Expert SMSF accounting and compliance in Baulkham Hills. Annual statements, tax returns, audit coordination, and ATO compliance for self-managed super funds.",
  path: SLUGS.smsf,
});

const service = SERVICES.find((s) => s.id === "smsf")!;

export default function SMSFPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">SMSF Accounting Services Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">{service.summary}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port full content from /smsf-accounting-services-baulkham-hills/ */}
          <h2>SMSF Experts Who Know Their Stuff</h2>
          <p>Self-managed super funds can be great for building wealth, but they come with strict rules. Get it wrong and you'll cop penalties from the ATO. Our SMSF specialists provide complete fund administration, ensuring you tick every ATO compliance box.</p>
          <p>We'll help you build wealth for retirement in the most tax-effective way possible.</p>
          <h3>What's Included</h3>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <CTA heading="Let's Talk About Your Super Fund" />
    </>
  );
}
