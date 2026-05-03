"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BacklightProps {
  blur?: number;
  className?: string;
  children: React.ReactNode;
}

/**
 * Animated gradient backlight — positions a blurred, colour-shifting gradient
 * behind its children to create a glowing aura effect.
 */
export function Backlight({ blur = 40, className, children }: BacklightProps) {
  return (
    <div className={cn("relative", className)}>
      {/* Animated gradient layer */}
      <div
        aria-hidden="true"
        className="backlight-glow absolute -inset-8 rounded-[2rem] pointer-events-none"
        style={{ filter: `blur(${blur}px)` }}
      />
      {/* Content sits above */}
      <div className="relative">{children}</div>
    </div>
  );
}
