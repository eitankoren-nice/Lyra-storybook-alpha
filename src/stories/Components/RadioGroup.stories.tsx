import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="medium" className="flex flex-row gap-4">
      {["small", "medium", "large"].map((size) => (
        <div key={size} className="flex items-center gap-2">
          <RadioGroupItem value={size} id={`h-${size}`} />
          <Label htmlFor={`h-${size}`} className="capitalize">
            {size}
          </Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="d1" />
        <Label htmlFor="d1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="d2" />
        <Label htmlFor="d2">Option 2</Label>
      </div>
    </RadioGroup>
  ),
};

export const Invalid: Story = {
  name: "Invalid State",
  render: () => (
    <div className="space-y-2">
      <p className="text-sm font-medium">Select a plan</p>
      <RadioGroup aria-invalid="true">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="free" id="inv1" aria-invalid="true" />
          <Label htmlFor="inv1">Free</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="pro" id="inv2" aria-invalid="true" />
          <Label htmlFor="inv2">Pro</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-destructive">Please select a plan.</p>
    </div>
  ),
};

export const CardStyle: Story = {
  name: "Card Style",
  render: () => (
    <RadioGroup defaultValue="card" className="grid gap-3">
      {[
        { value: "card", label: "Card Payment", desc: "Pay with credit card" },
        { value: "paypal", label: "PayPal", desc: "Pay with PayPal account" },
        { value: "apple", label: "Apple Pay", desc: "Pay with Apple Pay" },
      ].map((item) => (
        <Label
          key={item.value}
          htmlFor={`card-${item.value}`}
          className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5"
        >
          <RadioGroupItem value={item.value} id={`card-${item.value}`} />
          <div>
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </Label>
      ))}
    </RadioGroup>
  ),
};
