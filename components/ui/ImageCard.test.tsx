import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ImageCard } from "./ImageCard";

describe("ImageCard", () => {
  it("renders with required props", () => {
    render(<ImageCard imageUrl="/photo.jpg" caption="A photo" />);
    expect(screen.getByRole("figure")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", "/photo.jpg");
  });

  it("renders caption text", () => {
    render(<ImageCard imageUrl="/photo.jpg" caption="Sunset view" />);
    expect(screen.getByText("Sunset view")).toBeInTheDocument();
  });

  it("uses caption as default alt text", () => {
    render(<ImageCard imageUrl="/photo.jpg" caption="Beach" />);
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Beach");
  });

  it("uses custom alt when provided", () => {
    render(
      <ImageCard imageUrl="/photo.jpg" caption="Beach" alt="Sandy beach" />,
    );
    expect(screen.getByRole("img")).toHaveAttribute("alt", "Sandy beach");
  });

  it("merges custom className", () => {
    render(
      <ImageCard
        imageUrl="/photo.jpg"
        caption="Test"
        className="w-full"
      />,
    );
    expect(screen.getByRole("figure")).toHaveClass("w-full");
  });
});
