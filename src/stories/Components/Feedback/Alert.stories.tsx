import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  InfoIcon,
  AlertTriangleIcon,
  AlertCircleIcon,
  CheckCircleIcon,
} from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Feedback/Alert",
  component: Alert,
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "destructive"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  render: () => (
    <Alert className="max-w-lg">
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive" className="max-w-lg">
      <AlertCircleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariations: Story = {
  name: "All Variations",
  render: () => (
    <div className="flex max-w-lg flex-col gap-4">
      <Alert>
        <InfoIcon />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational alert message.
        </AlertDescription>
      </Alert>

      <Alert>
        <CheckCircleIcon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangleIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your account is nearing its storage limit.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
  ),
};

export const WithoutIcon: Story = {
  name: "Without Icon",
  render: () => (
    <Alert className="max-w-lg">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        Alerts can be used without icons as well.
      </AlertDescription>
    </Alert>
  ),
};

export const DescriptionOnly: Story = {
  name: "Description Only",
  render: () => (
    <Alert className="max-w-lg">
      <InfoIcon />
      <AlertDescription>
        You can use alerts with just a description and no title.
      </AlertDescription>
    </Alert>
  ),
};
