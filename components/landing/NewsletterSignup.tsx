"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

// ─── Types ───

export interface NewsletterSignupProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  inputPlaceholder?: string;
  buttonLabel?: React.ReactNode;
  className?: string;
}

// ─── Component ───

export function NewsletterSignup({
  title = "Stay in the loop",
  subtitle,
  inputPlaceholder = "you@example.com",
  buttonLabel = "Subscribe",
  className,
}: NewsletterSignupProps) {
  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      {title && (
        <h3 className="font-head text-xl mb-2 text-center">{title}</h3>
      )}
      {subtitle && (
        <p className="font-sans text-sm text-muted-foreground text-center mb-4">
          {subtitle}
        </p>
      )}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex gap-2"
      >
        <input
          type="email"
          placeholder={inputPlaceholder}
          className="flex-1 h-10 border-2 bg-background px-4 font-sans text-sm shadow-md transition placeholder:text-muted-foreground focus:outline-none focus:shadow-xs"
          required
        />
        <button
          type="submit"
          className="font-head px-4 h-10 border-2 bg-primary text-primary-foreground shadow-md hover:shadow active:shadow-none transition-all hover:translate-y-0.5 active:translate-y-1 cursor-pointer text-sm"
        >
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}
