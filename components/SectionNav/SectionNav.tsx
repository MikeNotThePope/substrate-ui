"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface SectionNavItem {
  label: string;
  id: string;
}

export interface ISectionNavProps {
  items: SectionNavItem[];
  className?: string;
}

export function SectionNav({ items, className }: ISectionNavProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (!el) continue;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(item.id);
          }
        },
        { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    }

    return () => {
      for (const observer of observers) {
        observer.disconnect();
      }
    };
  }, [items]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-10 bg-background text-foreground border-b-[4px] border-black",
        className,
      )}
    >
      <div className="mx-auto max-w-6xl px-4 flex items-center gap-1 overflow-x-auto">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "font-head text-sm px-4 py-3 shrink-0 transition-colors duration-200",
              activeId === item.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-primary hover:text-primary-foreground",
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
