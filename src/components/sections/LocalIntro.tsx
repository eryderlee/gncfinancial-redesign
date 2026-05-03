import Image from "next/image";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";

export default function LocalIntro() {
  return (
    <section className="py-14 sm:py-20 bg-white relative overflow-hidden" aria-labelledby="local-intro-heading">

      {/* Flickering grid — radial ellipse centered on the section */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          maskImage: "radial-gradient(ellipse 65% 70% at 50% 50%, transparent 0%, transparent 55%, black 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 65% 70% at 50% 50%, transparent 0%, transparent 55%, black 100%)",
        }}
      >
        <FlickeringGrid
          className="absolute inset-0 size-full"
          squareSize={2}
          gridGap={4}
          color="#5271ff"
          maxOpacity={0.22}
          flickerChance={0.01}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 sm:mb-12" data-reveal>
          <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Your Local Hills District Accountant
          </p>
          <h2
            id="local-intro-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy mb-3"
          >
            Trusted by Locals for Over 30 Years
          </h2>
          <div className="w-12 h-1 bg-brand-gold rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Left: photos on gradient backing plate */}
          <div className="relative" data-reveal="left">
            {/* Gradient plate — sits behind the photos only */}
            <div
              className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2.5rem)] h-[calc(100%+1.5rem)] sm:h-[calc(100%+2.5rem)] rounded-2xl"
              style={{
                background: `
                  radial-gradient(ellipse at 15% 80%, rgba(248,185,23,0.7) 0%, transparent 50%),
                  radial-gradient(ellipse at 80% 15%, rgba(248,185,23,0.45) 0%, transparent 45%),
                  radial-gradient(ellipse at 55% 55%, rgba(82,113,255,0.85) 0%, transparent 60%),
                  radial-gradient(ellipse at 0% 0%, rgba(48,66,196,1) 0%, transparent 65%),
                  radial-gradient(ellipse at 100% 100%, rgba(6,14,36,0.9) 0%, transparent 55%),
                  #3042c4
                `,
              }}
            />

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {/* Left photo — taller */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg animate-float"
                data-reveal="left"
                data-delay="1"
              >
                <Image
                  src="/images/sections/bookkeeping-support.jpg"
                  alt="Reliable bookkeeping support Baulkham Hills"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Right photo — offset down */}
              <div className="flex flex-col gap-3 sm:gap-4 pt-6 sm:pt-10">
                <div
                  className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl animate-float-delayed"
                  data-reveal="right"
                  data-delay="2"
                >
                  <Image
                    src="/images/sections/tax-accountant-consultation.jpg"
                    alt="Certified accountant Baulkham Hills"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>

                {/* Google badge */}
                <div
                  className="bg-white border border-gray-100 rounded-2xl px-3 sm:px-4 py-3 sm:py-3.5 shadow-md flex items-center gap-2 sm:gap-3"
                  data-reveal="scale"
                  data-delay="3"
                >
                  <div className="shrink-0 w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-brand-navy flex items-center justify-center">
                    <span className="text-brand-gold font-black text-sm">G</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-brand-navy font-bold text-xs sm:text-sm leading-none">4.9 / 5.0</p>
                    <p className="text-gray-400 text-[10px] sm:text-xs mt-1">Google Reviews</p>
                  </div>
                  <p className="text-brand-gold text-sm sm:text-base ml-auto tracking-tight whitespace-nowrap">★★★★★</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="space-y-5">
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
