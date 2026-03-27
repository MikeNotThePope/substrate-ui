import type { Meta, StoryObj } from "@storybook/react-vite";
import { Menu } from "./Menu";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Menu>
      <Menu.Trigger asChild>
        <Button>Open Menu</Button>
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Billing</Menu.Item>
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu>
  ),
};
