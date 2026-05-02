import Image from "next/image";

export default function LocalIntro() {
  return (
    <section className="py-20 bg-white" aria-labelledby="local-intro-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Your Local Hills District Accountant
          </p>
          <h2
            id="local-intro-heading"
            className="text-3xl lg:text-4xl font-bold text-brand-navy mb-3"
          >
            Trusted by Locals for Over 30 Years
          </h2>
          <div className="w-12 h-1 bg-brand-gold rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photos: staggered offset layout */}
          <div className="grid grid-cols-2 gap-5">
            {/* Left photo — taller, sits higher */}
            <div
              className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg"
              data-reveal="left"
              data-delay="1"
            >
              <Image
                src="/images/sections/bookkeeping-support.jpg"
                alt="Reliable bookkeeping support Baulkham Hills"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right column: second photo offset down + stat badge */}
            <div className="flex flex-col gap-5 pt-10">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl"
                data-reveal="right"
                data-delay="2"
              >
                <Image
                  src="/images/sections/tax-accountant-consultation.jpg"
                  alt="Certified accountant Baulkham Hills"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Stat badge */}
              <div
                className="bg-brand-navy text-white rounded-2xl px-5 py-4 shadow-lg"
                data-reveal="scale"
                data-delay="3"
              >
                <p className="text-brand-gold text-3xl font-black leading-none">30+</p>
                <p className="text-white/70 text-xs mt-1 leading-snug">
                  Years trusted in the Hills District
                </p>
              </div>
            </div>
          </div>

          {/* Text — staggered fade-up with left accent bar */}
          <div className="border-l-4 border-brand-navy/10 pl-7 space-y-5">
            <p className="text-brand-gray-text leading-relaxed" data-reveal data-delay="1">
              When managing your accounting and financial services on your own, you need an
              expert to guide you through the complex process. GNC Financial is your accountant
              in Baulkham Hills serving Individuals, Sole Traders, Companies, Trusts,
              Superannuation Funds, and more. We&rsquo;re located right here in the Hills District,
              helping Aussie families, tradies, and small business owners keep more money in
              their pockets and the ATO off their backs.
            </p>
            <p className="text-brand-gray-text leading-relaxed" data-reveal data-delay="2">
              Whether you&rsquo;re a small carpenter working out of Winston Hills, running a cafe in
              Bella Vista, or just need help sorting out your tax return without the headache,
              our experienced team provides straightforward accounting services in Baulkham Hills
              that make your life easier.
            </p>
            <p className="text-brand-gray-text leading-relaxed" data-reveal data-delay="3">
              We&rsquo;ve been looking after locals in Baulkham Hills and across the Hills District
              for over 30 years, and we reckon that&rsquo;s because we keep things simple, honest, and
              bloody effective. Our selling point: just solid advice that helps you grow your
              wealth and sleep better at night.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
