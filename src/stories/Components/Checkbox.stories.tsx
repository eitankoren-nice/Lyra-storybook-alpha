import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  name: "Disabled Checked",
  args: {
    disabled: true,
    checked: true,
  },
};

export const Invalid: Story = {
  name: "Invalid State",
  render: () => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Checkbox id="terms-invalid" aria-invalid="true" />
        <Label htmlFor="terms-invalid">Accept terms and conditions</Label>
      </div>
      <p className="text-sm text-destructive">You must accept the terms.</p>
    </div>
  ),
};

export const MultipleCheckboxes: Story = {
  name: "Multiple Options",
  render: () => (
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">
        Select your interests
      </p>
      {["Design", "Development", "Marketing", "Analytics"].map((item) => (
        <div key={item} className="flex items-center gap-2">
          <Checkbox id={item.toLowerCase()} />
          <Label htmlFor={item.toLowerCase()}>{item}</Label>
        </div>
      ))}
    </div>
  ),
};
