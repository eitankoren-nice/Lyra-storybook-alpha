import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Input> = {
  title: "Components/Inputs/Input",
  component: Input,
  args: {
    type: "text",
    placeholder: "Enter text...",
    disabled: false,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="name@example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const File: Story = {
  name: "File Input",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  ),
};

export const WithHelperText: Story = {
  name: "With Helper Text",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-help">Email</Label>
      <Input type="email" id="email-help" placeholder="name@example.com" />
      <p className="text-sm text-muted-foreground">
        We&apos;ll never share your email.
      </p>
    </div>
  ),
};

export const Invalid: Story = {
  name: "Invalid State",
  render: () => (
    <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-invalid">Email</Label>
      <Input
        type="email"
        id="email-invalid"
        placeholder="name@example.com"
        aria-invalid="true"
        defaultValue="not-an-email"
      />
      <p className="text-sm text-destructive">
        Please enter a valid email address.
      </p>
    </div>
  ),
};

export const InputTypes: Story = {
  name: "Input Types",
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label>Text</Label>
        <Input type="text" placeholder="Text input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="Email input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Password</Label>
        <Input type="password" placeholder="Password input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Number</Label>
        <Input type="number" placeholder="Number input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Search</Label>
        <Input type="search" placeholder="Search..." />
      </div>
    </div>
  ),
};
