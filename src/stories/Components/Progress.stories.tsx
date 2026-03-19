import type { Meta, StoryObj } from "@storybook/react-vite";
import { Progress } from "@/components/ui/progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  args: {
    value: 60,
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const Values: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
  ),
};

export const WithLabel: Story = {
  name: "With Label",
  render: () => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Uploading...</span>
        <span className="text-muted-foreground">60%</span>
      </div>
      <Progress value={60} />
    </div>
  ),
};

export const Animated: Story = {
  render: () => {
    const { useState, useEffect } = require("react");
    function AnimatedProgress() {
      const [progress, setProgress] = useState(0);
      useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prev: number) => {
            if (prev >= 100) return 0;
            return prev + 1;
          });
        }, 50);
        return () => clearInterval(timer);
      }, []);
      return (
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Processing...</span>
            <span className="text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
      );
    }
    return <AnimatedProgress />;
  },
};

export const StorageUsage: Story = {
  name: "Storage Usage Example",
  render: () => (
    <div className="space-y-4">
      <h4 className="text-sm font-medium">Storage</h4>
      {[
        { label: "Documents", value: 45, size: "4.5 GB" },
        { label: "Photos", value: 72, size: "7.2 GB" },
        { label: "Videos", value: 23, size: "2.3 GB" },
      ].map((item) => (
        <div key={item.label} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{item.label}</span>
            <span className="text-muted-foreground">{item.size}</span>
          </div>
          <Progress value={item.value} />
        </div>
      ))}
    </div>
  ),
};
