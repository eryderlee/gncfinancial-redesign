import Image from "next/image";

export default function LocalIntro() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/sections/bookkeeping-support.jpg"
                alt="Reliable bookkeeping support Baulkham Hills"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/sections/tax-accountant-consultation.jpg"
                alt="Certified accountant Baulkham Hills"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 text-brand-gray-text leading-relaxed">
            <p>
              When managing your accounting and financial services on your own, you need an
              expert to guide you through the complex process. GNC Financial is your accountant
              in Baulkham Hills serving Individuals, Sole Traders, Companies, Trusts,
              Superannuation Funds, and more. We&rsquo;re located right here in the Hills District,
              helping Aussie families, tradies, and small business owners keep more money in
              their pockets and the ATO off their backs.
            </p>
            <p>
              Whether you&rsquo;re a small carpenter working out of Winston Hills, running a cafe in
              Bella Vista, or just need help sorting out your tax return without the headache,
              our experienced team provides straightforward accounting services in Baulkham Hills
              that make your life easier.
            </p>
            <p>
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
