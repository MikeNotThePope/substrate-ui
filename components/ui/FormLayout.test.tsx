import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FormLayout } from "./FormLayout";

describe("FormLayout", () => {
  it("renders as a form element", () => {
    render(<FormLayout data-testid="form">content</FormLayout>);
    expect(screen.getByTestId("form").tagName).toBe("FORM");
  });

  it("merges custom className on root", () => {
    render(<FormLayout data-testid="form" className="my-form">content</FormLayout>);
    expect(screen.getByTestId("form")).toHaveClass("my-form");
  });

  describe("Section", () => {
    it("renders title and description", () => {
      render(
        <FormLayout>
          <FormLayout.Section title="Account" description="Manage your account settings">
            <div>fields</div>
          </FormLayout.Section>
        </FormLayout>,
      );
      expect(screen.getByText("Account")).toBeInTheDocument();
      expect(screen.getByText("Manage your account settings")).toBeInTheDocument();
    });
  });

  describe("Field", () => {
    it("renders label text", () => {
      render(
        <FormLayout>
          <FormLayout.Field label="Email">
            <input />
          </FormLayout.Field>
        </FormLayout>,
      );
      expect(screen.getByText("Email")).toBeInTheDocument();
    });

    it("renders error message with alert role", () => {
      render(
        <FormLayout>
          <FormLayout.Field label="Email" error="Required field">
            <input />
          </FormLayout.Field>
        </FormLayout>,
      );
      expect(screen.getByRole("alert")).toHaveTextContent("Required field");
    });

    it("shows required indicator", () => {
      render(
        <FormLayout>
          <FormLayout.Field label="Email" required>
            <input />
          </FormLayout.Field>
        </FormLayout>,
      );
      expect(screen.getByText("*")).toBeInTheDocument();
    });
  });

  describe("Row", () => {
    it("renders with grid class", () => {
      render(
        <FormLayout>
          <FormLayout.Row data-testid="row">
            <div>col1</div>
            <div>col2</div>
          </FormLayout.Row>
        </FormLayout>,
      );
      expect(screen.getByTestId("row")).toHaveClass("grid");
    });
  });

  describe("Actions", () => {
    it("renders with default right alignment", () => {
      render(
        <FormLayout>
          <FormLayout.Actions data-testid="actions">
            <button>Submit</button>
          </FormLayout.Actions>
        </FormLayout>,
      );
      expect(screen.getByTestId("actions")).toHaveClass("justify-end");
    });

    it("renders with left alignment", () => {
      render(
        <FormLayout>
          <FormLayout.Actions align="left" data-testid="actions">
            <button>Submit</button>
          </FormLayout.Actions>
        </FormLayout>,
      );
      expect(screen.getByTestId("actions")).toHaveClass("justify-start");
    });

    it("merges custom className", () => {
      render(
        <FormLayout>
          <FormLayout.Actions className="my-actions" data-testid="actions">
            <button>Submit</button>
          </FormLayout.Actions>
        </FormLayout>,
      );
      expect(screen.getByTestId("actions")).toHaveClass("my-actions");
    });
  });
});
