import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export interface MultiSelectOption {
  label: string
  value: string
}

interface MultiSelectDropdownProps {
  options: MultiSelectOption[]
  value?: string[]
  onChange?: (values: string[]) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

function MultiSelectDropdown({
  options,
  value = [],
  onChange,
  placeholder = "Select options",
  disabled = false,
  className,
}: MultiSelectDropdownProps) {
  const [open, setOpen] = React.useState(false)

  function handleToggle(optionValue: string) {
    const next = value.includes(optionValue)
      ? value.filter((v) => v !== optionValue)
      : [...value, optionValue]
    onChange?.(next)
  }

  function getTriggerLabel() {
    if (value.length === 0) return placeholder

    const selected = options.filter((o) => value.includes(o.value))
    if (selected.length <= 2) {
      return selected.map((o) => o.label).join(", ")
    }
    const visible = selected.slice(0, 2).map((o) => o.label).join(", ")
    return `${visible} +${selected.length - 2}`
  }

  const hasSelection = value.length > 0

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-[200px] justify-between font-normal",
            !hasSelection && "text-muted-foreground",
            className
          )}
        >
          <span className="truncate">{getTriggerLabel()}</span>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-(--radix-popover-trigger-width) p-1"
        align="start"
      >
        <div
          role="listbox"
          aria-multiselectable="true"
          className="flex max-h-60 flex-col overflow-y-auto"
        >
          {options.map((option) => {
            const checked = value.includes(option.value)
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={checked}
                className={cn(
                  "flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none",
                  "hover:bg-muted hover:text-foreground",
                  "focus-visible:bg-muted focus-visible:text-foreground",
                  checked && "text-foreground"
                )}
                onClick={() => handleToggle(option.value)}
              >
                <Checkbox
                  checked={checked}
                  tabIndex={-1}
                  aria-hidden
                  className="pointer-events-none"
                />
                <span className="truncate">{option.label}</span>
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { MultiSelectDropdown }
