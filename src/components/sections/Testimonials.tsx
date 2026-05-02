// Testimonials section
// Phase 1: Placeholder structure — populate with real reviews from the live site
// Phase 2: Style as carousel or grid per VISUAL_PLAN.md

const TESTIMONIALS: { name: string; role: string; body: string }[] = [
  // TODO: add real testimonials from the live site once sourced via site teardown or client
];

export default function Testimonials() {
  if (TESTIMONIALS.length === 0) {
    // During Phase 1, render a clearly labelled placeholder
    return (
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Testimonials
          </h2>
          <p className="text-brand-gray-text">
            [Testimonials to be populated — source from live site during Phase 1 content port]
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="testimonials-heading" className="text-3xl lg:text-4xl font-bold text-brand-navy mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote key={t.name} className="bg-brand-cream rounded-xl p-6">
              <p className="text-brand-gray-text mb-4 leading-relaxed">&ldquo;{t.body}&rdquo;</p>
              <footer className="font-semibold text-brand-navy">
                {t.name}
                {t.role && <span className="text-sm font-normal text-gray-500 ml-1">— {t.role}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
