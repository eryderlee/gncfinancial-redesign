import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Accountant Castle Hill – GNC Financial",
  description:
    "GNC Financial provides expert accounting, tax, and business advisory services to individuals and businesses in Castle Hill. Local Hills District knowledge, 30+ years experience.",
  path: SLUGS.castleHill,
});

export default function CastleHillPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accountant Castle Hill</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Local accounting expertise for Castle Hill individuals, tradies, and businesses.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            If you&rsquo;re looking for a reliable accountant in Castle Hill, GNC Financial is right
            around the corner. Based at Norwest Business Park in the Hills District, we&rsquo;ve been
            serving clients in Castle Hill and the surrounding suburbs for over 30 years. Whether
            you need a tax return, business accounting, SMSF compliance, or financial advice,
            we provide the same high standard of personalised service that Castle Hill locals
            have come to rely on.
          </p>

          <h2>Accounting Services for Castle Hill</h2>
          <p>
            GNC Financial offers a full range of accounting and financial services to Castle Hill
            clients, including:
          </p>
          <ul>
            <li>
              <Link href={SLUGS.tax}>Tax returns</Link> — individual, company, trust, partnership,
              and sole trader lodgments
            </li>
            <li>Tax planning to minimise your annual tax bill throughout the year</li>
            <li>GST, BAS, PAYG, and payroll tax compliance</li>
            <li>
              <Link href={SLUGS.smallBusiness}>Small business accounting</Link> — bookkeeping,
              financial statements, management reports
            </li>
            <li>Business structuring and set-up advice for new Castle Hill businesses</li>
            <li>Cash flow management and business advisory</li>
            <li>
              <Link href={SLUGS.smsf}>SMSF accounting</Link> — annual compliance, tax returns,
              and audit coordination
            </li>
            <li>
              <Link href={SLUGS.financialAdvisor}>Investment property tax</Link> and capital gains
              tax advice
            </li>
            <li>Crypto tax help</li>
            <li>Cloud accounting setup in Xero, MYOB, and QuickBooks</li>
          </ul>

          <h2>Castle Hill Tradies &amp; Small Businesses</h2>
          <p>
            Castle Hill has a thriving small business community — from the shops and restaurants
            at Castle Towers and Castle Hill Marketplace to the trade businesses serving the
            surrounding residential growth areas. GNC Financial understands the accounting
            challenges facing Castle Hill businesses and tradies, and we provide practical,
            no-nonsense advice that helps you stay compliant and keep more of what you earn.
          </p>
          <p>
            We work with builders, sparkies, plumbers, painters, and other tradies operating
            across Castle Hill, Kellyville, Baulkham Hills, and the Hills District. We know
            the unique tax requirements for trade businesses — vehicle expenses, tools and
            equipment, home office, subcontractor payments — and we make sure you&rsquo;re claiming
            everything you&rsquo;re entitled to.
          </p>

          <h2>Individual Tax Returns for Castle Hill Residents</h2>
          <p>
            Tax time doesn&rsquo;t have to be a headache. GNC Financial makes it simple — you provide
            your income documents and details of your deductions, we prepare your return accurately,
            maximise your refund, and lodge it with the ATO. Most individual returns are turned
            around quickly, and we&rsquo;ll keep you updated throughout the process.
          </p>
          <p>
            If you have investment properties, shares, crypto, or other investments, we&rsquo;ll
            make sure the tax treatment is correct and every legitimate deduction is claimed.
          </p>

          <h2>Getting Here from Castle Hill</h2>
          <p>
            Our office is located at Level 5, Nexus Building, Norwest Business Park — just a
            short drive from Castle Hill along Old Windsor Road or Windsor Road. We also offer
            online meetings via video call, so you don&rsquo;t need to come in if it&rsquo;s not convenient.
          </p>
          <p>
            Also serving nearby suburbs:{" "}
            <Link href={SLUGS.home}>Baulkham Hills</Link>,{" "}
            <Link href={SLUGS.norwest}>Norwest</Link>, and across the{" "}
            <Link href={SLUGS.hillsDistrict}>Hills District</Link>.
          </p>
          <p>
            Call us on <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link> — no obligation.
          </p>
        </div>
      </section>

      <CTA heading="Accountant in Castle Hill – Let&rsquo;s Chat" body="GNC Financial is just around the corner from Castle Hill. Get in touch for a free, no-obligation consultation and find out how we can help." />
    </>
  );
}
