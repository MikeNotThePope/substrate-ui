import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders navigation with pagination aria-label", () => {
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Link href="#">1</Pagination.Link>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>,
    );
    expect(screen.getByRole("navigation")).toHaveAttribute(
      "aria-label",
      "pagination",
    );
  });

  it("renders previous and next links", () => {
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous href="#" />
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Next href="#" />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>,
    );
    expect(
      screen.getByLabelText("Go to previous page"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Go to next page")).toBeInTheDocument();
  });

  it("marks active link with aria-current", () => {
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Link href="#" isActive>
              2
            </Pagination.Link>
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>,
    );
    const link = screen.getByText("2");
    expect(link).toHaveAttribute("aria-current", "page");
  });

  it("renders ellipsis with sr-only text", () => {
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Ellipsis />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>,
    );
    expect(screen.getByText("More pages")).toBeInTheDocument();
  });
});
