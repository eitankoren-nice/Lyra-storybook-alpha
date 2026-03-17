import{j as e}from"./jsx-runtime-u17CrQMm.js";const d={"Core Surfaces":[{name:"--background",label:"Background"},{name:"--foreground",label:"Foreground"},{name:"--card",label:"Card"},{name:"--card-foreground",label:"Card Foreground"},{name:"--popover",label:"Popover"},{name:"--popover-foreground",label:"Popover Foreground"}],"Brand / Action":[{name:"--primary",label:"Primary"},{name:"--primary-foreground",label:"Primary Foreground"},{name:"--secondary",label:"Secondary"},{name:"--secondary-foreground",label:"Secondary Foreground"},{name:"--accent",label:"Accent"},{name:"--accent-foreground",label:"Accent Foreground"}],"State / Feedback":[{name:"--destructive",label:"Destructive"},{name:"--destructive-foreground",label:"Destructive Foreground"},{name:"--muted",label:"Muted"},{name:"--muted-foreground",label:"Muted Foreground"}],"Borders & Rings":[{name:"--border",label:"Border"},{name:"--input",label:"Input"},{name:"--ring",label:"Ring"}],"Chart Palette":[{name:"--chart-1",label:"Chart 1"},{name:"--chart-2",label:"Chart 2"},{name:"--chart-3",label:"Chart 3"},{name:"--chart-4",label:"Chart 4"},{name:"--chart-5",label:"Chart 5"}],Sidebar:[{name:"--sidebar",label:"Sidebar"},{name:"--sidebar-foreground",label:"Sidebar Foreground"},{name:"--sidebar-primary",label:"Sidebar Primary"},{name:"--sidebar-primary-foreground",label:"Sidebar Primary FG"},{name:"--sidebar-accent",label:"Sidebar Accent"},{name:"--sidebar-accent-foreground",label:"Sidebar Accent FG"},{name:"--sidebar-border",label:"Sidebar Border"},{name:"--sidebar-ring",label:"Sidebar Ring"}]};function t({name:a,label:r}){return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"size-10 shrink-0 rounded-lg border border-border",style:{backgroundColor:`var(${a})`}}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r}),e.jsx("p",{className:"font-mono text-xs text-muted-foreground",children:a})]})]})}function s(){return e.jsxs("div",{className:"w-full max-w-4xl space-y-8 p-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-foreground",children:"Color Tokens"}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"All CSS custom properties used by shadcn/ui components. Toggle dark mode in the toolbar to see both palettes."})]}),Object.entries(d).map(([a,r])=>e.jsxs("section",{children:[e.jsx("h2",{className:"mb-3 text-lg font-semibold text-foreground",children:a}),e.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",children:r.map(l=>e.jsx(t,{name:l.name,label:l.label},l.name))})]},a))]})}const m={title:"Foundations/Colors",parameters:{layout:"fullscreen"}},n={render:()=>e.jsx(s,{})},o={name:"Foreground on Background",render:()=>{const a=[{bg:"--background",fg:"--foreground",label:"Background"},{bg:"--card",fg:"--card-foreground",label:"Card"},{bg:"--popover",fg:"--popover-foreground",label:"Popover"},{bg:"--primary",fg:"--primary-foreground",label:"Primary"},{bg:"--secondary",fg:"--secondary-foreground",label:"Secondary"},{bg:"--muted",fg:"--muted-foreground",label:"Muted"},{bg:"--accent",fg:"--accent-foreground",label:"Accent"},{bg:"--destructive",fg:"--destructive-foreground",label:"Destructive"}];return e.jsxs("div",{className:"w-full max-w-3xl space-y-3 p-6",children:[e.jsx("h2",{className:"mb-4 text-lg font-semibold text-foreground",children:"Contrast Pairs"}),a.map(r=>e.jsxs("div",{className:"flex items-center rounded-lg border border-border px-4 py-3",style:{backgroundColor:`var(${r.bg})`},children:[e.jsxs("span",{className:"text-sm font-medium",style:{color:`var(${r.fg})`},children:[r.label," — foreground on background"]}),e.jsxs("span",{className:"ml-auto font-mono text-xs",style:{color:`var(${r.fg})`},children:[r.bg," / ",r.fg]})]},r.label))]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <ColorPalette />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Foreground on Background",
  render: () => {
    const pairs = [{
      bg: "--background",
      fg: "--foreground",
      label: "Background"
    }, {
      bg: "--card",
      fg: "--card-foreground",
      label: "Card"
    }, {
      bg: "--popover",
      fg: "--popover-foreground",
      label: "Popover"
    }, {
      bg: "--primary",
      fg: "--primary-foreground",
      label: "Primary"
    }, {
      bg: "--secondary",
      fg: "--secondary-foreground",
      label: "Secondary"
    }, {
      bg: "--muted",
      fg: "--muted-foreground",
      label: "Muted"
    }, {
      bg: "--accent",
      fg: "--accent-foreground",
      label: "Accent"
    }, {
      bg: "--destructive",
      fg: "--destructive-foreground",
      label: "Destructive"
    }];
    return <div className="w-full max-w-3xl space-y-3 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Contrast Pairs
        </h2>
        {pairs.map(p => <div key={p.label} className="flex items-center rounded-lg border border-border px-4 py-3" style={{
        backgroundColor: \`var(\${p.bg})\`
      }}>
            <span className="text-sm font-medium" style={{
          color: \`var(\${p.fg})\`
        }}>
              {p.label} — foreground on background
            </span>
            <span className="ml-auto font-mono text-xs" style={{
          color: \`var(\${p.fg})\`
        }}>
              {p.bg} / {p.fg}
            </span>
          </div>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const g=["Palette","PairedSwatches"];export{o as PairedSwatches,n as Palette,g as __namedExportsOrder,m as default};
