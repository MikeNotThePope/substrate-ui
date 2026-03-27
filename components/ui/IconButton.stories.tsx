import type { Meta, StoryObj } from "@storybook/react-vite";
import { IconButton } from "./IconButton";
import { X, Heart, Settings, Plus } from "lucide-react";

const meta = {
  title: "Primitives/IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof IconButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: <Plus />, "aria-label": "Add" },
};

export const Secondary: Story = {
  args: { children: <Heart />, variant: "secondary", "aria-label": "Favorite" },
};

export const Outline: Story = {
  args: { children: <Settings />, variant: "outline", "aria-label": "Settings" },
};

export const Ghost: Story = {
  args: { children: <X />, variant: "ghost", "aria-label": "Close" },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <IconButton size="sm" aria-label="Small"><Plus /></IconButton>
      <IconButton size="md" aria-label="Medium"><Plus /></IconButton>
      <IconButton size="lg" aria-label="Large"><Plus /></IconButton>
    </div>
  ),
};
