import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card } from "./Card";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("renders with Header, Body, and Footer", () => {
    render(
      <Card>
        <Card.Header>Title</Card.Header>
        <Card.Body>Body text</Card.Body>
        <Card.Footer>Actions</Card.Footer>
      </Card>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("applies variant classes", () => {
    render(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText("Elevated")).toHaveClass("shadow-lg");
  });
});
