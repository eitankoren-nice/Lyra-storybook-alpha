import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-CmZ5uWiA.js";import{c as u}from"./utils-BQHNewu7.js";import{P as f}from"./index-CQ6A4TlU.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DrPyrK_L.js";import"./index-CQ0hFChn.js";import"./index-8a4LLvRX.js";var h="Separator",m="horizontal",N=["horizontal","vertical"],d=v.forwardRef((a,t)=>{const{decorative:n,orientation:s=m,...p}=a,c=j(s)?s:m,x=n?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return e.jsx(f.div,{"data-orientation":c,...x,...p,ref:t})});d.displayName=h;function j(a){return N.includes(a)}var g=d;function r({className:a,orientation:t="horizontal",decorative:n=!0,...s}){return e.jsx(g,{"data-slot":"separator",decorative:n,orientation:t,className:u("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",a),...s})}r.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const A={title:"Components/Separator",component:r,argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},decorative:{control:"boolean"}}},i={render:()=>e.jsxs("div",{className:"w-full max-w-sm",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Radix Primitives"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"An open-source UI component library."})]}),e.jsx(r,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center gap-4 text-sm",children:[e.jsx("span",{children:"Blog"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Docs"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Source"})]})]})},o={render:()=>e.jsxs("div",{className:"flex h-10 items-center gap-4 text-sm",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Item 2"}),e.jsx(r,{orientation:"vertical"}),e.jsx("span",{children:"Item 3"})]})},l={name:"In List",render:()=>e.jsx("div",{className:"w-full max-w-sm",children:["Profile","Settings","Billing","Notifications"].map((a,t,n)=>e.jsxs("div",{children:[e.jsx("div",{className:"py-3 text-sm",children:a}),t<n.length-1&&e.jsx(r,{})]},a))})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex h-10 items-center gap-4 text-sm">
      <span>Item 1</span>
      <Separator orientation="vertical" />
      <span>Item 2</span>
      <Separator orientation="vertical" />
      <span>Item 3</span>
    </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "In List",
  render: () => <div className="w-full max-w-sm">
      {["Profile", "Settings", "Billing", "Notifications"].map((item, index, arr) => <div key={item}>
            <div className="py-3 text-sm">{item}</div>
            {index < arr.length - 1 && <Separator />}
          </div>)}
    </div>
}`,...l.parameters?.docs?.source}}};const T=["Horizontal","Vertical","InList"];export{i as Horizontal,l as InList,o as Vertical,T as __namedExportsOrder,A as default};
