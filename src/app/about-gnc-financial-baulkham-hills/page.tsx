import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { ACCREDITATIONS, SLUGS } from "@/lib/constants";
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
            Baulkham Hills Accounting &amp; Financial Experts
          </h1>
          <p className="text-white/80 text-xl max-w-2xl">About GNC Financial</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="content-prose">
            <p>
              Based in Baulkham Hills, GNC Financial brings over 30 years of experience providing expert accounting, taxation, business advisory, wealth creation, and retirement planning services to individuals and businesses across the Hills District.
            </p>
            <p>
              Every client we work with receives personalised service. Our recommendations are tailored to your unique circumstances — whether you're a small business owner, a professional, or planning for retirement.
            </p>
            <p>
              At GNC Financial, we offer a full suite of financial services designed around your business and personal financial goals, including tax returns, BAS and GST lodgments, SMSF support, and more — right here in Baulkham Hills.
            </p>
            <p>
              <Link href="/book-now">
                Book your free, no-obligation consultation today
              </Link>{" "}
              and find out how GNC Financial can help you grow, stay compliant, and plan with confidence.
            </p>
          </div>

          {/* Phase 2 TODO: replace with real team photo */}
          <div className="bg-brand-cream rounded-2xl aspect-[4/3] flex items-center justify-center">
            <p className="text-brand-gray-text text-sm">Team photo — Phase 2</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-cream" aria-label="Our accreditations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-semibold text-brand-navy mb-8">
            Accreditations &amp; Memberships
          </h2>
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
