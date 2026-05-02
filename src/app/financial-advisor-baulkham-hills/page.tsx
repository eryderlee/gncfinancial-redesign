import type { Metadata } from "next";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Financial Advisor Baulkham Hills – GNC Financial",
  description:
    "Comprehensive financial advisory services in Baulkham Hills. Investment property tax, estate planning, crypto tax, and strategic financial guidance for individuals and families across the Hills District.",
  path: SLUGS.financialAdvisor,
});

const service = SERVICES.find((s) => s.id === "financial-advisory")!;

export default function FinancialAdvisorPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("Financial Advisory Services Baulkham Hills", service.summary, SLUGS.financialAdvisor)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }, { name: "Financial Advisor", url: SLUGS.financialAdvisor }])} />
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Financial Advisor Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Strategic financial guidance for individuals and families across the Hills District.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            Good financial advice is about more than just tax returns and compliance — it&rsquo;s about
            helping you make smart decisions with your money so you can build real wealth over time.
            GNC Financial&rsquo;s financial advisory services in Baulkham Hills cover the full spectrum of
            personal and business financial planning, from investment property tax to estate planning
            and everything in between.
          </p>
          <p>
            With over 30 years serving clients in the Hills District, we understand the financial
            challenges and opportunities facing everyday Australians — and we provide advice that&rsquo;s
            practical, clear, and genuinely tailored to your situation.
          </p>

          <h2>Our Financial Advisory Services</h2>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Investment Property Tax Specialists</h2>
          <p>
            Property is one of Australia&rsquo;s most popular investment vehicles, but it comes with
            real tax complexity. Getting your depreciation schedules right, claiming negative gearing
            correctly, and understanding your capital gains obligations when you eventually sell can
            make a significant difference to your overall return.
          </p>
          <p>
            Our team has extensive experience in investment property tax across Baulkham Hills and
            greater Sydney. We&rsquo;ll make sure you&rsquo;re claiming every legitimate deduction — interest,
            depreciation, repairs and maintenance, property management fees, insurance, council rates
            — while keeping your records in good order for when the ATO asks questions.
          </p>
          <p>
            If you&rsquo;re buying or selling an investment property, talk to us first. The timing of
            settlements, the use of the 50% CGT discount, and your overall portfolio structure can
            all be optimised with the right advice before you sign contracts.
          </p>

          <h2>Estate Planning Guidance</h2>
          <p>
            Making sure your wealth passes to the right people in the most tax-effective way requires
            careful planning well before it&rsquo;s needed. We work alongside your solicitor to help
            structure your assets, review superannuation beneficiary nominations, consider testamentary
            trusts, and ensure your estate plan aligns with your financial and family goals.
          </p>
          <p>
            Estate planning isn&rsquo;t just for people with large estates — if you own a business, an
            investment property, or have an SMSF, you need to think carefully about what happens to
            those assets and the tax consequences for your beneficiaries.
          </p>

          <h2>Crypto Tax Help</h2>
          <p>
            Cryptocurrency is firmly in the ATO&rsquo;s sights. The ATO treats crypto as a capital asset,
            which means every sale, trade, or use of crypto to purchase goods or services is a
            capital gains tax (CGT) event. Many Aussie investors don&rsquo;t realise the extent of their
            CGT obligations until they&rsquo;ve already made a mess of their records.
          </p>
          <p>
            GNC Financial can help you calculate your crypto gains and losses accurately, apply the
            correct tax treatment to different transaction types (including DeFi, staking rewards,
            and airdrops), and structure your crypto activities in the most tax-effective way. We
            also help clients who have unfiled crypto gains get back on track with the ATO.
          </p>

          <h2>Financial Statements &amp; Management Reports</h2>
          <p>
            Whether you need financial statements for a bank loan, a business sale, or simply to
            understand how your business is tracking, GNC Financial prepares accurate, professional
            financials that give you and third parties a clear picture of your financial position.
          </p>
          <p>
            We also provide management accounting reports designed to help you make better business
            decisions — profitability analysis, budget vs. actuals, cash flow forecasts, and
            benchmarking against industry peers.
          </p>

          <h2>Why Choose GNC Financial for Financial Advice in Baulkham Hills?</h2>
          <p>
            Financial advice means nothing if it&rsquo;s not tailored to your actual situation. We take the
            time to understand your goals, your family circumstances, your risk appetite, and your
            timeline — and then give you advice that&rsquo;s specific to you, not generic textbook answers.
          </p>
          <p>
            Our advice is also grounded in real tax expertise. Because we&rsquo;re accountants first,
            every piece of financial advice we give you has the tax implications already baked in.
            That means no nasty surprises when it comes time to lodge your return.
          </p>
          <p>
            Explore our related services:{" "}
            <Link href={SLUGS.smsf}>SMSF accounting</Link>,{" "}
            <Link href={SLUGS.tax}>tax services</Link>, and{" "}
            <Link href={SLUGS.smallBusiness}>small business accounting</Link>. Ready to chat?
            Call <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link>.
          </p>
        </div>
      </section>

      <CTA heading="Get Expert Financial Advice" body="Ready to make smarter decisions with your money? GNC Financial gives you the strategic guidance to build wealth, minimise tax, and plan for the future with confidence." />
    </>
  );
}
