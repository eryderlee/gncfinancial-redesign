"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { SLUGS } from "@/lib/constants";

const DOLLAR_ITEMS = [
  "Work-related expenses (uniforms, tools, home office setup)",
  "Car and travel expenses",
  "Self-education and training costs",
  "Investment property deductions",
  "Dividend imputation credits",
  "Donations to registered charities",
  "Medical expenses (where applicable)",
];

type Tab = {
  id: string;
  short: string;
  title: string;
  body: React.ReactNode;
};

const TABS: Tab[] = [
  {
    id: "deductions",
    short: "Maximise Your Refund",
    title: "Get Every Dollar You're Owed",
    body: (
      <>
        <p>
          Reckon you&rsquo;re claiming every deduction you can? Most Aussies miss out on
          legitimate deductions simply because they don&rsquo;t know what they can claim.
          GNC Financial knows the tax system inside out and will make sure you&rsquo;re
          claiming everything you&rsquo;re entitled to, including:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2 mt-1">
          {DOLLAR_ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="text-brand-gold mt-0.5 flex-shrink-0 font-bold">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          We&rsquo;ll have a proper look at your whole financial situation, find every
          deduction available, and prepare your tax return accurately to maximise your
          refund while keeping everything above board with the ATO.
        </p>
      </>
    ),
  },
  {
    id: "property",
    short: "Investment Property",
    title: "Investment Property Tax Specialists",
    body: (
      <p>
        Got an investment property in Baulkham Hills or somewhere else in Sydney?
        Property investing comes with its own tax complications, and getting your
        depreciation schedules, negative gearing, and capital gains calculations right
        is crucial. We specialise in investment property tax and can help you maximise
        your deductions while staying compliant.
      </p>
    ),
  },
  {
    id: "smsf",
    short: "SMSF Experts",
    title: "SMSF Experts Who Know Their Stuff",
    body: (
      <>
        <p>
          Self-managed super funds can be great for building wealth, but they come with
          strict rules. Get it wrong and you&rsquo;ll cop penalties from the ATO. Our{" "}
          <Link
            href={SLUGS.smsf}
            className="font-semibold text-brand-gold hover:underline underline-offset-2"
          >
            SMSF specialists
          </Link>{" "}
          provide complete fund administration, including annual financial statements,
          tax returns, audit coordination, and making sure you tick all the ATO&rsquo;s
          boxes.
        </p>
        <p>
          We&rsquo;ll help you build wealth for retirement in the most tax-effective way
          possible.
        </p>
      </>
    ),
  },
];

const AUTO_INTERVAL = 7000;

export default function IndividualsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % TABS.length);
    }, AUTO_INTERVAL);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  function handleSelect(i: number) {
    setActive(i);
    setPaused(true);
  }

  const current = TABS[active];

  return (
    <section className="py-14 sm:py-20 bg-brand-navy" aria-labelledby="individuals-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3" data-reveal>
            For Individuals
          </p>
          <h2
            id="individuals-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 sm:mb-6"
            data-reveal
            data-delay="1"
          >
            Tax Agent Baulkham Hills for Everyday Australians
          </h2>
          <p className="text-white/65 leading-relaxed" data-reveal data-delay="2">
            Even if you don&rsquo;t run a business, having a proper tax accountant in Baulkham
            Hills can make tax time stress-free and help you get the biggest refund
            you&rsquo;re entitled to.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8" data-reveal>
          {/* Tab buttons */}
          <div
            role="tablist"
            aria-label="Individual services"
            className="lg:col-span-4 flex lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible -mx-4 lg:mx-0 px-4 lg:px-0 snap-x snap-mandatory lg:snap-none"
          >
            {TABS.map((tab, i) => {
              const isActive = active === i;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`individuals-panel-${tab.id}`}
                  onClick={() => handleSelect(i)}
                  className={`relative snap-start text-left flex-shrink-0 lg:flex-shrink min-w-[180px] sm:min-w-[220px] lg:min-w-0 px-5 py-4 rounded-xl border transition-all duration-300 overflow-hidden ${
                    isActive
                      ? "bg-brand-gold border-brand-gold text-brand-navy shadow-lg"
                      : "bg-white/5 border-white/10 text-white/75 hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  <span className={`block text-[10px] font-bold tracking-widest uppercase ${isActive ? "text-brand-navy/70" : "text-brand-gold"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block font-semibold mt-1 text-sm sm:text-base">
                    {tab.short}
                  </span>
                  {isActive && !paused && (
                    <span
                      key={`progress-${active}`}
                      aria-hidden="true"
                      className="absolute bottom-0 left-0 h-[3px] bg-brand-navy/30 individuals-progress"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active content panel */}
          <div
            id={`individuals-panel-${current.id}`}
            role="tabpanel"
            aria-labelledby={`individuals-tab-${current.id}`}
            className="lg:col-span-8 bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 min-h-[320px] sm:min-h-[360px]"
          >
            <div key={current.id} className="grid sm:grid-cols-5 gap-6 sm:gap-8 individuals-fade">
              <div className="sm:col-span-2">
                <h3 className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-white leading-tight">
                  {current.title}
                </h3>
                <div className="w-12 h-1 bg-brand-gold rounded-full mt-4" />
              </div>
              <div className="sm:col-span-3 space-y-4 text-white/70 text-sm leading-relaxed">
                {current.body}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
