import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";

const meta = {
  title: "Primitives/Label",
  component: Label,
} satisfies Meta<typeof Label>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Email address" },
};

export const WithHtmlFor: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      <Label htmlFor="input-demo">Username</Label>
      <input
        id="input-demo"
        type="text"
        placeholder="Enter username"
        style={{
          padding: "0.5rem",
          border: "2px solid currentColor",
          fontSize: "0.875rem",
        }}
      />
    </div>
  ),
};
