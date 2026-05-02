import type { Metadata } from "next";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Small Business Accountant Baulkham Hills – GNC Financial",
  description:
    "Expert small business accounting in Baulkham Hills. Business structuring, bookkeeping, cash flow management, tax planning, growth strategies, and exit planning for Hills District businesses.",
  path: SLUGS.smallBusiness,
});

const service = SERVICES.find((s) => s.id === "business-advisory")!;

export default function SmallBusinessPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("Small Business Accounting Baulkham Hills", service.summary, SLUGS.smallBusiness)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }, { name: "Small Business Accountant", url: SLUGS.smallBusiness }])} />
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Small Business Accountant Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Accounting and business advisory services built around what small businesses in the Hills District actually need.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            Running a small business in Sydney&rsquo;s Hills District is no easy feat. Between chasing
            invoices, managing staff, dealing with suppliers, and actually doing the work you love,
            the last thing you need is to be drowning in accounting headaches. That&rsquo;s where GNC
            Financial comes in. We handle the numbers so you can focus on building your business.
          </p>
          <p>
            GNC Financial has been the small business accountant of choice in Baulkham Hills for
            over 30 years. We work with sole traders, partnerships, companies, and trusts across
            a wide range of industries — from tradies and professional services to retail, hospitality,
            tech, and healthcare. Whatever your business looks like, we&rsquo;ve worked with someone
            just like you.
          </p>

          <h2>Small Business Services We Provide</h2>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Getting Your Business Structure Right from Day One</h2>
          <p>
            One of the most important decisions you&rsquo;ll make as a business owner is how to structure
            your business. Sole trader, company, trust, or partnership — each has different tax
            implications, liability protections, and asset protection characteristics. Getting this
            wrong in the early days can cost you significantly more in tax down the track.
          </p>
          <p>
            GNC Financial will walk you through the options based on your specific situation — your
            income level, family circumstances, growth plans, and long-term goals — and help you
            set up the right structure from the start. If you&rsquo;re already operating and suspect your
            structure isn&rsquo;t optimal, we can review it and advise on the best way to restructure.
          </p>

          <h2>Bookkeeping That Keeps You in Control</h2>
          <p>
            Clean books are the foundation of good business decisions. If your financial records
            are a mess, you don&rsquo;t know how profitable you really are, you can&rsquo;t make confident
            decisions about growth, and the{" "}
            <a href="https://www.ato.gov.au/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-brand-gold">ATO</a>{" "}
            will have a field day in an audit.
          </p>
          <p>
            Our bookkeeping services in Baulkham Hills keep your accounts up to date, your
            reconciliations done regularly, and your records clean and ATO-ready. We work with
            Xero, MYOB, and QuickBooks Online — whatever you&rsquo;re already using, or we can help
            you migrate to the right platform for your business.
          </p>

          <h2>Cash Flow Management – Know Where Your Money Is Going</h2>
          <p>
            More small businesses fail because of cash flow problems than because they&rsquo;re not
            profitable. You can be winning new clients every week and still run out of cash if
            your payment terms are too long, your outgoings are poorly timed, or your tax bills
            arrive without warning.
          </p>
          <p>
            GNC Financial helps you manage your cash flow proactively — preparing cash flow
            forecasts, identifying potential cash crunches before they hit, structuring your tax
            instalments to avoid lump-sum payments, and advising on debtor management and payment
            terms. You&rsquo;ll always know what&rsquo;s coming and have enough time to plan.
          </p>

          <h2>Tax Planning for Small Business Owners</h2>
          <p>
            Small business owners have access to a range of tax concessions and strategies that
            most employees don&rsquo;t — but only if you know what you&rsquo;re doing and plan ahead. The small
            business CGT concessions, instant asset write-offs, superannuation strategies, trust
            distributions, Division 7A loan management — these are all opportunities to legitimately
            reduce your tax bill.
          </p>
          <p>
            As your{" "}
            <Link href={SLUGS.tax}>tax accountant in Baulkham Hills</Link>, we work with you
            year-round to identify and implement the right strategies for your business. No
            last-minute scrambles at 30 June — just sensible, proactive planning throughout the year.
          </p>

          <h2>Growth Strategies &amp; Business Advisory</h2>
          <p>
            The best businesses don&rsquo;t just track their numbers — they use them to drive smarter
            decisions. GNC Financial goes beyond traditional accounting to provide genuine business
            advisory support: analysing your financials, benchmarking your performance against
            industry peers, identifying growth opportunities, and helping you build a more
            profitable, efficient business.
          </p>
          <p>
            Whether you want to grow faster, become more profitable, or prepare for eventually
            selling the business, we provide the strategic input and financial modelling to help
            you get there.
          </p>

          <h2>Exit Planning – Maximising What You Get When You Sell</h2>
          <p>
            When the time comes to sell your business, the way you&rsquo;ve structured it, run it, and
            prepared the financials will have a massive impact on the price you achieve and the
            tax you pay on the proceeds. Smart exit planning starts years before the sale, not
            months.
          </p>
          <p>
            GNC Financial helps business owners plan their exit from the beginning — ensuring your
            books are in order, your structure is optimised for a sale, and you&rsquo;re taking full
            advantage of the small business CGT concessions that could potentially make a large
            portion of your capital gain completely tax-free.
          </p>

          <h2>Why Baulkham Hills Small Business Owners Choose GNC Financial</h2>
          <p>
            We&rsquo;ve been working with small businesses in the Hills District for over three decades.
            We know the local business community, we understand the challenges facing businesses
            here, and we genuinely care about our clients&rsquo; success. You&rsquo;ll always deal with a
            senior accountant who knows your business — not get passed around between different
            staff every time you call.
          </p>
          <p>
            Our transparent fixed-fee pricing means you always know what you&rsquo;re paying, with no
            surprise invoices at year-end. And because we use modern cloud accounting tools, we
            can work with you in real-time, giving you up-to-date financial data whenever you
            need it.
          </p>
          <p>
            Also explore our{" "}
            <Link href={SLUGS.tax}>tax services</Link>,{" "}
            <Link href={SLUGS.financialAdvisor}>financial advisory services</Link>, and{" "}
            <Link href={SLUGS.smsf}>SMSF accounting</Link>. Ready to get started?
            Call <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link>.
          </p>
        </div>
      </section>

      <CTA heading="Ready to Grow Your Business?" body="Stop letting accounting get in the way of building your business. GNC Financial handles the numbers so you can focus on what you do best." />
    </>
  );
}
