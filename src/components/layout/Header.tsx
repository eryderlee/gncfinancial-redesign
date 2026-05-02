"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE, NAV_LINKS } from "@/lib/constants";
import { Phone, Mail, Calendar } from "lucide-react";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="w-full">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-gold focus:text-brand-navy focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      {/* Top bar — phone, email, book CTA */}
      <div className="bg-brand-navy text-white text-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={SITE.phoneHref}
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE.phone}</span>
            </a>
            <a
              href={SITE.emailHref}
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{SITE.email}</span>
            </a>
          </div>
          <Link
            href="/book-now"
            className="flex items-center gap-1.5 bg-brand-gold text-brand-navy font-semibold px-3 py-1 rounded text-xs hover:bg-brand-gold-light transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* Main nav — same navy background so the logo sits flush */}
      <nav className="bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo/gnc-financial-logo.png"
              alt="GNC Financial – Baulkham Hills Accountant"
              width={160}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/85 hover:text-brand-gold rounded-md transition-colors"
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <ul className="absolute left-0 top-full mt-1 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-cream hover:text-brand-navy transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact-gnc-financial-baulkham-hills-sydney-cbd"
              className="hidden lg:inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-4 py-2 rounded-lg text-sm hover:bg-brand-gold-light transition-colors"
            >
              Make Appointment
            </Link>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
