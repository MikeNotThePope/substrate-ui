import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Tabs } from "./Tabs";

describe("Tabs", () => {
  it("renders tablist", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getByRole("tablist")).toBeInTheDocument();
  });

  it("renders tab triggers", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getAllByRole("tab")).toHaveLength(2);
  });

  it("shows default value content", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getByText("Content 1")).toBeInTheDocument();
  });

  it("switches content on tab click", async () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>,
    );
    await userEvent.click(screen.getByRole("tab", { name: "Tab 2" }));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
  });

  it("merges custom className on list", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List className="my-list">
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
      </Tabs>,
    );
    expect(screen.getByRole("tablist")).toHaveClass("my-list");
  });
});
