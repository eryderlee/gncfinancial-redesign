import type { Metadata } from "next";
import { pageMeta, faqPageSchema, breadcrumbSchema } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/constants";
import Hero from "@/components/sections/Hero";
import Ticker from "@/components/Ticker";
import LocalIntro from "@/components/sections/LocalIntro";
import WhyChooseIntro from "@/components/sections/WhyChooseIntro";
import ServicesGrid from "@/components/sections/ServicesGrid";
import TradesAndBusiness from "@/components/sections/TradesAndBusiness";
import IndividualsSection from "@/components/sections/IndividualsSection";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Industries from "@/components/sections/Industries";
import CloudAccounting from "@/components/sections/CloudAccounting";
import LocationCTA from "@/components/sections/LocationCTA";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = pageMeta({
  title: "Financial Advisor & Accountant in Baulkham Hills",
  description:
    "GNC Financial — your trusted accountant in Baulkham Hills. Expert tax, bookkeeping, business advisory, and SMSF services for individuals and businesses across the Hills District. 30+ years experience.",
  path: "/",
});

const homepageAccountingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "GNC Financial – Accountant Baulkham Hills",
  description:
    "Expert accounting, tax, bookkeeping, SMSF, and financial advisory services in Baulkham Hills and the Hills District. Over 30 years of experience.",
  url: SITE.url,
  telephone: SITE.phone,
  areaServed: [
    "Baulkham Hills", "Castle Hill", "Norwest", "Bella Vista",
    "Kellyville", "Hills District", "Sydney",
  ],
  serviceType: [
    "Tax Accounting", "Business Accounting", "Bookkeeping",
    "SMSF Accounting", "Financial Advisory",
  ],
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <JsonLd schema={homepageAccountingServiceSchema} />
      <JsonLd schema={faqPageSchema} />
      <JsonLd schema={breadcrumbSchema([{ name: "Home", url: "/" }])} />

      <Hero />

      <LocalIntro />
      <WhyChooseIntro />
      <Ticker />
      <ServicesGrid />

      <Ticker />

      <TradesAndBusiness />
      <IndividualsSection />
      <WhyChooseUs />
      <Industries />
      <CloudAccounting />
      <LocationCTA />

      <Testimonials />

      <Ticker />

      <FAQ />
      <CTA />
    </>
  );
}
