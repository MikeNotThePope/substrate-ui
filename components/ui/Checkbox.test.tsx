import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders checkbox role", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("toggles on click", async () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox onCheckedChange={onCheckedChange} />);
    await userEvent.click(screen.getByRole("checkbox"));
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("applies default variant classes", () => {
    render(<Checkbox variant="default" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("data-[state=checked]:bg-primary");
  });

  it("applies solid variant classes", () => {
    render(<Checkbox variant="solid" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("data-[state=checked]:bg-foreground");
  });

  it("applies size classes", () => {
    render(<Checkbox size="sm" />);
    expect(screen.getByRole("checkbox")).toHaveClass("h-4", "w-4");
  });

  it("applies large size classes", () => {
    render(<Checkbox size="lg" />);
    expect(screen.getByRole("checkbox")).toHaveClass("h-6", "w-6");
  });

  it("handles disabled state", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("merges custom className", () => {
    render(<Checkbox className="my-class" />);
    expect(screen.getByRole("checkbox")).toHaveClass("my-class");
  });
});
