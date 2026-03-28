import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Sheet } from "./Sheet";

describe("Sheet", () => {
  it("renders trigger element", () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open sheet</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Sheet title</Sheet.Title>
            <Sheet.Description>Sheet description</Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>,
    );
    expect(screen.getByText("Open sheet")).toBeInTheDocument();
  });

  it("does not show content by default", () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open sheet</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Sheet title</Sheet.Title>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>,
    );
    expect(screen.queryByText("Sheet title")).not.toBeInTheDocument();
  });

  it("opens on trigger click and shows content", async () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open sheet</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Sheet title</Sheet.Title>
            <Sheet.Description>Sheet description</Sheet.Description>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>,
    );
    await userEvent.click(screen.getByText("Open sheet"));
    expect(screen.getByText("Sheet title")).toBeInTheDocument();
    expect(screen.getByText("Sheet description")).toBeInTheDocument();
  });

  it("has a close button when open", async () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open sheet</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Header>
            <Sheet.Title>Sheet title</Sheet.Title>
          </Sheet.Header>
        </Sheet.Content>
      </Sheet>,
    );
    await userEvent.click(screen.getByText("Open sheet"));
    expect(screen.getByRole("button", { name: "Close" })).toBeInTheDocument();
  });
});
