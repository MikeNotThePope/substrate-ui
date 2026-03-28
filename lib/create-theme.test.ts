import { describe, it, expect } from "vitest";
import { createTheme } from "./create-theme";

describe("createTheme", () => {
  it("generates CSS with custom property overrides", () => {
    const css = createTheme("brand", {
      primary: "#E63946",
      background: "#F1FAEE",
    });
    expect(css).toContain(".theme-brand");
    expect(css).toContain("--primary: #E63946");
    expect(css).toContain("--background: #F1FAEE");
  });

  it("returns empty string for empty config", () => {
    expect(createTheme("empty", {})).toBe("");
  });

  it("maps all token keys correctly", () => {
    const css = createTheme("test", {
      primary: "#111",
      primaryForeground: "#fff",
      border: "#000",
      radius: "0.75rem",
    });
    expect(css).toContain("--primary: #111");
    expect(css).toContain("--primary-foreground: #fff");
    expect(css).toContain("--border: #000");
    expect(css).toContain("--radius: 0.75rem");
  });

  it("ignores undefined values", () => {
    const css = createTheme("partial", { primary: "#111" });
    expect(css).not.toContain("--secondary");
    expect(css).not.toContain("undefined");
  });
});
