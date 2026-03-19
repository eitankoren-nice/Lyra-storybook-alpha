import type { Meta, StoryObj } from "@storybook/react-vite";
import { DocumentManager } from "@/components/patterns/document-manager";

const meta: Meta<typeof DocumentManager> = {
  title: "Patterns/DocumentManager",
  component: DocumentManager,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof DocumentManager>;

export const Default: Story = {
  render: () => <DocumentManager />,
};

export const Empty: Story = {
  render: () => <DocumentManager initialDocuments={[]} />,
};

export const FewDocuments: Story = {
  name: "Few Documents",
  render: () => (
    <DocumentManager
      initialDocuments={[
        {
          id: "1",
          title: "Project Brief",
          type: "document",
          size: "320 KB",
          updatedAt: "Just now",
          updatedBy: "You",
        },
        {
          id: "2",
          title: "Budget Overview",
          type: "spreadsheet",
          size: "890 KB",
          updatedAt: "5 minutes ago",
          updatedBy: "Dana Park",
        },
      ]}
    />
  ),
};
