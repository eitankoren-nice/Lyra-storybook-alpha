import type { Meta, StoryObj } from "@storybook/react-vite";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

const meta: Meta = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast("Event has been created.")}
    >
      Show Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  name: "With Description",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
        })
      }
    >
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.success("Profile updated successfully!")}
    >
      Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast.error("Something went wrong", {
          description: "Please try again later.",
        })
      }
    >
      Error Toast
    </Button>
  ),
};

export const WithAction: Story = {
  name: "With Action",
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("File deleted", {
          action: {
            label: "Undo",
            onClick: () => toast("File restored"),
          },
        })
      }
    >
      With Action
    </Button>
  ),
};

export const Promise: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => {
        toast.promise(
          new globalThis.Promise((resolve) => setTimeout(resolve, 2000)),
          {
            loading: "Loading...",
            success: "Data loaded successfully!",
            error: "Error loading data",
          }
        );
      }}
    >
      Promise Toast
    </Button>
  ),
};

export const AllTypes: Story = {
  name: "All Types",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Default toast message")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Success!")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error!")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Warning!")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info message")}>
        Info
      </Button>
    </div>
  ),
};
