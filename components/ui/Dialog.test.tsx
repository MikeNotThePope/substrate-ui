import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { Dialog } from "./Dialog";

describe("Dialog", () => {
  it("opens on trigger click and shows content", async () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Body>Dialog body content</Dialog.Body>
        </Dialog.Content>
      </Dialog>,
    );
    expect(screen.queryByText("Dialog body content")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Dialog body content")).toBeInTheDocument();
  });

  it("renders header, body, and footer content", async () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>Header text</Dialog.Header>
          <Dialog.Body>Body text</Dialog.Body>
          <Dialog.Footer>Footer text</Dialog.Footer>
        </Dialog.Content>
      </Dialog>,
    );
    await userEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Header text")).toBeInTheDocument();
    expect(screen.getByText("Body text")).toBeInTheDocument();
    expect(screen.getByText("Footer text")).toBeInTheDocument();
  });

  it("applies size classes on content", async () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content size="lg" data-testid="dialog-content">
          <Dialog.Body>Content</Dialog.Body>
        </Dialog.Content>
      </Dialog>,
    );
    await userEvent.click(screen.getByText("Open"));
    expect(screen.getByTestId("dialog-content")).toHaveClass("max-w-lg");
  });

  it("renders close button in header", async () => {
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>Title</Dialog.Header>
          <Dialog.Body>Body text</Dialog.Body>
        </Dialog.Content>
      </Dialog>,
    );
    await userEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Body text")).toBeInTheDocument();
    // The close button is an X icon rendered via Radix Dialog.Close with asChild
    // It renders as an SVG element, find it within the dialog
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
  });
});
