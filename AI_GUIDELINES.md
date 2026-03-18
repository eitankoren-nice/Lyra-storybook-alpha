# Lyra Design System — AI Guidelines

Guidelines for AI coding tools (Claude Code, Cursor, Copilot) working in this repository.

---

## Project Overview

This repository hosts the **Lyra design system**, a prototype for reusable UI components,
patterns, and layouts targeting enterprise applications. It is built as a Storybook-first
component library — every component and pattern is developed, documented, and demonstrated
through Storybook stories.

The design system is not a standalone application. It serves as a living reference for
composing UI consistently across products.

---

## Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| TypeScript | 5.9 | Type safety, all files use `.tsx` |
| Vite | 7 | Build tool and dev server |
| Tailwind CSS | 4 | Utility-first styling (CSS-first config, no `tailwind.config.ts`) |
| shadcn/ui | 4 | Component primitives (radix-nova style) |
| Radix UI | 1.4 | Accessible headless primitives (unified `radix-ui` package) |
| Storybook | 10 | Component development and documentation |
| class-variance-authority | 0.7 | Component variant definitions |
| Lucide React | 0.577 | Icon library |
| Geist | Variable | Font family |

### Key Details

- **Package manager:** pnpm (not npm or yarn)
- **shadcn style:** `radix-nova` (Radix base, Nova preset)
- **Color format:** oklch (not hex or hsl) in CSS variables
- **Path alias:** `@/` maps to `./src/`
- **Utility function:** `cn()` from `@/lib/utils` merges Tailwind classes via `clsx` + `tailwind-merge`

---

## Repository Structure

```
.storybook/
  main.ts                  # Storybook config: addons, framework, story globs
  preview.ts               # Global decorators, theme toggle, viewports, a11y

src/
  components/
    ui/                    # Base UI components (shadcn primitives)
      button.tsx
      card.tsx
      dialog.tsx
      input.tsx
      select.tsx
      ... (29 components total)
    patterns/              # Reusable composed patterns
      page-header.tsx

  stories/
    Foundations/            # Design tokens, colors, typography
      Colors.stories.tsx
      Tokens.stories.tsx
      Typography.stories.tsx
    Components/
      Inputs/              # Button, Input, Select, Checkbox, Switch, etc.
      DataDisplay/         # Card, Badge, Avatar, Table, Skeleton, etc.
      Feedback/            # Alert, Toast, Progress
      Navigation/          # Tabs, Accordion, Breadcrumb
      Overlay/             # Dialog, Popover, Tooltip, DropdownMenu, Sheet
    Patterns/              # Composed UI patterns
      PageHeader.stories.tsx
      DataTable.stories.tsx
      EmptyState.stories.tsx
      FormLayout.stories.tsx

  lib/
    utils.ts               # cn() utility for class merging

  index.css                # Theme tokens (CSS variables in oklch)

components.json            # shadcn configuration
vite.config.ts             # Vite + Tailwind + path aliases
```

---

## Component Development Rules

When generating or modifying UI components, follow these conventions:

### File Format
- All components must be `.tsx` files.
- Use function declarations, not arrow functions, for exported components.
- Do not use `React.forwardRef` — shadcn v4 uses direct function components.
- Add `data-slot="component-name"` to the root element of each component.

### Styling
- Use Tailwind CSS utility classes exclusively. Never write raw CSS.
- Reference design tokens via semantic class names: `bg-primary`, `text-muted-foreground`,
  `border-border`, etc.
- Never hardcode colors (`#0D66C9`), spacing (`16px`), or font sizes (`14px`).
  Always use Tailwind tokens (`bg-primary`, `p-4`, `text-sm`).
- Use `cn()` from `@/lib/utils` when merging conditional or user-provided classes:
  ```tsx
  import { cn } from "@/lib/utils"
  className={cn("base-classes", conditional && "extra", className)}
  ```

### Variants
- Use `class-variance-authority` (`cva`) for components with variants (size, style, etc.).
- Define a `variants` object and export both the component and the variants function.
- Example reference: `src/components/ui/button.tsx`.

