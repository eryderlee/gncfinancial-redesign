import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const CLOUD_FEATURES = [
  "Move from desktop to cloud accounting software",
  "Set up and configure your system properly",
  "Train you and your team on best practices",
  "Connect apps and add-ons to make everything easier",
  "Access your financial data on your phone",
  "Collaborate with us in real-time",
];

type Badge = {
  name: string;
  subtitle: string;
  /** Brand colour used for the badge accent */
  brand: string;
  /** Letter or short mark shown in the colour block */
  mark: string;
};

const SOFTWARE_BADGES: Badge[] = [
  {
    name: "Xero",
    subtitle: "Certified Advisor",
    brand: "#13B5EA",
    mark: "X",
  },
  {
    name: "MYOB",
    subtitle: "Certified Partner",
    brand: "#A855F7",
    mark: "M",
  },
  {
    name: "QuickBooks",
    subtitle: "ProAdvisor",
    brand: "#2CA01C",
    mark: "Q",
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
              className="text-white/55 text-xs font-semibold uppercase tracking-widest mb-5 sm:mb-6 text-center"
              data-reveal
            >
              Certified Partner Software
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {SOFTWARE_BADGES.map((badge, i) => (
                <div
                  key={badge.name}
                  className="group flex items-stretch rounded-xl overflow-hidden border bg-white/[0.06] hover:bg-white/[0.09] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  style={{
                    borderColor: `${badge.brand}55`,
                    boxShadow: `0 0 0 1px ${badge.brand}15, 0 6px 24px -8px ${badge.brand}40`,
                  }}
                  data-reveal="scale"
                  data-delay={String(i + 1)}
                >
                  {/* Brand colour block with mark */}
                  <div
                    className="relative w-16 sm:w-20 flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${badge.brand} 0%, ${badge.brand}cc 100%)`,
                    }}
                  >
                    <span className="relative text-white font-black text-2xl sm:text-3xl tracking-tight">
                      {badge.mark}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
                    />
                  </div>

                  {/* Text + check */}
                  <div className="flex-1 px-4 sm:px-5 py-4 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-white font-bold text-base sm:text-lg leading-tight">
                        {badge.name}
                      </p>
                      <p className="text-white/65 text-xs sm:text-[13px] mt-1">{badge.subtitle}</p>
                    </div>
                    <CheckCircle2
                      className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      style={{ color: badge.brand }}
                      strokeWidth={2.5}
                    />
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
