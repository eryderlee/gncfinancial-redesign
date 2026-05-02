import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "gold" | "navy" | "gray";
}

function Badge({ className, variant = "gold", children, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        variant === "gold" && "bg-brand-gold/15 text-brand-navy",
        variant === "navy" && "bg-brand-navy text-white",
        variant === "gray" && "bg-gray-100 text-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export { Badge };
