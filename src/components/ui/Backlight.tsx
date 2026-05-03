"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface BacklightProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * Animated multi-color glow rendered via box-shadow on the wrapper —
 * the shadow naturally fades to transparent so there's no visible
 * edge between the glow and the surrounding background.
 */
export function Backlight({ className, children }: BacklightProps) {
  return (
    <div className={cn("backlight-wrap", className)}>
      {children}
    </div>
  );
}
