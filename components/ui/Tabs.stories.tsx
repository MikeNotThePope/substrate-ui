import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "./Tabs";

const meta = {
  title: "Primitives/Tabs",
  component: Tabs,
} satisfies Meta<typeof Tabs>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" style={{ width: 400 }}>
      <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">Password</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="account">
        <p className="text-sm text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </Tabs.Content>
      <Tabs.Content value="password">
        <p className="text-sm text-muted-foreground">
          Change your password and security settings.
        </p>
      </Tabs.Content>
      <Tabs.Content value="settings">
        <p className="text-sm text-muted-foreground">
          Configure application settings.
        </p>
      </Tabs.Content>
    </Tabs>
  ),
};

export const WithMoreOverflow: Story = {
  render: () => (
    <Tabs defaultValue="overview" style={{ width: 400 }}>
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
        <Tabs.More>
          <Tabs.MoreItem value="reports">Reports</Tabs.MoreItem>
          <Tabs.MoreItem value="exports">Exports</Tabs.MoreItem>
          <Tabs.MoreItem value="integrations">Integrations</Tabs.MoreItem>
        </Tabs.More>
      </Tabs.List>
      <Tabs.Content value="overview">
        <p className="text-sm text-muted-foreground">Overview content.</p>
      </Tabs.Content>
      <Tabs.Content value="analytics">
        <p className="text-sm text-muted-foreground">Analytics content.</p>
      </Tabs.Content>
      <Tabs.Content value="reports">
        <p className="text-sm text-muted-foreground">Reports content (from overflow menu).</p>
      </Tabs.Content>
      <Tabs.Content value="exports">
        <p className="text-sm text-muted-foreground">Exports content (from overflow menu).</p>
      </Tabs.Content>
      <Tabs.Content value="integrations">
        <p className="text-sm text-muted-foreground">Integrations content (from overflow menu).</p>
      </Tabs.Content>
    </Tabs>
  ),
};
