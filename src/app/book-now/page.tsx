import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = pageMeta({
  title: "Book a Free Consultation – GNC Financial",
  description:
    "Book your free, no-obligation consultation with GNC Financial in Baulkham Hills. Get expert accounting and financial advice tailored to your situation.",
  path: "/book-now",
});

export default function BookNowPage() {
  return (
    <>
      <PageHero
        eyebrow="Book Now"
        title={
          <>
            Book Your{" "}
            <span className="text-glow-gold">Free Consultation</span>
          </>
        }
        subtitle="No obligation. Just straight-shooting advice from a Baulkham Hills accountant who'll get back to you within one business day."
      >
        <p className="text-white/55 text-sm">
          Prefer to call?{" "}
          <a href={SITE.phoneHref} className="text-brand-gold font-semibold hover:underline underline-offset-2">
            {SITE.phone}
          </a>
        </p>
      </PageHero>
      <ContactForm />
    </>
  );
}
