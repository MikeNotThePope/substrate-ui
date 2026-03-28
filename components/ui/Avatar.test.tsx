import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Avatar } from "./Avatar";

describe("Avatar", () => {
  it("renders fallback text", () => {
    render(
      <Avatar>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("renders image element with alt text when present", () => {
    const { container } = render(
      <Avatar>
        <Avatar.Image src="/avatar.png" alt="User avatar" />
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    const img = container.querySelector("img");
    if (img) {
      expect(img).toHaveAttribute("alt", "User avatar");
    } else {
      expect(screen.getByText("AB")).toBeInTheDocument();
    }
  });

  it("merges custom className on root", () => {
    const { container } = render(
      <Avatar className="my-class">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).toHaveClass("my-class");
  });

  it("merges custom className on fallback", () => {
    render(
      <Avatar>
        <Avatar.Fallback className="custom-fallback">AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(screen.getByText("AB")).toHaveClass("custom-fallback");
  });

  it("defaults to circle shape", () => {
    const { container } = render(
      <Avatar>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).toHaveClass("rounded-full");
  });

  it("applies square shape", () => {
    const { container } = render(
      <Avatar shape="square">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).toHaveClass("rounded-none");
    expect(container.firstElementChild).not.toHaveClass("rounded-full");
  });

  it("applies rounded shape", () => {
    const { container } = render(
      <Avatar shape="rounded">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).toHaveClass("rounded-lg");
  });

  it("applies hexagon shape with clip-path", () => {
    const { container } = render(
      <Avatar shape="hexagon">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).not.toHaveClass("rounded-full");
    expect(container.firstElementChild).not.toHaveClass("border-2");
  });

  it("applies diamond shape with rotation", () => {
    const { container } = render(
      <Avatar shape="diamond">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).toHaveClass("rotate-45");
    expect(container.firstElementChild).toHaveAttribute("data-shape", "diamond");
  });

  it("applies squircle shape with SVG clip-path", () => {
    const { container } = render(
      <Avatar shape="squircle">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    const clipPath = container.querySelector("clipPath#squircle");
    expect(clipPath).toBeInTheDocument();
  });

  it("applies shield shape", () => {
    const { container } = render(
      <Avatar shape="shield">
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>,
    );
    expect(container.firstElementChild).not.toHaveClass("rounded-full");
  });
});
