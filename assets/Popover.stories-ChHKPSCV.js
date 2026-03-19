import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as o,a as l,b as d}from"./popover-DfAPZn2x.js";import{B as p}from"./button-CR7DX97M.js";import{I as n}from"./input-YYOOfn_S.js";import{L as i}from"./label-Cp7T_9Ez.js";import"./iframe-DnETVZJP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-D1Wwc4Ls.js";import"./index-CLZ7_oxF.js";import"./index-DSoy0_Dk.js";import"./index-D5prXcjY.js";import"./index-DIr13BBP.js";import"./index-TvJ2bEeG.js";import"./index-DwGs9Epf.js";import"./index-Kab2VDxh.js";import"./index-OlCSfi9a.js";import"./index-CGmYEQIX.js";import"./index-DZrhUfUk.js";import"./index-BMJluI7x.js";import"./index-BI14ANg9.js";import"./index-DLmjT3BM.js";import"./index-LHNt3CwB.js";const z={title:"Components/Popover",parameters:{layout:"centered"}},r={render:()=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsx(p,{variant:"outline",children:"Open Popover"})}),e.jsx(d,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"width",children:"Width"}),e.jsx(n,{id:"width",defaultValue:"100%",className:"col-span-2"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"maxWidth",children:"Max. width"}),e.jsx(n,{id:"maxWidth",defaultValue:"300px",className:"col-span-2"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(i,{htmlFor:"height",children:"Height"}),e.jsx(n,{id:"height",defaultValue:"25px",className:"col-span-2"})]})]})]})})]})},a={render:()=>e.jsx("div",{className:"flex gap-4",children:["start","center","end"].map(s=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsxs(p,{variant:"outline",className:"capitalize",children:["Align ",s]})}),e.jsx(d,{align:s,children:e.jsxs("p",{className:"text-sm",children:["This popover is aligned to ",e.jsx("strong",{children:s}),"."]})})]},s))})},t={render:()=>e.jsx("div",{className:"flex gap-4",children:["top","right","bottom","left"].map(s=>e.jsxs(o,{children:[e.jsx(l,{asChild:!0,children:e.jsx(p,{variant:"outline",className:"capitalize",children:s})}),e.jsx(d,{side:s,children:e.jsxs("p",{className:"text-sm",children:["This popover opens to the ",e.jsx("strong",{children:s}),"."]})})]},s))})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["start", "center", "end"] as const).map(align => <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="capitalize">
              Align {align}
            </Button>
          </PopoverTrigger>
          <PopoverContent align={align}>
            <p className="text-sm">
              This popover is aligned to <strong>{align}</strong>.
            </p>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["top", "right", "bottom", "left"] as const).map(side => <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side}>
            <p className="text-sm">
              This popover opens to the <strong>{side}</strong>.
            </p>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...t.parameters?.docs?.source}}};const A=["Default","Alignment","Sides"];export{a as Alignment,r as Default,t as Sides,A as __namedExportsOrder,z as default};
