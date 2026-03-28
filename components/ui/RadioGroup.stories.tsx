import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "./RadioGroup";
import { Label } from "./Label";

const meta = {
  title: "Primitives/RadioGroup",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="option-1" id="r1" />
        <Label htmlFor="r1">Option One</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="option-2" id="r2" />
        <Label htmlFor="r2">Option Two</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="option-3" id="r3" />
        <Label htmlFor="r3">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const OutlineVariant: Story = {
  render: () => (
    <RadioGroup defaultValue="a">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="a" variant="outline" id="ro1" />
        <Label htmlFor="ro1">Outline A</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="b" variant="outline" id="ro2" />
        <Label htmlFor="ro2">Outline B</Label>
      </div>
    </RadioGroup>
  ),
};

export const SolidVariant: Story = {
  render: () => (
    <RadioGroup defaultValue="a">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="a" variant="solid" id="rs1" />
        <Label htmlFor="rs1">Solid A</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="b" variant="solid" id="rs2" />
        <Label htmlFor="rs2">Solid B</Label>
      </div>
    </RadioGroup>
  ),
};

export const Diamond: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="option-1" shape="diamond" id="rd1" />
        <Label htmlFor="rd1">Option One</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="option-2" shape="diamond" id="rd2" />
        <Label htmlFor="rd2">Option Two</Label>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <RadioGroup.Item value="option-3" shape="diamond" id="rd3" />
        <Label htmlFor="rd3">Option Three</Label>
      </div>
    </RadioGroup>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
      <RadioGroup defaultValue="a">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <RadioGroup.Item value="a" size="sm" id="rsm" />
          <Label htmlFor="rsm">Small</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="a">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <RadioGroup.Item value="a" size="md" id="rmd" />
          <Label htmlFor="rmd">Medium</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="a">
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <RadioGroup.Item value="a" size="lg" id="rlg" />
          <Label htmlFor="rlg">Large</Label>
        </div>
      </RadioGroup>
    </div>
  ),
};
