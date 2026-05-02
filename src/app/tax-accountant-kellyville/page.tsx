import type { Metadata } from "next";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Tax Accountant Kellyville – GNC Financial",
  description:
    "Expert tax accountant serving Kellyville. Individual and business tax returns, BAS, GST, tax planning, and ATO compliance for Kellyville residents and businesses. GNC Financial — Hills District's local accounting firm.",
  path: SLUGS.taxKellyville,
});

export default function TaxKellyvillePage() {
  return (
    <>
      <JsonLd schema={serviceSchema("Tax Accountant Kellyville", "Individual and business tax returns, GST, BAS, and year-round tax planning for Kellyville residents and businesses.", SLUGS.taxKellyville)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }, { name: "Tax Accountant Kellyville", url: SLUGS.taxKellyville }])} />

      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tax Accountant Kellyville</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Professional tax services for Kellyville residents and businesses — backed by 30+ years of Hills District expertise.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            Kellyville is one of the Hills District&rsquo;s fastest-growing suburbs, and GNC Financial
            has been serving clients here for over 30 years. Based at Norwest Business Park in
            Baulkham Hills — just a short drive from Kellyville — we provide expert tax accounting
            for Kellyville residents, families, tradies, and small businesses.
          </p>
          <p>
            Whether you need a straightforward individual tax return, comprehensive business tax
            compliance, or year-round strategic tax planning, our experienced team delivers
            professional results with personalised service. You&rsquo;ll always deal directly with a
            qualified accountant who knows your situation — not get passed around between staff.
          </p>

          <h2>Tax Services for Kellyville Clients</h2>
          <ul>
            <li>Individual tax returns — every deduction claimed, maximum refund</li>
            <li>Business tax returns — company, trust, partnership, sole trader</li>
            <li>GST registration, BAS preparation and lodgment</li>
            <li>PAYG and payroll tax compliance</li>
            <li>Capital gains tax advice — investment properties, shares, crypto</li>
            <li>Fringe benefits tax returns</li>
            <li>Year-round tax planning to reduce your annual tax bill</li>
            <li>ATO audit support and representation</li>
          </ul>

          <h2>Individual Tax Returns for Kellyville Residents</h2>
          <p>
            Kellyville has seen significant residential growth in recent years, attracting families
            and professionals who often have complex tax situations involving investment properties,
            rental income, share portfolios, and a wide range of work-related deductions. GNC Financial
            handles all of this with ease.
          </p>
          <p>
            We take the time to understand your complete financial picture before preparing your
            return — looking at everything from standard employment income and work deductions
            through to rental property schedules, capital gains events, and superannuation
            contributions. Most Kellyville residents are surprised by how many legitimate
            deductions they&rsquo;ve been missing.
          </p>

          <h2>Tax for Kellyville Tradies &amp; Small Businesses</h2>
          <p>
            The rapid residential development in Kellyville and surrounds has created strong demand
            for trade services — builders, electricians, plumbers, landscapers, and others serving
            the growing community. GNC Financial works extensively with tradies operating across
            Kellyville, Rouse Hill, Stanhope Gardens, and the wider Hills District.
          </p>
          <p>
            We understand the tax obligations for trade businesses: vehicle and equipment expenses,
            tools and materials, subcontractor payment summaries (TPARs), superannuation for
            employees, workers compensation, and the quarterly BAS cycle. We&rsquo;ll keep everything
            compliant while making sure you&rsquo;re claiming every legitimate deduction.
          </p>
          <p>
            For small businesses in Kellyville — whether retail, hospitality, professional services,
            or anything in between — we provide complete tax compliance plus the kind of strategic
            tax advice that saves you money year after year.
          </p>

          <h2>Investment Property Tax for Kellyville Investors</h2>
          <p>
            Kellyville&rsquo;s strong capital growth has made it popular with property investors.
            If you own an investment property in Kellyville or elsewhere in Sydney, getting
            your tax right is critical. Depreciation claims on relatively new Kellyville homes
            can be substantial, and negative gearing can significantly reduce your taxable income
            if claimed correctly.
          </p>
          <p>
            GNC Financial prepares investment property tax schedules accurately, maximises your
            depreciation claims (we can refer you to a quantity surveyor if needed), and plans
            the eventual sale to minimise capital gains tax. We also advise on the tax implications
            of buying or selling in the current market.
          </p>

          <h2>Year-Round Tax Planning for Kellyville Clients</h2>
          <p>
            Good tax outcomes are built throughout the year, not assembled in a rush at the end
            of June. As your <strong>tax accountant in Kellyville</strong>, we&rsquo;ll work with you
            year-round to identify opportunities to reduce your tax — through superannuation
            strategies, trust distribution planning, asset purchase timing, and business
            structuring decisions that deliver real savings.
          </p>
          <p>
            We also make sure you never get caught out by{" "}
            <a href="https://www.ato.gov.au/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-brand-gold">ATO</a>{" "}
            changes or missed lodgment deadlines.
            We track every obligation for our clients and handle all ATO correspondence on your behalf.
          </p>

          <h2>Getting to Our Office from Kellyville</h2>
          <p>
            Our office is at Level 5, Nexus Building, Norwest Business Park, Baulkham Hills —
            approximately 10–15 minutes from Kellyville via Windsor Road or Samantha Riley Drive.
            Parking is available on-site. We also offer video call appointments for clients who
            prefer to meet from home or work.
          </p>

          <h2>Also Serving Nearby Suburbs</h2>
          <p>
            In addition to Kellyville, GNC Financial serves clients across the Hills District,
            including{" "}
            <Link href={SLUGS.home}>Baulkham Hills</Link>,{" "}
            <Link href={SLUGS.taxCastleHill}>Castle Hill</Link>,{" "}
            <Link href={SLUGS.norwest}>Norwest</Link>,{" "}
            Rouse Hill, Stanhope Gardens, Bella Vista, and beyond.
          </p>
          <p>
            Need more than just tax? See our{" "}
            <Link href={SLUGS.smallBusiness}>small business accounting</Link>,{" "}
            <Link href={SLUGS.smsf}>SMSF accounting</Link>, and{" "}
            <Link href={SLUGS.financialAdvisor}>financial advisory services</Link>.
          </p>
          <p>
            Call <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link> — no obligation.
          </p>
        </div>
      </section>

      <CTA heading="Tax Accountant Near Kellyville" body="GNC Financial at Norwest Business Park — expert local tax advice for Kellyville residents and businesses. Book your free consultation today." />
    </>
  );
}
