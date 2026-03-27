import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Button",
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "link", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Button" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost" },
};

export const Link: Story = {
  args: { children: "Link button", variant: "link" },
};

export const Small: Story = {
  args: { children: "Small", size: "sm" },
};

export const Large: Story = {
  args: { children: "Large", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
