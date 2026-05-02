import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { ACCREDITATIONS, SLUGS, SITE } from "@/lib/constants";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "About GNC Financial – Baulkham Hills Accounting Experts",
  description:
    "Learn about GNC Financial, your local Baulkham Hills accounting firm with over 30 years of experience providing expert accounting, tax, and financial advisory services.",
  path: SLUGS.about,
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            About GNC Financial – Baulkham Hills
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Over 30 years of honest, straight-shooting accounting advice for locals in the Hills District.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="content-prose">
              <h2>Your Local Baulkham Hills Accounting Firm</h2>
              <p>
                GNC Financial has been helping individuals, families, and businesses across
                Baulkham Hills and the broader Hills District for over 30 years. Based right here
                in the Hills District, we&rsquo;re as local as they come — and that local knowledge makes
                a real difference to the advice we give.
              </p>
              <p>
                We know the businesses around Norwest Business Park, the tradies working across
                Castle Hill and Kellyville, and the families in Baulkham Hills and Bella Vista
                trying to build financial security in an expensive city. Our advice is grounded
                in that context — practical, relevant, and genuinely useful.
              </p>
              <p>
                Over three decades, we&rsquo;ve worked with thousands of clients — from individuals
                lodging their first tax return to established companies with complex structures and
                multi-entity groups. That breadth of experience means whatever your accounting
                challenge, we&rsquo;ve almost certainly dealt with it before.
              </p>

              <h2>The GNC Financial Approach</h2>
              <p>
                Our approach is simple: keep things straightforward, be upfront about costs, and
                actually care about the outcome for our clients. We don&rsquo;t hide behind jargon, we
                don&rsquo;t pad bills with unnecessary work, and we don&rsquo;t pass you off to a junior the
                moment you become a client.
              </p>
              <p>
                You&rsquo;ll deal directly with an experienced accountant who knows your situation.
                We return calls and emails promptly, we make time for meetings when you need them,
                and we proactively reach out throughout the year — not just when your tax return
                is due.
              </p>
              <p>
                We also believe in transparency on pricing. We quote fixed fees for most work before
                we start, so you always know what you&rsquo;re paying. No surprise bills, no time-based
                invoicing where you&rsquo;re afraid to pick up the phone.
              </p>

              <h2>What We Can Help You With</h2>
              <p>
                GNC Financial&rsquo;s services span the full range of accounting, tax, and financial advice:
              </p>
              <ul>
                <li><Link href={SLUGS.tax}>Tax accounting</Link> — individual returns, business returns, tax planning, GST and BAS</li>
                <li><Link href={SLUGS.smallBusiness}>Small business accounting</Link> — bookkeeping, business structuring, cash flow, growth advisory</li>
                <li><Link href={SLUGS.smsf}>SMSF accounting</Link> — annual compliance, tax returns, audit coordination, pension planning</li>
                <li><Link href={SLUGS.financialAdvisor}>Financial advisory</Link> — investment property tax, estate planning, crypto tax</li>
                <li>Cloud accounting — Xero, MYOB, and QuickBooks setup and training</li>
              </ul>
              <p>
                Whether you&rsquo;re an individual who just needs a tax return, a tradie trying to sort
                out their business finances, or a family with an SMSF and investment properties,
                we can help. <Link href={SLUGS.contact}>Get in touch</Link> or call{" "}
                <a href={SITE.phoneHref}>{SITE.phone}</a> to book your free consultation.
              </p>
            </div>

            {/* Phase 2 TODO: replace with real team photo */}
            <div className="bg-brand-cream rounded-2xl aspect-[4/3] flex items-center justify-center sticky top-8">
              <p className="text-brand-gray-text text-sm">Team photo — Phase 2</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-cream" aria-label="Our accreditations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-brand-navy mb-2">
            Accreditations &amp; Memberships
          </h2>
          <p className="text-center text-brand-gray-text text-sm mb-10">
            Qualified, registered, and recognised by Australia&rsquo;s leading professional accounting bodies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {ACCREDITATIONS.map((acc) => (
              <div key={acc.name} className="flex flex-col items-center gap-2">
                <Image
                  src={acc.imageUrl}
                  alt={acc.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
                <span className="text-xs text-brand-gray-text text-center">{acc.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </>
  );
}
