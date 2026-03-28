import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Collapsible } from "./Collapsible";

describe("Collapsible", () => {
  it("renders trigger text", () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Hidden content</Collapsible.Content>
      </Collapsible>,
    );
    expect(screen.getByText("Toggle")).toBeInTheDocument();
  });

  it("shows content on trigger click", async () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Hidden content</Collapsible.Content>
      </Collapsible>,
    );
    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Toggle"));
    expect(screen.getByText("Hidden content")).toBeInTheDocument();
  });

  it("hides content on second trigger click", async () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Hidden content</Collapsible.Content>
      </Collapsible>,
    );
    await userEvent.click(screen.getByText("Toggle"));
    expect(screen.getByText("Hidden content")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Toggle"));
    expect(screen.queryByText("Hidden content")).not.toBeInTheDocument();
  });

  it("renders content when defaultOpen is true", () => {
    render(
      <Collapsible defaultOpen>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Visible content</Collapsible.Content>
      </Collapsible>,
    );
    expect(screen.getByText("Visible content")).toBeInTheDocument();
  });
});
