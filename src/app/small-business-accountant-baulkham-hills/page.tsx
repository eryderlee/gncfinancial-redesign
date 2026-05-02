import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SERVICES, SLUGS } from "@/lib/constants";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Small Business Accountant Baulkham Hills – GNC Financial",
  description:
    "Strategic small business accounting and advisory services in Baulkham Hills. Business structuring, growth strategies, cash flow management, and exit planning.",
  path: SLUGS.smallBusiness,
});

const service = SERVICES.find((s) => s.id === "business-advisory")!;

export default function SmallBusinessPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Small Business Accountant Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">{service.summary}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          {/* Phase 1 TODO: port full content from /small-business-accountant-baulkham-hills/ */}
          <h2>Business Advisory That Helps You Grow</h2>
          <p>Running a small business in Sydney is no walk in the park. Between chasing payments, managing staff, and actually doing the work, the last thing you need is accounting headaches. That's where GNC Financial comes in. We handle the numbers so you can focus on what you do best.</p>
          <p>The best businesses don't just keep accurate books — they use their financial data to make smart decisions and grow strategically. Our business advisory services go beyond traditional accounting to help you build a stronger, more profitable business.</p>
          <h3>What We Help With</h3>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <CTA heading="Ready to Grow Your Business?" />
    </>
  );
}
