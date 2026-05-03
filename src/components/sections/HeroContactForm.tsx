"use client";

import React from "react";

interface Props {
  dark?: boolean;
}

export default function HeroContactForm({ dark = false }: Props) {
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

  const labelClass = dark
    ? "block text-xs font-medium text-white/50 uppercase tracking-wider mb-1.5"
    : "block text-sm font-medium text-gray-700 mb-1";

  const inputClass = dark
    ? "block w-full min-w-0 max-w-full appearance-none px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-brand-gold focus:border-brand-gold transition-colors"
    : "block w-full min-w-0 max-w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold";

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <p className={`font-semibold text-lg mb-2 ${dark ? "text-brand-gold" : "text-green-700"}`}>
          Message sent!
        </p>
        <p className={`text-sm ${dark ? "text-white/50" : "text-brand-gray-text"}`}>
          We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="min-w-0">
          <label htmlFor="hero-name" className={labelClass}>Full Name</label>
          <input
            id="hero-name"
            name="name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            required
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="hero-email" className={labelClass}>Email</label>
          <input
            id="hero-email"
            name="email"
            type="email"
            placeholder="Your email"
            autoComplete="email"
            required
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="hero-phone" className={labelClass}>Phone</label>
          <input
            id="hero-phone"
            name="phone"
            type="tel"
            placeholder="Your phone number"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
        <div className="min-w-0">
          <label htmlFor="hero-date" className={labelClass}>Preferred Date</label>
          <input
            id="hero-date"
            name="date"
            type="date"
            className={inputClass}
          />
        </div>
      </div>
      <div className="min-w-0">
        <label htmlFor="hero-message" className={labelClass}>How can we help?</label>
        <textarea
          id="hero-message"
          name="message"
          rows={3}
          placeholder="Tell us what you need help with…"
          className={`${inputClass} resize-none`}
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-xs">Something went wrong — please try again or call us directly.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-brand-gold text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-gold-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
      >
        {status === "sending" ? "Sending…" : "Send Request →"}
      </button>
    </form>
  );
}
