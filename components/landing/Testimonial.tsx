import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatar?: React.ReactNode;
}

export interface TestimonialProps {
  testimonials: TestimonialItem[];
  columns?: 1 | 2 | 3;
  className?: string;
}

// ─── Component ───

const columnClasses = {
  1: "grid gap-6 max-w-2xl mx-auto",
  2: "grid gap-6 sm:grid-cols-2",
  3: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
};

export function Testimonial({
  testimonials,
  columns = 3,
  className,
}: TestimonialProps) {
  return (
    <div className={cn(columnClasses[columns], className)}>
      {testimonials.map((t) => (
        <div
          key={t.name}
          className="border-2 p-6 bg-card shadow-md flex flex-col"
        >
          <blockquote className="font-sans text-sm leading-relaxed flex-1 mb-6">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3 border-t-2 pt-4">
            {t.avatar && (
              <div className="h-10 w-10 shrink-0 border-2 overflow-hidden">
                {t.avatar}
              </div>
            )}
            <div>
              <p className="font-head text-sm">{t.name}</p>
              {(t.role || t.company) && (
                <p className="font-sans text-xs text-muted-foreground">
                  {[t.role, t.company].filter(Boolean).join(", ")}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
