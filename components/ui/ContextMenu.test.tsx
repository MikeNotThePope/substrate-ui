import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ContextMenu } from "./ContextMenu";

describe("ContextMenu", () => {
  it("renders trigger area", () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click here</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Copy</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );
    expect(screen.getByText("Right click here")).toBeInTheDocument();
  });

  it("does not show menu items by default", () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click here</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Copy</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );
    expect(screen.queryByText("Copy")).not.toBeInTheDocument();
  });

  it("shows menu items on right-click", async () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click here</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Copy</ContextMenu.Item>
          <ContextMenu.Item>Paste</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Right click here"));
    expect(await screen.findByText("Copy")).toBeInTheDocument();
    expect(screen.getByText("Paste")).toBeInTheDocument();
  });

  it("renders label and separator in context menu", async () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right click here</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Label>Actions</ContextMenu.Label>
          <ContextMenu.Separator />
          <ContextMenu.Item>Copy</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>,
    );
    fireEvent.contextMenu(screen.getByText("Right click here"));
    expect(await screen.findByText("Actions")).toBeInTheDocument();
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
