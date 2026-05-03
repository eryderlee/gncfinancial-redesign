"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const overlay = (
    <>
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed top-16 left-0 right-0 bottom-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-in panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-16 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-brand-navy shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Scrollable nav content */}
        <nav className="flex-1 overflow-y-auto overscroll-contain px-5 py-6">
          <ul className="space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-white text-base font-medium border-b border-white/10 hover:text-brand-gold transition-colors"
                >
                  {link.label}
                </Link>
                {"children" in link && link.children && (
                  <ul className="pl-4 mt-1 mb-2 space-y-0.5">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-white/65 text-sm hover:text-brand-gold transition-colors"
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
        </nav>

        {/* Sticky CTA footer */}
        <div className="px-5 py-5 border-t border-white/10 space-y-3 flex-shrink-0 bg-brand-navy">
          <Link
            href="/book-now"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-brand-gold text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
          >
            Book Free Consultation
          </Link>
          <a
            href={SITE.phoneHref}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 w-full text-center border border-white/30 text-white font-medium py-3 rounded-lg hover:border-white hover:bg-white/5 transition-all"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md text-white hover:bg-white/10 transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {mounted && createPortal(overlay, document.body)}
    </div>
  );
}
