import { INDUSTRIES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export default function Industries() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="industries-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Industries We Work With in Baulkham Hills
            </h2>
            <p className="text-brand-gray-text mb-8">
              No matter what industry you're in, we've got the expertise to understand your specific challenges and provide practical accounting solutions that work.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INDUSTRIES.map((industry) => (
                <div key={industry.label} className="flex items-start gap-3">
                  <Badge variant="gold">{industry.label}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 TODO: add real industry imagery */}
          <div className="bg-brand-navy/5 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <p className="text-brand-gray-text text-sm">Industry image — Phase 2</p>
          </div>
        </div>
      </div>
    </section>
  );
}
