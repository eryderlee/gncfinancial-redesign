import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Accountant Norwest – GNC Financial",
  description:
    "GNC Financial is based at Norwest Business Park, providing expert accounting and tax services to businesses and individuals in Norwest and across the Hills District.",
  path: SLUGS.norwest,
});

export default function NorwestPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accountant Norwest</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            GNC Financial at Norwest Business Park — your local accounting experts for over 30 years.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            Looking for an accountant in Norwest? You don&rsquo;t have to look far. GNC Financial is
            based right at Norwest Business Park (Level 5, Nexus Building), putting us at the
            heart of one of Sydney&rsquo;s most dynamic business precincts. We&rsquo;ve been serving Norwest
            businesses and residents for over 30 years, and we understand the unique accounting
            and financial needs of the Norwest community.
          </p>
          <p>
            Whether you&rsquo;re a business based at Norwest Business Park, a professional working
            locally, a tradie serving the Norwest residential estate, or an individual who lives
            nearby, GNC Financial provides the full range of accounting and financial services
            you need.
          </p>

          <h2>Accounting Services for Norwest</h2>
          <ul>
            <li>
              <Link href={SLUGS.tax}>Tax returns</Link> for individuals, sole traders, companies,
              trusts, and partnerships
            </li>
            <li>Proactive tax planning to minimise your annual tax bill</li>
            <li>GST, BAS, PAYG, and payroll compliance</li>
            <li>
              <Link href={SLUGS.smallBusiness}>Small business accounting</Link> — bookkeeping,
              financial statements, and management reporting
            </li>
            <li>Business structuring advice for Norwest start-ups and growing businesses</li>
            <li>
              <Link href={SLUGS.smsf}>SMSF accounting and compliance</Link>
            </li>
            <li>
              <Link href={SLUGS.financialAdvisor}>Investment property tax advice</Link> and
              capital gains tax
            </li>
            <li>Crypto tax help</li>
            <li>Cloud accounting in Xero, MYOB, and QuickBooks</li>
          </ul>

          <h2>Accounting for Norwest Business Park Companies</h2>
          <p>
            Norwest Business Park is home to a huge range of businesses — from multinationals
            with local offices to boutique professional services firms, medical practices, tech
            companies, and everything in between. GNC Financial works with businesses of all
            sizes at Norwest Business Park, providing the accounting and advisory support they
            need to operate efficiently and grow.
          </p>
          <p>
            Being based at Norwest means we can meet face-to-face at short notice. We understand
            the Norwest business environment, we know many of the other businesses operating here,
            and we can provide the kind of localised advice that a remote firm simply can&rsquo;t match.
          </p>

          <h2>Individual Tax Returns for Norwest Residents</h2>
          <p>
            The Norwest residential estate and surrounding suburbs house thousands of families
            who need reliable, affordable tax return services. GNC Financial makes your annual
            tax return straightforward — we maximise your deductions, lodge your return accurately,
            and keep everything above board with the ATO.
          </p>
          <p>
            If you have an investment property, shares, super contributions, or work-related
            expenses to claim, we&rsquo;ll make sure everything is correctly reported and you get
            the maximum refund you&rsquo;re entitled to.
          </p>

          <h2>Conveniently Located for Norwest Clients</h2>
          <p>
            Our office is at Level 5, Nexus Building, Norwest Business Park. Easily accessible
            from Norwest, Bella Vista, Baulkham Hills, and all surrounding suburbs. Parking
            is available on-site. We also offer video call appointments for clients who prefer
            to meet online.
          </p>
          <p>
            Also serving:{" "}
            <Link href={SLUGS.home}>Baulkham Hills</Link>,{" "}
            <Link href={SLUGS.castleHill}>Castle Hill</Link>, and the{" "}
            <Link href={SLUGS.hillsDistrict}>Hills District</Link>.
          </p>
          <p>
            Call <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book your free consultation</Link> online.
          </p>
        </div>
      </section>

      <CTA heading="Norwest&rsquo;s Local Accounting Team" body="Right here at Norwest Business Park. Book a free, no-obligation chat with GNC Financial and find out how we can help your business and personal finances." />
    </>
  );
}
