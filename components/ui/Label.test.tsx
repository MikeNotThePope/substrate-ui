import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Label } from "./Label";

describe("Label", () => {
  it("renders text content", () => {
    render(<Label>Email address</Label>);
    expect(screen.getByText("Email address")).toBeInTheDocument();
  });

  it("sets htmlFor attribute", () => {
    render(<Label htmlFor="email-input">Email</Label>);
    expect(screen.getByText("Email")).toHaveAttribute("for", "email-input");
  });

  it("merges custom className", () => {
    render(<Label className="my-label">Name</Label>);
    expect(screen.getByText("Name")).toHaveClass("my-label");
  });
});
