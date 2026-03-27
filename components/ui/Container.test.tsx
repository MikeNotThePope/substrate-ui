import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container><span>Content</span></Container>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies mx-auto and padding by default", () => {
    render(<Container data-testid="container">Content</Container>);
    const el = screen.getByTestId("container");
    expect(el).toHaveClass("mx-auto");
    expect(el).toHaveClass("px-4");
  });

  it("applies size variant classes", () => {
    render(<Container size="sm" data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("max-w-2xl");
  });

  it("applies xl size variant", () => {
    render(<Container size="xl" data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("max-w-7xl");
  });

  it("merges custom className", () => {
    render(<Container className="extra" data-testid="container">Content</Container>);
    expect(screen.getByTestId("container")).toHaveClass("extra");
  });

  it("renders as a different element with as prop", () => {
    render(<Container as="main" data-testid="container">Content</Container>);
    expect(screen.getByTestId("container").tagName).toBe("MAIN");
  });
});
