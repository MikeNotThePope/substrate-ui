import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Popover } from "./Popover";

describe("Popover", () => {
  it("renders trigger element", () => {
    render(
      <Popover>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Content>Popover content</Popover.Content>
      </Popover>,
    );
    expect(screen.getByText("Open popover")).toBeInTheDocument();
  });

  it("does not show content by default", () => {
    render(
      <Popover>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Content>Popover content</Popover.Content>
      </Popover>,
    );
    expect(screen.queryByText("Popover content")).not.toBeInTheDocument();
  });

  it("opens on trigger click and shows content", async () => {
    render(
      <Popover>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Content>Popover content</Popover.Content>
      </Popover>,
    );
    await userEvent.click(screen.getByText("Open popover"));
    expect(screen.getByText("Popover content")).toBeInTheDocument();
  });

  it("renders close button inside content", async () => {
    render(
      <Popover>
        <Popover.Trigger>Open popover</Popover.Trigger>
        <Popover.Content>
          <Popover.Close>Close</Popover.Close>
        </Popover.Content>
      </Popover>,
    );
    await userEvent.click(screen.getByText("Open popover"));
    expect(screen.getByText("Close")).toBeInTheDocument();
  });
});
