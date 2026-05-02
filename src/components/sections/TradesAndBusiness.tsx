import Link from "next/link";
import { SLUGS } from "@/lib/constants";

export default function TradesAndBusiness() {
  return (
    <section className="py-20 bg-white" aria-labelledby="tradies-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2
            id="tradies-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6"
          >
            Accountant Baulkham Hills for Tradies &amp; Small Business Owners
          </h2>
          <p className="text-brand-gray-text leading-relaxed">
            Running a small business in Sydney is no walk in the park. Between chasing
            payments, managing staff, and actually doing the work, the last thing you need
            is accounting headaches. That&rsquo;s where GNC Financial comes in. We handle the
            numbers so you can focus on what you do best.
          </p>
        </div>

        {/* Bookkeeping subsection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* [real photo needed] alt: "experienced accountant Baulkham Hills" */}
          <div className="bg-brand-cream rounded-2xl aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
            <span className="text-sm text-brand-gray-text">Experienced accountant photo — Phase 2</span>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Bookkeeping That Doesn&rsquo;t Do Your Head In
            </h3>
            <div className="space-y-4 text-brand-gray-text leading-relaxed">
              <p>
                Bookkeeping is crucial if you want to stay on top of your finances and keep
                the Australian Taxation Office (ATO) happy. Our accounting services in
                Baulkham Hills include professional bookkeeping to keep your records clean,
                accurate, and compliant with all ATO requirements.
              </p>
              <p>
                We work with the best cloud accounting software, such as Xero, MYOB, and
                QuickBooks Online, so you can check your finances from your phone, tablet,
                or laptop, wherever you are. Whether you need us to do everything or just
                want some help getting set up, we&rsquo;ll tailor our services to suit your
                needs and budget.
              </p>
            </div>
          </div>
        </div>

        {/* Tax Planning subsection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Tax Planning That Actually Saves You Money
            </h3>
            <div className="space-y-4 text-brand-gray-text leading-relaxed">
              <p>
                Smart tax planning is more than just claiming all your deductions at tax
                time. It&rsquo;s about setting up your business properly, making strategic
                decisions throughout the year, and using every legitimate strategy available
                to minimise your tax bill.
              </p>
              <p>
                As an{" "}
                <Link
                  href={SLUGS.tax}
                  className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-gold transition-colors"
                >
                  experienced tax accountant in Baulkham Hills
                </Link>
                , GNC Financial stays on top of all the latest ATO rules and tax changes so
                you don&rsquo;t have to. We&rsquo;ll work with you year-round to identify opportunities
                to save tax, structure things the right way, and make sure you never get
                caught out by surprise tax bills.
              </p>
              <p>
                Our proactive approach means you&rsquo;ll always know where you stand financially
                and can make decisions with confidence. No nasty surprises, no last-minute
                scrambles, just solid planning that keeps more money in your business.
              </p>
            </div>
          </div>
          {/* [real photo needed] alt: "reliable bookkeeping support Baulkham Hills" */}
          <div className="bg-brand-cream rounded-2xl aspect-[4/3] flex items-center justify-center">
            <span className="text-sm text-brand-gray-text">Bookkeeping support photo — Phase 2</span>
          </div>
        </div>

        {/* Business Advisory subsection */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* [real photo needed] alt: "GNC Financial bookkeeping services" */}
          <div className="bg-brand-cream rounded-2xl aspect-[4/3] flex items-center justify-center order-2 lg:order-1">
            <span className="text-sm text-brand-gray-text">GNC Financial bookkeeping photo — Phase 2</span>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Business Advisory That Helps You Grow
            </h3>
            <div className="space-y-4 text-brand-gray-text leading-relaxed">
              <p>
                The best businesses in Baulkham Hills don&rsquo;t just keep accurate books; they
                use their financial data to make smart decisions and grow strategically. Our
                business advisory services go beyond traditional accounting to help you:
              </p>
              <ul className="space-y-2 pl-4">
                {[
                  "Set realistic financial goals and track your progress",
                  "Find ways to boost your profitability",
                  "Manage your cash flow better",
                  "Prepare for expansion or eventually selling your business",
                  "Navigate tough economic times",
                  "Access funding when you need it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-brand-gold mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Whether you&rsquo;re just starting out or you&rsquo;ve been in business for years, we
                provide practical advice and real support to help you succeed. No technical
                jargon or corporate speak. Just straight-shooting guidance from people who
                genuinely want to see you do well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
