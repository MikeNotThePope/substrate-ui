"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

// ─── Types ───

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export interface FAQProps {
  items: FAQItem[];
  className?: string;
}

// ─── Component ───

export function FAQ({ items, className }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className={cn("w-full max-w-3xl mx-auto", className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-2 border-b-0 last:border-b-2">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between p-4 text-left cursor-pointer hover:bg-accent/30 transition-colors"
            >
              <span className="font-head text-sm pr-4">{item.question}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 font-sans text-sm text-muted-foreground">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
