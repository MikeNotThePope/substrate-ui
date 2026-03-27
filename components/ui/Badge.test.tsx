import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders children", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Badge variant="destructive">Error</Badge>);
    expect(screen.getByText("Error")).toHaveClass("bg-destructive");
  });

  it("applies size classes", () => {
    render(<Badge size="sm">Sm</Badge>);
    expect(screen.getByText("Sm")).toHaveClass("text-[10px]");
  });

  it("merges custom className", () => {
    render(<Badge className="extra">Tag</Badge>);
    expect(screen.getByText("Tag")).toHaveClass("extra");
  });
});
