import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = pageMeta({
  title: "Book a Free Consultation – GNC Financial",
  description:
    "Book your free, no-obligation consultation with GNC Financial in Baulkham Hills. Get expert accounting and financial advice tailored to your situation.",
  path: "/book-now",
});

export default function BookNowPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Book Free Consultation</h1>
          <p className="text-white/80 text-xl">No obligation. Just straight-shooting advice.</p>
        </div>
      </section>

      <section className="py-20 bg-brand-cream">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-10 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Request Your Appointment</h2>
            <p className="text-brand-gray-text">
              Fill in the form and we&rsquo;ll be in touch within one business day. Prefer to call?{" "}
              <a href={SITE.phoneHref} className="text-brand-blue font-semibold hover:underline">
                {SITE.phone}
              </a>
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
