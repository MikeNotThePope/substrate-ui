import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Drawer } from "./Drawer";

describe("Drawer", () => {
  it("renders trigger button", () => {
    render(
      <Drawer>
        <Drawer.Trigger>Open drawer</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
          </Drawer.Header>
        </Drawer.Content>
      </Drawer>,
    );
    expect(screen.getByText("Open drawer")).toBeInTheDocument();
  });

  it("renders content when open", () => {
    render(
      <Drawer open>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Footer>Footer content</Drawer.Footer>
        </Drawer.Content>
      </Drawer>,
    );
    expect(screen.getByText("Drawer title")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  it("renders header and footer with correct data-slot attributes", () => {
    render(
      <Drawer open>
        <Drawer.Content>
          <Drawer.Header data-testid="header">
            <Drawer.Title>Title</Drawer.Title>
          </Drawer.Header>
          <Drawer.Footer data-testid="footer">Actions</Drawer.Footer>
        </Drawer.Content>
      </Drawer>,
    );
    expect(screen.getByTestId("header")).toHaveAttribute(
      "data-slot",
      "drawer-header",
    );
    expect(screen.getByTestId("footer")).toHaveAttribute(
      "data-slot",
      "drawer-footer",
    );
  });
});
