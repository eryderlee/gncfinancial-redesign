import Link from "next/link";

const CLOUD_FEATURES = [
  "Move from desktop to cloud accounting software",
  "Set up and configure your system properly",
  "Train you and your team on best practices",
  "Connect apps and add-ons to make everything easier",
  "Access your financial data on your phone",
  "Collaborate with us in real-time",
];

const SOFTWARE_BADGES = [
  {
    name: "Xero",
    subtitle: "Certified Advisor",
    accent: "rgba(19, 181, 234, 0.18)",
    border: "rgba(19, 181, 234, 0.25)",
  },
  {
    name: "MYOB",
    subtitle: "Certified Partner",
    accent: "rgba(139, 54, 255, 0.18)",
    border: "rgba(139, 54, 255, 0.25)",
  },
  {
    name: "QuickBooks",
    subtitle: "ProAdvisor",
    accent: "rgba(44, 160, 28, 0.18)",
    border: "rgba(44, 160, 28, 0.25)",
  },
];

export default function CloudAccounting() {
  return (
    <section className="py-14 sm:py-20 bg-brand-navy text-white" aria-labelledby="cloud-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: heading + features */}
          <div>
            <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3" data-reveal>
              Cloud Accounting
            </p>
            <h2
              id="cloud-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
              data-reveal
              data-delay="1"
            >
              Modern Cloud Accounting Solutions
            </h2>
            <p className="text-white/65 mb-6 sm:mb-8 leading-relaxed" data-reveal data-delay="2">
              Sick of clunky desktop software? Cloud accounting is the way to go. As certified
              Xero advisors and MYOB partners, we can help you get real-time access to your
              financial position anytime, anywhere.
            </p>
            <ul className="space-y-3 mb-6 sm:mb-8">
              {CLOUD_FEATURES.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-white/75"
                  data-reveal="left"
                  data-delay={String(Math.min(i + 1, 5))}
                >
                  <span className="text-brand-gold mt-1 flex-shrink-0 font-bold">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <div data-reveal data-delay="5">
              <Link
                href="/book-now"
                className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Right: software badge grid */}
          <div>
            <p
              className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6 text-center"
              data-reveal
            >
              Certified Partner Software
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {SOFTWARE_BADGES.map((badge, i) => (
                <div
                  key={badge.name}
                  className="rounded-xl border p-5 sm:p-6 flex items-center justify-between hover:border-opacity-60 transition-all duration-300"
                  style={{
                    background: badge.accent,
                    borderColor: badge.border,
                  }}
                  data-reveal="scale"
                  data-delay={String(i + 1)}
                >
                  <div>
                    <p className="text-white font-bold text-lg sm:text-xl">{badge.name}</p>
                    <p className="text-white/50 text-xs mt-0.5">{badge.subtitle}</p>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-gold font-bold text-sm">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
