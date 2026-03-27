import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flex } from "./Flex";

const meta = {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    direction: {
      control: "select",
      options: ["row", "row-reverse", "column", "column-reverse"],
    },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
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
} satisfies Meta<typeof Flex>;
export default meta;

type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "1rem", background: "#e5e5e5", border: "2px solid #222", minWidth: 100 }}>
    {children}
  </div>
);

export const Row: Story = {
  render: () => (
    <Flex direction="row" gap="md">
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
    </Flex>
  ),
};

export const Wrapping: Story = {
  render: () => (
    <Flex wrap="wrap" gap="sm" style={{ maxWidth: 300 }}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
    </Flex>
  ),
};

export const SpaceBetween: Story = {
  render: () => (
    <Flex justify="between" align="center" style={{ width: "100%" }}>
      <Box>Left</Box>
      <Box>Center</Box>
      <Box>Right</Box>
    </Flex>
  ),
};

export const ColumnReverse: Story = {
  render: () => (
    <Flex direction="column-reverse" gap="md">
      <Box>First (rendered last)</Box>
      <Box>Second</Box>
      <Box>Third (rendered first)</Box>
    </Flex>
  ),
};
