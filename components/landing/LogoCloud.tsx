import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface LogoCloudProps {
  children: React.ReactNode;
  className?: string;
}

// ─── Component ───

export function LogoCloud({ children, className }: LogoCloudProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-8 lg:gap-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
