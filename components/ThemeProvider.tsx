"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";

type Theme = "light" | "dark" | "system";
export type ColorTheme = "blue" | "plum";

const COLOR_THEMES: ColorTheme[] = ["blue", "plum"];

interface ThemeProviderState {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  colorTheme: ColorTheme;
  setColorTheme: (colorTheme: ColorTheme) => void;
  colorThemes: readonly ColorTheme[];
}

const ThemeContext = createContext<ThemeProviderState | undefined>(undefined);

const STORAGE_KEY = "substrateui-theme";
const COLOR_STORAGE_KEY = "substrateui-color-theme";

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyClass(resolved: "light" | "dark") {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(resolved);
}

function applyColorTheme(colorTheme: ColorTheme) {
  for (const t of COLOR_THEMES) {
    document.documentElement.classList.remove(`theme-${t}`);
  }
  if (colorTheme !== "blue") {
    document.documentElement.classList.add(`theme-${colorTheme}`);
  }
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  defaultColorTheme?: ColorTheme;
  storageKey?: string;
  colorStorageKey?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  defaultColorTheme = "blue",
  storageKey = STORAGE_KEY,
  colorStorageKey = COLOR_STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  });

  const [colorTheme, setColorThemeState] = useState<ColorTheme>(() => {
    if (typeof window === "undefined") return defaultColorTheme;
    return (localStorage.getItem(colorStorageKey) as ColorTheme) || defaultColorTheme;
  });

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(getSystemTheme);

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  // Sync the class on the document element whenever resolvedTheme changes
  useEffect(() => {
    applyClass(resolvedTheme);
  }, [resolvedTheme]);

  // Sync color theme class
  useEffect(() => {
    applyColorTheme(colorTheme);
  }, [colorTheme]);

  // Listen for OS theme changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? "dark" : "light");
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setThemeState(newTheme);
    },
    [storageKey],
  );

  const setColorTheme = useCallback(
    (newColorTheme: ColorTheme) => {
      localStorage.setItem(colorStorageKey, newColorTheme);
      setColorThemeState(newColorTheme);
    },
    [colorStorageKey],
  );

  const value = useMemo(
    () => ({ theme, resolvedTheme, setTheme, colorTheme, setColorTheme, colorThemes: COLOR_THEMES }),
    [theme, resolvedTheme, setTheme, colorTheme, setColorTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
