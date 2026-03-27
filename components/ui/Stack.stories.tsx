import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stack } from "./Stack";

const meta = {
  title: "Layout/Stack",
  component: Stack,
  argTypes: {
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "stretch", "baseline"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly"],
    },
  },
} satisfies Meta<typeof Stack>;
export default meta;

type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "1rem", background: "#e5e5e5", border: "2px solid #222" }}>
    {children}
  </div>
);

export const Vertical: Story = {
  render: () => (
    <Stack direction="vertical" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export const SmallGap: Story = {
  render: () => (
    <Stack gap="xs">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export const LargeGap: Story = {
  render: () => (
    <Stack gap="2xl">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};

export const CenteredHorizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap="md" align="center" justify="center">
      <Box>Short</Box>
      <Box>Taller<br />Item</Box>
      <Box>Item 3</Box>
    </Stack>
  ),
};
