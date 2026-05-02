import { WHY_CHOOSE_US } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="why-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Why Baulkham Hills Locals Choose GNC Financial
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-brand-gray-text text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
