import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Primitives/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  ),
};

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <Avatar.Image
        src="https://i.pravatar.cc/150?u=storybook"
        alt="User avatar"
      />
      <Avatar.Fallback>JD</Avatar.Fallback>
    </Avatar>
  ),
};

export const Small: Story = {
  render: () => (
    <Avatar className="h-8 w-8">
      <Avatar.Fallback className="text-xs">SM</Avatar.Fallback>
    </Avatar>
  ),
};

export const Large: Story = {
  render: () => (
    <Avatar className="h-16 w-16">
      <Avatar.Fallback className="text-lg">LG</Avatar.Fallback>
    </Avatar>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Avatar className="h-8 w-8">
        <Avatar.Fallback className="text-xs">SM</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <Avatar.Fallback className="text-lg">LG</Avatar.Fallback>
      </Avatar>
    </div>
  ),
};

export const AllShapes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="circle">
          <Avatar.Fallback>CI</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Circle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="square">
          <Avatar.Fallback>SQ</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Square</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="rounded">
          <Avatar.Fallback>RD</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Rounded</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="hexagon">
          <Avatar.Fallback>HX</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Hexagon</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="diamond">
          <Avatar.Fallback>DM</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Diamond</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="squircle">
          <Avatar.Fallback>SQ</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Squircle</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Avatar shape="shield">
          <Avatar.Fallback>SH</Avatar.Fallback>
        </Avatar>
        <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>Shield</p>
      </div>
    </div>
  ),
};

export const ShapesWithImages: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
      {(["circle", "square", "rounded", "hexagon", "diamond", "squircle", "shield"] as const).map(
        (shape) => (
          <div key={shape} style={{ textAlign: "center" }}>
            <Avatar shape={shape}>
              <Avatar.Image
                src={`https://i.pravatar.cc/80?u=shape-${shape}`}
                alt={shape}
              />
              <Avatar.Fallback>{shape.slice(0, 2).toUpperCase()}</Avatar.Fallback>
            </Avatar>
            <p style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>{shape}</p>
          </div>
        ),
      )}
    </div>
  ),
};
