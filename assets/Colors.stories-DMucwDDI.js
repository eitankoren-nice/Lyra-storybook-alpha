import{j as e}from"./jsx-runtime-u17CrQMm.js";const s={"Core Surfaces":[{name:"--background",label:"Background",hex:"oklch(1 0 0)"},{name:"--foreground",label:"Foreground",hex:"#000000CC"},{name:"--card",label:"Card",hex:"oklch(1 0 0)"},{name:"--card-foreground",label:"Card Foreground",hex:"#000000CC"},{name:"--popover",label:"Popover",hex:"oklch(1 0 0)"},{name:"--popover-foreground",label:"Popover Foreground",hex:"#000000CC"}],"Brand / Action":[{name:"--primary",label:"Primary",hex:"#0D66C9"},{name:"--primary-foreground",label:"Primary Foreground",hex:"#F0F7FF"},{name:"--secondary",label:"Secondary",hex:"oklch(1 0 0)"},{name:"--secondary-foreground",label:"Secondary Foreground",hex:"#000000CC"},{name:"--accent",label:"Accent",hex:"#0000000A"},{name:"--accent-foreground",label:"Accent Foreground",hex:"#000000CC"}],"State / Feedback":[{name:"--destructive",label:"Destructive",hex:"#B72424"},{name:"--destructive-foreground",label:"Destructive Foreground",hex:"#FFF5F5"},{name:"--muted",label:"Muted",hex:"#F5F5F5"},{name:"--muted-foreground",label:"Muted Foreground",hex:"#0000008F"}],Status:[{name:"--critical-strong",label:"Critical Strong",hex:"#B72424"},{name:"--critical-subtle",label:"Critical Subtle",hex:"#FFF5F5"},{name:"--success-strong",label:"Success Strong",hex:"#1F7526"},{name:"--success-subtle",label:"Success Subtle",hex:"#EFFBF0"},{name:"--info-strong",label:"Info Strong",hex:"#0A66AD"},{name:"--info-subtle",label:"Info Subtle",hex:"#F0F7FF"},{name:"--warning-strong",label:"Warning Strong",hex:"#916100"},{name:"--warning-subtle",label:"Warning Subtle",hex:"#FFFAE8"}],Selected:[{name:"--selected-strong",label:"Selected Strong",hex:"#0D66C9"},{name:"--selected-subtle",label:"Selected Subtle",hex:"#F0F7FF"}],"Borders & Rings":[{name:"--border",label:"Border",hex:"#0000001A"},{name:"--input",label:"Input",hex:"#00000070"},{name:"--ring",label:"Ring",hex:"#6950CD"}],"Chart Palette":[{name:"--chart-1",label:"Chart 1"},{name:"--chart-2",label:"Chart 2"},{name:"--chart-3",label:"Chart 3"},{name:"--chart-4",label:"Chart 4"},{name:"--chart-5",label:"Chart 5"}],Sidebar:[{name:"--sidebar",label:"Sidebar Background",hex:"#F4F5F6"},{name:"--sidebar-foreground",label:"Sidebar Foreground",hex:"#000000CC"},{name:"--sidebar-primary",label:"Sidebar Primary",hex:"#0D66C9"},{name:"--sidebar-primary-foreground",label:"Sidebar Primary FG",hex:"#F0F7FF"},{name:"--sidebar-accent",label:"Sidebar Accent",hex:"#0000000A"},{name:"--sidebar-accent-foreground",label:"Sidebar Accent FG",hex:"#000000CC"},{name:"--sidebar-border",label:"Sidebar Border",hex:"#0000001A"},{name:"--sidebar-ring",label:"Sidebar Ring",hex:"#6950CD"}]};function t({name:n,label:r,hex:a}){return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"size-10 shrink-0 rounded-lg border border-border",style:{backgroundColor:`var(${n})`}}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r}),e.jsxs("p",{className:"font-mono text-xs text-muted-foreground",children:[n,a&&e.jsxs("span",{className:"ml-1 opacity-60",children:["(",a,")"]})]})]})]})}function c(){return e.jsxs("div",{className:"w-full max-w-4xl space-y-8 p-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-foreground",children:"Color Tokens"}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"All CSS custom properties used by shadcn/ui components. Toggle dark mode in the toolbar to see both palettes."})]}),Object.entries(s).map(([n,r])=>e.jsxs("section",{children:[e.jsx("h2",{className:"mb-3 text-lg font-semibold text-foreground",children:n}),e.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",children:r.map(a=>e.jsx(t,{name:a.name,label:a.label},a.name))})]},n))]})}const g={title:"Foundations/Colors",parameters:{layout:"fullscreen"}},l={render:()=>e.jsx(c,{})},o={name:"Foreground on Background",render:()=>{const n=[{bg:"--background",fg:"--foreground",label:"Background"},{bg:"--card",fg:"--card-foreground",label:"Card"},{bg:"--popover",fg:"--popover-foreground",label:"Popover"},{bg:"--primary",fg:"--primary-foreground",label:"Primary"},{bg:"--secondary",fg:"--secondary-foreground",label:"Secondary"},{bg:"--muted",fg:"--muted-foreground",label:"Muted"},{bg:"--accent",fg:"--accent-foreground",label:"Accent"},{bg:"--destructive",fg:"--destructive-foreground",label:"Destructive"},{bg:"--critical-subtle",fg:"--critical-strong",label:"Critical"},{bg:"--success-subtle",fg:"--success-strong",label:"Success"},{bg:"--info-subtle",fg:"--info-strong",label:"Info"},{bg:"--warning-subtle",fg:"--warning-strong",label:"Warning"},{bg:"--selected-subtle",fg:"--selected-strong",label:"Selected"}];return e.jsxs("div",{className:"w-full max-w-3xl space-y-3 p-6",children:[e.jsx("h2",{className:"mb-4 text-lg font-semibold text-foreground",children:"Contrast Pairs"}),n.map(r=>e.jsxs("div",{className:"flex items-center rounded-lg border border-border px-4 py-3",style:{backgroundColor:`var(${r.bg})`},children:[e.jsxs("span",{className:"text-sm font-medium",style:{color:`var(${r.fg})`},children:[r.label," — foreground on background"]}),e.jsxs("span",{className:"ml-auto font-mono text-xs",style:{color:`var(${r.fg})`},children:[r.bg," / ",r.fg]})]},r.label))]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ColorPalette />
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    }, {
      bg: "--critical-subtle",
      fg: "--critical-strong",
      label: "Critical"
    }, {
      bg: "--success-subtle",
      fg: "--success-strong",
      label: "Success"
    }, {
      bg: "--info-subtle",
      fg: "--info-strong",
      label: "Info"
    }, {
      bg: "--warning-subtle",
      fg: "--warning-strong",
      label: "Warning"
    }, {
      bg: "--selected-subtle",
      fg: "--selected-strong",
      label: "Selected"
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
}`,...o.parameters?.docs?.source}}};const b=["Palette","PairedSwatches"];export{o as PairedSwatches,l as Palette,b as __namedExportsOrder,g as default};
