"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SLUGS } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/60 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-brand-gold focus:text-brand-navy focus:font-semibold focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>

      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo/gnc-financial-logo.png"
              alt="GNC Financial – Baulkham Hills Accountant"
              width={120}
              height={32}
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
                  className="px-4 py-2 text-sm font-medium text-brand-navy/70 hover:text-brand-navy rounded-md transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-brand-navy/70 hover:text-brand-navy hover:bg-gray-50 transition-colors"
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

          {/* CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href={SLUGS.contact}
              className="hidden lg:inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-5 py-2 rounded-lg text-sm hover:bg-brand-navy/85 transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <MobileNav />
          </div>
        </div>
      </nav>
    </header>
  );
}
