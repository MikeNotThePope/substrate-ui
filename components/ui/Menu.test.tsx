import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Menu } from "./Menu";

describe("Menu", () => {
  it("renders trigger", () => {
    render(
      <Menu>
        <Menu.Trigger>Actions</Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Edit</Menu.Item>
        </Menu.Content>
      </Menu>,
    );
    expect(screen.getByText("Actions")).toBeInTheDocument();
  });

  it("opens on click and shows items", async () => {
    render(
      <Menu>
        <Menu.Trigger>Actions</Menu.Trigger>
        <Menu.Content>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
        </Menu.Content>
      </Menu>,
    );
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Actions"));
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  it("fires onSelect on item click", async () => {
    const onSelect = vi.fn();
    render(
      <Menu>
        <Menu.Trigger>Actions</Menu.Trigger>
        <Menu.Content>
          <Menu.Item onSelect={onSelect}>Edit</Menu.Item>
        </Menu.Content>
      </Menu>,
    );
    await userEvent.click(screen.getByText("Actions"));
    await userEvent.click(screen.getByText("Edit"));
    expect(onSelect).toHaveBeenCalled();
  });
});
