import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with role=alert", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders title and description", () => {
    render(
      <Alert>
        <Alert.Title>Heads up</Alert.Title>
        <Alert.Description>Some details here.</Alert.Description>
      </Alert>
    );
    expect(screen.getByText("Heads up")).toBeInTheDocument();
    expect(screen.getByText("Some details here.")).toBeInTheDocument();
  });

  it("applies status classes", () => {
    render(<Alert status="error">Oops</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("bg-error");
  });

  it("applies variant classes", () => {
    render(<Alert variant="solid">Solid</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("bg-secondary");
  });
});
