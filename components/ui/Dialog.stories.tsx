import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog } from "./Dialog";
import { Button } from "./Button";

const meta = {
  title: "Primitives/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>Dialog Title</Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>
            This is a dialog description with some content to demonstrate the
            component.
          </Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Confirm</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const Small: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Small Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size="sm">
        <Dialog.Header>Small</Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>A small dialog.</Dialog.Description>
        </Dialog.Body>
      </Dialog.Content>
    </Dialog>
  ),
};

export const Large: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Large Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size="lg">
        <Dialog.Header>Large</Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>A large dialog with more space for content.</Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const ExtraLarge: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>XL Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size="xl">
        <Dialog.Header>Extra Large</Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>An extra large dialog for complex content.</Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const Full: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Full Width Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size="full">
        <Dialog.Header>Full Width</Dialog.Header>
        <Dialog.Body>
          <Dialog.Description>A full width dialog that spans most of the viewport.</Dialog.Description>
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};
