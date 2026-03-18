import type { Meta, StoryObj } from "@storybook/react-vite";

const colorTokens = {
  "Core Surfaces": [
    { name: "--background", label: "Background" },
    { name: "--foreground", label: "Foreground" },
    { name: "--card", label: "Card" },
    { name: "--card-foreground", label: "Card Foreground" },
    { name: "--popover", label: "Popover" },
    { name: "--popover-foreground", label: "Popover Foreground" },
  ],
  "Brand / Action": [
    { name: "--primary", label: "Primary" },
    { name: "--primary-foreground", label: "Primary Foreground" },
    { name: "--secondary", label: "Secondary" },
    { name: "--secondary-foreground", label: "Secondary Foreground" },
    { name: "--accent", label: "Accent" },
    { name: "--accent-foreground", label: "Accent Foreground" },
  ],
  "State / Feedback": [
    { name: "--destructive", label: "Destructive" },
    { name: "--destructive-foreground", label: "Destructive Foreground" },
    { name: "--muted", label: "Muted" },
    { name: "--muted-foreground", label: "Muted Foreground" },
  ],
  "Borders & Rings": [
    { name: "--border", label: "Border" },
    { name: "--input", label: "Input" },
    { name: "--ring", label: "Ring" },
  ],
  "Chart Palette": [
    { name: "--chart-1", label: "Chart 1" },
    { name: "--chart-2", label: "Chart 2" },
    { name: "--chart-3", label: "Chart 3" },
    { name: "--chart-4", label: "Chart 4" },
    { name: "--chart-5", label: "Chart 5" },
  ],
  Sidebar: [
    { name: "--sidebar", label: "Sidebar" },
    { name: "--sidebar-foreground", label: "Sidebar Foreground" },
    { name: "--sidebar-primary", label: "Sidebar Primary" },
    { name: "--sidebar-primary-foreground", label: "Sidebar Primary FG" },
    { name: "--sidebar-accent", label: "Sidebar Accent" },
    { name: "--sidebar-accent-foreground", label: "Sidebar Accent FG" },
    { name: "--sidebar-border", label: "Sidebar Border" },
    { name: "--sidebar-ring", label: "Sidebar Ring" },
  ],
};

function Swatch({ name, label }: { name: string; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="size-10 shrink-0 rounded-lg border border-border"
        style={{ backgroundColor: `var(${name})` }}
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="font-mono text-xs text-muted-foreground">{name}</p>
      </div>
    </div>
  );
}

function ColorPalette() {
  return (
    <div className="w-full max-w-4xl space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Color Tokens
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          All CSS custom properties used by shadcn/ui components. Toggle dark
          mode in the toolbar to see both palettes.
        </p>
      </div>
      {Object.entries(colorTokens).map(([group, tokens]) => (
        <section key={group}>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            {group}
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tokens.map((t) => (
              <Swatch key={t.name} name={t.name} label={t.label} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Palette: Story = {
  render: () => <ColorPalette />,
};

export const PairedSwatches: Story = {
  name: "Foreground on Background",
  render: () => {
    const pairs = [
      { bg: "--background", fg: "--foreground", label: "Background" },
      { bg: "--card", fg: "--card-foreground", label: "Card" },
      { bg: "--popover", fg: "--popover-foreground", label: "Popover" },
      { bg: "--primary", fg: "--primary-foreground", label: "Primary" },
      { bg: "--secondary", fg: "--secondary-foreground", label: "Secondary" },
      { bg: "--muted", fg: "--muted-foreground", label: "Muted" },
      { bg: "--accent", fg: "--accent-foreground", label: "Accent" },
      {
        bg: "--destructive",
        fg: "--destructive-foreground",
        label: "Destructive",
      },
    ];
    return (
      <div className="w-full max-w-3xl space-y-3 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Contrast Pairs
        </h2>
        {pairs.map((p) => (
          <div
            key={p.label}
            className="flex items-center rounded-lg border border-border px-4 py-3"
            style={{ backgroundColor: `var(${p.bg})` }}
          >
            <span
              className="text-sm font-medium"
              style={{ color: `var(${p.fg})` }}
            >
              {p.label} — foreground on background
            </span>
            <span
              className="ml-auto font-mono text-xs"
              style={{ color: `var(${p.fg})` }}
            >
              {p.bg} / {p.fg}
            </span>
          </div>
        ))}
      </div>
    );
  },
};
