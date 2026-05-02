// ============================================================
// GNC Financial — Site-wide constants
// All content data lives here. Components consume from this file.
// When porting content from the live site, update values here first.
// ============================================================

export const SITE = {
  name: "GNC Financial",
  tagline: "Your Local Accountant in Baulkham Hills",
  description:
    "Expert accounting, tax, and financial advisory services in Baulkham Hills and across the Hills District. Over 30 years of experience.",
  url: "https://gncfinancial.com.au", // update when new domain is live
  phone: "02 8403 2770",
  phoneHref: "tel:0284032770",
  email: "admin@gncfinancial.com.au",
  emailHref: "mailto:admin@gncfinancial.com.au",
  address: {
    line1: "111/33 Lexington Drive",
    line2: "East Block – Level 1",
    suburb: "Bella Vista",
    state: "NSW",
    postcode: "2153",
    full: "111/33 Lexington Drive East Block – Level 1, Bella Vista NSW 2153",
  },
  social: {
    instagram: "https://www.instagram.com/gncfinancial/",
    facebook: "https://www.facebook.com/profile.php?id=61568291158118",
    linkedin: "https://www.linkedin.com/company/www.gncfinancial.com.au/",
  },
} as const;

// ------------------------------------------------------------
// Navigation
// ------------------------------------------------------------

// Canonical URL slugs — these match the live site exactly (never change without 301 redirects)
export const SLUGS = {
  home: "/",
  about: "/about-gnc-financial-baulkham-hills",
  services: "/baulkham-hills-accounting-tax-financial-services",
  tax: "/tax-accountant-baulkham-hills",
  taxCastleHill: "/tax-accountant-castle-hill",
  taxKellyville: "/tax-accountant-kellyville",
  smallBusiness: "/small-business-accountant-baulkham-hills",
  smsf: "/smsf-accounting-services-baulkham-hills",
  financialAdvisor: "/financial-advisor-baulkham-hills",
  castleHill: "/accountant-castle-hill",
  norwest: "/accountant-norwest",
  hillsDistrict: "/accountant-hills-district",
  blog: "/blog",
  faq: "/baulkham-hills-accounting-faq",
  bookNow: "/book-now",
  contact: "/contact-gnc-financial-baulkham-hills-sydney-cbd",
  disclaimer: "/disclaimer",
  privacyPolicy: "/privacy-policy",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: SLUGS.home },
  {
    label: "Services",
    href: SLUGS.services,
    children: [
      { label: "Tax Services", href: SLUGS.tax },
      { label: "Small Business Accounting", href: SLUGS.smallBusiness },
      { label: "SMSF", href: SLUGS.smsf },
      { label: "Financial Advisory", href: SLUGS.financialAdvisor },
    ],
  },
  { label: "About", href: SLUGS.about },
  { label: "Blog", href: SLUGS.blog },
  { label: "FAQ", href: SLUGS.faq },
  { label: "Contact", href: SLUGS.contact },
] as const;

export const FOOTER_LINKS = [
  { label: "Home", href: SLUGS.home },
  { label: "About", href: SLUGS.about },
  { label: "Services", href: SLUGS.services },
  { label: "Blog", href: SLUGS.blog },
  { label: "Book Now", href: SLUGS.bookNow },
  { label: "FAQ", href: SLUGS.faq },
  { label: "Contact", href: SLUGS.contact },
  { label: "Disclaimer", href: SLUGS.disclaimer },
  { label: "Privacy Policy", href: SLUGS.privacyPolicy },
] as const;

// ------------------------------------------------------------
// Services
// ------------------------------------------------------------

export const SERVICES = [
  {
    id: "tax",
    title: "Tax Services",
    slug: SLUGS.tax,
    icon: "receipt-tax",
    summary: "Individual and business tax returns, GST, BAS, PAYG, CGT, FBT and smart year-round tax planning.",
    items: [
      "Individual tax returns",
      "Business tax returns (company, trust, partnership, sole trader)",
      "Smart tax planning to minimise your bill",
      "GST and BAS preparation",
      "PAYG and payroll tax compliance",
      "Capital gains tax advice",
      "Fringe benefits tax returns",
    ],
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    slug: SLUGS.services, // bookkeeping lives on the services hub, no standalone URL
    icon: "book-open",
    summary: "Daily bookkeeping, bank reconciliations, payroll and cloud accounting setup in Xero, MYOB, or QuickBooks.",
    items: [
      "Daily bookkeeping",
      "Accounts payable and receivable",
      "Bank reconciliations",
      "Xero, MYOB, and QuickBooks setup and training",
      "Cloud accounting solutions",
      "Payroll processing",
    ],
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    slug: SLUGS.smallBusiness,
    icon: "trending-up",
    summary: "Growth strategies, business structuring, cash flow management, exit planning, and profit improvement.",
    items: [
      "Business start-up guidance",
      "Growth strategies that actually work",
      "Exit planning when you're ready to sell",
      "Profit improvement advice",
      "Business valuations",
      "Benchmarking",
    ],
  },
  {
    id: "smsf",
    title: "SMSF",
    slug: SLUGS.smsf,
    icon: "shield-check",
    summary: "Full SMSF administration, annual statements, tax returns, audit coordination, and ATO compliance.",
    items: [
      "Annual financial statements",
      "SMSF tax returns",
      "Audit coordination",
      "ATO compliance management",
      "Strategic wealth-building advice",
    ],
  },
  {
    id: "financial-advisory",
    title: "Financial Advisory",
    slug: SLUGS.financialAdvisor,
    icon: "chart-bar",
    summary: "Investment property tax, estate planning, crypto tax, and comprehensive financial guidance.",
    items: [
      "Investment property tax advice",
      "Estate planning guidance",
      "Crypto tax help",
      "Workers compensation advice",
      "Financial statements and management reports",
    ],
  },
] as const;

