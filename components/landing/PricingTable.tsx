import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: React.ReactNode;
  description?: string;
  features: PricingFeature[];
  cta: React.ReactNode;
  highlighted?: boolean;
  badge?: React.ReactNode;
}

export interface PricingTableProps {
  tiers: PricingTier[];
  className?: string;
}

// ─── Component ───

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div
      className={cn(
        "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {tiers.map((tier) => (
        <div
          key={tier.name}
          className={cn(
            "border-2 flex flex-col bg-card",
            tier.highlighted
              ? "shadow-lg border-primary ring-2 ring-primary scale-[1.02]"
              : "shadow-md",
          )}
        >
          {/* Header */}
          <div className="p-6 border-b-2">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-head text-xl">{tier.name}</h3>
              {tier.badge}
            </div>
            <div className="font-head text-4xl mb-1">{tier.price}</div>
            {tier.description && (
              <p className="font-sans text-sm text-muted-foreground">
                {tier.description}
              </p>
            )}
          </div>

          {/* Features */}
          <div className="p-6 flex-1">
            <ul className="flex flex-col gap-3">
              {tier.features.map((feature) => (
                <li
                  key={feature.text}
                  className={cn(
                    "font-sans text-sm flex items-start gap-2",
                    !feature.included && "text-muted-foreground line-through",
                  )}
                >
                  <span
                    className={cn(
                      "font-head text-xs mt-0.5 shrink-0",
                      feature.included
                        ? "text-primary-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {feature.included ? "+" : "-"}
                  </span>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="p-6 border-t-2">{tier.cta}</div>
        </div>
      ))}
    </div>
  );
}
