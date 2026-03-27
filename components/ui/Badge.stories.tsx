import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md"],
    },
  },
} satisfies Meta<typeof Badge>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Badge" },
};

export const Success: Story = {
  args: { children: "Success", variant: "success" },
};

export const Warning: Story = {
  args: { children: "Warning", variant: "warning" },
};

export const Destructive: Story = {
  args: { children: "Error", variant: "destructive" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

export const Small: Story = {
  args: { children: "Small", size: "sm" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", alignItems: "center" }}>
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};
