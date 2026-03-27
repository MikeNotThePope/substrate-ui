import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("renders with role=status", () => {
    render(<Loader />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders 3 dots by default", () => {
    render(<Loader />);
    const dots = screen.getByRole("status").querySelectorAll("div");
    expect(dots).toHaveLength(3);
  });

  it("renders custom dot count", () => {
    render(<Loader count={5} />);
    const dots = screen.getByRole("status").querySelectorAll("div");
    expect(dots).toHaveLength(5);
  });

  it("has accessible label", () => {
    render(<Loader />);
    expect(screen.getByRole("status")).toHaveAttribute("aria-label", "Loading...");
  });
});
