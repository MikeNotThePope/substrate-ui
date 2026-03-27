import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { IconButton } from "./IconButton";

describe("IconButton", () => {
  it("renders a button", () => {
    render(<IconButton aria-label="action">X</IconButton>);
    expect(screen.getByRole("button", { name: "action" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<IconButton onClick={onClick} aria-label="action">X</IconButton>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("does not call onClick when disabled", async () => {
    const onClick = vi.fn();
    render(<IconButton disabled onClick={onClick} aria-label="action">X</IconButton>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies default variant classes", () => {
    render(<IconButton variant="default" aria-label="action">X</IconButton>);
    expect(screen.getByRole("button")).toHaveClass("bg-primary");
  });

  it("applies secondary variant classes", () => {
    render(<IconButton variant="secondary" aria-label="action">X</IconButton>);
    expect(screen.getByRole("button")).toHaveClass("bg-secondary");
  });

  it("applies ghost variant classes", () => {
    render(<IconButton variant="ghost" aria-label="action">X</IconButton>);
    expect(screen.getByRole("button")).toHaveClass("border-transparent");
  });

  it("applies size sm classes", () => {
    render(<IconButton size="sm" aria-label="action">X</IconButton>);
    expect(screen.getByRole("button")).toHaveClass("p-1.5");
  });

  it("applies size lg classes", () => {
    render(<IconButton size="lg" aria-label="action">X</IconButton>);
    expect(screen.getByRole("button")).toHaveClass("p-3");
  });

  it("renders as child element with asChild", () => {
    render(
      <IconButton asChild>
        <a href="/test" aria-label="link action">X</a>
      </IconButton>,
    );
    const link = screen.getByRole("link", { name: "link action" });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
  });

  it("merges custom className", () => {
    render(<IconButton className="my-class" aria-label="action">X</IconButton>);
    expect(screen.getByRole("button")).toHaveClass("my-class");
  });
});
