import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  StarIcon,
} from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: (args) => (
    <Toggle {...args}>
      <BoldIcon />
    </Toggle>
  ),
};

export const WithText: Story = {
  name: "With Text",
  render: () => (
    <Toggle>
      <StarIcon />
      Favorite
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline">
      <ItalicIcon />
    </Toggle>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Toggle size="sm">
        <BoldIcon />
      </Toggle>
      <Toggle size="default">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg">
        <BoldIcon />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Toggle disabled>
      <BoldIcon />
    </Toggle>
  ),
};

export const Group: Story = {
  name: "Toggle Group",
  render: () => (
    <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const GroupSingle: Story = {
  name: "Toggle Group (Single)",
  render: () => (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};

export const GroupWithSpacing: Story = {
  name: "Toggle Group (With Spacing)",
  render: () => (
    <ToggleGroup type="multiple" variant="outline" spacing={1}>
      <ToggleGroupItem value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
};
