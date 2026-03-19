import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as a}from"./badge-BEEu0qb0.js";import"./iframe-CmZ5uWiA.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-8a4LLvRX.js";const B={title:"Components/Badge",component:a,args:{children:"Badge",variant:"default"},argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline","ghost","link"]},asChild:{table:{disable:!0}}}},n={},r={name:"All Variants",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"destructive",children:"Destructive"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"link",children:"Link"})]})},t={name:"Status Badges",render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx(a,{variant:"default",children:"Active"}),e.jsx(a,{variant:"secondary",children:"Pending"}),e.jsx(a,{variant:"destructive",children:"Error"}),e.jsx(a,{variant:"outline",children:"Draft"})]})},s={name:"As Link (asChild)",render:()=>e.jsx(a,{asChild:!0,variant:"link",children:e.jsx("a",{href:"#",children:"View details"})})},i={name:"With Icons",render:()=>{const{CheckCircleIcon:c,AlertCircleIcon:l,ClockIcon:o}=require("lucide-react");return e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsxs(a,{variant:"default",children:[e.jsx(c,{"data-icon":"inline-start"}),"Verified"]}),e.jsxs(a,{variant:"destructive",children:[e.jsx(l,{"data-icon":"inline-start"}),"Failed"]}),e.jsxs(a,{variant:"secondary",children:[e.jsx(o,{"data-icon":"inline-start"}),"Pending"]})]})}},d={name:"In Context",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"Status:"}),e.jsx(a,{variant:"default",children:"Active"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-medium",children:"Tags:"}),e.jsx(a,{variant:"secondary",children:"React"}),e.jsx(a,{variant:"secondary",children:"TypeScript"}),e.jsx(a,{variant:"secondary",children:"Tailwind"})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "All Variants",
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Status Badges",
  render: () => <div className="flex flex-wrap items-center gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="destructive">Error</Badge>
      <Badge variant="outline">Draft</Badge>
    </div>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "As Link (asChild)",
  render: () => <Badge asChild variant="link">
      <a href="#">View details</a>
    </Badge>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Icons",
  render: () => {
    const {
      CheckCircleIcon,
      AlertCircleIcon,
      ClockIcon
    } = require("lucide-react");
    return <div className="flex flex-wrap items-center gap-2">
        <Badge variant="default">
          <CheckCircleIcon data-icon="inline-start" />
          Verified
        </Badge>
        <Badge variant="destructive">
          <AlertCircleIcon data-icon="inline-start" />
          Failed
        </Badge>
        <Badge variant="secondary">
          <ClockIcon data-icon="inline-start" />
          Pending
        </Badge>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "In Context",
  render: () => <div className="space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Status:</span>
        <Badge variant="default">Active</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Tags:</span>
        <Badge variant="secondary">React</Badge>
        <Badge variant="secondary">TypeScript</Badge>
        <Badge variant="secondary">Tailwind</Badge>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const f=["Default","AllVariants","StatusBadges","AsLink","WithIcon","InContext"];export{r as AllVariants,s as AsLink,n as Default,d as InContext,t as StatusBadges,i as WithIcon,f as __namedExportsOrder,B as default};
