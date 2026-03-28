import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll } from "vitest";
import { Carousel } from "./Carousel";

// embla-carousel requires matchMedia and IntersectionObserver in jsdom
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });

  globalThis.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
  } as unknown as typeof globalThis.IntersectionObserver;
});

describe("Carousel", () => {
  it("renders with carousel region role", () => {
    render(
      <Carousel>
        <Carousel.Content>
          <Carousel.Item>Slide 1</Carousel.Item>
        </Carousel.Content>
      </Carousel>,
    );
    expect(screen.getByRole("region")).toHaveAttribute(
      "aria-roledescription",
      "carousel",
    );
  });

  it("renders children slides", () => {
    render(
      <Carousel>
        <Carousel.Content>
          <Carousel.Item>Slide 1</Carousel.Item>
          <Carousel.Item>Slide 2</Carousel.Item>
        </Carousel.Content>
      </Carousel>,
    );
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("renders Previous and Next buttons", () => {
    render(
      <Carousel>
        <Carousel.Content>
          <Carousel.Item>Slide 1</Carousel.Item>
        </Carousel.Content>
        <Carousel.Previous />
        <Carousel.Next />
      </Carousel>,
    );
    expect(
      screen.getByRole("button", { name: /previous slide/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /next slide/i }),
    ).toBeInTheDocument();
  });

  it("merges custom className on root", () => {
    render(
      <Carousel className="my-carousel">
        <Carousel.Content>
          <Carousel.Item>Slide</Carousel.Item>
        </Carousel.Content>
      </Carousel>,
    );
    expect(screen.getByRole("region")).toHaveClass("my-carousel");
  });

  it("renders items with slide roledescription", () => {
    render(
      <Carousel>
        <Carousel.Content>
          <Carousel.Item>Slide 1</Carousel.Item>
        </Carousel.Content>
      </Carousel>,
    );
    const slide = screen.getByRole("group");
    expect(slide).toHaveAttribute("aria-roledescription", "slide");
  });
});
