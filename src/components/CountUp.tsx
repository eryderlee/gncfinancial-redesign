"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Display string e.g. "1,000+", "30+", "4.9★", "24h", "30+ Years". The
   *  leading numeric portion is animated; everything after is preserved. */
  value: string;
  /** Animation duration in ms. */
  duration?: number;
}

const NUMERIC_RE = /^([\d,.]+)(.*)$/;

export default function CountUp({ value, duration = 1800 }: CountUpProps) {
  const match = value.match(NUMERIC_RE);

  const numericStr = match ? match[1].replace(/,/g, "") : "";
  const target = parseFloat(numericStr);
  const decimals = (numericStr.split(".")[1] || "").length;
  const suffix = match ? match[2] : "";
  const hasComma = match ? match[1].includes(",") : false;

  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || isNaN(target)) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(target);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !animatedRef.current) {
            animatedRef.current = true;
            observer.disconnect();
            const startTime = performance.now();
            const tick = (now: number) => {
              const elapsed = now - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplay(target * eased);
              if (progress < 1) requestAnimationFrame(tick);
              else setDisplay(target);
            };
            requestAnimationFrame(tick);
          }
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  if (!match || isNaN(target)) {
    return <span>{value}</span>;
  }

  const formatted = formatNumber(display, decimals, hasComma);

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

function formatNumber(n: number, decimals: number, hasComma: boolean): string {
  const fixed = n.toFixed(decimals);
  if (!hasComma) return fixed;
  const [intPart, decPart] = fixed.split(".");
  const withCommas = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decPart ? `${withCommas}.${decPart}` : withCommas;
}
