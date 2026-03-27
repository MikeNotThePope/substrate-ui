import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";

const meta = {
  title: "Primitives/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body", "small", "code"],
    },
  },
} satisfies Meta<typeof Text>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: { variant: "h1", children: "Heading 1" },
};

export const Heading2: Story = {
  args: { variant: "h2", children: "Heading 2" },
};

export const Heading3: Story = {
  args: { variant: "h3", children: "Heading 3" },
};

export const Body: Story = {
  args: { variant: "body", children: "Body text that forms the main content of your application." },
};

export const Small: Story = {
  args: { variant: "small", children: "Small helper text for supplementary information." },
};

export const Code: Story = {
  args: { variant: "code", children: "const x = 42;" },
};

export const TypeScale: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Text variant="h1">h1 — Page Title</Text>
      <Text variant="h2">h2 — Section Title</Text>
      <Text variant="h3">h3 — Subsection</Text>
      <Text variant="h4">h4 — Card Title</Text>
      <Text variant="h5">h5 — Label</Text>
      <Text variant="h6">h6 — Overline</Text>
      <Text variant="body">body — Main content paragraph text.</Text>
      <Text variant="small">small — Helper text and captions.</Text>
      <Text variant="code">code — Inline code snippet</Text>
    </div>
  ),
};
