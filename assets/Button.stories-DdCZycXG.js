import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as n}from"./button-BmFYNnfe.js";import{c as p}from"./createLucideIcon-DA2lmh1s.js";import{P as t}from"./plus-YgaXPnYW.js";import{M as x}from"./mail-CbJIqIFl.js";import{C as h}from"./chevron-right-B2deVPyh.js";import"./iframe-CSTJd8pR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-CLgKPshB.js";const v=[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]],u=p("loader",v);const f=[["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],g=p("trash",f),D={title:"Components/Inputs/Button",component:n,args:{children:"Button",variant:"default",size:"default",disabled:!1},argTypes:{variant:{control:"select",options:["default","outline","secondary","ghost","destructive","link"]},size:{control:"select",options:["default","xs","sm","lg","icon","icon-xs","icon-sm","icon-lg"]},disabled:{control:"boolean"},asChild:{table:{disable:!0}}}},a={},s={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(n,{variant:"default",children:"Default"}),e.jsx(n,{variant:"outline",children:"Outline"}),e.jsx(n,{variant:"secondary",children:"Secondary"}),e.jsx(n,{variant:"ghost",children:"Ghost"}),e.jsx(n,{variant:"destructive",children:"Destructive"}),e.jsx(n,{variant:"link",children:"Link"})]})},r={name:"All Sizes",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(n,{size:"xs",children:"Extra Small"}),e.jsx(n,{size:"sm",children:"Small"}),e.jsx(n,{size:"default",children:"Default"}),e.jsx(n,{size:"lg",children:"Large"})]})},i={name:"Icon Sizes",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx(n,{size:"icon-xs",children:e.jsx(t,{})}),e.jsx(n,{size:"icon-sm",children:e.jsx(t,{})}),e.jsx(n,{size:"icon",children:e.jsx(t,{})}),e.jsx(n,{size:"icon-lg",children:e.jsx(t,{})})]})},o={name:"With Icons",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs(n,{children:[e.jsx(x,{"data-icon":"inline-start"}),"Login with Email"]}),e.jsxs(n,{variant:"outline",children:["Next",e.jsx(h,{"data-icon":"inline-end"})]})]})},c={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsxs(n,{disabled:!0,children:[e.jsx(u,{className:"animate-spin"}),"Please wait"]}),e.jsxs(n,{variant:"outline",disabled:!0,children:[e.jsx(u,{className:"animate-spin"}),"Loading..."]})]})},l={args:{disabled:!0,children:"Disabled"}},d={render:()=>e.jsxs(n,{variant:"destructive",children:[e.jsx(g,{"data-icon":"inline-start"}),"Delete Account"]})},m={name:"As Link (asChild)",render:()=>e.jsx(n,{asChild:!0,variant:"link",children:e.jsx("a",{href:"https://example.com",children:"Visit Example"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "All Sizes",
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Icon Sizes",
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button size="icon-xs"><PlusIcon /></Button>
      <Button size="icon-sm"><PlusIcon /></Button>
      <Button size="icon"><PlusIcon /></Button>
      <Button size="icon-lg"><PlusIcon /></Button>
    </div>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Icons",
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button>
        <MailIcon data-icon="inline-start" />
        Login with Email
      </Button>
      <Button variant="outline">
        Next
        <ChevronRightIcon data-icon="inline-end" />
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-3">
      <Button disabled>
        <LoaderIcon className="animate-spin" />
        Please wait
      </Button>
      <Button variant="outline" disabled>
        <LoaderIcon className="animate-spin" />
        Loading...
      </Button>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="destructive">
      <TrashIcon data-icon="inline-start" />
      Delete Account
    </Button>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "As Link (asChild)",
  render: () => <Button asChild variant="link">
      <a href="https://example.com">Visit Example</a>
    </Button>
}`,...m.parameters?.docs?.source}}};const A=["Default","AllVariants","AllSizes","IconSizes","WithIcon","Loading","Disabled","Destructive","AsLink"];export{r as AllSizes,s as AllVariants,m as AsLink,a as Default,d as Destructive,l as Disabled,i as IconSizes,c as Loading,o as WithIcon,A as __namedExportsOrder,D as default};
