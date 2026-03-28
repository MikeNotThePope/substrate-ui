import type { Meta, StoryObj } from "@storybook/react-vite";
import { Grid } from "./Grid";

const meta = {
  title: "Layout/Grid",
  component: Grid,
  argTypes: {
    columns: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
    },
    gap: {
      control: "select",
      options: ["none", "xs", "sm", "md", "lg", "xl", "2xl"],
    },
  },
} satisfies Meta<typeof Grid>;
export default meta;

type Story = StoryObj<typeof meta>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: "1rem", background: "#e5e5e5", border: "2px solid #222" }}>
    {children}
  </div>
);

export const TwoColumns: Story = {
  render: () => (
    <Grid columns={2} gap="md">
      <Box>Cell 1</Box>
      <Box>Cell 2</Box>
      <Box>Cell 3</Box>
      <Box>Cell 4</Box>
    </Grid>
  ),
};

export const ThreeColumns: Story = {
  render: () => (
    <Grid columns={3} gap="md">
      <Box>Cell 1</Box>
      <Box>Cell 2</Box>
      <Box>Cell 3</Box>
      <Box>Cell 4</Box>
      <Box>Cell 5</Box>
      <Box>Cell 6</Box>
    </Grid>
  ),
};

export const FourColumns: Story = {
  render: () => (
    <Grid columns={4} gap="sm">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
      <Box>7</Box>
      <Box>8</Box>
    </Grid>
  ),
};

export const SingleColumn: Story = {
  render: () => (
    <Grid columns={1} gap="lg">
      <Box>Row 1</Box>
      <Box>Row 2</Box>
      <Box>Row 3</Box>
    </Grid>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Grid columns={1} columnsSm={2} columnsMd={3} columnsLg={4} gap="md">
      <Box>1</Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box>5</Box>
      <Box>6</Box>
      <Box>7</Box>
      <Box>8</Box>
    </Grid>
  ),
};
