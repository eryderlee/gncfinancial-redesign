import { WHY_CHOOSE_US } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Our Difference
          </p>
          <h2 id="why-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-3">
            Why Baulkham Hills Locals Choose GNC Financial
          </h2>
          <div className="w-12 h-1 bg-brand-gold rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHY_CHOOSE_US.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-default"
              data-reveal="left"
              data-delay={String(Math.min(i + 1, 5))}
            >
              {/* Large ghost number in background */}
              <span className="absolute -top-2 -right-1 text-[6.5rem] font-black text-brand-navy/5 leading-none select-none pointer-events-none group-hover:text-brand-navy/8 transition-colors duration-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="w-8 h-1 bg-brand-gold rounded-full mb-5 group-hover:w-12 transition-all duration-300" />
                <h3 className="font-bold text-brand-navy text-lg mb-3">{item.title}</h3>
                <p className="text-brand-gray-text text-sm leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
