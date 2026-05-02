"use client";

import React from "react";

export default function HeroContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">("idle");

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
      setStatus(res.ok ? "success" : "error");
      if (res.ok) (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className="text-green-700 font-semibold text-lg mb-2">Message sent!</p>
        <p className="text-brand-gray-text text-sm">We&rsquo;ll be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="hero-name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            id="hero-name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="hero-email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="hero-email"
            name="email"
            type="email"
            placeholder="Your email"
            autoComplete="email"
            required
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            autoComplete="tel"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
        <div>
          <label htmlFor="hero-date" className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            id="hero-date"
            name="date"
            type="date"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="hero-message" className="block text-sm font-medium text-gray-700 mb-1">
          Any special requests
        </label>
        <textarea
          id="hero-message"
          name="message"
          rows={3}
          placeholder="Tell us what you need help with…"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold resize-none"
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-xs">Something went wrong — please try again or call us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-brand-gold text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Request"}
      </button>
    </form>
  );
}