### Composition
- Prefer composition over complex abstractions. A component should do one thing well.
- Import and compose existing `ui/` components rather than rebuilding them.
- Keep prop interfaces simple and explicit. Avoid deeply nested config objects.

### Radix Primitives
- When building interactive components (dialogs, dropdowns, tooltips, popovers),
  always use Radix primitives from the `radix-ui` package.
- Import directly from `"radix-ui"`, not from individual `@radix-ui/*` packages.

### Icons
- Use `lucide-react` for all icons.
- Apply `data-icon="inline-start"` or `data-icon="inline-end"` attributes for
  proper spacing inside buttons.

---

## Pattern and Layout Rules

Patterns are reusable compositions of base UI components that solve common enterprise
UI needs (page headers, data tables, empty states, form layouts).

### Where Patterns Live
- **Reusable pattern components** go in `src/components/patterns/`.
  Use kebab-case filenames: `page-header.tsx`, `data-table-toolbar.tsx`.
- **Pattern stories** go in `src/stories/Patterns/`.

### How to Write a Pattern
- Import base components from `@/components/ui/*`.
- Keep the interface minimal — only expose props that vary across usage contexts.
- Add `ComponentName.displayName = "ComponentName"` at the end of the file.
- Example reference: `src/components/patterns/page-header.tsx`.

### When to Create a Pattern vs. Inline Composition
- If a layout is used in 2+ places or represents a recognizable enterprise UI concept
  (page header, filter bar, empty state), extract it as a pattern.
- One-off compositions can remain inline in their story files.

---

## Storybook Conventions

Every reusable component and pattern must have Storybook stories.

### File Naming
- Story files use PascalCase: `Button.stories.tsx`, `PageHeader.stories.tsx`.
- Place them in the matching category folder under `src/stories/`.

### Story Structure
```tsx
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentName } from "@/components/ui/component-name"

const meta: Meta<typeof ComponentName> = {
  title: "Category/ComponentName",
  component: ComponentName,
  parameters: { layout: "centered" },
}
export default meta

type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: { /* default props */ },
}
```

### Key Conventions
- Import `Meta` and `StoryObj` from `@storybook/react-vite` (not `@storybook/react`).
- Use the `title` hierarchy: `Foundations/`, `Components/Inputs/`, `Components/DataDisplay/`,
  `Components/Feedback/`, `Components/Navigation/`, `Components/Overlay/`, `Patterns/`.
- Default layout is `"centered"`. Use `"padded"` for wider components (tables, page headers).
  Use `"fullscreen"` for full-page layouts.
- Autodocs are enabled globally — no need to add `tags: ["autodocs"]` per story.

### What Stories Should Demonstrate
1. **Default** — the component with standard props.
2. **Common variants** — sizes, styles, states (disabled, loading, error).
3. **Realistic enterprise examples** — use real-looking labels like "Team Members",
   "Export Report", "Audit Logs" instead of "Lorem ipsum" or "Test".

### Dark Mode
Dark mode is configured via `@storybook/addon-themes` using the `.dark` CSS class.
No additional story-level configuration is needed — the toolbar toggle handles it.

---

## Accessibility Expectations

All components must meet baseline accessibility requirements:

### Keyboard Navigation
- Interactive elements must be reachable and operable via keyboard.
- Focus order must follow a logical reading sequence.
- Dialogs and overlays must trap focus while open.

### ARIA Attributes
- Use semantic HTML elements first (`button`, `nav`, `main`, `h1`–`h6`).
- Add ARIA attributes only when semantic HTML is insufficient.
- Radix primitives handle most ARIA requirements automatically — prefer them
  over manual ARIA implementation.

### Focus States
- All interactive elements must have visible focus indicators.
- The design system uses `--ring` token for focus rings: `focus-visible:ring-ring/50`.
- Never remove focus outlines without providing an alternative indicator.

