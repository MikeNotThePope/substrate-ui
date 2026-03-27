import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta = {
  title: "Primitives/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid"],
    },
    status: {
      control: "select",
      options: [undefined, "error", "success", "warning", "info"],
    },
  },
} satisfies Meta<typeof Alert>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args} style={{ width: 400 }}>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>This is a default alert with some useful information.</Alert.Description>
    </Alert>
  ),
};

export const Error: Story = {
  render: () => (
    <Alert status="error" style={{ width: 400 }}>
      <Alert.Title>Something went wrong</Alert.Title>
      <Alert.Description>Please check your input and try again.</Alert.Description>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert status="success" style={{ width: 400 }}>
      <Alert.Title>Saved!</Alert.Title>
      <Alert.Description>Your changes have been saved successfully.</Alert.Description>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert status="warning" style={{ width: 400 }}>
      <Alert.Title>Warning</Alert.Title>
      <Alert.Description>This action cannot be undone.</Alert.Description>
    </Alert>
  ),
};

export const Info: Story = {
  render: () => (
    <Alert status="info" style={{ width: 400 }}>
      <Alert.Title>Did you know?</Alert.Title>
      <Alert.Description>You can use keyboard shortcuts to navigate faster.</Alert.Description>
    </Alert>
  ),
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: 400 }}>
      <Alert status="error">
        <Alert.Title>Error</Alert.Title>
        <Alert.Description>Something went wrong.</Alert.Description>
      </Alert>
      <Alert status="success">
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>Operation completed.</Alert.Description>
      </Alert>
      <Alert status="warning">
        <Alert.Title>Warning</Alert.Title>
        <Alert.Description>Proceed with caution.</Alert.Description>
      </Alert>
      <Alert status="info">
        <Alert.Title>Info</Alert.Title>
        <Alert.Description>Here is some information.</Alert.Description>
      </Alert>
    </div>
  ),
};
