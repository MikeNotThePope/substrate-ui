import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Primitives/Divider",
  component: Divider,
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    label: { control: "text" },
  },
} satisfies Meta<typeof Divider>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};

export const WithLabel: Story = {
  args: { label: "OR" },
  decorators: [(Story) => <div style={{ width: 400 }}><Story /></div>],
};

export const Vertical: Story = {
  args: { orientation: "vertical" },
  decorators: [(Story) => <div style={{ height: 80, display: "flex" }}><Story /></div>],
};
