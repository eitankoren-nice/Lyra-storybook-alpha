import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch size="sm" id="sm" />
        <Label htmlFor="sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="default" id="default" />
        <Label htmlFor="default">Default</Label>
      </div>
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

export const SettingsExample: Story = {
  name: "Settings Panel",
  render: () => (
    <div className="w-full max-w-sm space-y-4">
      {[
        { id: "notifications", label: "Push Notifications", desc: "Receive push notifications on your device" },
        { id: "emails", label: "Marketing Emails", desc: "Receive emails about new products and features" },
        { id: "updates", label: "Product Updates", desc: "Get notified when we ship updates" },
      ].map((item) => (
        <div key={item.id} className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
          <div className="space-y-0.5">
            <Label htmlFor={item.id}>{item.label}</Label>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
          <Switch id={item.id} />
        </div>
      ))}
    </div>
  ),
};
