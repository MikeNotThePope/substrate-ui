import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface Feature {
  icon?: React.ReactNode;
  title: string;
  description: string;
}

export interface FeatureSectionProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  className?: string;
}

// ─── Component ───

const columnClasses = {
  2: "grid gap-6 sm:grid-cols-2",
  3: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureSection({
  features,
  columns = 3,
  className,
}: FeatureSectionProps) {
  return (
    <div className={cn(columnClasses[columns], className)}>
      {features.map((feature) => (
        <div
          key={feature.title}
          className="border-2 p-6 bg-card shadow-md"
        >
          {feature.icon && (
            <div className="mb-4 inline-flex items-center justify-center h-12 w-12 border-2 bg-primary text-primary-foreground shadow-sm">
              {feature.icon}
            </div>
          )}
          <h3 className="font-head text-lg mb-2">{feature.title}</h3>
          <p className="font-sans text-sm text-muted-foreground">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
