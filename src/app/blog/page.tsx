import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS, SITE } from "@/lib/constants";
import Link from "next/link";

export const metadata: Metadata = pageMeta({
  title: "Blog – Accounting & Finance Tips",
  description:
    "Stay up to date with accounting, tax, and finance tips from the GNC Financial team in Baulkham Hills.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accounting &amp; Tax Tips</h1>
          <p className="text-white/80 text-xl">Practical advice from the GNC Financial team</p>
        </div>
      </section>

      <section className="py-24 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl font-bold text-brand-navy">Articles Coming Soon</h2>
          <p className="text-brand-gray-text text-lg">
            We&rsquo;re putting together plain-English guides on tax, business accounting, SMSFs,
            and more. Check back soon — or get in touch if you have a specific question.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link
              href={SLUGS.contact}
              className="btn-gold inline-flex items-center justify-center px-6 py-3 rounded-lg"
            >
              Ask Us a Question
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center border-2 border-brand-navy text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
