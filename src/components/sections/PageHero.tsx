import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
}

/**
 * Hero treatment for inner pages — matches the homepage hero's
 * navy bg, stripe motif and entrance choreography so secondary
 * pages don't feel like a downgrade from the landing page.
 */
export default function PageHero({ eyebrow, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="hero-bg text-white relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Cinematic ambient bloom */}
      <div className="hero-ambient absolute pointer-events-none z-0" aria-hidden="true" />

      {/* Logo stripe motif */}
      <div className="hero-stripes absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`hero-stripe hero-stripe-${i}`}>
            <div className="hero-stripe-glow" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="hero-fade-up hero-delay-1 text-brand-gold text-xs font-semibold uppercase tracking-widest mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="hero-fade-up hero-delay-2 text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="hero-fade-up hero-delay-3 text-white/65 text-base sm:text-lg leading-relaxed mt-5 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-fade-up hero-delay-4 mt-7 sm:mt-8">{children}</div>
        )}
      </div>
    </section>
  );
}
