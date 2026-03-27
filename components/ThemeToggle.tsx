"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { iconButtonVariants } from "@/components/ui/IconButton";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export interface ThemeToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof iconButtonVariants> {}

export function ThemeToggle({
  variant = "ghost",
  size = "md",
  className,
  ...props
}: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const opposite = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <IconButton
      variant={variant}
      size={size}
      className={cn(className)}
      onClick={() => setTheme(opposite)}
      aria-label={mounted ? `Switch to ${opposite} mode` : "Toggle theme"}
      {...props}
    >
      {/* Sun icon — shown in dark mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hidden dark:block"
        aria-hidden="true"
      >
        <circle cx={12} cy={12} r={5} />
        <line x1={12} y1={1} x2={12} y2={3} />
        <line x1={12} y1={21} x2={12} y2={23} />
        <line x1={4.22} y1={4.22} x2={5.64} y2={5.64} />
        <line x1={18.36} y1={18.36} x2={19.78} y2={19.78} />
        <line x1={1} y1={12} x2={3} y2={12} />
        <line x1={21} y1={12} x2={23} y2={12} />
        <line x1={4.22} y1={19.78} x2={5.64} y2={18.36} />
        <line x1={18.36} y1={5.64} x2={19.78} y2={4.22} />
      </svg>
      {/* Moon icon — shown in light mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block dark:hidden"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </IconButton>
  );
}
