import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={cn(
          // layout
          "relative cursor-pointer inline-flex items-center justify-center gap-2 shrink-0",
          "rounded-lg font-semibold text-sm whitespace-nowrap",
          // rainbow animation drives background-position
          "animate-rainbow",
          // three-layer background: solid fill | fade mask | animated gradient border
          "bg-[linear-gradient(#162880,#162880),linear-gradient(#162880_50%,rgba(22,40,128,0.6)_80%,rgba(22,40,128,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "bg-[length:200%]",
          "[background-clip:padding-box,border-box,border-box]",
          "[background-origin:border-box]",
          "[border:2px_solid_transparent]",
          "text-brand-gold",
          // glow bloom beneath the button
          "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2",
          "before:animate-rainbow",
          "before:bg-[linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]",
          "before:bg-[length:200%]",
          "before:[filter:blur(0.75rem)]",
          "hover:opacity-90 transition-opacity duration-200",
          "disabled:pointer-events-none disabled:opacity-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);

RainbowButton.displayName = "RainbowButton";

export { RainbowButton };
