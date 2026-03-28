import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ScrollArea } from "./ScrollArea";

describe("ScrollArea", () => {
  it("renders children", () => {
    render(
      <ScrollArea>
        <p>Scrollable content</p>
      </ScrollArea>,
    );
    expect(screen.getByText("Scrollable content")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    render(
      <ScrollArea className="h-72" data-testid="scroll-area">
        <p>Content</p>
      </ScrollArea>,
    );
    expect(screen.getByTestId("scroll-area")).toHaveClass("h-72");
  });

  it("renders with default overflow-hidden class", () => {
    render(
      <ScrollArea data-testid="scroll-area">
        <p>Content</p>
      </ScrollArea>,
    );
    expect(screen.getByTestId("scroll-area")).toHaveClass("overflow-hidden");
  });
});
