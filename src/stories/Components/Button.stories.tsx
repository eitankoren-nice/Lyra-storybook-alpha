import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@/components/ui/button";
import { MailIcon, ChevronRightIcon, LoaderIcon, PlusIcon, TrashIcon } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "secondary", "ghost", "destructive", "link"],
    },
    size: {
      control: "select",
      options: ["default", "xs", "sm", "lg", "icon", "icon-xs", "icon-sm", "icon-lg"],
    },
    disabled: { control: "boolean" },
    asChild: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  name: "All Sizes",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const IconSizes: Story = {
  name: "Icon Sizes",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="icon-xs"><PlusIcon /></Button>
      <Button size="icon-sm"><PlusIcon /></Button>
      <Button size="icon"><PlusIcon /></Button>
      <Button size="icon-lg"><PlusIcon /></Button>
    </div>
  ),
};

export const WithIcon: Story = {
  name: "With Icons",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button>
        <MailIcon data-icon="inline-start" />
        Login with Email
      </Button>
      <Button variant="outline">
        Next
        <ChevronRightIcon data-icon="inline-end" />
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <LoaderIcon className="animate-spin" />
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <LoaderIcon className="animate-spin" />
        Loading...
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const Destructive: Story = {
  render: () => (
    <Button variant="destructive">
      <TrashIcon data-icon="inline-start" />
      Delete Account
    </Button>
  ),
};

export const AsLink: Story = {
  name: "As Link (asChild)",
  render: () => (
    <Button asChild variant="link">
      <a href="https://example.com">Visit Example</a>
    </Button>
  ),
};
