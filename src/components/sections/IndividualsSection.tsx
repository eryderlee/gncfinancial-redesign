import Link from "next/link";
import { SLUGS } from "@/lib/constants";

export default function IndividualsSection() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="individuals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2
            id="individuals-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6"
          >
            Tax Agent Baulkham Hills for Everyday Australians
          </h2>
          <p className="text-brand-gray-text leading-relaxed">
            Even if you don&rsquo;t run a business, having a proper tax accountant in Baulkham
            Hills can make tax time stress-free and help you get the biggest refund
            you&rsquo;re entitled to.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Get Every Dollar */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-4">
              Get Every Dollar You&rsquo;re Owed
            </h3>
            <p className="text-brand-gray-text text-sm leading-relaxed mb-4">
              Reckon you&rsquo;re claiming every deduction you can? Most Aussies miss out on
              legitimate deductions simply because they don&rsquo;t know what they can claim.
              GNC Financial knows the tax system inside out and will make sure you&rsquo;re
              claiming everything you&rsquo;re entitled to, including:
            </p>
            <ul className="space-y-2 mb-4">
              {[
                "Work-related expenses (uniforms, tools, home office setup)",
                "Car and travel expenses",
                "Self-education and training costs",
                "Investment property deductions",
                "Dividend imputation credits",
                "Donations to registered charities",
                "Medical expenses (where applicable)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-brand-gray-text">
                  <span className="text-brand-gold mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-brand-gray-text text-sm leading-relaxed">
              We&rsquo;ll have a proper look at your whole financial situation, find every
              deduction available, and prepare your tax return accurately to maximise your
              refund while keeping everything above board with the ATO.
            </p>
          </div>

          {/* Investment Property */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-4">
              Investment Property Tax Specialists
            </h3>
            <p className="text-brand-gray-text text-sm leading-relaxed">
              Got an investment property in Baulkham Hills or somewhere else in Sydney?
              Property investing comes with its own tax complications, and getting your
              depreciation schedules, negative gearing, and capital gains calculations right
              is crucial. We specialise in investment property tax and can help you maximise
              your deductions while staying compliant.
            </p>
          </div>

          {/* SMSF */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-4">
              SMSF Experts Who Know Their Stuff
            </h3>
            <p className="text-brand-gray-text text-sm leading-relaxed">
              Self-managed super funds can be great for building wealth, but they come with
              strict rules. Get it wrong and you&rsquo;ll cop penalties from the ATO. Our{" "}
              <Link
                href={SLUGS.smsf}
                className="font-semibold text-brand-blue underline underline-offset-2 hover:text-brand-gold transition-colors"
              >
                SMSF specialists
              </Link>{" "}
              provide complete fund administration, including annual financial statements,
              tax returns, audit coordination, and making sure you tick all the ATO&rsquo;s
              boxes. We&rsquo;ll help you build wealth for retirement in the most tax-effective
              way possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
