import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DataTable, type ColumnDef } from "./DataTable";

type TestRow = { id: string; name: string; email: string };

const columns: ColumnDef<TestRow>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
];

const data: TestRow[] = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
  { id: "3", name: "Charlie", email: "charlie@example.com" },
];

describe("DataTable", () => {
  it("renders table with column headers", () => {
    render(
      <DataTable
        columns={columns}
        data={data}
        showPagination={false}
        showColumnToggle={false}
      />,
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("renders all data rows", () => {
    render(
      <DataTable
        columns={columns}
        data={data}
        showPagination={false}
        showColumnToggle={false}
      />,
    );
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("renders email cells", () => {
    render(
      <DataTable
        columns={columns}
        data={data}
        showPagination={false}
        showColumnToggle={false}
      />,
    );
    expect(screen.getByText("alice@example.com")).toBeInTheDocument();
    expect(screen.getByText("bob@example.com")).toBeInTheDocument();
  });

  it("shows 'No results.' when data is empty", () => {
    render(
      <DataTable
        columns={columns}
        data={[]}
        showPagination={false}
        showColumnToggle={false}
      />,
    );
    expect(screen.getByText("No results.")).toBeInTheDocument();
  });

  it("renders pagination buttons when showPagination is true", () => {
    render(
      <DataTable columns={columns} data={data} showColumnToggle={false} />,
    );
    expect(
      screen.getByRole("button", { name: "Previous" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Next" })).toBeInTheDocument();
  });
});
