import type { MetadataRoute } from "next";
import { SITE, SLUGS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;

  return [
    { url: `${base}/`, lastModified: new Date(), priority: 1 },
    { url: `${base}${SLUGS.about}`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}${SLUGS.services}`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}${SLUGS.tax}`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}${SLUGS.taxCastleHill}`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}${SLUGS.taxKellyville}`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}${SLUGS.smallBusiness}`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}${SLUGS.smsf}`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}${SLUGS.financialAdvisor}`, lastModified: new Date(), priority: 0.8 },
    { url: `${base}${SLUGS.castleHill}`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}${SLUGS.norwest}`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}${SLUGS.hillsDistrict}`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}${SLUGS.blog}`, lastModified: new Date(), priority: 0.6 },
    { url: `${base}${SLUGS.faq}`, lastModified: new Date(), priority: 0.7 },
    { url: `${base}${SLUGS.contact}`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}${SLUGS.bookNow}`, lastModified: new Date(), priority: 0.9 },
  ];
}
