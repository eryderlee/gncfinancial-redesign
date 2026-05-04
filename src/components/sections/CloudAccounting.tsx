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

function XeroLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="32" fill="#13B5EA" />
      {/* Stylised "x" mark */}
      <g
        stroke="#ffffff"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      >
        <line x1="21" y1="21" x2="43" y2="43" />
        <line x1="43" y1="21" x2="21" y2="43" />
      </g>
    </svg>
  );
}

function MYOBLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 36"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="120" height="36" rx="6" fill="#6E2BA8" />
      <text
        x="60"
        y="25"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
        fontSize="20"
        fontWeight="900"
        fill="#ffffff"
        letterSpacing="1.5"
      >
        MYOB
      </text>
    </svg>
  );
}

function QuickBooksLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="32" cy="32" r="32" fill="#2CA01C" />
      <text
        x="32"
        y="42"
        textAnchor="middle"
        fontFamily="ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
        fontSize="24"
        fontWeight="900"
        fill="#ffffff"
      >
        qb
      </text>
    </svg>
  );
}

type Badge = {
  name: string;
  subtitle: string;
  brand: string;
  Logo: React.ComponentType<{ className?: string }>;
};

const SOFTWARE_BADGES: Badge[] = [
  {
    name: "Xero",
    subtitle: "Certified Advisor",
    brand: "#13B5EA",
    Logo: XeroLogo,
  },
  {
    name: "MYOB",
    subtitle: "Certified Partner",
    brand: "#6E2BA8",
    Logo: MYOBLogo,
  },
  {
    name: "QuickBooks",
    subtitle: "ProAdvisor",
    brand: "#2CA01C",
    Logo: QuickBooksLogo,
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
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-lg"
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
              {SOFTWARE_BADGES.map((badge, i) => {
                const { Logo } = badge;
                return (
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
                    {/* Logo block — white plate so the brand mark reads cleanly */}
                    <div className="w-20 sm:w-24 flex items-center justify-center flex-shrink-0 bg-white p-3 sm:p-3.5">
                      <Logo className="w-full h-auto max-h-10 sm:max-h-12" />
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
