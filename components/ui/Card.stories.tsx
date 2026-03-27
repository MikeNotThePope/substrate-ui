import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "./Card";

const meta = {
  title: "Primitives/Card",
  component: Card,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "elevated", "interactive"],
    },
  },
} satisfies Meta<typeof Card>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 320 }}>
      <Card.Header>
        <strong>Card Title</strong>
      </Card.Header>
      <Card.Body>
        <p>This is the card body content. It can contain any elements.</p>
      </Card.Body>
      <Card.Footer>
        <span style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>Footer</span>
      </Card.Footer>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ width: 320 }}>
      <Card.Body>
        <p>Outlined card with no shadow.</p>
      </Card.Body>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" style={{ width: 320 }}>
      <Card.Body>
        <p>Elevated card with a larger shadow.</p>
      </Card.Body>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="interactive" style={{ width: 320 }}>
      <Card.Body>
        <p>Hover and click me! I respond to interaction.</p>
      </Card.Body>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
      {(["default", "outlined", "elevated", "interactive"] as const).map((v) => (
        <Card key={v} variant={v} style={{ width: 200 }}>
          <Card.Body>
            <p style={{ fontWeight: 500 }}>{v}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  ),
};
