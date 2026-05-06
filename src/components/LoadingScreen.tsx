"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  // Default to visible so the loader is rendered on the very first
  // paint (SSR + initial client render). useEffect below either keeps
  // it for ~2.4s on first visit or hides it immediately on subsequent
  // visits in the same session.
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const release = () => {
      // Remove the .is-loading class on <html>, which unpauses every
      // hero entrance animation. From this moment they begin counting
      // their delays and play in sequence.
      document.documentElement.classList.remove("is-loading");
    };

    try {
      if (sessionStorage.getItem("gnc_loaded_v2")) {
        // Returning visitor in this session — hide immediately and
        // let hero animations play on a fresh page load.
        setVisible(false);
        release();
        return;
      }
    } catch {
      // sessionStorage unavailable — treat as first visit
    }

    const t = setTimeout(() => {
      setVisible(false);
      release();
      try {
        sessionStorage.setItem("gnc_loaded_v2", "1");
      } catch {}
    }, 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-brand-navy"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {/* Ambient glow behind logo */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(82,113,255,0.18) 0%, transparent 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image
              src="/images/logo/gnc-financial-logo.png"
              alt="GNC Financial"
              width={210}
              height={54}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Gold progress bar */}
          <motion.div
            className="mt-10 h-[2px] rounded-full bg-brand-gold"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 180, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut", delay: 0.2 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
