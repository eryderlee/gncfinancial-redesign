import Link from "next/link";
import { SITE, SLUGS } from "@/lib/constants";
import { Phone, Calendar } from "lucide-react";

interface CTAProps {
  heading?: string;
  body?: string;
}

export default function CTA({
  heading = "Take Control of Your Finances Today!",
  body = "Tax time doesn't have to be a nightmare. With the right accountant in Baulkham Hills on your side, you can stay compliant, minimise your tax, and build wealth with confidence.",
}: CTAProps) {
  return (
    <section className="py-20 bg-brand-gold" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
          {heading}
        </h2>
        <p className="text-brand-navy/80 max-w-2xl mx-auto mb-10 leading-relaxed">{body}</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href={SLUGS.contact}
            className="inline-flex items-center gap-2 bg-brand-navy text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-navy-light transition-colors"
          >
            <Calendar className="w-5 h-5" />
            Make Appointment
          </Link>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center gap-2 border-2 border-brand-navy text-brand-navy font-semibold px-8 py-4 rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5" />
            {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
