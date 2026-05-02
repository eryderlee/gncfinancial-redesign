"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type ConsentState = {
  essential: true;   // always true, can't be declined
  marketing: boolean;
};

const STORAGE_KEY = "gnc_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      // localStorage unavailable (SSR or private browsing) — don't show banner
    }
  }, []);

  function saveConsent(consent: ConsentState) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...consent, savedAt: Date.now() }));
    } catch {
      // ignore
    }
    setVisible(false);
    // When GA4 / Meta Pixel are added, fire consent update here, e.g.:
    // if (typeof window.gtag !== "undefined") {
    //   window.gtag("consent", "update", {
    //     analytics_storage: consent.marketing ? "granted" : "denied",
    //     ad_storage: consent.marketing ? "granted" : "denied",
    //   });
    // }
  }

  function handleAcceptAll() {
    saveConsent({ essential: true, marketing: true });
  }

  function handleEssentialOnly() {
    saveConsent({ essential: true, marketing: false });
  }

  function handleSaveCustom() {
    saveConsent({ essential: true, marketing: marketingChecked });
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl p-4 sm:p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-start">
          {/* Copy */}
          <div className="flex-1 min-w-0">
            <p id="cookie-banner-title" className="font-semibold text-brand-navy mb-1">
              We use cookies
            </p>
            <p className="text-sm text-brand-gray-text">
              We use essential cookies to keep the site working. With your permission we also use marketing
              cookies (analytics, advertising) to improve our service. See our{" "}
              <Link href="/privacy-policy" className="underline hover:text-brand-navy">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>

            {/* Marketing toggle */}
            <label className="inline-flex items-center gap-2 mt-3 cursor-pointer select-none">
              <span
                role="switch"
                aria-checked={marketingChecked}
                onClick={() => setMarketingChecked((v) => !v)}
                className={`relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold cursor-pointer ${
                  marketingChecked ? "bg-brand-gold" : "bg-gray-300"
                }`}
                tabIndex={0}
                onKeyDown={(e) => e.key === " " && setMarketingChecked((v) => !v)}
              >
                <span
                  className={`inline-block h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    marketingChecked ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </span>
              <span className="text-sm text-gray-700">Marketing &amp; analytics cookies</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-2 flex-shrink-0 items-center">
            <button
              onClick={handleEssentialOnly}
              className="px-4 py-2 text-sm border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
            >
              Essential only
            </button>
            <button
              onClick={handleSaveCustom}
              className="px-4 py-2 text-sm border border-brand-navy rounded-lg text-brand-navy hover:bg-brand-navy/5 transition-colors"
            >
              Save my choice
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm bg-brand-gold text-brand-navy font-semibold rounded-lg hover:bg-brand-gold-light transition-colors"
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
