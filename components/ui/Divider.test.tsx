import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Divider } from "./Divider";

describe("Divider", () => {
  it("renders with role=separator", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders horizontal by default", () => {
    render(<Divider />);
    expect(screen.getByRole("separator")).toHaveClass("border-t-2");
  });

  it("renders vertical orientation", () => {
    render(<Divider orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveClass("border-l-2");
  });

  it("renders with label", () => {
    render(<Divider label="OR" />);
    expect(screen.getByText("OR")).toBeInTheDocument();
  });
});
