import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface CTABannerProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

// ─── Component ───

export function CTABanner({
  title,
  subtitle,
  actions,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "w-full border-y-2 bg-primary text-primary-foreground",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 lg:py-20 flex flex-col items-center text-center gap-4">
        <h2 className="font-head text-3xl lg:text-4xl">{title}</h2>
        {subtitle && (
          <p className="font-sans text-lg max-w-xl">{subtitle}</p>
        )}
        {actions && (
          <div className="flex flex-wrap gap-3 mt-2">{actions}</div>
        )}
      </div>
    </section>
  );
}
