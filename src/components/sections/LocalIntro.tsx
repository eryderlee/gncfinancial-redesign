import Image from "next/image";
import { Award } from "lucide-react";
import { FlickeringGrid } from "@/registry/magicui/flickering-grid";
import CountUp from "@/components/CountUp";

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
            {/* Gradient plate — animated, sits behind the photos only */}
            <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-[calc(100%+1.5rem)] sm:w-[calc(100%+2.5rem)] h-[calc(100%+1.5rem)] sm:h-[calc(100%+2.5rem)] rounded-2xl overflow-hidden">
              <div
                className="absolute local-gradient-anim"
                style={{
                  top: "-25%",
                  left: "-25%",
                  right: "-25%",
                  bottom: "-25%",
                  background: `
                    radial-gradient(ellipse 70% 22% at 18% 72%, rgba(232,144,24,0.95) 0%, transparent 60%),
                    radial-gradient(ellipse 22% 30% at 88% 25%, rgba(246,196,74,0.85) 0%, transparent 75%),
                    radial-gradient(ellipse 35% 50% at 62% 40%, rgba(122,150,255,1) 0%, transparent 65%),
                    radial-gradient(ellipse 80% 55% at 8% 8%, rgba(82,113,255,0.85) 0%, transparent 70%),
                    radial-gradient(ellipse 45% 65% at 95% 92%, rgba(48,66,196,0.65) 0%, transparent 60%),
                    radial-gradient(ellipse 18% 14% at 45% 32%, rgba(220,230,255,0.6) 0%, transparent 90%),
                    radial-gradient(ellipse 30% 18% at 78% 78%, rgba(232,144,24,0.45) 0%, transparent 75%),
                    radial-gradient(ellipse 22% 32% at 12% 38%, rgba(122,150,255,0.55) 0%, transparent 80%),
                    #5271ff
                  `,
                }}
              />
            </div>

            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {/* Left column — taller photo + Experience badge (sits slightly higher) */}
              <div className="flex flex-col gap-3 sm:gap-4">
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

                {/* Experience badge */}
                <div
                  className="bg-white border border-gray-100 rounded-2xl px-3 sm:px-4 py-3 sm:py-3.5 shadow-md flex flex-col gap-1.5 sm:gap-2"
                  data-reveal="scale"
                  data-delay="2"
                >
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <p className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wide">
                      Experience
                    </p>
                  </div>
                  <p className="text-brand-navy font-bold text-sm sm:text-base leading-none">
                    <CountUp value="30+ Years" />
                  </p>
                </div>
              </div>

              {/* Right column — photo offset down + Google badge */}
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
                  className="bg-white border border-gray-100 rounded-2xl px-3 sm:px-4 py-3 sm:py-3.5 shadow-md flex flex-col gap-1.5 sm:gap-2"
                  data-reveal="scale"
                  data-delay="3"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 48 48"
                      className="shrink-0 w-4 h-4"
                    >
                      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-0.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                    </svg>
                    <p className="text-gray-500 text-[10px] sm:text-xs font-medium uppercase tracking-wide">
                      Google Reviews
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-brand-navy font-bold text-sm sm:text-base leading-none">
                      <CountUp value="4.9 / 5.0" />
                    </p>
                    <p className="text-brand-gold text-xs sm:text-sm tracking-tight whitespace-nowrap">
                      ★★★★★
                    </p>
                  </div>
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
