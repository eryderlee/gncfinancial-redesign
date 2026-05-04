"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SLUGS } from "@/lib/constants";
import MobileNav from "./MobileNav";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [goldOpacity, setGoldOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setGoldOpacity(Math.max(0, 1 - y / 80));
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHero = pathname === "/";

  return (
    <header
      className={`w-full sticky top-0 z-[80] transition-all duration-300 relative ${
        scrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-lg"
          : "bg-brand-navy"
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
                  className="px-4 py-2 text-sm font-medium text-white/75 hover:text-white rounded-md transition-colors duration-200"
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <ul className="absolute left-0 top-full mt-2 w-56 bg-brand-navy border border-white/10 rounded-xl shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
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
              className="hidden lg:inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-5 py-2 rounded-lg text-sm hover:bg-brand-gold/90 transition-colors duration-200"
            >
              Book Consultation
            </Link>
            <MobileNav />
          </div>
        </div>
      </nav>

      {/* Gold bottom border — only on the homepage hero, fades on scroll */}
      {isHero && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "#f5a623",
            opacity: goldOpacity,
            transition: "opacity 0.1s linear",
          }}
        />
      )}

      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #5271ff, #f5a623)",
          boxShadow: "0 0 8px rgba(245,166,35,0.5)",
          transition: "width 0.1s linear",
        }}
      />
    </header>
  );
}
