import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/ui/badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  args: {
    children: "Badge",
    variant: "default",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline", "ghost", "link"],
    },
    asChild: { table: { disable: true } },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  name: "Status Badges",
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
  ),
};

export const AsLink: Story = {
  name: "As Link (asChild)",
  render: () => (
    <Badge asChild variant="link">
      <a href="#">View details</a>
    </Badge>
  ),
};

export const WithIcon: Story = {
  name: "With Icons",
  render: () => {
    const { CheckCircleIcon, AlertCircleIcon, ClockIcon } = require("lucide-react");
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant="default">
          <CheckCircleIcon data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="destructive">
          <AlertCircleIcon data-icon="inline-start" />
          Failed
        </Badge>
        <Badge variant="secondary">
          <ClockIcon data-icon="inline-start" />
          Pending
        </Badge>
      </div>
    );
  },
};

export const InContext: Story = {
  name: "In Context",
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Status:</span>
        <Badge variant="default">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Tags:</span>
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">Tailwind</Badge>
      </div>
    </div>
  ),
};
