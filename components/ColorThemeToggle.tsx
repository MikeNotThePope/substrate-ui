"use client";

import { useSyncExternalStore } from "react";
import { useTheme, type ColorTheme } from "@/components/ThemeProvider";
import { DropdownMenu } from "@/components/ui/DropdownMenu";
import { IconButton } from "@/components/ui/IconButton";
import type { VariantProps } from "class-variance-authority";
import type { iconButtonVariants } from "@/components/ui/IconButton";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

const COLOR_SWATCHES: Record<ColorTheme, string> = {
  blue: "#5294FF",
  plum: "#B254CF",
};

const COLOR_LABELS: Record<ColorTheme, string> = {
  blue: "Blue",
  plum: "Plum",
};

export interface ColorThemeToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">,
    VariantProps<typeof iconButtonVariants> {}

export function ColorThemeToggle({
  variant = "ghost",
  size = "md",
  className,
  ...props
}: ColorThemeToggleProps) {
  const { colorTheme, setColorTheme, colorThemes } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <DropdownMenu>
      <DropdownMenu.Trigger asChild>
        <IconButton
          variant={variant}
          size={size}
          className={className}
          aria-label={mounted ? `Color theme: ${colorTheme}` : "Color theme"}
          {...props}
        >
          <span
            className="block w-4 h-4 border-2 border-border"
            style={{
              backgroundColor: mounted ? COLOR_SWATCHES[colorTheme] : undefined,
              borderRadius: "var(--radius, 0)",
            }}
          />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Label>Color Theme</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.RadioGroup
          value={colorTheme}
          onValueChange={(v) => setColorTheme(v as ColorTheme)}
        >
          {colorThemes.map((theme) => (
            <DropdownMenu.RadioItem key={theme} value={theme}>
              <span
                className="inline-block w-3 h-3 border border-border mr-1"
                style={{
                  backgroundColor: COLOR_SWATCHES[theme],
                  borderRadius: "var(--radius, 0)",
                }}
              />
              {COLOR_LABELS[theme]}
            </DropdownMenu.RadioItem>
          ))}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu>
  );
}
