import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface HeroProps {
  badge?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

// ─── Component ───

export function Hero({
  badge,
  title,
  subtitle,
  actions,
  children,
  className,
  align = "center",
}: HeroProps) {
  return (
    <section
      className={cn(
        "w-full border-b-2 bg-background",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-20 lg:py-28 flex flex-col gap-6",
          align === "center" && "items-center text-center",
          align === "left" && "items-start text-left",
        )}
      >
        {badge && <div>{badge}</div>}

        <h1 className="font-head text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          {title}
        </h1>

        {subtitle && (
          <p className="font-sans text-lg lg:text-xl text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        )}

        {actions && (
          <div className="flex flex-wrap gap-3 mt-2">{actions}</div>
        )}

        {children}
      </div>
    </section>
  );
}
