import type { Meta, StoryObj } from "@storybook/react-vite";
import { Drawer } from "./Drawer";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Drawer",
  component: Drawer,
} satisfies Meta<typeof Drawer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Drawer direction="right">
      <Drawer.Trigger asChild>
        <Button>Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Drawer Title</Drawer.Title>
          <Drawer.Description>
            This is a drawer that slides in from the right.
          </Drawer.Description>
        </Drawer.Header>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Drawer body content goes here.</p>
        </div>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="outline">Close</Button>
          </Drawer.Close>
          <Button>Save</Button>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
};

export const Left: Story = {
  render: () => (
    <Drawer direction="left">
      <Drawer.Trigger asChild>
        <Button>Open Left Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <Drawer.Header>
          <Drawer.Title>Left Drawer</Drawer.Title>
          <Drawer.Description>
            This drawer slides in from the left side.
          </Drawer.Description>
        </Drawer.Header>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">Navigation or sidebar content.</p>
        </div>
        <Drawer.Footer>
          <Drawer.Close asChild>
            <Button variant="outline">Close</Button>
          </Drawer.Close>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  ),
};
