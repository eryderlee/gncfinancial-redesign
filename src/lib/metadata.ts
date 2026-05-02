import type { Metadata } from "next";
import { SITE, FAQS } from "./constants";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

export function pageMeta({ title, description, path = "", noIndex = false }: PageMetaOptions): Metadata {
  const url = `${SITE.url}${path}`;

  return {
    title: `${title} | ${SITE.name}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_AU",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// ─── Base organisation ────────────────────────────────────────────────────────

const baseOrg = {
  "@type": "AccountingService",
  "@id": `${SITE.url}/#organisation`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${SITE.address.line1} ${SITE.address.line2}`,
    addressLocality: SITE.address.suburb,
    addressRegion: SITE.address.state,
    postalCode: SITE.address.postcode,
    addressCountry: "AU",
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.linkedin],
};

// ─── Sitewide LocalBusiness / AccountingService ───────────────────────────────

export const localBusinessSchema = {
  "@context": "https://schema.org",
  ...baseOrg,
  description: SITE.description,
  areaServed: [
    "Baulkham Hills", "Castle Hill", "Bella Vista", "Winston Hills",
    "Kellyville", "Rouse Hill", "Norwest", "Seven Hills",
    "Parramatta", "Hills District", "Blacktown", "Sydney",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
};

// ─── Person schema — Glenn ────────────────────────────────────────────────────

export const glennPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#glenn`,
  name: "Glenn",
  jobTitle: "Principal Accountant & Founder",
  worksFor: { "@id": `${SITE.url}/#organisation` },
  description:
    "Certified accountant with over 30 years of experience providing tax, business advisory, and SMSF services to clients across Baulkham Hills and the Hills District.",
  knowsAbout: [
    "Taxation",
    "Business Accounting",
    "SMSF",
    "Financial Advisory",
    "Bookkeeping",
    "Capital Gains Tax",
  ],
};

// ─── FAQPage schema ───────────────────────────────────────────────────────────

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

// ─── Service schema factory ───────────────────────────────────────────────────

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE.url}${url}`,
    provider: { "@id": `${SITE.url}/#organisation` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Hills District, New South Wales, Australia",
    },
    serviceType: "Accounting Service",
  };
}

// ─── Location-specific LocalBusiness schema factory ───────────────────────────

export function locationSchema(suburb: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: `${SITE.name} – ${suburb}`,
    url: `${SITE.url}${url}`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${SITE.address.line1} ${SITE.address.line2}`,
      addressLocality: SITE.address.suburb,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postcode,
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    parentOrganization: { "@id": `${SITE.url}/#organisation` },
  };
}

// ─── Breadcrumb schema factory ────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.url}`,
    })),
  };
}
