import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS, SITE, INDUSTRIES } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Accountant Hills District – GNC Financial",
  description:
    "GNC Financial provides expert accounting, tax, and financial advisory services across the Hills District including Baulkham Hills, Castle Hill, Norwest, Kellyville, and more. 30+ years local experience.",
  path: SLUGS.hillsDistrict,
});

export default function HillsDistrictPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accountant Hills District</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Serving the entire Hills District for over 30 years — Baulkham Hills, Castle Hill, Norwest, Kellyville, and beyond.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            GNC Financial is the Hills District&rsquo;s local accounting firm. Based at Norwest Business
            Park in Baulkham Hills, we&rsquo;ve been helping individuals, families, tradies, and businesses
            across the Hills District for over 30 years. From Castle Hill to Kellyville, Bella Vista
            to Rouse Hill, we know this community because we&rsquo;re part of it.
          </p>
          <p>
            The Hills District is one of Sydney&rsquo;s fastest-growing regions — a mix of established
            suburbs and rapidly developing residential and commercial precincts. We understand the
            local business environment, the property market, and the unique financial challenges
            facing Hills District residents and business owners.
          </p>

          <h2>Accounting Services Across the Hills District</h2>
          <p>
            GNC Financial provides the full range of accounting, tax, and financial advisory services
            to clients throughout the Hills District:
          </p>
          <ul>
            <li>
              <Link href={SLUGS.tax}>Tax returns</Link> — individual, company, trust, partnership,
              and sole trader
            </li>
            <li>Year-round tax planning and ATO compliance</li>
            <li>GST, BAS, PAYG, and payroll tax</li>
            <li>
              <Link href={SLUGS.smallBusiness}>Small business accounting</Link> — bookkeeping,
              financial statements, management reporting
            </li>
            <li>Business structuring and start-up advice</li>
            <li>Cash flow management and business growth advisory</li>
            <li>
              <Link href={SLUGS.smsf}>SMSF accounting and compliance</Link>
            </li>
            <li>
              <Link href={SLUGS.financialAdvisor}>Investment property tax</Link> and estate
              planning
            </li>
            <li>Crypto tax</li>
            <li>Cloud accounting — Xero, MYOB, and QuickBooks</li>
          </ul>

          <h2>Suburbs We Serve Across the Hills District</h2>
          <p>
            Our clients come from right across the Hills District and greater north-west Sydney,
            including:
          </p>
          <ul>
            <li>
              <Link href={SLUGS.home}>Baulkham Hills</Link> — our home base
            </li>
            <li>
              <Link href={SLUGS.castleHill}>Castle Hill</Link> — tradies, retail, professional
              services, and families
            </li>
            <li>
              <Link href={SLUGS.norwest}>Norwest</Link> — Norwest Business Park and surrounding
              residential areas
            </li>
            <li>Bella Vista — growing residential and commercial precinct</li>
            <li>Kellyville — one of the district&rsquo;s fastest-growing suburbs</li>
            <li>Rouse Hill — new residential growth area with a busy town centre</li>
            <li>Winston Hills — established residential suburb</li>
            <li>Seven Hills — businesses and individuals along the Old Windsor Road corridor</li>
            <li>Blacktown — western Hills District clients</li>
            <li>Parramatta — clients working in the CBD who prefer a Hills District accountant</li>
          </ul>

          <h2>Industries We Work With Across the Hills District</h2>
          <p>
            The Hills District is home to a diverse business community. GNC Financial works
            with businesses across a wide range of industries:
          </p>
          <ul>
            {INDUSTRIES.map((ind) => (
              <li key={ind.label}>
                <strong>{ind.label}:</strong> {ind.description}
              </li>
            ))}
          </ul>
          <p>
            No matter what industry you&rsquo;re in, we have the expertise to understand your specific
            challenges and provide practical accounting solutions that work for your business.
          </p>

          <h2>Why Hills District Businesses Choose GNC Financial</h2>
          <p>
            We&rsquo;re not a faceless national firm with a call centre. We&rsquo;re local — your accountant
            knows the Hills District because they live and work here. That means advice that&rsquo;s
            relevant to your actual situation, not generic advice that could apply anywhere in
            Australia.
          </p>
          <p>
            With over 30 years in the Hills District, we&rsquo;ve built long-term relationships with
            hundreds of local businesses and families. Many of our clients have been with us for
            decades — not because they have to be, but because we deliver real results and they
            trust us with their finances.
          </p>
          <p>
            Call <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link> — no obligation,
            no hard sell.
          </p>
        </div>
      </section>

      <CTA heading="Hills District Accounting – Done Right" body="From Baulkham Hills to Rouse Hill, GNC Financial has been the Hills District's trusted local accounting firm for over 30 years. Let's talk." />
    </>
  );
}
