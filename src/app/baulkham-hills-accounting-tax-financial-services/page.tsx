import type { Metadata } from "next";
import { pageMeta, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SERVICES, SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Baulkham Hills Accounting, Tax & Financial Advisory Services",
  description:
    "GNC Financial offers comprehensive accounting, tax, bookkeeping, SMSF, and business advisory services in Baulkham Hills and across the Hills District. 30+ years experience.",
  path: SLUGS.services,
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Services", url: SLUGS.services }])} />
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Baulkham Hills Accounting, Tax &amp; Financial Advisory Services
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">
            One firm. Everything you need. Personalised service that makes a real difference.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <p>
            At GNC Financial, our aim is simple: help you stay compliant, reduce your tax, and
            grow your financial future with confidence. Based right here in Baulkham Hills, we&rsquo;ve
            been delivering expert accounting and financial services to individuals, families,
            tradies, and businesses across the Hills District for over 30 years.
          </p>
          <p>
            Unlike accounting firms that only do the bare minimum, our accounting services in
            Baulkham Hills cover the whole spectrum. Whether you need a simple individual tax
            return, full-scale business accounting, specialist SMSF administration, or strategic
            financial advice, you&rsquo;ll find it all under one roof at GNC Financial.
          </p>
          <p>
            Every service we provide is delivered by experienced, qualified accountants who take
            the time to understand your situation and give you advice that&rsquo;s genuinely useful —
            not generic, not rushed, and not outsourced to a junior who doesn&rsquo;t know your name.
          </p>
        </div>
      </section>

      <section className="py-12 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4 text-center">
            Our Services
          </h2>
          <p className="text-brand-gray-text text-center max-w-2xl mx-auto mb-12">
            GNC Financial&rsquo;s accounting services in Baulkham Hills cover the whole spectrum:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.id} href={service.slug} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{service.title}</h3>
                  <p className="text-brand-gray-text mb-6 flex-1 text-sm leading-relaxed">{service.summary}</p>
                  <ul className="space-y-2 mb-6">
                    {service.items.slice(0, 4).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-brand-gray-text">
                        <span className="text-brand-gold mt-1 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-brand-blue font-semibold text-sm group-hover:text-brand-gold transition-colors">
                    View {service.title} <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 content-prose">
          <h2>Why Choose GNC Financial in Baulkham Hills?</h2>
          <p>
            There&rsquo;s no shortage of accountants in the Hills District — so why choose GNC Financial?
            It comes down to three things: experience, personalised service, and genuine results.
          </p>
          <p>
            Glenn has been a certified accountant for over 30 years, helping thousands of clients
            across Baulkham Hills, Castle Hill, Norwest, Bella Vista, and the wider Hills District.
            Our team combines big-firm expertise with the personal touch of a local practice —
            you&rsquo;ll always deal with an experienced accountant who knows your file, not get bounced
            between junior staff.
          </p>
          <p>
            We use the latest cloud accounting technology — Xero, MYOB, and QuickBooks — so we can
            work with you in real-time and you can access your financial data from anywhere. And
            our transparent fixed-fee pricing means you always know what you&rsquo;re paying before we
            start any work.
          </p>
          <p>
            Ready to experience what a proper accounting partner feels like? Call us on{" "}
            <a href={SITE.phoneHref}>{SITE.phone}</a> or{" "}
            <Link href={SLUGS.contact}>book a free, no-obligation consultation</Link> today.
          </p>
        </div>
      </section>

      <CTA />
    </>
  );
}
