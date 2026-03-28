import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Table } from "./Table";

describe("Table", () => {
  it("renders a full table structure", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Name</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Alice</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
  });

  it("renders caption and footer", () => {
    render(
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head>Col</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell>Total</Table.Cell>
          </Table.Row>
        </Table.Footer>
        <Table.Caption>A sample table</Table.Caption>
      </Table>,
    );
    expect(screen.getByText("Total")).toBeInTheDocument();
    expect(screen.getByText("A sample table")).toBeInTheDocument();
  });

  it("merges className on root table", () => {
    render(
      <Table className="my-table">
        <Table.Body>
          <Table.Row>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByRole("table")).toHaveClass("my-table");
  });

  it("merges className on sub-components", () => {
    render(
      <Table>
        <Table.Body>
          <Table.Row className="custom-row">
            <Table.Cell className="custom-cell">Value</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>,
    );
    expect(screen.getByRole("row")).toHaveClass("custom-row");
    expect(screen.getByRole("cell")).toHaveClass("custom-cell");
  });
});
