import Link from "next/link";
import { SLUGS } from "@/lib/constants";

const DOLLAR_ITEMS = [
  "Work-related expenses (uniforms, tools, home office setup)",
  "Car and travel expenses",
  "Self-education and training costs",
  "Investment property deductions",
  "Dividend imputation credits",
  "Donations to registered charities",
  "Medical expenses (where applicable)",
];

export default function IndividualsSection() {
  return (
    <section className="py-20 bg-brand-navy" aria-labelledby="individuals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3" data-reveal>
            For Individuals
          </p>
          <h2
            id="individuals-heading"
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            data-reveal
            data-delay="1"
          >
            Tax Agent Baulkham Hills for Everyday Australians
          </h2>
          <p className="text-white/65 leading-relaxed" data-reveal data-delay="2">
            Even if you don&rsquo;t run a business, having a proper tax accountant in Baulkham
            Hills can make tax time stress-free and help you get the biggest refund
            you&rsquo;re entitled to.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="bg-white/8 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            data-reveal
            data-delay="1"
          >
            <div className="h-[3px] bg-brand-gold" />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                Get Every Dollar You&rsquo;re Owed
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Reckon you&rsquo;re claiming every deduction you can? Most Aussies miss out on
                legitimate deductions simply because they don&rsquo;t know what they can claim.
                GNC Financial knows the tax system inside out and will make sure you&rsquo;re
                claiming everything you&rsquo;re entitled to, including:
              </p>
              <ul className="space-y-2 flex-1">
                {DOLLAR_ITEMS.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/55">
                    <span className="text-brand-gold mt-0.5 flex-shrink-0 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-white/65 text-sm leading-relaxed mt-5">
                We&rsquo;ll have a proper look at your whole financial situation, find every
                deduction available, and prepare your tax return accurately to maximise your
                refund while keeping everything above board with the ATO.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white/8 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            data-reveal
            data-delay="2"
          >
            <div className="h-[3px] bg-brand-gold" />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                Investment Property Tax Specialists
              </h3>
              <p className="text-white/65 text-sm leading-relaxed">
                Got an investment property in Baulkham Hills or somewhere else in Sydney?
                Property investing comes with its own tax complications, and getting your
                depreciation schedules, negative gearing, and capital gains calculations right
                is crucial. We specialise in investment property tax and can help you maximise
                your deductions while staying compliant.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white/8 border border-white/10 rounded-2xl overflow-hidden flex flex-col"
            data-reveal
            data-delay="3"
          >
            <div className="h-[3px] bg-brand-gold" />
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-white mb-4">
                SMSF Experts Who Know Their Stuff
              </h3>
              <p className="text-white/65 text-sm leading-relaxed mb-5">
                Self-managed super funds can be great for building wealth, but they come with
                strict rules. Get it wrong and you&rsquo;ll cop penalties from the ATO. Our{" "}
                <Link
                  href={SLUGS.smsf}
                  className="font-semibold text-brand-gold hover:underline underline-offset-2"
                >
                  SMSF specialists
                </Link>{" "}
                provide complete fund administration, including annual financial statements,
                tax returns, audit coordination, and making sure you tick all the ATO&rsquo;s
                boxes.
              </p>
              <p className="text-white/65 text-sm leading-relaxed">
                We&rsquo;ll help you build wealth for retirement in the most tax-effective way possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
