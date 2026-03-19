import * as React from "react"
import {
  PlusIcon,
  UploadIcon,
  SearchIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { DocumentCard, type Document } from "@/components/patterns/document-card"

const DEFAULT_DOCUMENTS: Document[] = [
  {
    id: "1",
    title: "Q4 Marketing Strategy",
    type: "document",
    size: "2.4 MB",
    updatedAt: "2 hours ago",
    updatedBy: "Sarah Chen",
  },
  {
    id: "2",
    title: "Revenue Forecast 2026",
    type: "spreadsheet",
    size: "1.1 MB",
    updatedAt: "Yesterday",
    updatedBy: "James Wilson",
  },
  {
    id: "3",
    title: "Product Launch Hero",
    type: "image",
    size: "4.7 MB",
    updatedAt: "3 days ago",
    updatedBy: "Maya Patel",
  },
  {
    id: "4",
    title: "Board Meeting Deck",
    type: "presentation",
    size: "8.2 MB",
    updatedAt: "Last week",
    updatedBy: "Alex Rivera",
  },
  {
    id: "5",
    title: "API Integration Guide",
    type: "document",
    size: "540 KB",
    updatedAt: "2 weeks ago",
    updatedBy: "Tom Bradley",
  },
  {
    id: "6",
    title: "Brand Assets Archive",
    type: "other",
    size: "24.1 MB",
    updatedAt: "3 weeks ago",
    updatedBy: "Lisa Nakamura",
  },
]

interface DocumentManagerProps {
  initialDocuments?: Document[]
}

function DocumentManager({
  initialDocuments = DEFAULT_DOCUMENTS,
}: DocumentManagerProps) {
  const [documents, setDocuments] = React.useState<Document[]>(initialDocuments)
  const [search, setSearch] = React.useState("")

  const filtered = React.useMemo(() => {
    if (!search) return documents
    const q = search.toLowerCase()
    return documents.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.type.toLowerCase().includes(q) ||
        d.updatedBy.toLowerCase().includes(q)
    )
  }, [documents, search])

  function handleDelete(id: string) {
    setDocuments((prev) => prev.filter((d) => d.id !== id))
  }

  function handleRename(id: string, newTitle: string) {
    setDocuments((prev) =>
      prev.map((d) => (d.id === id ? { ...d, title: newTitle } : d))
    )
  }

  function handleNewDocument() {
    const id = crypto.randomUUID()
    setDocuments((prev) => [
      {
        id,
        title: "Untitled Document",
        type: "document",
        size: "0 KB",
        updatedAt: "Just now",
        updatedBy: "You",
      },
      ...prev,
    ])
  }

  return (
    <div className="mx-auto w-full max-w-3xl space-y-4">
      {/* Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">
          Documents
        </h1>
        <p className="text-sm text-muted-foreground">
          Manage your team&apos;s files and resources.
        </p>
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button variant="outline" size="default">
          <UploadIcon className="mr-1.5 size-3.5" />
          Upload
        </Button>
        <Button size="default" onClick={handleNewDocument}>
          <PlusIcon className="mr-1.5 size-3.5" />
          New
        </Button>
      </div>

      <Separator />

      {/* Document list */}
      <div className="space-y-1.5">
        {filtered.length === 0 ? (
          <div className="py-12 text-center text-sm text-muted-foreground">
            {search
              ? "No documents match your search."
              : "No documents yet. Create one to get started."}
          </div>
        ) : (
          filtered.map((doc) => (
            <DocumentCard
              key={doc.id}
              document={doc}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          ))
        )}
      </div>

      {/* Footer count */}
      {filtered.length > 0 && (
        <p className="text-xs text-muted-foreground">
          {filtered.length} document{filtered.length !== 1 && "s"}
          {search && ` matching "${search}"`}
        </p>
      )}
    </div>
  )
}

export { DocumentManager, DEFAULT_DOCUMENTS }
export type { DocumentManagerProps }
