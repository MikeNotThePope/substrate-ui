import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeAll } from "vitest";
import { Command } from "./Command";

// cmdk calls scrollIntoView which is not available in jsdom
beforeAll(() => {
  Element.prototype.scrollIntoView = () => {};
});

describe("Command", () => {
  it("renders the command input", () => {
    render(
      <Command>
        <Command.Input placeholder="Type a command..." />
        <Command.List>
          <Command.Empty>No results</Command.Empty>
        </Command.List>
      </Command>,
    );
    expect(screen.getByPlaceholderText("Type a command...")).toBeInTheDocument();
  });

  it("renders command items", () => {
    render(
      <Command>
        <Command.Input />
        <Command.List>
          <Command.Group>
            <Command.Item>Item One</Command.Item>
            <Command.Item>Item Two</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>,
    );
    expect(screen.getByText("Item One")).toBeInTheDocument();
    expect(screen.getByText("Item Two")).toBeInTheDocument();
  });

  it("filters items when typing in the input", async () => {
    render(
      <Command>
        <Command.Input placeholder="Search..." />
        <Command.List>
          <Command.Group>
            <Command.Item>Apple</Command.Item>
            <Command.Item>Banana</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>,
    );
    const input = screen.getByPlaceholderText("Search...");
    await userEvent.type(input, "Apple");
    expect(screen.getByText("Apple")).toBeInTheDocument();
    // cmdk hides non-matching items via aria-hidden or display
    const bananaItem = screen.queryByText("Banana");
    if (bananaItem) {
      // cmdk sets aria-hidden on filtered-out items
      const option = bananaItem.closest("[cmdk-item]");
      expect(option).toHaveAttribute("aria-hidden", "true");
    }
  });

  it("renders a group heading", () => {
    render(
      <Command>
        <Command.Input />
        <Command.List>
          <Command.Group heading="Fruits">
            <Command.Item>Apple</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>,
    );
    expect(screen.getByText("Fruits")).toBeInTheDocument();
  });
});
