import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("renders trigger with combobox role", () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Pick one" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Alpha</Select.Item>
        </Select.Content>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("shows placeholder text", () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Pick one" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Alpha</Select.Item>
        </Select.Content>
      </Select>,
    );
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("merges custom className on trigger", () => {
    render(
      <Select>
        <Select.Trigger className="my-trigger">
          <Select.Value placeholder="Pick one" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Alpha</Select.Item>
        </Select.Content>
      </Select>,
    );
    expect(screen.getByRole("combobox")).toHaveClass("my-trigger");
  });

  it("renders with default value selected", () => {
    render(
      <Select defaultValue="a">
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Alpha</Select.Item>
          <Select.Item value="b">Beta</Select.Item>
        </Select.Content>
      </Select>,
    );
    // When a value is selected, it should be displayed in the trigger
    expect(screen.getByRole("combobox")).toHaveTextContent("Alpha");
  });
});
