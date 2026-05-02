import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

function Card({ className, variant = "default", children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6",
        variant === "default" && "bg-white",
        variant === "bordered" && "bg-white border border-gray-200",
        variant === "elevated" && "bg-white shadow-md hover:shadow-lg transition-shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-xl font-semibold text-brand-navy", className)} {...props}>
      {children}
    </h3>
  );
}

function CardBody({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("text-brand-gray-text", className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardHeader, CardTitle, CardBody };
