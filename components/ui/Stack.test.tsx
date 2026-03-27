import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children", () => {
    render(<Stack><span>Item</span></Stack>);
    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("applies vertical direction by default", () => {
    render(<Stack data-testid="stack">Content</Stack>);
    expect(screen.getByTestId("stack")).toHaveClass("flex-col");
  });

  it("applies horizontal direction", () => {
    render(<Stack direction="horizontal" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId("stack")).toHaveClass("flex-row");
  });

  it("applies gap variant classes", () => {
    render(<Stack gap="lg" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId("stack")).toHaveClass("gap-6");
  });

  it("merges custom className", () => {
    render(<Stack className="extra" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId("stack")).toHaveClass("extra");
  });

  it("renders as a different element with as prop", () => {
    render(<Stack as="section" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId("stack").tagName).toBe("SECTION");
  });
});
