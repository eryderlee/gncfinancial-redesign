import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

const SOCIAL = [
  { href: SITE.social.instagram, Icon: Instagram, label: "GNC Financial on Instagram" },
  { href: SITE.social.facebook, Icon: Facebook, label: "GNC Financial on Facebook" },
  { href: SITE.social.linkedin, Icon: Linkedin, label: "GNC Financial on LinkedIn" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      {/* Gold accent bar */}
      <div className="h-1 bg-brand-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand column */}
          <div className="space-y-5">
            <Image
              src="/images/logo/gnc-financial-logo.png"
              alt="GNC Financial – Baulkham Hills Accountant"
              width={155}
              height={40}
              className="object-contain h-auto"
            />
            <p className="text-white/55 text-sm leading-relaxed">
              Expert support from GNC Financial — proudly servicing Baulkham Hills and
              surrounding areas across the Hills District.
            </p>
            <div className="flex items-center gap-2">
              {SOCIAL.map(({ href, Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/55 hover:border-brand-gold hover:text-brand-gold transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-semibold text-white/80 text-xs uppercase tracking-wider mb-5">
              Quick Links
            </h5>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/55 text-sm hover:text-brand-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact details */}
          <div>
            <h5 className="font-semibold text-white/80 text-xs uppercase tracking-wider mb-5">
              Contact Us
            </h5>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2.5 text-white/55 text-sm hover:text-brand-gold transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-2.5 text-white/55 text-sm hover:text-brand-gold transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/55 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <address className="not-italic">{SITE.address.full}</address>
              </li>
              <li className="text-white/35 text-xs pt-1 pl-6">
                Mon–Fri: 9am–5:30pm
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
          <p>Copyright &copy; {new Date().getFullYear()} GNC Financial. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="hover:text-white/60 transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
