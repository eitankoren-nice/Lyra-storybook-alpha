import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  name: "With Fallback",
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="sm" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://github.com/shadcn.png" alt="default" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="lg" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
};

export const WithBadge: Story = {
  name: "With Badge",
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar size="default">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    </div>
  ),
};

export const Group: Story = {
  name: "Avatar Group",
  render: () => (
    <AvatarGroup>
      {["CN", "JD", "AB", "MK"].map((initials, i) => (
        <Avatar key={initials}>
          {i === 0 ? (
            <AvatarImage src="https://github.com/shadcn.png" alt={initials} />
          ) : null}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
      ))}
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  ),
};

export const FallbackColors: Story = {
  name: "Fallback Variants",
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-destructive/10 text-destructive">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-accent text-accent-foreground">GH</AvatarFallback>
      </Avatar>
    </div>
  ),
};
