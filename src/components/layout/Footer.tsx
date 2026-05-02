import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              GNC <span className="text-brand-gold">Financial</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Expert support from GNC Financial — proudly servicing Baulkham Hills and surrounding areas across the Hills District.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GNC Financial on Instagram"
                className="text-white/60 hover:text-brand-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GNC Financial on Facebook"
                className="text-white/60 hover:text-brand-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SITE.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GNC Financial on LinkedIn"
                className="text-white/60 hover:text-brand-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 className="font-semibold text-white mb-4">Quick Links</h5>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 text-sm hover:text-brand-gold transition-colors"
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
            <h5 className="font-semibold text-white mb-4">Contact Us</h5>
            <ul className="space-y-3">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-2.5 text-white/70 text-sm hover:text-brand-gold transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-2.5 text-white/70 text-sm hover:text-brand-gold transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <address className="not-italic">{SITE.address.full}</address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <p>Copyright &copy; {new Date().getFullYear()} GNC Financial. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/disclaimer" className="hover:text-white/80 transition-colors">Disclaimer</Link>
            <Link href="/privacy-policy" className="hover:text-white/80 transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
