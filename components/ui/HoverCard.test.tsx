import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { HoverCard } from "./HoverCard";

describe("HoverCard", () => {
  it("renders trigger element", () => {
    render(
      <HoverCard>
        <HoverCard.Trigger>Hover trigger</HoverCard.Trigger>
        <HoverCard.Content>Card content</HoverCard.Content>
      </HoverCard>,
    );
    expect(screen.getByText("Hover trigger")).toBeInTheDocument();
  });

  it("does not show content by default", () => {
    render(
      <HoverCard>
        <HoverCard.Trigger>Hover trigger</HoverCard.Trigger>
        <HoverCard.Content>Card content</HoverCard.Content>
      </HoverCard>,
    );
    expect(screen.queryByText("Card content")).not.toBeInTheDocument();
  });

  it("shows content on hover", async () => {
    render(
      <HoverCard openDelay={0}>
        <HoverCard.Trigger>Hover trigger</HoverCard.Trigger>
        <HoverCard.Content>Card content</HoverCard.Content>
      </HoverCard>,
    );
    await userEvent.hover(screen.getByText("Hover trigger"));
    expect(await screen.findByText("Card content")).toBeInTheDocument();
  });
});
