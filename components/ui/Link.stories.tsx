import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "./Link";

const meta = {
  title: "Primitives/Link",
  component: Link,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "muted", "destructive", "plain"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Link>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Default link", href: "#" },
};

export const Muted: Story = {
  args: { children: "Muted link", href: "#", variant: "muted" },
};

export const Destructive: Story = {
  args: { children: "Delete this item", href: "#", variant: "destructive" },
};

export const Plain: Story = {
  args: { children: "Plain link", href: "#", variant: "plain" },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
      <Link href="#" variant="default">Default</Link>
      <Link href="#" variant="muted">Muted</Link>
      <Link href="#" variant="destructive">Destructive</Link>
      <Link href="#" variant="plain">Plain</Link>
    </div>
  ),
};
