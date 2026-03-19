import * as React from "react"
import {
  PencilIcon,
  Trash2Icon,
  DownloadIcon,
  Share2Icon,
  CopyIcon,
  MoreHorizontalIcon,
  LinkIcon,
  MailIcon,
  CheckIcon,
  LoaderIcon,
  FileTextIcon,
  FileSpreadsheetIcon,
  FileImageIcon,
  FileSlidersIcon,
  FileIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export interface Document {
  id: string
  title: string
  type: "document" | "spreadsheet" | "image" | "presentation" | "other"
  size: string
  updatedAt: string
  updatedBy: string
}

const typeIcons: Record<Document["type"], React.ElementType> = {
  document: FileTextIcon,
  spreadsheet: FileSpreadsheetIcon,
  image: FileImageIcon,
  presentation: FileSlidersIcon,
  other: FileIcon,
}

const typeColors: Record<Document["type"], string> = {
  document: "text-blue-500",
  spreadsheet: "text-green-500",
  image: "text-purple-500",
  presentation: "text-orange-500",
  other: "text-muted-foreground",
}

interface DocumentCardProps {
  document: Document
  onDelete?: (id: string) => void
  onRename?: (id: string, newTitle: string) => void
}

function DocumentCard({ document, onDelete, onRename }: DocumentCardProps) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editValue, setEditValue] = React.useState(document.title)
  const [isDownloading, setIsDownloading] = React.useState(false)
  const [copied, setCopied] = React.useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const TypeIcon = typeIcons[document.type]

  function handleEditStart() {
    setEditValue(document.title)
    setIsEditing(true)
    requestAnimationFrame(() => inputRef.current?.select())
  }

  function handleEditConfirm() {
    const trimmed = editValue.trim()
    if (trimmed && trimmed !== document.title) {
      onRename?.(document.id, trimmed)
    }
    setIsEditing(false)
  }

  function handleEditKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleEditConfirm()
    if (e.key === "Escape") {
      setEditValue(document.title)
      setIsEditing(false)
    }
  }

  function handleDownload() {
    setIsDownloading(true)
    setTimeout(() => setIsDownloading(false), 1500)
  }

  function handleCopy() {
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <TooltipProvider>
      <Card className="group/doc py-0 transition-colors hover:bg-muted/30">
        <CardContent className="flex items-center gap-3 px-3 py-2.5">
          {/* File type icon */}
          <div
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted/60",
              typeColors[document.type]
            )}
          >
            <TypeIcon className="size-4.5" />
          </div>

          {/* Title + meta */}
          <div className="min-w-0 flex-1">
            {isEditing ? (
              <Input
                ref={inputRef}
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleEditConfirm}
                onKeyDown={handleEditKeyDown}
                className="h-6 px-1.5 text-sm font-medium"
              />
            ) : (
              <button
                type="button"
                onClick={handleEditStart}
                className="block w-full truncate text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {document.title}
              </button>
            )}
            <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
              <span>{document.size}</span>
              <span aria-hidden>&middot;</span>
              <span>{document.updatedBy}</span>
              <span aria-hidden>&middot;</span>
              <span>{document.updatedAt}</span>
            </div>
          </div>

          {/* Badge */}
          <Badge
            variant="secondary"
            className="hidden shrink-0 capitalize sm:inline-flex"
          >
            {document.type}
          </Badge>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-0.5 opacity-0 transition-opacity group-hover/doc:opacity-100 focus-within:opacity-100">
            {/* Edit */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={handleEditStart}
                  aria-label="Rename"
                >
                  <PencilIcon />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Rename</TooltipContent>
            </Tooltip>

            {/* Download */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={handleDownload}
                  disabled={isDownloading}
                  aria-label="Download"
                >
                  {isDownloading ? (
                    <LoaderIcon className="animate-spin" />
                  ) : (
                    <DownloadIcon />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {isDownloading ? "Downloading..." : "Download"}
              </TooltipContent>
            </Tooltip>

            {/* Copy link */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  onClick={handleCopy}
                  aria-label={copied ? "Copied!" : "Copy link"}
                >
                  {copied ? (
                    <CheckIcon className="text-green-500" />
                  ) : (
                    <CopyIcon />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                {copied ? "Copied!" : "Copy link"}
              </TooltipContent>
            </Tooltip>

            {/* Share dropdown */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="Share"
                    >
                      <Share2Icon />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>Share</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onClick={handleCopy}>
                  <LinkIcon />
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MailIcon />
                  Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* More menu */}
            <DropdownMenu>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      aria-label="More actions"
                    >
                      <MoreHorizontalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                </TooltipTrigger>
                <TooltipContent>More actions</TooltipContent>
              </Tooltip>
              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onClick={handleEditStart}>
                  <PencilIcon />
                  Rename
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownload}>
                  <DownloadIcon />
                  Download
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleCopy}>
                  <CopyIcon />
                  Copy link
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  variant="destructive"
                  onClick={() => setShowDeleteDialog(true)}
                >
                  <Trash2Icon />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Delete confirmation */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete document?</AlertDialogTitle>
            <AlertDialogDescription>
              &ldquo;{document.title}&rdquo; will be permanently deleted. This
              action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              variant="destructive"
              onClick={() => onDelete?.(document.id)}
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </TooltipProvider>
  )
}

export { DocumentCard }
