"use client";

import { useEffect, useRef, useCallback } from "react";

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.1,
  color = "#6B7280",
  width,
  height,
  className,
  maxOpacity = 0.5,
}: FlickeringGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const toRgb = useCallback((hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rgb = toRgb(color);
    const step = squareSize + gridGap;

    const cols = Math.ceil((width ?? canvas.offsetWidth) / step) + 1;
    const rows = Math.ceil((height ?? canvas.offsetHeight) / step) + 1;

    canvas.width = width ?? canvas.offsetWidth;
    canvas.height = height ?? canvas.offsetHeight;

    // initialise each square with a random opacity
    const opacities = Array.from({ length: cols * rows }, () =>
      Math.random() * maxOpacity
    );

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const idx = i * rows + j;
          if (Math.random() < flickerChance) {
            opacities[idx] = Math.random() * maxOpacity;
          }
          ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${opacities[idx]})`;
          ctx.fillRect(i * step, j * step, squareSize, squareSize);
        }
      }
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationRef.current);
  }, [squareSize, gridGap, flickerChance, color, width, height, maxOpacity, toRgb]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: width ?? "100%", height: height ?? "100%" }}
      className={className}
    />
  );
}
