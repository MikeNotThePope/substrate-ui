import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader } from "./Loader";

const meta = {
  title: "Primitives/Loader",
  component: Loader,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    count: { control: { type: "number", min: 2, max: 6 } },
  },
} satisfies Meta<typeof Loader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const FiveDots: Story = {
  args: { count: 5 },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
      <Loader variant="default" />
      <Loader variant="secondary" />
      <Loader variant="outline" />
    </div>
  ),
};
