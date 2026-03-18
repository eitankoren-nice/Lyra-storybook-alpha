import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundations/Tokens",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const Spacing: Story = {
  render: () => {
    const sizes = [
      { label: "0.5 (2px)", cls: "w-0.5" },
      { label: "1 (4px)", cls: "w-1" },
      { label: "1.5 (6px)", cls: "w-1.5" },
      { label: "2 (8px)", cls: "w-2" },
      { label: "3 (12px)", cls: "w-3" },
      { label: "4 (16px)", cls: "w-4" },
      { label: "5 (20px)", cls: "w-5" },
      { label: "6 (24px)", cls: "w-6" },
      { label: "8 (32px)", cls: "w-8" },
      { label: "10 (40px)", cls: "w-10" },
      { label: "12 (48px)", cls: "w-12" },
      { label: "16 (64px)", cls: "w-16" },
      { label: "20 (80px)", cls: "w-20" },
      { label: "24 (96px)", cls: "w-24" },
    ];
    return (
      <div className="w-full max-w-3xl space-y-6 p-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            Design Tokens
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Spacing, border-radius, shadows, and other design tokens.
          </p>
        </div>
        <section>
          <h2 className="mb-3 text-lg font-semibold text-foreground">
            Spacing Scale
          </h2>
          <div className="space-y-2">
            {sizes.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">
                  {s.label}
                </span>
                <div className={`h-3 rounded-sm bg-primary ${s.cls}`} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
};

export const BorderRadius: Story = {
  name: "Border Radius",
  render: () => {
    const radii = [
      {
        name: "--radius-sm",
        desc: "calc(var(--radius) - 4px)",
        cls: "rounded-sm",
      },
      {
        name: "--radius-md",
        desc: "calc(var(--radius) - 2px)",
        cls: "rounded-md",
      },
      { name: "--radius-lg", desc: "var(--radius)", cls: "rounded-lg" },
      {
        name: "--radius-xl",
        desc: "calc(var(--radius) + 4px)",
        cls: "rounded-xl",
      },
      {
        name: "--radius-2xl",
        desc: "calc(var(--radius) * 1.8)",
        cls: "rounded-2xl",
      },
      {
        name: "--radius-3xl",
        desc: "calc(var(--radius) * 2.2)",
        cls: "rounded-3xl",
      },
      { name: "full", desc: "9999px", cls: "rounded-full" },
    ];
    return (
      <div className="w-full max-w-3xl space-y-6 p-6">
        <h2 className="mb-3 text-lg font-semibold text-foreground">
          Border Radius
        </h2>
        <p className="text-sm text-muted-foreground">
          Base radius: <code className="rounded bg-muted px-1 font-mono text-xs">--radius: 0.625rem</code>
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {radii.map((r) => (
            <div key={r.name} className="space-y-2 text-center">
              <div
                className={`mx-auto size-16 border-2 border-primary bg-primary/10 ${r.cls}`}
              />
              <div>
                <p className="font-mono text-xs font-medium text-foreground">
                  {r.cls}
                </p>
                <p className="font-mono text-[10px] text-muted-foreground">
                  {r.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const Shadows: Story = {
  render: () => {
    const shadows = [
      { name: "shadow-sm", cls: "shadow-sm" },
      { name: "shadow", cls: "shadow" },
      { name: "shadow-md", cls: "shadow-md" },
      { name: "shadow-lg", cls: "shadow-lg" },
      { name: "shadow-xl", cls: "shadow-xl" },
      { name: "shadow-2xl", cls: "shadow-2xl" },
    ];
    return (
      <div className="w-full max-w-3xl space-y-6 p-6">
        <h2 className="mb-3 text-lg font-semibold text-foreground">Shadows</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {shadows.map((s) => (
            <div key={s.name} className="space-y-2 text-center">
              <div
                className={`mx-auto flex h-16 w-full items-center justify-center rounded-lg bg-card ${s.cls}`}
              >
                <span className="text-sm text-card-foreground">{s.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export const CSSVariableReference: Story = {
  name: "CSS Variable Reference",
  render: () => {
    const groups = [
      {
        title: "Colors",
        vars: [
          "--background",
          "--foreground",
          "--card",
          "--card-foreground",
          "--popover",
          "--popover-foreground",
          "--primary",
          "--primary-foreground",
          "--secondary",
          "--secondary-foreground",
          "--muted",
          "--muted-foreground",
          "--accent",
          "--accent-foreground",
          "--destructive",
          "--destructive-foreground",
          "--border",
          "--input",
          "--ring",
        ],
      },
      {
        title: "Chart",
        vars: [
          "--chart-1",
          "--chart-2",
          "--chart-3",
          "--chart-4",
          "--chart-5",
        ],
      },
      {
        title: "Layout",
        vars: ["--radius"],
      },
      {
        title: "Sidebar",
        vars: [
          "--sidebar",
          "--sidebar-foreground",
          "--sidebar-primary",
          "--sidebar-primary-foreground",
          "--sidebar-accent",
          "--sidebar-accent-foreground",
          "--sidebar-border",
          "--sidebar-ring",
        ],
      },
    ];
    return (
      <div className="w-full max-w-4xl space-y-8 p-6">
        <h2 className="text-lg font-semibold text-foreground">
          Full CSS Variable Reference
        </h2>
        {groups.map((g) => (
          <section key={g.title}>
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              {g.title}
            </h3>
            <div className="overflow-hidden rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="px-3 py-2 text-left font-medium">
                      Variable
                    </th>
                    <th className="px-3 py-2 text-left font-medium">Value</th>
                    <th className="px-3 py-2 text-left font-medium">Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {g.vars.map((v) => (
                    <tr key={v} className="border-b last:border-0">
                      <td className="px-3 py-2 font-mono text-xs">{v}</td>
                      <td className="px-3 py-2 font-mono text-xs text-muted-foreground">
                        var({v})
                      </td>
                      <td className="px-3 py-2">
                        {v === "--radius" ? (
                          <div
                            className="size-6 border-2 border-primary"
                            style={{
                              borderRadius: `var(${v})`,
                            }}
                          />
                        ) : (
                          <div
                            className="size-6 rounded border border-border"
                            style={{ backgroundColor: `var(${v})` }}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>
    );
  },
};
