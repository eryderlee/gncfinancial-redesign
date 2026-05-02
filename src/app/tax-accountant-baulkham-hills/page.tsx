import type { Metadata } from "next";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Tax Accountant Baulkham Hills – GNC Financial",
  description:
    "Expert tax accountant in Baulkham Hills. Individual and business tax returns, GST, BAS, PAYG, capital gains, fringe benefits, and year-round tax planning to minimise your bill.",
  path: SLUGS.tax,
});

const service = SERVICES.find((s) => s.id === "tax")!;

export default function TaxPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("Tax Accounting Baulkham Hills", service.summary, SLUGS.tax)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }, { name: "Tax Accountant Baulkham Hills", url: SLUGS.tax }])} />
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Tax Accountant Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Year-round tax advice and lodgment for individuals, tradies, and businesses across the Hills District.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            Looking for a reliable tax accountant in Baulkham Hills who actually knows their stuff? GNC
            Financial has been helping locals with their tax returns, tax planning, and ATO compliance for
            over 30 years. Whether you&rsquo;re an individual trying to maximise your refund, a tradie sorting
            out your business taxes, or a company with complex tax obligations, we&rsquo;ve got you covered.
          </p>
          <p>
            As registered tax agents in Baulkham Hills, we work with the{" "}
            <a href="https://www.ato.gov.au/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-brand-gold">ATO</a>{" "}
            on your behalf, handle all
            your lodgments, and make sure you&rsquo;re never caught out by changes to the tax rules. Our goal
            is simple: keep more money in your pocket while keeping you perfectly compliant.
          </p>

          <h2>Tax Services That Save You Coin</h2>
          <p>
            Our tax accounting services in Baulkham Hills cover everything you&rsquo;d expect from a top-tier
            firm, delivered with the personal touch of a local practice:
          </p>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Individual Tax Returns – Getting Every Dollar Back</h2>
          <p>
            Most Aussies rush through their tax return without realising how many deductions they&rsquo;re
            missing. Work-related expenses, home office costs, investment property deductions, vehicle
            claims, self-education — there&rsquo;s a lot that can be legitimately claimed, and a lot that gets
            left on the table.
          </p>
          <p>
            Our experienced team will go through your whole financial picture, find every deduction
            you&rsquo;re entitled to, and lodge your return accurately. We make the process quick and
            painless — most individual returns are turned around fast, and you&rsquo;ll always know exactly
            what you&rsquo;re getting back and why.
          </p>

          <h2>Business Tax Returns – Company, Trust, Partnership, Sole Trader</h2>
          <p>
            Business tax returns are more complex than individual returns, and getting them wrong can be
            costly. Whether you operate as a company, trust, partnership, or sole trader, GNC Financial
            will prepare your return accurately and look for every legitimate opportunity to reduce your
            tax liability.
          </p>
          <p>
            We also handle the related compliance work — GST, BAS, PAYG withholding, payroll tax, and
            fringe benefits tax — so everything is lodged on time and you never cop a penalty for a
            missed deadline.
          </p>

          <h2>Smart Tax Planning – More Than Just Filing a Return</h2>
          <p>
            The best way to reduce your tax bill isn&rsquo;t to wait until June 30 and scramble to find
            deductions. It&rsquo;s to plan strategically throughout the year. That&rsquo;s what we do for our
            clients in Baulkham Hills.
          </p>
          <p>
            As your{" "}
            <strong>tax accountant in Baulkham Hills</strong>, we&rsquo;ll review your business structure,
            identify the most tax-effective way to pay yourself, make the most of superannuation
            contributions, time asset purchases strategically, and use every legitimate strategy the
            ATO allows. Year-round planning means no nasty surprises and no last-minute stress.
          </p>

          <h2>GST, BAS &amp; Payroll Tax</h2>
          <p>
            Staying on top of Business Activity Statements (BAS) and GST is non-negotiable for most
            businesses. Miss a lodgment or get the numbers wrong and the ATO will come knocking. Our
            team prepares and lodges all your BAS on time, reconciles your accounts, and makes sure
            your GST reporting is accurate.
          </p>
          <p>
            We also handle payroll tax for NSW businesses, making sure you&rsquo;re meeting your obligations
            as your payroll grows. And if you&rsquo;re unsure whether you&rsquo;re registered for GST when you
            should be (or vice versa), we&rsquo;ll sort that out too.
          </p>

          <h2>Capital Gains Tax &amp; Fringe Benefits Tax</h2>
          <p>
            Sold an investment property, shares, or a business asset? Capital gains tax (CGT) can
            be significant, but there are also real opportunities to reduce or even eliminate it with
            the right timing and structuring. GNC Financial will calculate your CGT correctly, apply
            any available concessions (including the 50% CGT discount for individuals), and make sure
            your tax return reflects the full picture.
          </p>
          <p>
            If you provide benefits to employees — company cars, entertainment, low-interest loans —
            fringe benefits tax (FBT) applies. We&rsquo;ll prepare your FBT return and advise on the most
            cost-effective way to structure employee benefits.
          </p>

          <h2>Why Choose GNC Financial as Your Tax Accountant in Baulkham Hills?</h2>
          <p>
            There are plenty of tax agents in the Hills District, but not many who offer the combination
            of genuine local knowledge, 30+ years of experience, and the proactive approach that GNC
            Financial delivers. We don&rsquo;t just lodge your return — we work with you year-round to make
            sure you&rsquo;re always in the best possible tax position.
          </p>
          <p>
            And if the ATO comes knocking — an audit, a review, a query about your return — we handle
            all ATO correspondence on your behalf. You&rsquo;ll never have to deal with the ATO directly when
            you&rsquo;re a GNC Financial client.
          </p>
          <p>
            Need help with more than just tax? Explore our{" "}
            <Link href={SLUGS.smallBusiness}>small business accounting services</Link>,{" "}
            <Link href={SLUGS.smsf}>SMSF accounting</Link>, or{" "}
            <Link href={SLUGS.financialAdvisor}>financial advisory services</Link>.
          </p>
          <p>
            Call us on <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free consultation</Link> to get started.
          </p>
        </div>
      </section>

      <CTA heading="Ready to Stop Overpaying Tax?" body="Let GNC Financial find every deduction you're entitled to and build a tax strategy that keeps more money in your pocket — all year round." />
    </>
  );
}
