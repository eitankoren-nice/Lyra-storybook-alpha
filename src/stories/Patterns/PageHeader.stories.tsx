import type { Meta, StoryObj } from "@storybook/react-vite"
import { PageHeader } from "@/components/patterns/page-header"

const meta: Meta<typeof PageHeader> = {
  title: "Patterns/PageHeader",
  component: PageHeader,
  parameters: { layout: "padded" },
}
export default meta

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {
  args: {
    title: "Team Members",
    description: "Manage your team members and their account permissions.",
    primaryAction: { label: "Add Member" },
  },
}

export const WithoutDescription: Story = {
  args: {
    title: "Dashboard",
    primaryAction: { label: "Export" },
  },
}

export const LongContent: Story = {
  args: {
    title: "Application Performance Monitoring & Observability Dashboard",
    description:
      "View real-time metrics, traces, and logs across all of your distributed services and infrastructure components in a single unified dashboard.",
    primaryAction: { label: "Configure Alerts" },
  },
}

export const NoAction: Story = {
  args: {
    title: "Audit Logs",
    description: "View system activity and security events.",
  },
}
