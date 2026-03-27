import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Grid } from "./Grid";

describe("Grid", () => {
  it("renders children", () => {
    render(<Grid><span>Item</span></Grid>);
    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("applies grid-cols-1 by default", () => {
    render(<Grid data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("grid-cols-1");
  });

  it("applies column variant classes", () => {
    render(<Grid columns={3} data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("grid-cols-3");
  });

  it("applies gap variant classes", () => {
    render(<Grid gap="sm" data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("gap-2");
  });

  it("merges custom className", () => {
    render(<Grid className="extra" data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid")).toHaveClass("extra");
  });

  it("renders as a different element with as prop", () => {
    render(<Grid as="section" data-testid="grid">Content</Grid>);
    expect(screen.getByTestId("grid").tagName).toBe("SECTION");
  });
});
