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
  render: () => (
    <div className="dark rounded-xl bg-background p-6">
      <DocumentManager />
    </div>
  ),
};

export const LightMode: Story = {
  name: "Light Mode",
  render: () => (
    <div className="rounded-xl bg-background p-6">
      <DocumentManager />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="dark rounded-xl bg-background p-6">
      <DocumentManager initialDocuments={[]} />
    </div>
  ),
};

export const FewDocuments: Story = {
  name: "Few Documents",
  render: () => (
    <div className="dark rounded-xl bg-background p-6">
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
    </div>
  ),
};
