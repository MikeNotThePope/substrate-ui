import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Slider } from "./Slider";

describe("Slider", () => {
  it("renders slider role", () => {
    render(<Slider defaultValue={[50]} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("applies default value", () => {
    render(<Slider defaultValue={[75]} />);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-valuenow", "75");
  });

  it("merges custom className", () => {
    const { container } = render(
      <Slider defaultValue={[50]} className="my-slider" />,
    );
    expect(container.firstElementChild).toHaveClass("my-slider");
  });

  it("handles disabled state", () => {
    render(<Slider defaultValue={[50]} disabled />);
    // Radix Slider uses data-disabled attribute instead of native disabled
    expect(screen.getByRole("slider")).toHaveAttribute("data-disabled");
  });
});
