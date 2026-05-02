import Link from "next/link";

const CLOUD_FEATURES = [
  "Move from desktop to cloud accounting software",
  "Set up and configure your system properly",
  "Train you and your team on best practices",
  "Connect apps and add-ons to make everything easier",
  "Access your financial data on your phone",
  "Collaborate with us in real-time",
];

export default function CloudAccounting() {
  return (
    <section className="py-20 bg-brand-navy text-white" aria-labelledby="cloud-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="cloud-heading" className="text-3xl lg:text-4xl font-bold mb-4">
              Modern Cloud Accounting Solutions
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Sick of clunky desktop software? Cloud accounting is the way to go. As certified Xero advisors and MYOB partners, we can help you get real-time access to your financial position anytime, anywhere.
            </p>
            <ul className="space-y-3 mb-8">
              {CLOUD_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-white/80">
                  <span className="text-brand-gold mt-1">✓</span>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/book-now"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-navy font-semibold px-6 py-3 rounded-lg hover:bg-brand-gold-light transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Partner logos / image placeholder */}
          {/* Phase 2 TODO: add Xero/MYOB/QuickBooks logo badges */}
          <div className="bg-white/5 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center gap-4">
            <p className="text-white/40 text-sm">Partner logos — Phase 2</p>
            <div className="flex gap-6 text-white/30 text-xs uppercase tracking-widest">
              <span>Xero</span>
              <span>MYOB</span>
              <span>QuickBooks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
