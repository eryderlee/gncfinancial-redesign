import Image from "next/image";

const PARAGRAPHS = [
  "Based right here in Baulkham Hills, GNC Financial is as local as they come. We know the businesses around Norwest Business Park, the tradies working across Castle Hill, and the families trying to make their dollars stretch further in this expensive city we call home.",
  "Being local means we understand the unique challenges facing businesses and individuals in the Hills District. From startups finding their feet to established businesses ready to level up, we\u2019ve worked with everyone across Baulkham Hills, Castle Hill, Bella Vista, Winston Hills, Kellyville, and beyond.",
  "Our firm combines the know-how of a big city firm with the down-to-earth, personal service you\u2019d expect from your local accountant. We actually take the time to sit down with you (either in person or online), understand what you\u2019re trying to achieve, and give you advice that works for your situation.",
];

export default function WhyChooseIntro() {
  return (
    <section className="py-24 bg-brand-navy" aria-labelledby="why-choose-intro-heading">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow + heading */}
        <div className="mb-5" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Why GNC Financial
          </p>
          <h2
            id="why-choose-intro-heading"
            className="text-3xl lg:text-4xl font-bold text-white"
          >
            Why Choose GNC Financial for Accounting Services in Baulkham Hills
          </h2>
        </div>

        <p className="text-white/60 leading-relaxed mb-14 max-w-3xl" data-reveal data-delay="1">
          When you&rsquo;re hunting for an accountant in Baulkham Hills, you don&rsquo;t just need someone
          who can crunch numbers and lodge forms. You need a proper financial partner who
          understands what it&rsquo;s like to run a business in the Hills District, someone whose
          advice is tailored to your goals.
        </p>

        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left: text with gold rules */}
          <div data-reveal="left">
            <h3 className="text-2xl font-bold text-white mb-6">
              Born and Bred in the Hills District
            </h3>
            <div>
              {PARAGRAPHS.map((para, i) => (
                <div key={i}>
                  <p className="text-white/65 leading-relaxed py-5">{para}</p>
                  {i < PARAGRAPHS.length - 1 && (
                    <div className="h-px bg-brand-gold/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: photo with gold frame offset overlay */}
          <div className="relative" data-reveal="right">
            {/* Gold border — offset behind */}
            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-brand-gold/35 pointer-events-none z-0" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl z-10">
              <Image
                src="/images/sections/home-office-accounting.jpg"
                alt="Local Baulkham Hills accountant offering tax and bookkeeping services"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-navy/30 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
