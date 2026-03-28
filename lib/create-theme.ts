export interface ThemeConfig {
  /** Primary brand color and its foreground */
  primary?: string;
  primaryForeground?: string;
  /** Secondary color */
  secondary?: string;
  secondaryForeground?: string;
  /** Background and foreground */
  background?: string;
  foreground?: string;
  /** Card surface */
  card?: string;
  cardForeground?: string;
  /** Muted/subtle surface */
  muted?: string;
  mutedForeground?: string;
  /** Accent color */
  accent?: string;
  accentForeground?: string;
  /** Destructive/error */
  destructive?: string;
  destructiveForeground?: string;
  /** Success */
  success?: string;
  successForeground?: string;
  /** Warning */
  warning?: string;
  warningForeground?: string;
  /** Border color */
  border?: string;
  /** Input border */
  input?: string;
  /** Focus ring */
  ring?: string;
  /** Default border radius override */
  radius?: string;
}

/**
 * Generate a CSS class string with custom property overrides for a named theme.
 * Apply the returned CSS to your stylesheet, then add the class name to a container element.
 *
 * @example
 * const css = createTheme("brand", { primary: "#E63946", background: "#F1FAEE" });
 * // Returns: ".theme-brand { --primary: #E63946; --background: #F1FAEE; }"
 */
export function createTheme(name: string, config: ThemeConfig): string {
  const declarations: string[] = [];

  const tokenMap: Record<keyof ThemeConfig, string> = {
    primary: "--primary",
    primaryForeground: "--primary-foreground",
    secondary: "--secondary",
    secondaryForeground: "--secondary-foreground",
    background: "--background",
    foreground: "--foreground",
    card: "--card",
    cardForeground: "--card-foreground",
    muted: "--muted",
    mutedForeground: "--muted-foreground",
    accent: "--accent",
    accentForeground: "--accent-foreground",
    destructive: "--destructive",
    destructiveForeground: "--destructive-foreground",
    success: "--success",
    successForeground: "--success-foreground",
    warning: "--warning",
    warningForeground: "--warning-foreground",
    border: "--border",
    input: "--input",
    ring: "--ring",
    radius: "--radius",
  };

  for (const [key, value] of Object.entries(config)) {
    const token = tokenMap[key as keyof ThemeConfig];
    if (token && value) {
      declarations.push(`  ${token}: ${value};`);
    }
  }

  if (declarations.length === 0) return "";

  return `.theme-${name} {\n${declarations.join("\n")}\n}`;
}
