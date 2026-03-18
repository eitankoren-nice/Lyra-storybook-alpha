import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InboxIcon,
  SearchIcon,
  FileIcon,
  PlusIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";

const meta: Meta = {
  title: "Patterns/EmptyState",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj;

export const NoResults: Story = {
  name: "No Search Results",
  render: () => (
    <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
          <SearchIcon className="size-6 text-muted-foreground" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">No results found</h3>
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">
          We couldn&apos;t find anything matching your search. Try adjusting
          your filters or search terms.
        </p>
        <Button variant="outline">Clear filters</Button>
      </CardContent>
    </Card>
  ),
};

export const EmptyInbox: Story = {
  name: "Empty Inbox",
  render: () => (
    <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
          <InboxIcon className="size-6 text-muted-foreground" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">Inbox zero!</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          You&apos;re all caught up. No new messages to read.
        </p>
      </CardContent>
    </Card>
  ),
};

export const NoDocuments: Story = {
  name: "No Documents",
  render: () => (
    <Card className="w-[420px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-muted">
          <FileIcon className="size-6 text-muted-foreground" />
        </div>
        <CardTitle>No documents yet</CardTitle>
        <CardDescription>
          Get started by creating your first document.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-2">
        <Button>
          <PlusIcon data-icon="inline-start" />
          New Document
        </Button>
        <Button variant="outline">
          <UploadIcon data-icon="inline-start" />
          Import
        </Button>
      </CardContent>
    </Card>
  ),
};

export const NoTeamMembers: Story = {
  name: "No Team Members",
  render: () => (
    <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
          <UsersIcon className="size-6 text-primary" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">Build your team</h3>
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">
          Invite team members to collaborate on projects together.
        </p>
        <div className="flex gap-2">
          <Button>Invite Members</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </CardContent>
    </Card>
  ),
};

export const ErrorState: Story = {
  name: "Error State",
  render: () => (
    <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10">
          <span className="text-2xl text-destructive">!</span>
        </div>
        <h3 className="mb-1 text-lg font-semibold">Something went wrong</h3>
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">
          We encountered an error while loading your data. Please try again.
        </p>
        <Button variant="outline">Retry</Button>
      </CardContent>
    </Card>
  ),
};

export const Gallery: Story = {
  name: "All Empty States",
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          icon: SearchIcon,
          title: "No results",
          description: "Try adjusting your search.",
          action: "Clear filters",
        },
        {
          icon: InboxIcon,
          title: "Inbox zero",
          description: "You're all caught up.",
          action: undefined,
        },
        {
          icon: FileIcon,
          title: "No documents",
          description: "Create your first document.",
          action: "New Document",
        },
        {
          icon: UsersIcon,
          title: "No team members",
          description: "Invite people to collaborate.",
          action: "Invite",
        },
      ].map(({ icon: Icon, title, description, action }) => (
        <Card key={title}>
          <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted">
              <Icon className="size-5 text-muted-foreground" />
            </div>
            <h3 className="mb-1 text-sm font-semibold">{title}</h3>
            <p className="mb-3 text-xs text-muted-foreground">{description}</p>
            {action && (
              <Button variant="outline" size="sm">
                {action}
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
