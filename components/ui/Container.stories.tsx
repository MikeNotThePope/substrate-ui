import type { Meta, StoryObj } from "@storybook/react-vite";
import { Container } from "./Container";

const meta = {
  title: "Layout/Container",
  component: Container,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "full"],
    },
  },
} satisfies Meta<typeof Container>;
export default meta;

type Story = StoryObj<typeof meta>;

const Inner = () => (
  <div style={{ padding: "2rem", background: "#e5e5e5", border: "2px solid #222" }}>
    Container content — resize the viewport to see max-width constraints.
  </div>
);

export const Small: Story = {
  render: () => (
    <Container size="sm">
      <Inner />
    </Container>
  ),
};

export const Medium: Story = {
  render: () => (
    <Container size="md">
      <Inner />
    </Container>
  ),
};

export const Large: Story = {
  render: () => (
    <Container size="lg">
      <Inner />
    </Container>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <Container size="xl">
      <Inner />
    </Container>
  ),
};

export const Full: Story = {
  render: () => (
    <Container size="full">
      <Inner />
    </Container>
  ),
};
