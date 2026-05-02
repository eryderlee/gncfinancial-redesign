"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded-md text-brand-navy hover:bg-brand-cream transition-colors"
      >
        {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {open && (
        <div className="fixed inset-0 z-40 bg-brand-navy/95 flex flex-col pt-20 px-6">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <nav>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-white text-lg font-medium border-b border-white/10 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                  {"children" in link && link.children && (
                    <ul className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={() => setOpen(false)}
                            className="block py-2 text-white/70 text-base hover:text-brand-gold transition-colors"
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

            <div className="mt-8 space-y-3">
              <Link
                href="/book-now"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-brand-gold text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center border border-white text-white font-semibold py-3 rounded-lg hover:bg-white hover:text-brand-navy transition-colors"
              >
                Make Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
