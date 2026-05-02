import type { Metadata } from "next";
import { pageMeta, serviceSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "SMSF Accounting Services Baulkham Hills – GNC Financial",
  description:
    "Expert SMSF accounting and compliance in Baulkham Hills. Annual statements, tax returns, audit coordination, and ATO compliance for self-managed super funds across the Hills District.",
  path: SLUGS.smsf,
});

const service = SERVICES.find((s) => s.id === "smsf")!;

export default function SMSFPage() {
  return (
    <>
      <JsonLd schema={serviceSchema("SMSF Accounting Services Baulkham Hills", service.summary, SLUGS.smsf)} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }, { name: "SMSF Accounting", url: SLUGS.smsf }])} />
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">SMSF Accounting Services Baulkham Hills</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Complete self-managed super fund administration and compliance for Hills District clients.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            A self-managed super fund (SMSF) can be a powerful wealth-building tool — but only if you
            stay on the right side of the ATO&rsquo;s strict rules. Get it wrong and you&rsquo;re looking at serious
            penalties, or worse, having your fund declared non-compliant. GNC Financial&rsquo;s SMSF specialists
            in Baulkham Hills provide complete fund administration, keeping your SMSF compliant, tax-effective,
            and working hard for your retirement.
          </p>
          <p>
            We work with SMSF trustees right across the Hills District — from people setting up their
            first fund to experienced investors with complex SMSF structures. Whatever your situation,
            we&rsquo;ll take care of the compliance so you can focus on your investment strategy.
          </p>

          <h2>What&rsquo;s Included in Our SMSF Services</h2>
          <ul>
            {service.items.map((item) => <li key={item}>{item}</li>)}
          </ul>

          <h2>Annual SMSF Compliance – Keeping You on the Right Side of the ATO</h2>
          <p>
            Every SMSF must lodge an annual return with the ATO and have its financial statements
            audited by an independent, approved SMSF auditor. Missing these obligations — or getting
            them wrong — can result in penalties, back-taxes, and in serious cases, the fund losing
            its complying status (which means losing the tax concessions that make SMSFs worthwhile
            in the first place).
          </p>
          <p>
            GNC Financial prepares your annual financial statements and SMSF tax return, coordinates
            the independent audit, and lodges everything with the ATO on time. You&rsquo;ll have peace of
            mind knowing your fund is fully compliant and all deadlines are met.
          </p>

          <h2>SMSF Tax Returns &amp; Financial Statements</h2>
          <p>
            SMSF tax returns are significantly more complex than individual or company returns. They
            require a thorough understanding of the superannuation rules, contribution limits, pension
            phase requirements, and investment income reporting. Our team has the expertise to prepare
            your fund&rsquo;s financials and tax return accurately, claiming every legitimate deduction
            and applying the concessional 15% tax rate correctly.
          </p>
          <p>
            We also prepare the annual financial statements required by ASIC and the ATO — the
            operating statement, balance sheet, and member statements — giving you a clear picture
            of your fund&rsquo;s performance and each member&rsquo;s balance.
          </p>

          <h2>SMSF Audit Coordination</h2>
          <p>
            Every SMSF must be audited annually by an independent, ATO-registered SMSF auditor.
            We coordinate the entire audit process, liaising with the auditor on your behalf,
            preparing all required documentation, and making sure any issues are resolved before
            they become problems. Our clients never have to navigate the audit process alone.
          </p>

          <h2>SMSF Setup &amp; Strategy</h2>
          <p>
            Thinking about setting up an SMSF? We&rsquo;ll help you decide whether it&rsquo;s the right structure
            for your situation — taking into account your balance, investment goals, and the
            ongoing costs and responsibilities of running a fund. If you proceed, we&rsquo;ll handle
            the establishment, trust deed, ATO registration, and ongoing administration from day one.
          </p>
          <p>
            For existing funds, we provide ongoing strategic advice on contribution strategies,
            pension phase planning, investment diversification requirements, and how to structure
            your retirement income in the most tax-effective way.
          </p>

          <h2>Pension Phase &amp; Retirement Planning</h2>
          <p>
            When it&rsquo;s time to start drawing on your super, the rules around pension payments,
            minimum drawdown rates, and the transfer balance cap become critical. Get this wrong
            and you could face unexpected tax bills. Our team will guide you through the pension
            phase, ensure your fund meets all minimum payment requirements, and help you structure
            your retirement income to minimise tax while maximising your lifestyle.
          </p>

          <h2>Why Choose GNC Financial for SMSF in Baulkham Hills?</h2>
          <p>
            SMSF compliance is not a DIY job. The rules are complex, they change regularly, and
            the penalties for non-compliance are severe. With GNC Financial, you have a team that
            understands superannuation law inside out, stays up to date with every ATO ruling and
            legislative change, and takes complete responsibility for keeping your fund compliant.
          </p>
          <p>
            You&rsquo;ll deal directly with a senior accountant who knows your fund — not get passed
            around between junior staff. And our fixed-fee pricing means you always know what
            you&rsquo;re paying, with no surprise bills at year-end.
          </p>
          <p>
            Also see our{" "}
            <Link href={SLUGS.financialAdvisor}>financial advisory services</Link> and{" "}
            <Link href={SLUGS.tax}>tax accounting services</Link> in Baulkham Hills.
            Call us on <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free chat</Link> today.
          </p>
        </div>
      </section>

      <CTA heading="Let&rsquo;s Talk About Your Super Fund" body="Whether you're setting up a new SMSF or need help getting your existing fund compliant, GNC Financial has the expertise to keep everything on track." />
    </>
  );
}
