import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import { SLUGS } from "@/lib/constants";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = pageMeta({
  title: "Contact GNC Financial – Baulkham Hills & Sydney CBD",
  description:
    "Get in touch with GNC Financial in Baulkham Hills. Call us on 02 8403 2770 or send a message to book your free consultation.",
  path: SLUGS.contact,
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact GNC Financial</h1>
          <p className="text-white/80 text-xl">Baulkham Hills &amp; Sydney CBD</p>
        </div>
      </section>
      <ContactForm />
    </>
  );
}
