import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface Stat {
  value: React.ReactNode;
  label: string;
}

export interface StatsBarProps {
  stats: Stat[];
  className?: string;
}

// ─── Component ───

export function StatsBar({ stats, className }: StatsBarProps) {
  return (
    <div
      className={cn(
        "w-full border-y-2 bg-card",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-head text-3xl lg:text-4xl mb-1">
              {stat.value}
            </div>
            <div className="font-sans text-sm text-muted-foreground uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
