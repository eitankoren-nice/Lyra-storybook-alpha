import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  args: {
    defaultValue: [50],
    max: 100,
    min: 0,
    step: 1,
  },
  argTypes: {
    min: { control: "number" },
    max: { control: "number" },
    step: { control: "number" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm py-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="grid w-full max-w-sm gap-3">
      <Label>Volume</Label>
      <Slider defaultValue={[75]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  name: "Range (Two Thumbs)",
  render: () => (
    <div className="grid w-full max-w-sm gap-3">
      <Label>Price Range</Label>
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
};

export const CustomStep: Story = {
  name: "Custom Step",
  render: () => (
    <div className="grid w-full max-w-sm gap-3">
      <Label>Temperature (step: 5)</Label>
      <Slider defaultValue={[20]} min={0} max={100} step={5} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: [40],
  },
};

export const WithValue: Story = {
  name: "With Value Display",
  render: () => {
    const { useState } = require("react");
    function SliderWithValue() {
      const [value, setValue] = useState([50]);
      return (
        <div className="grid w-full max-w-sm gap-3">
          <div className="flex items-center justify-between">
            <Label>Opacity</Label>
            <span className="text-sm text-muted-foreground">{value[0]}%</span>
          </div>
          <Slider value={value} onValueChange={setValue} max={100} step={1} />
        </div>
      );
    }
    return <SliderWithValue />;
  },
};
