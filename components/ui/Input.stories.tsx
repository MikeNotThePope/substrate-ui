import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";

const meta = {
  title: "Primitives/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url"],
    },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
  },
} satisfies Meta<typeof Input>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { placeholder: "Enter text..." },
};

export const WithValue: Story = {
  args: { defaultValue: "Hello, Substrate" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};

export const Invalid: Story = {
  args: { placeholder: "Invalid input", "aria-invalid": true },
};

export const Password: Story = {
  args: { type: "password", placeholder: "Enter password..." },
};