// ------------------------------------------------------------
// Why Choose Us features
// ------------------------------------------------------------

export const WHY_CHOOSE_US = [
  {
    title: "30+ Years of Local Expertise",
    body: "Glenn has been a certified accountant for over 30 years and has helped thousands of clients across the Hills District with personalised advice.",
  },
  {
    title: "Transparent Fixed-Fee Pricing",
    body: "No hidden charges, no surprise bills. We offer clear fixed-fee pricing for most services so you know exactly what you'll pay before we start.",
  },
  {
    title: "Quick Turnaround",
    body: "Our efficient systems and modern tech mean we sort out most tax returns and financial statements quickly, without cutting corners.",
  },
  {
    title: "Actually Available",
    body: "We return calls and emails promptly and make time for face-to-face meetings. You'll deal directly with your accountant, not bounced between staff.",
  },
  {
    title: "Proactive, Not Reactive",
    body: "We regularly check in, identify opportunities, and alert you to potential issues before they become costly headaches.",
  },
] as const;

// ------------------------------------------------------------
// Industries
// ------------------------------------------------------------

export const INDUSTRIES = [
  { label: "Tradies", description: "Sparkies, plumbers, builders, chippies, painters" },
  { label: "Professional Services", description: "Doctors, dentists, lawyers, consultants" },
  { label: "Retail & Hospitality", description: "Cafes, restaurants, shops, franchises" },
  { label: "Tech & IT", description: "Software developers, IT consultants, tech startups" },
  { label: "Real Estate", description: "Agents, property developers, property managers" },
  { label: "Manufacturing", description: "Wholesalers, distributors, manufacturers" },
  { label: "Healthcare", description: "Allied health pros, medical specialists" },
  { label: "Transport & Logistics", description: "Freight, couriers, transport operators" },
] as const;

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------

export const FAQS = [
  {
    question: "How much do your accounting services cost?",
    answer:
      "Our fees depend on what you need, but we're always upfront about pricing. Individual tax returns start from competitive rates, and business accounting packages are customised to your requirements. We'll give you a clear fixed-fee quote before starting any work — no hidden surprises.",
  },
  {
    question: "What accounting software do you work with?",
    answer:
      "We're certified Xero advisors and MYOB partners, and we also work with QuickBooks Online. We can help you migrate from desktop software, set up your system, train your team, and connect third-party apps.",
  },
  {
    question: "Do I have to come to your office or can we meet online?",
    answer:
      "Both work for us. We meet clients in person at our Bella Vista office and also via video call. Whatever suits you best.",
  },
  {
    question: "When should I get in touch with an accountant?",
    answer:
      "Ideally before tax time, not during it. The earlier you engage us, the more opportunities we have to structure things to your advantage. If you're starting a business or making a major financial decision, get in touch straight away.",
  },
  {
    question: "What do I need for my tax return?",
    answer:
      "Payment summaries or income statements, bank statements, receipts for deductions, details of any investments or rental properties, and your previous year's return if you're a new client. We'll send you a checklist once you book in.",
  },
  {
    question: "Do you only work with businesses in Baulkham Hills?",
    answer:
      "Not at all. While we're based in the Hills District, we work with clients across Greater Sydney and Australia-wide for certain services. We can meet online if you're not local.",
  },
  {
    question: "Can you help with crypto taxes?",
    answer:
      "Yes. Crypto is treated as a capital gains tax event by the ATO. We can help you calculate your gains and losses, report them correctly, and structure your crypto activities in the most tax-effective way.",
  },
  {
    question: "What if I haven't lodged tax returns for a few years?",
    answer:
      "Don't panic. We deal with this regularly. We can help you get back on track with the ATO, minimise any penalties, and sort out a payment arrangement if needed. The sooner you act, the better.",
  },
] as const;

// ------------------------------------------------------------
// Locations served
// ------------------------------------------------------------

export const LOCATIONS = [
  { name: "Baulkham Hills", slug: null },
  { name: "Castle Hill", slug: SLUGS.castleHill },
  { name: "Bella Vista", slug: null },
  { name: "Winston Hills", slug: null },
  { name: "Kellyville", slug: null },
  { name: "Rouse Hill", slug: null },
  { name: "Norwest", slug: SLUGS.norwest },
  { name: "Seven Hills", slug: null },
  { name: "Parramatta", slug: null },
  { name: "Hills District", slug: SLUGS.hillsDistrict },
  { name: "Blacktown", slug: null },
  { name: "South West Sydney", slug: null },
] as const;

// ------------------------------------------------------------
// Accreditations
// ------------------------------------------------------------

export const ACCREDITATIONS = [
  {
    name: "Xero Bronze Partner",
    imageUrl: "https://gncfinancial.com.au/wp-content/uploads/2024/09/gnc.png",
  },
  {
    name: "Tax Practitioners Board Registered",
    imageUrl: "https://gncfinancial.com.au/wp-content/uploads/2024/09/Group-1.png",
  },
  {
    name: "Institute of Public Accountants",
    imageUrl: "https://gncfinancial.com.au/wp-content/uploads/2024/09/IPA_Logo_Master_HR-scaled.jpg",
  },
] as const;
