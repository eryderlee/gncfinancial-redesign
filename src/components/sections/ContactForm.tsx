"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

// Phase 1: uncontrolled form — wire to server action / API route in technical phase
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO Phase 1 technical: replace with server action or fetch to /api/contact
    setSubmitted(true);
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
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6">
                Thanks! We'll be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
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
                    <option value="">Please select...</option>
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
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-gold text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
                >
                  Send Message
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
                    <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-brand-navy" />
                    </div>
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={SITE.emailHref} className="flex items-center gap-3 text-brand-gray-text hover:text-brand-navy transition-colors">
                    <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center">
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

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
              <p className="text-gray-500 text-sm">Google Map embed — add in Phase 1 technical</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
