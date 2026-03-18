import { Button } from "@/components/ui/button"

interface PageHeaderProps {
  title: string
  description?: string
  primaryAction?: {
    label: string
    onClick?: () => void
  }
}

export function PageHeader({ title, description, primaryAction }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {primaryAction && (
        <Button onClick={primaryAction.onClick}>
          {primaryAction.label}
        </Button>
      )}
    </div>
  )
}

PageHeader.displayName = "PageHeader"
