import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Progress } from "./Progress";

describe("Progress", () => {
  it("renders with progressbar role", () => {
    render(<Progress value={0} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders with a given value", () => {
    const { container } = render(<Progress value={60} />);
    const bar = screen.getByRole("progressbar");
    expect(bar).toBeInTheDocument();
    // Radix Progress uses a transform on the indicator to show progress
    const indicator = container.querySelector("[data-state]");
    expect(indicator).toBeInTheDocument();
  });

  it("defaults value to 0 when not provided", () => {
    render(<Progress />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    render(<Progress value={50} className="h-2" />);
    expect(screen.getByRole("progressbar")).toHaveClass("h-2");
  });
});
