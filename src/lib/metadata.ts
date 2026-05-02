import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetaOptions {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Factory that generates consistent per-page metadata.
 * Usage: export const metadata = pageMeta({ title: "...", description: "...", path: "/services" })
 */
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

/**
 * JSON-LD structured data for LocalBusiness schema.
 * Drop this into any page via <script> tag:
 * <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: SITE.name,
  description: SITE.description,
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
  areaServed: [
    "Baulkham Hills",
    "Castle Hill",
    "Bella Vista",
    "Winston Hills",
    "Kellyville",
    "Norwest",
    "Hills District",
    "Sydney",
  ],
  sameAs: [
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.linkedin,
  ],
};
