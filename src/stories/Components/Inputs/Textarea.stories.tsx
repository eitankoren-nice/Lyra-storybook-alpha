import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Textarea> = {
  title: "Components/Inputs/Textarea",
  component: Textarea,
  args: {
    placeholder: "Type your message here...",
    disabled: false,
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled textarea",
  },
};

export const Invalid: Story = {
  name: "Invalid State",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea
        id="bio"
        aria-invalid="true"
        defaultValue="x"
      />
      <p className="text-sm text-destructive">
        Bio must be at least 10 characters.
      </p>
    </div>
  ),
};

export const WithHelperText: Story = {
  name: "With Helper Text",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea id="feedback" placeholder="Tell us what you think..." />
      <p className="text-sm text-muted-foreground">
        Your feedback helps us improve.
      </p>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  name: "With Default Value",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="note">Note</Label>
      <Textarea
        id="note"
        defaultValue="This textarea has a default value. The field-sizing-content CSS property allows it to auto-resize based on content."
      />
    </div>
  ),
};
