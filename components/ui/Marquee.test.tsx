import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Marquee } from "./Marquee";

describe("Marquee", () => {
  it("renders all items", () => {
    render(<Marquee items={["Hello", "World"]} />);
    // Items are duplicated for the seamless loop effect
    const hellos = screen.getAllByText("Hello");
    expect(hellos.length).toBeGreaterThanOrEqual(2);
  });

  it("applies custom className", () => {
    render(
      <Marquee
        items={["Test"]}
        className="my-marquee"
        data-testid="marquee"
      />,
    );
    expect(screen.getByTestId("marquee")).toHaveClass("my-marquee");
  });

  it("renders with default border classes", () => {
    render(<Marquee items={["Item"]} data-testid="marquee" />);
    expect(screen.getByTestId("marquee")).toHaveClass("border-y-2");
  });
});
