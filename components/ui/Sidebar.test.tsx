import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { Sidebar } from "./Sidebar";

// Mock useIsMobile to return false (desktop) by default
vi.mock("@/hooks/use-mobile", () => ({
  useIsMobile: () => false,
}));

// Helper: wraps children in SidebarProvider (required context)
function renderWithProvider(ui: React.ReactNode) {
  return render(<Sidebar.Provider>{ui}</Sidebar.Provider>);
}

describe("Sidebar", () => {
  it("renders sidebar with provider wrapper", () => {
    renderWithProvider(
      <Sidebar data-testid="sidebar">
        <Sidebar.Content>Sidebar content</Sidebar.Content>
      </Sidebar>,
    );
    expect(screen.getByText("Sidebar content")).toBeInTheDocument();
  });

  it("renders Header, Content, and Footer sub-components", () => {
    renderWithProvider(
      <Sidebar>
        <Sidebar.Header>Header text</Sidebar.Header>
        <Sidebar.Content>Content text</Sidebar.Content>
        <Sidebar.Footer>Footer text</Sidebar.Footer>
      </Sidebar>,
    );
    expect(screen.getByText("Header text")).toBeInTheDocument();
    expect(screen.getByText("Content text")).toBeInTheDocument();
    expect(screen.getByText("Footer text")).toBeInTheDocument();
  });

  it("SidebarTrigger toggles sidebar state via data-state attribute", async () => {
    const user = userEvent.setup();
    render(
      <Sidebar.Provider defaultOpen>
        <Sidebar.Trigger data-testid="trigger" />
        <Sidebar data-testid="sidebar-root">
          <Sidebar.Content>Content</Sidebar.Content>
        </Sidebar>
      </Sidebar.Provider>,
    );
    // Initially expanded
    const wrapper = screen.getByTestId("sidebar-root").closest("[data-state]");
    expect(wrapper).toHaveAttribute("data-state", "expanded");

    // Toggle to collapsed
    await user.click(screen.getByTestId("trigger"));
    expect(wrapper).toHaveAttribute("data-state", "collapsed");
  });

  it("renders Menu with MenuItems and MenuButtons", () => {
    renderWithProvider(
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Menu>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>Dashboard</Sidebar.MenuButton>
            </Sidebar.MenuItem>
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>Settings</Sidebar.MenuButton>
            </Sidebar.MenuItem>
          </Sidebar.Menu>
        </Sidebar.Content>
      </Sidebar>,
    );
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });

  it("renders SidebarGroup with GroupLabel and GroupContent", () => {
    renderWithProvider(
      <Sidebar>
        <Sidebar.Content>
          <Sidebar.Group>
            <Sidebar.GroupLabel>Navigation</Sidebar.GroupLabel>
            <Sidebar.GroupContent>Group items here</Sidebar.GroupContent>
          </Sidebar.Group>
        </Sidebar.Content>
      </Sidebar>,
    );
    expect(screen.getByText("Navigation")).toBeInTheDocument();
    expect(screen.getByText("Group items here")).toBeInTheDocument();
  });

  it("merges custom className on Sidebar sub-components", () => {
    renderWithProvider(
      <Sidebar>
        <Sidebar.Header className="custom-header" data-testid="header">
          Header
        </Sidebar.Header>
        <Sidebar.Content className="custom-content" data-testid="content">
          Content
        </Sidebar.Content>
      </Sidebar>,
    );
    expect(screen.getByTestId("header")).toHaveClass("custom-header");
    expect(screen.getByTestId("content")).toHaveClass("custom-content");
  });

  it("renders SidebarRail with toggle aria-label", () => {
    renderWithProvider(
      <Sidebar>
        <Sidebar.Content>Content</Sidebar.Content>
        <Sidebar.Rail data-testid="rail" />
      </Sidebar>,
    );
    expect(screen.getByTestId("rail")).toHaveAttribute(
      "aria-label",
      "Toggle Sidebar",
    );
  });

  it("renders SidebarInset as a main element", () => {
    renderWithProvider(
      <>
        <Sidebar>
          <Sidebar.Content>Nav</Sidebar.Content>
        </Sidebar>
        <Sidebar.Inset data-testid="inset">Main content</Sidebar.Inset>
      </>,
    );
    const inset = screen.getByTestId("inset");
    expect(inset.tagName).toBe("MAIN");
    expect(screen.getByText("Main content")).toBeInTheDocument();
  });
});
