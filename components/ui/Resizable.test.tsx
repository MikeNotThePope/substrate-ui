import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Resizable } from "./Resizable";

describe("Resizable", () => {
  it("renders panels with content", () => {
    render(
      <Resizable orientation="horizontal">
        <Resizable.Panel>Panel one</Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel>Panel two</Resizable.Panel>
      </Resizable>,
    );
    expect(screen.getByText("Panel one")).toBeInTheDocument();
    expect(screen.getByText("Panel two")).toBeInTheDocument();
  });

  it("renders resize handle as a separator", () => {
    render(
      <Resizable orientation="horizontal">
        <Resizable.Panel>Left</Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel>Right</Resizable.Panel>
      </Resizable>,
    );
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders handle with grip icon when withHandle is true", () => {
    render(
      <Resizable orientation="horizontal">
        <Resizable.Panel>Left</Resizable.Panel>
        <Resizable.Handle withHandle />
        <Resizable.Panel>Right</Resizable.Panel>
      </Resizable>,
    );
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("supports vertical orientation", () => {
    render(
      <Resizable orientation="vertical" data-testid="panel-group">
        <Resizable.Panel>Top</Resizable.Panel>
        <Resizable.Handle />
        <Resizable.Panel>Bottom</Resizable.Panel>
      </Resizable>,
    );
    expect(screen.getByText("Top")).toBeInTheDocument();
    expect(screen.getByText("Bottom")).toBeInTheDocument();
  });
});
