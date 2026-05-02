import type { Metadata } from "next";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Tax Accountant Castle Hill – GNC Financial",
  description:
    "Expert tax accountant serving Castle Hill. Individual and business tax returns, BAS, GST, tax planning, and ATO compliance for Castle Hill residents and businesses. GNC Financial — Hills District's local accounting firm.",
  path: SLUGS.taxCastleHill,
});

export default function TaxCastleHillPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("Tax Accountant Castle Hill", "Individual and business tax returns, GST, BAS, and year-round tax planning for Castle Hill residents and businesses.", SLUGS.taxCastleHill)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }, { name: "Tax Accountant Castle Hill", url: SLUGS.taxCastleHill }])} />

      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tax Accountant Castle Hill</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Expert tax services for Castle Hill residents, tradies, and businesses — just minutes away at Norwest Business Park.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            Looking for a reliable tax accountant in Castle Hill? GNC Financial is right around the
            corner at Norwest Business Park, Baulkham Hills — just a short drive down Old Windsor Road
            or Windsor Road from Castle Hill. We&rsquo;ve been providing expert tax services to Castle Hill
            residents and businesses for over 30 years, and we know the local area inside out.
          </p>
          <p>
            Whether you&rsquo;re an individual looking to maximise your tax refund, a tradie operating
            across the Hills District, or a business with complex tax obligations, GNC Financial
            delivers professional tax accounting with the personal touch you&rsquo;d expect from a local firm.
          </p>

          <h2>Tax Services for Castle Hill Clients</h2>
          <p>Our tax accounting services for Castle Hill clients include:</p>
          <ul>
            <li>Individual tax returns — maximise your refund, claim every deduction</li>
            <li>Business tax returns — company, trust, partnership, and sole trader</li>
            <li>GST and BAS preparation and lodgment</li>
            <li>PAYG and payroll tax compliance</li>
            <li>Capital gains tax (CGT) advice — property, shares, crypto</li>
            <li>Fringe benefits tax (FBT) returns</li>
            <li>Year-round tax planning to minimise your annual tax bill</li>
            <li>ATO audit support and correspondence handling</li>
          </ul>

          <h2>Individual Tax Returns for Castle Hill Residents</h2>
          <p>
            Castle Hill is home to a large number of professionals, families, and investors — many of
            whom have complex tax returns involving investment properties, share portfolios, SMSFs,
            rental income, and work-related deductions. GNC Financial handles all of these correctly,
            making sure you claim every legitimate deduction and get the maximum refund you&rsquo;re entitled to.
          </p>
          <p>
            Common deductions Castle Hill residents miss include home office costs (particularly since
            remote working became more common), vehicle expenses for work-related travel, self-education
            costs, investment property depreciation, and dividend imputation credits on share portfolios.
            We&rsquo;ll go through your full financial picture and make sure nothing is overlooked.
          </p>

          <h2>Tax Accounting for Castle Hill Businesses &amp; Tradies</h2>
          <p>
            Castle Hill&rsquo;s business community is diverse — from the shops and restaurants at Castle
            Towers to the trade businesses, professional services firms, medical practices, and
            tech companies spread across the suburb. GNC Financial works with businesses of all
            sizes and structures in Castle Hill, providing tax returns, BAS, payroll, and strategic
            tax planning.
          </p>
          <p>
            For tradies working across Castle Hill, Baulkham Hills, Kellyville, and the surrounding
            suburbs, we understand the specific tax issues facing trade businesses — vehicle and
            equipment expenses, subcontractor payments, tools and supplies, home office, and the
            complexities of working through a company or trust structure.
          </p>

          <h2>Year-Round Tax Planning for Castle Hill Clients</h2>
          <p>
            The best tax outcomes don&rsquo;t come from rushing to find deductions at the end of June.
            They come from planning throughout the year — making strategic decisions about asset
            purchases, superannuation contributions, trust distributions, and business structuring
            that reduce your tax bill legitimately and sustainably.
          </p>
          <p>
            As your{" "}
            <strong>tax accountant in Castle Hill</strong>, we&rsquo;ll meet with you regularly, review
            your financial position, and identify opportunities to reduce your tax and improve
            your financial outcomes. We stay on top of every{" "}
            <a href="https://www.ato.gov.au/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-brand-gold">ATO</a>{" "}
            rule change and tax law update so you don&rsquo;t have to.
          </p>

          <h2>Investment Property Tax in Castle Hill</h2>
          <p>
            Castle Hill and the surrounding Hills District have seen strong property price growth,
            making investment property a popular choice for local families. Getting the tax right
            on investment properties — depreciation schedules, negative gearing, capital gains
            on sale, and correct GST treatment on new builds — requires specialist knowledge.
          </p>
          <p>
            GNC Financial specialises in investment property tax and can help Castle Hill investors
            maximise their deductions, prepare depreciation schedules, and plan the eventual sale
            to minimise capital gains tax. If you&rsquo;re buying a property, talk to us before you
            sign — the right structuring decisions at purchase can save you significantly over time.
          </p>

          <h2>Getting to Our Office from Castle Hill</h2>
          <p>
            Our office is at Level 5, Nexus Building, Norwest Business Park — accessible from
            Castle Hill via Old Windsor Road or Windsor Road (approximately 10 minutes by car).
            Plenty of on-site parking is available. We also offer video call appointments for
            clients who prefer to meet online.
          </p>

          <h2>Also Serving Nearby Suburbs</h2>
          <p>
            As well as Castle Hill, GNC Financial provides tax services to clients across the
            Hills District, including{" "}
            <Link href={SLUGS.home}>Baulkham Hills</Link>,{" "}
            <Link href={SLUGS.norwest}>Norwest</Link>,{" "}
            <Link href={SLUGS.taxKellyville}>Kellyville</Link>,{" "}
            Bella Vista, Winston Hills, Rouse Hill, and beyond.
          </p>
          <p>
            Need more than just tax? See our{" "}
            <Link href={SLUGS.castleHill}>full accounting services for Castle Hill</Link>,{" "}
            <Link href={SLUGS.smsf}>SMSF accounting</Link>, and{" "}
            <Link href={SLUGS.smallBusiness}>small business accounting</Link>.
          </p>
          <p>
            Call us on <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link> — no obligation.
          </p>
        </div>
      </section>

      <CTA heading="Tax Accountant Near Castle Hill" body="GNC Financial at Norwest Business Park — expert tax advice just minutes from Castle Hill. Book your free consultation today." />
    </>
  );
}
