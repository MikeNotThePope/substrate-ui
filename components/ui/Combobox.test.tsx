import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeAll } from "vitest";
import { Combobox } from "./Combobox";

// Combobox uses Command internally which calls scrollIntoView
beforeAll(() => {
  Element.prototype.scrollIntoView = () => {};
});

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

describe("Combobox", () => {
  it("renders with placeholder text", () => {
    render(<Combobox items={items} placeholder="Pick a fruit" />);
    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveTextContent("Pick a fruit");
  });

  it("opens dropdown on click", async () => {
    render(<Combobox items={items} />);
    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
  });

  it("shows items when opened", async () => {
    render(<Combobox items={items} />);
    await userEvent.click(screen.getByRole("combobox"));
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("calls onValueChange when an item is selected", async () => {
    const onValueChange = vi.fn();
    render(
      <Combobox items={items} onValueChange={onValueChange} />,
    );
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Banana"));
    expect(onValueChange).toHaveBeenCalledWith("banana");
  });

  it("renders as disabled when disabled prop is set", () => {
    render(<Combobox items={items} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
