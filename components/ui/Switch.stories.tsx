import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "./Switch";
import { Label } from "./Label";

const meta = {
  title: "Primitives/Switch",
  component: Switch,
  argTypes: {
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <Switch id="airplane" />
      <Label htmlFor="airplane">Airplane Mode</Label>
    </div>
  ),
};
