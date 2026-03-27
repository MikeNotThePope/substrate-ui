import type { Meta, StoryObj } from "@storybook/react-vite";
import { FormLayout } from "./FormLayout";
import { Input } from "./Input";
import { Button } from "./Button";
import { Textarea } from "./Textarea";

const meta = {
  title: "Primitives/FormLayout",
  component: FormLayout,
} satisfies Meta<typeof FormLayout>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormLayout style={{ width: "100%", maxWidth: 480 }}>
      <FormLayout.Section title="Profile" description="Update your personal information.">
        <FormLayout.Row>
          <FormLayout.Field label="First Name" htmlFor="first" required>
            <Input id="first" placeholder="John" />
          </FormLayout.Field>
          <FormLayout.Field label="Last Name" htmlFor="last" required>
            <Input id="last" placeholder="Doe" />
          </FormLayout.Field>
        </FormLayout.Row>
        <FormLayout.Field label="Email" htmlFor="email">
          <Input id="email" type="email" placeholder="john@example.com" />
        </FormLayout.Field>
        <FormLayout.Field label="Bio" htmlFor="bio" description="Brief description for your profile.">
          <Textarea id="bio" placeholder="Tell us about yourself..." />
        </FormLayout.Field>
      </FormLayout.Section>
      <FormLayout.Actions align="right">
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </FormLayout.Actions>
    </FormLayout>
  ),
};

export const WithErrors: Story = {
  render: () => (
    <FormLayout style={{ width: "100%", maxWidth: 480 }}>
      <FormLayout.Section title="Account">
        <FormLayout.Field label="Email" htmlFor="err-email" error="Please enter a valid email address." required>
          <Input id="err-email" aria-invalid="true" defaultValue="not-an-email" />
        </FormLayout.Field>
        <FormLayout.Field label="Password" htmlFor="err-pass" error="Password must be at least 8 characters." required>
          <Input id="err-pass" type="password" aria-invalid="true" defaultValue="abc" />
        </FormLayout.Field>
      </FormLayout.Section>
      <FormLayout.Actions>
        <Button>Submit</Button>
      </FormLayout.Actions>
    </FormLayout>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <FormLayout style={{ width: "100%", maxWidth: 480 }}>
      <FormLayout.Section title="Settings" description="Configure your preferences.">
        <FormLayout.Field
          label="Display Name"
          htmlFor="display"
          description="This is how your name will appear publicly."
        >
          <Input id="display" placeholder="Choose a display name" />
        </FormLayout.Field>
        <FormLayout.Field
          label="Website"
          htmlFor="website"
          description="Must include https:// prefix."
        >
          <Input id="website" placeholder="https://example.com" />
        </FormLayout.Field>
      </FormLayout.Section>
      <FormLayout.Actions align="between">
        <Button variant="outline">Reset</Button>
        <Button>Save Changes</Button>
      </FormLayout.Actions>
    </FormLayout>
  ),
};
