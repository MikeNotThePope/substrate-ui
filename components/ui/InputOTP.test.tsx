import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { InputOTP } from "./InputOTP";

describe("InputOTP", () => {
  it("renders OTP input slots", () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP>,
    );
    // input-otp renders a hidden input element
    const input = container.querySelector("input");
    expect(input).toBeInTheDocument();
  });

  it("renders with groups and separator", () => {
    render(
      <InputOTP maxLength={6}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>,
    );
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders the correct number of slot elements", () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTP.Group data-testid="otp-group">
          <InputOTP.Slot index={0} data-testid="slot-0" />
          <InputOTP.Slot index={1} data-testid="slot-1" />
          <InputOTP.Slot index={2} data-testid="slot-2" />
          <InputOTP.Slot index={3} data-testid="slot-3" />
        </InputOTP.Group>
      </InputOTP>,
    );
    expect(screen.getByTestId("slot-0")).toBeInTheDocument();
    expect(screen.getByTestId("slot-1")).toBeInTheDocument();
    expect(screen.getByTestId("slot-2")).toBeInTheDocument();
    expect(screen.getByTestId("slot-3")).toBeInTheDocument();
  });
});
