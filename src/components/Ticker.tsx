const ITEMS = [
  "Tax Returns",
  "BAS Lodgement",
  "GST",
  "Bookkeeping",
  "SMSF",
  "Financial Advisory",
  "Business Advisory",
  "Tax Planning",
  "Payroll",
  "Capital Gains Tax",
  "Xero Certified",
  "30+ Years Experience",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="bg-brand-navy py-3.5 overflow-hidden" aria-hidden="true">
      <div className="animate-ticker">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-xs font-semibold uppercase tracking-widest text-white/75 whitespace-nowrap"
          >
            {item}
            <span className="text-brand-gold/50">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
