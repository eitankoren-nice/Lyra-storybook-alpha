import type { Meta, StoryObj } from "@storybook/react-vite";

const colorTokens = {
  "Core Surfaces": [
    { name: "--background", label: "Background", hex: "oklch(1 0 0)" },
    { name: "--foreground", label: "Foreground", hex: "#000000CC" },
    { name: "--card", label: "Card", hex: "oklch(1 0 0)" },
    { name: "--card-foreground", label: "Card Foreground", hex: "#000000CC" },
    { name: "--popover", label: "Popover", hex: "oklch(1 0 0)" },
    { name: "--popover-foreground", label: "Popover Foreground", hex: "#000000CC" },
  ],
  "Brand / Action": [
    { name: "--primary", label: "Primary", hex: "#0D66C9" },
    { name: "--primary-foreground", label: "Primary Foreground", hex: "#F0F7FF" },
    { name: "--secondary", label: "Secondary", hex: "oklch(1 0 0)" },
    { name: "--secondary-foreground", label: "Secondary Foreground", hex: "#000000CC" },
    { name: "--accent", label: "Accent", hex: "#0000000A" },
    { name: "--accent-foreground", label: "Accent Foreground", hex: "#000000CC" },
  ],
  "State / Feedback": [
    { name: "--destructive", label: "Destructive", hex: "#B72424" },
    { name: "--destructive-foreground", label: "Destructive Foreground", hex: "#FFF5F5" },
    { name: "--muted", label: "Muted", hex: "#F5F5F5" },
    { name: "--muted-foreground", label: "Muted Foreground", hex: "#0000008F" },
  ],
  "Status": [
    { name: "--critical-strong", label: "Critical Strong", hex: "#B72424" },
    { name: "--critical-subtle", label: "Critical Subtle", hex: "#FFF5F5" },
    { name: "--success-strong", label: "Success Strong", hex: "#1F7526" },
    { name: "--success-subtle", label: "Success Subtle", hex: "#EFFBF0" },
    { name: "--info-strong", label: "Info Strong", hex: "#0A66AD" },
    { name: "--info-subtle", label: "Info Subtle", hex: "#F0F7FF" },
    { name: "--warning-strong", label: "Warning Strong", hex: "#916100" },
    { name: "--warning-subtle", label: "Warning Subtle", hex: "#FFFAE8" },
  ],
  "Selected": [
    { name: "--selected-strong", label: "Selected Strong", hex: "#0D66C9" },
    { name: "--selected-subtle", label: "Selected Subtle", hex: "#F0F7FF" },
  ],
  "Borders & Rings": [
    { name: "--border", label: "Border", hex: "#0000001A" },
    { name: "--input", label: "Input", hex: "#00000070" },
    { name: "--ring", label: "Ring", hex: "#6950CD" },
  ],
  "Chart Palette": [
    { name: "--chart-1", label: "Chart 1" },
    { name: "--chart-2", label: "Chart 2" },
    { name: "--chart-3", label: "Chart 3" },
    { name: "--chart-4", label: "Chart 4" },
    { name: "--chart-5", label: "Chart 5" },
  ],
  Sidebar: [
    { name: "--sidebar", label: "Sidebar Background", hex: "#F4F5F6" },
    { name: "--sidebar-foreground", label: "Sidebar Foreground", hex: "#000000CC" },
    { name: "--sidebar-primary", label: "Sidebar Primary", hex: "#0D66C9" },
    { name: "--sidebar-primary-foreground", label: "Sidebar Primary FG", hex: "#F0F7FF" },
    { name: "--sidebar-accent", label: "Sidebar Accent", hex: "#0000000A" },
    { name: "--sidebar-accent-foreground", label: "Sidebar Accent FG", hex: "#000000CC" },
    { name: "--sidebar-border", label: "Sidebar Border", hex: "#0000001A" },
    { name: "--sidebar-ring", label: "Sidebar Ring", hex: "#6950CD" },
  ],
};

function Swatch({ name, label, hex }: { name: string; label: string; hex?: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="size-10 shrink-0 rounded-lg border border-border"
        style={{ backgroundColor: `var(${name})` }}
      />
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="font-mono text-xs text-muted-foreground">
          {name}{hex && <span className="ml-1 opacity-60">({hex})</span>}
        </p>
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
      {
        bg: "--critical-subtle",
        fg: "--critical-strong",
        label: "Critical",
      },
      {
        bg: "--success-subtle",
        fg: "--success-strong",
        label: "Success",
      },
      {
        bg: "--info-subtle",
        fg: "--info-strong",
        label: "Info",
      },
      {
        bg: "--warning-subtle",
        fg: "--warning-strong",
        label: "Warning",
      },
      {
        bg: "--selected-subtle",
        fg: "--selected-strong",
        label: "Selected",
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
