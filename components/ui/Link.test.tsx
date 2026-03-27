import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Link } from "./Link";

describe("Link", () => {
  it("renders as an anchor element", () => {
    render(<Link href="/home">Home</Link>);
    const link = screen.getByRole("link", { name: "Home" });
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
  });

  it("sets href attribute", () => {
    render(<Link href="/about">About</Link>);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/about",
    );
  });

  it("applies default variant classes", () => {
    render(<Link href="#">Default</Link>);
    expect(screen.getByRole("link")).toHaveClass("text-primary-foreground");
  });

  it("applies muted variant classes", () => {
    render(<Link href="#" variant="muted">Muted</Link>);
    expect(screen.getByRole("link")).toHaveClass("text-muted-foreground");
  });

  it("applies destructive variant classes", () => {
    render(<Link href="#" variant="destructive">Delete</Link>);
    expect(screen.getByRole("link")).toHaveClass("text-destructive");
  });

  it("applies size sm class", () => {
    render(<Link href="#" size="sm">Small</Link>);
    expect(screen.getByRole("link")).toHaveClass("text-sm");
  });

  it("applies size lg class", () => {
    render(<Link href="#" size="lg">Large</Link>);
    expect(screen.getByRole("link")).toHaveClass("text-lg");
  });

  it("renders as child element with asChild", () => {
    render(
      <Link asChild>
        <button>Button link</button>
      </Link>,
    );
    const btn = screen.getByRole("button", { name: "Button link" });
    expect(btn).toBeInTheDocument();
    expect(btn.tagName).toBe("BUTTON");
  });

  it("merges custom className", () => {
    render(<Link href="#" className="my-link">Link</Link>);
    expect(screen.getByRole("link")).toHaveClass("my-link");
  });
});
