import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Primitives/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image
        src="https://i.pravatar.cc/150?u=storybook"
        alt="User avatar"
      />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: () => (
    <Avatar className="h-8 w-8">
      <Avatar.Fallback className="text-xs">SM</Avatar.Fallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: () => (
    <Avatar className="h-16 w-16">
      <Avatar.Fallback className="text-lg">LG</Avatar.Fallback>
    </Avatar>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Avatar className="h-8 w-8">
        <Avatar.Fallback className="text-xs">SM</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <Avatar.Fallback className="text-lg">LG</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};
