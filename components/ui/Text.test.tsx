import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Text } from "./Text";

describe("Text", () => {
  it("renders with default p tag", () => {
    render(<Text>Hello world</Text>);
    const el = screen.getByText("Hello world");
    expect(el.tagName).toBe("P");
  });

  it("renders h1 variant as h1 element", () => {
    render(<Text variant="h1">Heading</Text>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders h2 variant as h2 element", () => {
    render(<Text variant="h2">Heading 2</Text>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("applies variant classes for h1", () => {
    render(<Text variant="h1">Heading</Text>);
    expect(screen.getByText("Heading")).toHaveClass("font-head", "text-4xl");
  });

  it("applies variant classes for small", () => {
    render(<Text variant="small">Fine print</Text>);
    expect(screen.getByText("Fine print")).toHaveClass("text-sm", "text-muted-foreground");
  });

  it("applies variant classes for code", () => {
    render(<Text variant="code">const x = 1</Text>);
    const el = screen.getByText("const x = 1");
    expect(el.tagName).toBe("CODE");
    expect(el).toHaveClass("font-mono");
  });

  it("overrides tag with as prop", () => {
    render(<Text as="span">Inline text</Text>);
    const el = screen.getByText("Inline text");
    expect(el.tagName).toBe("SPAN");
  });

  it("uses as prop over variant default element", () => {
    render(<Text variant="h1" as="div">Div heading</Text>);
    const el = screen.getByText("Div heading");
    expect(el.tagName).toBe("DIV");
    expect(el).toHaveClass("font-head");
  });

  it("merges custom className", () => {
    render(<Text className="my-text">Content</Text>);
    expect(screen.getByText("Content")).toHaveClass("my-text");
  });
});
