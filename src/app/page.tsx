import type { Metadata } from "next";
import { pageMeta } from "@/lib/metadata";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import CloudAccounting from "@/components/sections/CloudAccounting";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Financial Advisor & Accountant in Baulkham Hills",
  description:
    "GNC Financial — your trusted accountant in Baulkham Hills. Expert tax, bookkeeping, business advisory, and SMSF services for individuals and businesses across the Hills District. 30+ years experience.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
      <Industries />
      <CloudAccounting />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
