import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "vitest-axe";
import { describe, it, expect } from "vitest";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("renders accordion items with triggers", () => {
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section One</Accordion.Trigger>
          <Accordion.Content>Content one</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section Two</Accordion.Trigger>
          <Accordion.Content>Content two</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );
    expect(screen.getByText("Section One")).toBeInTheDocument();
    expect(screen.getByText("Section Two")).toBeInTheDocument();
  });

  it("expands content on trigger click", async () => {
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section One</Accordion.Trigger>
          <Accordion.Content>Content one</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );
    expect(screen.queryByText("Content one")).not.toBeInTheDocument();
    await userEvent.click(screen.getByText("Section One"));
    expect(screen.getByText("Content one")).toBeInTheDocument();
  });

  it("collapses content on second trigger click", async () => {
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section One</Accordion.Trigger>
          <Accordion.Content>Content one</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );
    await userEvent.click(screen.getByText("Section One"));
    expect(screen.getByText("Content one")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Section One"));
    expect(screen.queryByText("Content one")).not.toBeInTheDocument();
  });

  it("only expands one item at a time in single mode", async () => {
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section One</Accordion.Trigger>
          <Accordion.Content>Content one</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section Two</Accordion.Trigger>
          <Accordion.Content>Content two</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );
    await userEvent.click(screen.getByText("Section One"));
    expect(screen.getByText("Content one")).toBeInTheDocument();
    await userEvent.click(screen.getByText("Section Two"));
    expect(screen.getByText("Content two")).toBeInTheDocument();
    expect(screen.queryByText("Content one")).not.toBeInTheDocument();
  });

  it("has no accessibility violations", async () => {
    const { container } = render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>Section One</Accordion.Trigger>
          <Accordion.Content>Content one</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>Section Two</Accordion.Trigger>
          <Accordion.Content>Content two</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
