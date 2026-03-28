import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { NavigationMenu } from "./NavigationMenu";

describe("NavigationMenu", () => {
  it("renders a navigation element", () => {
    render(
      <NavigationMenu>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>,
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders List with multiple items", () => {
    render(
      <NavigationMenu>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/contact">Contact</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>,
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders NavigationMenu.Link as accessible links", () => {
    render(
      <NavigationMenu>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/docs">Docs</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>,
    );
    const link = screen.getByText("Docs");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/docs");
  });

  it("merges custom className on root and list", () => {
    render(
      <NavigationMenu className="custom-nav" data-testid="nav-root">
        <NavigationMenu.List className="custom-list" data-testid="nav-list">
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>,
    );
    expect(screen.getByTestId("nav-root")).toHaveClass("custom-nav");
    expect(screen.getByTestId("nav-list")).toHaveClass("custom-list");
  });
});
