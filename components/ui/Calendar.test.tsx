import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Calendar } from "./Calendar";

describe("Calendar", () => {
  it("renders a calendar with day cells", () => {
    render(<Calendar />);
    // react-day-picker renders day buttons inside the calendar grid
    const grid = screen.getByRole("grid");
    expect(grid).toBeInTheDocument();
  });

  it("merges custom className", () => {
    const { container } = render(<Calendar className="my-calendar" />);
    // The DayPicker element receives the merged className
    const dayPicker = container.querySelector(".my-calendar");
    expect(dayPicker).toBeInTheDocument();
  });

  it("renders navigation buttons for previous and next month", () => {
    render(<Calendar />);
    const prevButton = screen.getByRole("button", {
      name: /previous/i,
    });
    const nextButton = screen.getByRole("button", {
      name: /next/i,
    });
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("renders the current month caption", () => {
    const today = new Date();
    const monthName = today.toLocaleString("default", { month: "long" });
    render(<Calendar defaultMonth={today} />);
    expect(screen.getByText(new RegExp(monthName))).toBeInTheDocument();
  });
});
