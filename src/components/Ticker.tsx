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

interface Props {
  /** "gold" (default) — gold bg, navy text. "dark" — near-black bg, gold text. */
  variant?: "gold" | "dark";
}

export default function Ticker({ variant = "gold" }: Props) {
  const doubled = [...ITEMS, ...ITEMS];

  const bgClass = variant === "dark" ? "bg-[#060e24] border-y border-white/8" : "bg-brand-gold";
  const textClass = variant === "dark" ? "text-brand-gold/70" : "text-brand-navy";
  const dotClass = variant === "dark" ? "text-brand-gold/30" : "text-brand-navy/40";

  return (
    <div className={`${bgClass} py-3.5 overflow-hidden`} aria-hidden="true">
      <div className="animate-ticker">
        {doubled.map((item, i) => (
          <span key={i} className={`inline-flex items-center gap-6 px-6 text-xs font-semibold uppercase tracking-widest ${textClass} whitespace-nowrap`}>
            {item}
            <span className={dotClass}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
