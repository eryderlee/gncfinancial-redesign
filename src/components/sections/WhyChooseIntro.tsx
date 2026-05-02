export default function WhyChooseIntro() {
  return (
    <section className="py-20 bg-brand-cream" aria-labelledby="why-choose-intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="why-choose-intro-heading"
          className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6"
        >
          Why Choose GNC Financial for Accounting Services in Baulkham Hills
        </h2>
        <p className="text-brand-gray-text leading-relaxed mb-12 max-w-3xl">
          When you&rsquo;re hunting for an accountant in Baulkham Hills, you don&rsquo;t just need someone
          who can crunch numbers and lodge forms. You need a proper financial partner who
          understands what it&rsquo;s like to run a business in the Hills District, someone whose
          advice is tailored to your goals.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-brand-navy mb-6">
              Born and Bred in the Hills District
            </h3>
            <div className="space-y-4 text-brand-gray-text leading-relaxed">
              <p>
                Based right here in Baulkham Hills, GNC Financial is as local as they come.
                We know the businesses around Norwest Business Park, the tradies working across
                Castle Hill, and the families trying to make their dollars stretch further in
                this expensive city we call home.
              </p>
              <p>
                Being local means we understand the unique challenges facing businesses and
                individuals in the Hills District. From startups finding their feet to established
                businesses ready to level up, we&rsquo;ve worked with everyone across Baulkham Hills,
                Castle Hill, Bella Vista, Winston Hills, Kellyville, and beyond.
              </p>
              <p>
                Our firm combines the know-how of a big city firm with the down-to-earth,
                personal service you&rsquo;d expect from your local accountant. We actually take the
                time to sit down with you (either in person or online), understand what you&rsquo;re
                trying to achieve, and give you advice that works for your situation.
              </p>
            </div>
          </div>

          {/* [real photo needed] alt: "Local Baulkham Hills accountant offering tax and bookkeeping services" */}
          <div className="bg-white rounded-2xl aspect-[4/3] flex items-center justify-center shadow-sm">
            <span className="text-sm text-brand-gray-text">Local accountant photo — Phase 2</span>
          </div>
        </div>
      </div>
    </section>
  );
}
