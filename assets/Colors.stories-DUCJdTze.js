import{j as e}from"./jsx-runtime-u17CrQMm.js";const t={"Core Surfaces":[{name:"--background",label:"Background",hex:"white"},{name:"--foreground",label:"Foreground",hex:"rgba(0,0,0,0.8)"},{name:"--card",label:"Card",hex:"white"},{name:"--card-foreground",label:"Card Foreground",hex:"rgba(0,0,0,0.8)"},{name:"--popover",label:"Popover",hex:"white"},{name:"--popover-foreground",label:"Popover Foreground",hex:"rgba(0,0,0,0.8)"}],"Brand / Action":[{name:"--primary",label:"Primary",hex:"#0d66c9"},{name:"--primary-foreground",label:"Primary Foreground",hex:"#f0f7ff"},{name:"--secondary",label:"Secondary",hex:"white"},{name:"--secondary-foreground",label:"Secondary Foreground",hex:"rgba(0,0,0,0.8)"},{name:"--accent",label:"Accent",hex:"rgba(0,0,0,0.04)"},{name:"--accent-foreground",label:"Accent Foreground",hex:"rgba(0,0,0,0.8)"}],"State / Feedback":[{name:"--destructive",label:"Destructive",hex:"#b72424"},{name:"--destructive-foreground",label:"Destructive Foreground",hex:"#fff5f5"},{name:"--muted",label:"Muted",hex:"#f5f5f5"},{name:"--muted-foreground",label:"Muted Foreground",hex:"rgba(0,0,0,0.56)"}],Status:[{name:"--critical-strong",label:"Critical Strong",hex:"#b72424"},{name:"--critical-subtle",label:"Critical Subtle",hex:"#fff5f5"},{name:"--success-strong",label:"Success Strong",hex:"#1f7526"},{name:"--success-subtle",label:"Success Subtle",hex:"#effbf0"},{name:"--info-strong",label:"Info Strong",hex:"#0a66ad"},{name:"--info-subtle",label:"Info Subtle",hex:"#f0f7ff"},{name:"--warning-strong",label:"Warning Strong",hex:"#916100"},{name:"--warning-subtle",label:"Warning Subtle",hex:"#fffae8"}],Selected:[{name:"--selected-strong",label:"Selected Strong",hex:"#0a52a3"},{name:"--selected-subtle",label:"Selected Subtle",hex:"#f0f7ff"}],"Borders & Rings":[{name:"--border",label:"Border",hex:"rgba(0,0,0,0.1)"},{name:"--input",label:"Input",hex:"rgba(0,0,0,0.44)"},{name:"--ring",label:"Ring",hex:"#6950cd"}],"Chart Palette":[{name:"--chart-1",label:"Chart 1"},{name:"--chart-2",label:"Chart 2"},{name:"--chart-3",label:"Chart 3"},{name:"--chart-4",label:"Chart 4"},{name:"--chart-5",label:"Chart 5"}],Sidebar:[{name:"--sidebar",label:"Sidebar Background",hex:"#f4f5f6"},{name:"--sidebar-foreground",label:"Sidebar Foreground",hex:"rgba(0,0,0,0.8)"},{name:"--sidebar-primary",label:"Sidebar Primary",hex:"#0d66c9"},{name:"--sidebar-primary-foreground",label:"Sidebar Primary FG",hex:"#f0f7ff"},{name:"--sidebar-accent",label:"Sidebar Accent",hex:"rgba(0,0,0,0.04)"},{name:"--sidebar-accent-foreground",label:"Sidebar Accent FG",hex:"rgba(0,0,0,0.8)"},{name:"--sidebar-border",label:"Sidebar Border",hex:"rgba(0,0,0,0.1)"},{name:"--sidebar-ring",label:"Sidebar Ring",hex:"#6950cd"}]};function s({name:a,label:r,hex:n}){return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"size-10 shrink-0 rounded-lg border border-border",style:{backgroundColor:`var(${a})`}}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:r}),e.jsxs("p",{className:"font-mono text-xs text-muted-foreground",children:[a,n&&e.jsxs("span",{className:"ml-1 opacity-60",children:["(",n,")"]})]})]})]})}function d(){return e.jsxs("div",{className:"w-full max-w-4xl space-y-8 p-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold tracking-tight text-foreground",children:"Color Tokens"}),e.jsx("p",{className:"mt-1 text-sm text-muted-foreground",children:"All CSS custom properties used by shadcn/ui components. Toggle dark mode in the toolbar to see both palettes."})]}),Object.entries(t).map(([a,r])=>e.jsxs("section",{children:[e.jsx("h2",{className:"mb-3 text-lg font-semibold text-foreground",children:a}),e.jsx("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",children:r.map(n=>e.jsx(s,{name:n.name,label:n.label},n.name))})]},a))]})}const g={title:"Foundations/Colors",parameters:{layout:"fullscreen"}},l={render:()=>e.jsx(d,{})},o={name:"Foreground on Background",render:()=>{const a=[{bg:"--background",fg:"--foreground",label:"Background"},{bg:"--card",fg:"--card-foreground",label:"Card"},{bg:"--popover",fg:"--popover-foreground",label:"Popover"},{bg:"--primary",fg:"--primary-foreground",label:"Primary"},{bg:"--secondary",fg:"--secondary-foreground",label:"Secondary"},{bg:"--muted",fg:"--muted-foreground",label:"Muted"},{bg:"--accent",fg:"--accent-foreground",label:"Accent"},{bg:"--destructive",fg:"--destructive-foreground",label:"Destructive"},{bg:"--critical-subtle",fg:"--critical-strong",label:"Critical"},{bg:"--success-subtle",fg:"--success-strong",label:"Success"},{bg:"--info-subtle",fg:"--info-strong",label:"Info"},{bg:"--warning-subtle",fg:"--warning-strong",label:"Warning"},{bg:"--selected-subtle",fg:"--selected-strong",label:"Selected"}];return e.jsxs("div",{className:"w-full max-w-3xl space-y-3 p-6",children:[e.jsx("h2",{className:"mb-4 text-lg font-semibold text-foreground",children:"Contrast Pairs"}),a.map(r=>e.jsxs("div",{className:"flex items-center rounded-lg border border-border px-4 py-3",style:{backgroundColor:`var(${r.bg})`},children:[e.jsxs("span",{className:"text-sm font-medium",style:{color:`var(${r.fg})`},children:[r.label," — foreground on background"]}),e.jsxs("span",{className:"ml-auto font-mono text-xs",style:{color:`var(${r.fg})`},children:[r.bg," / ",r.fg]})]},r.label))]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
