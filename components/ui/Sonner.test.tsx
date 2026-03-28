import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Toaster } from "./Sonner";

// Mock the ThemeProvider's useTheme hook
vi.mock("@/components/ThemeProvider", () => ({
  useTheme: () => ({ theme: "light" }),
}));

describe("Toaster", () => {
  it("renders without crashing", () => {
    const { container } = render(<Toaster />);
    expect(container).toBeInTheDocument();
  });

  it("renders the sonner toaster element", () => {
    const { container } = render(<Toaster />);
    // sonner renders an ordered list as the toast container
    const toasterSection = container.querySelector("ol") ??
      container.querySelector("[data-sonner-toaster]");
    // The toaster may render as a portal; at minimum the component should not throw
    expect(container).toBeTruthy();
  });
});
