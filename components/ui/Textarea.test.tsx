import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders a textarea element", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox").tagName).toBe("TEXTAREA");
  });

  it("renders with placeholder", () => {
    render(<Textarea placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });

  it("calls onChange when typed into", async () => {
    const onChange = vi.fn();
    render(<Textarea onChange={onChange} />);
    await userEvent.type(screen.getByRole("textbox"), "hello");
    expect(onChange).toHaveBeenCalled();
  });

  it("handles disabled state", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("merges custom className", () => {
    render(<Textarea className="my-textarea" />);
    expect(screen.getByRole("textbox")).toHaveClass("my-textarea");
  });
});
