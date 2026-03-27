import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("renders radiogroup role", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" />
      </RadioGroup>,
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("renders radio items", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" />
        <RadioGroup.Item value="b" />
        <RadioGroup.Item value="c" />
      </RadioGroup>,
    );
    expect(screen.getAllByRole("radio")).toHaveLength(3);
  });

  it("changes selection on click", async () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup onValueChange={onValueChange}>
        <RadioGroup.Item value="a" />
        <RadioGroup.Item value="b" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getAllByRole("radio")[1]);
    expect(onValueChange).toHaveBeenCalledWith("b");
  });

  it("merges custom className on root", () => {
    render(
      <RadioGroup className="my-group">
        <RadioGroup.Item value="a" />
      </RadioGroup>,
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("my-group");
  });

  it("merges custom className on item", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" className="my-item" />
      </RadioGroup>,
    );
    expect(screen.getByRole("radio")).toHaveClass("my-item");
  });
});
