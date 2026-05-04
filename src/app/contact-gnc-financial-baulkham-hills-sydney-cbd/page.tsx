import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SITE, SLUGS } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";
import PageHero from "@/components/sections/PageHero";

export const metadata: Metadata = pageMeta({
  title: "Contact GNC Financial – Baulkham Hills & Sydney CBD",
  description:
    "Get in touch with GNC Financial in Baulkham Hills. Call us on 02 8403 2770 or send a message to book your free consultation.",
  path: SLUGS.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title={
          <>
            Contact{" "}
            <span className="text-glow-gold">GNC Financial</span>
          </>
        }
        subtitle="Baulkham Hills and Sydney CBD. Drop us a line below or call us directly — we'll get back to you within one business day."
      >
        <p className="text-white/55 text-sm">
          Phone:{" "}
          <a href={SITE.phoneHref} className="text-brand-gold font-semibold hover:underline underline-offset-2">
            {SITE.phone}
          </a>
        </p>
      </PageHero>
      <ContactForm />
    </>
  );
}
