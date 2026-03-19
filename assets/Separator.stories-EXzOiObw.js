import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as s}from"./separator-DrGMmk_q.js";import"./iframe-DnETVZJP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-TvJ2bEeG.js";import"./index-DwGs9Epf.js";import"./index-Kab2VDxh.js";import"./index-DSoy0_Dk.js";const j={title:"Components/Separator",component:s,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},decorative:{control:"boolean"}}},a={render:()=>e.jsxs("div",{className:"w-full max-w-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"An open-source UI component library."})]}),e.jsx(s,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center gap-4 text-sm",children:[e.jsx("span",{children:"Blog"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{children:"Docs"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{children:"Source"})]})]})},n={render:()=>e.jsxs("div",{className:"flex h-10 items-center gap-4 text-sm",children:[e.jsx("span",{children:"Item 1"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{children:"Item 2"}),e.jsx(s,{orientation:"vertical"}),e.jsx("span",{children:"Item 3"})]})},r={name:"In List",render:()=>e.jsx("div",{className:"w-full max-w-sm",children:["Profile","Settings","Billing","Notifications"].map((t,i,o)=>e.jsxs("div",{children:[e.jsx("div",{className:"py-3 text-sm",children:t}),i<o.length-1&&e.jsx(s,{})]},t))})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <Separator orientation="vertical" />
        <span>Docs</span>
        <Separator orientation="vertical" />
        <span>Source</span>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-10 items-center gap-4 text-sm">
      <span>Item 1</span>
      <Separator orientation="vertical" />
      <span>Item 2</span>
      <Separator orientation="vertical" />
      <span>Item 3</span>
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "In List",
  render: () => <div className="w-full max-w-sm">
      {["Profile", "Settings", "Billing", "Notifications"].map((item, index, arr) => <div key={item}>
            <div className="py-3 text-sm">{item}</div>
            {index < arr.length - 1 && <Separator />}
          </div>)}
    </div>
}`,...r.parameters?.docs?.source}}};const g=["Horizontal","Vertical","InList"];export{a as Horizontal,r as InList,n as Vertical,g as __namedExportsOrder,j as default};
