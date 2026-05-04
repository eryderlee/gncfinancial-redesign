"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const json = await res.json().catch(() => ({}));
        console.error("Contact form error:", json);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 id="contact-heading" className="text-3xl font-bold text-brand-navy mb-6">
              Get in Touch
            </h2>

            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6">
                <p className="font-semibold mb-1">Message sent!</p>
                <p className="text-sm">Thanks for getting in touch. We&rsquo;ll get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                  />
                </div>

                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold bg-white"
                  >
                    <option value="">Please select…</option>
                    <option>Tax Services</option>
                    <option>Bookkeeping</option>
                    <option>Business Advisory</option>
                    <option>SMSF</option>
                    <option>Financial Advisory</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    Sorry, something went wrong. Please try again or call us on{" "}
                    <a href={SITE.phoneHref} className="underline">{SITE.phone}</a>.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-gold w-full py-3 rounded-lg disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-brand-navy mb-4">Contact Details</h3>
              <ul className="space-y-4">
                <li>
                  <a href={SITE.phoneHref} className="flex items-center gap-3 text-brand-gray-text hover:text-brand-navy transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-brand-navy" />
                    </div>
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={SITE.emailHref} className="flex items-center gap-3 text-brand-gray-text hover:text-brand-navy transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-brand-navy" />
                    </div>
                    <span>{SITE.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-brand-gray-text">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-navy" />
                  </div>
                  <address className="not-italic">{SITE.address.full}</address>
                </li>
              </ul>
            </div>

            {/* Phase 2: embed Google Map iframe here */}
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <p className="text-gray-500 text-sm">Google Map embed — Phase 2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