### Testing
- The `@storybook/addon-a11y` addon is installed. It runs axe-core checks on stories.
- Review the a11y panel in Storybook when adding new components.

---

## AI-Friendly Coding Principles

This design system is designed to be readable and predictable for AI tools:

### Keep Code Simple
- Write explicit, straightforward TypeScript. Avoid clever patterns.
- One component per file. One concern per component.
- Flat prop interfaces — avoid nested objects unless genuinely needed.

### Minimize Abstraction
- Do not create wrapper utilities around Tailwind classes.
- Do not create generic "render prop" or "compound component" patterns unless
  the upstream shadcn component already uses them.
- Prefer duplicating a few Tailwind classes over creating a shared abstraction.

### Make Props Obvious
- Use descriptive prop names: `title`, `description`, `primaryAction`.
- Use TypeScript interfaces (not `type` aliases) for component props.
- Mark optional props with `?`. Make required props truly required.

### Provide Usage Examples
- Every component should have Storybook stories showing how to use it.
- Stories serve as living documentation and are the primary reference for AI tools
  generating UI with Lyra components.

---

## How AI Should Generate New Components

When an AI agent is asked to create or modify UI in this repository:

### 1. Check What Already Exists
- Search `src/components/ui/` for base components before creating new ones.
- Search `src/components/patterns/` for existing patterns.
- Search `src/stories/` for usage examples of existing components.

### 2. Reuse Before Creating
- Compose existing components rather than building from scratch.
- Use the `Button`, `Card`, `Input`, `Dialog`, and other shadcn primitives
  as building blocks.

### 3. Follow the Folder Structure
- Base UI primitives: `src/components/ui/{kebab-case}.tsx`
- Composed patterns: `src/components/patterns/{kebab-case}.tsx`
- Stories: `src/stories/{Category}/{PascalCase}.stories.tsx`

### 4. Write Stories for New Patterns
- Every new pattern must include a story file with at least 3 stories:
  a default, a minimal variant, and a realistic enterprise example.

### 5. Verify the Build
- Run `pnpm build-storybook` after changes to confirm nothing is broken.
- Storybook build output goes to `storybook-static/`.

### 6. Do Not Modify Existing UI Components
- Files in `src/components/ui/` are managed by shadcn. Do not edit them directly.
- To customize behavior, compose them in a pattern or wrap them in a new component
  under `src/components/patterns/`.

### 7. Keep the Design Consistent
- Use the established color tokens (`primary`, `secondary`, `muted`, `destructive`).
- Use the established spacing scale (Tailwind defaults: `p-2`, `gap-4`, `space-y-1`).
- Use the established border radius tokens (`rounded-lg`, `rounded-md`).
- Match the visual density and tone of existing components.

---

## Quick Reference: Common Imports

```tsx
// Utility
import { cn } from "@/lib/utils"

// Base components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Patterns
import { PageHeader } from "@/components/patterns/page-header"

// Icons
import { Plus, Search, Settings } from "lucide-react"

// Storybook
import type { Meta, StoryObj } from "@storybook/react-vite"
```

---

## Design Tokens (CSS Variables)

All tokens are defined in `src/index.css` using oklch color format.
Both `:root` (light) and `.dark` variants are defined.

| Token | Purpose |
|---|---|
| `--primary` | Primary brand color (blue) |
| `--primary-foreground` | Text on primary backgrounds |
| `--secondary` | Secondary surfaces |
| `--muted` | Subdued backgrounds |
| `--muted-foreground` | Subdued text |
| `--destructive` | Error / danger states |
| `--border` | Default border color |
| `--input` | Input field borders |
| `--ring` | Focus ring color |
| `--background` | Page background |
| `--foreground` | Default text color |
| `--card` | Card background |
| `--accent` | Accent surfaces (hover states) |
| `--radius` | Base border radius (0.625rem) |

Use these via Tailwind classes: `bg-primary`, `text-muted-foreground`, `border-border`, etc.
Never reference the CSS variables directly in component code.
