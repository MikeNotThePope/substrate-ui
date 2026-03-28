import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders a div with default classes", () => {
    render(<Skeleton data-testid="skeleton" />);
    const el = screen.getByTestId("skeleton");
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("animate-pulse");
    expect(el).toHaveClass("bg-muted");
  });

  it("merges custom className", () => {
    render(<Skeleton data-testid="skeleton" className="h-8 w-32" />);
    const el = screen.getByTestId("skeleton");
    expect(el).toHaveClass("h-8");
    expect(el).toHaveClass("w-32");
    expect(el).toHaveClass("animate-pulse");
  });

  it("forwards additional props", () => {
    render(<Skeleton data-testid="skeleton" aria-label="Loading" />);
    expect(screen.getByTestId("skeleton")).toHaveAttribute(
      "aria-label",
      "Loading",
    );
  });
});
