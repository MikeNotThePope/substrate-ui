import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "./Select";

const meta = {
  title: "Primitives/Select",
  component: Select,
} satisfies Meta<typeof Select>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="cherry">Cherry</Select.Item>
        <Select.Item value="grape">Grape</Select.Item>
      </Select.Content>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: () => (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Select a food" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
            Fruits
          </Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="cherry">Cherry</Select.Item>
        </Select.Group>
        <Select.Group>
          <Select.Label className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
            Vegetables
          </Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="broccoli">Broccoli</Select.Item>
          <Select.Item value="spinach">Spinach</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select>
  ),
};
