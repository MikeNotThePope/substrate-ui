import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Flex } from "./Flex";

describe("Flex", () => {
  it("renders children", () => {
    render(<Flex><span>Item</span></Flex>);
    expect(screen.getByText("Item")).toBeInTheDocument();
  });

  it("applies row direction by default", () => {
    render(<Flex data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex-row");
  });

  it("applies column direction", () => {
    render(<Flex direction="column" data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex-col");
  });

  it("applies wrap variant", () => {
    render(<Flex wrap="wrap" data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("flex-wrap");
  });

  it("applies gap variant classes", () => {
    render(<Flex gap="xl" data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("gap-8");
  });

  it("merges custom className", () => {
    render(<Flex className="extra" data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex")).toHaveClass("extra");
  });

  it("renders as a different element with as prop", () => {
    render(<Flex as="nav" data-testid="flex">Content</Flex>);
    expect(screen.getByTestId("flex").tagName).toBe("NAV");
  });
});
