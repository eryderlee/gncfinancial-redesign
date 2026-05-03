"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const observe = () => {
      document
        .querySelectorAll("[data-reveal]:not(.revealed)")
        .forEach((el) => {
          observer.observe(el);
        });
    };

    // Re-observe on every navigation, plus a short retry for late content
    observe();
    const t = setTimeout(observe, 500);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
