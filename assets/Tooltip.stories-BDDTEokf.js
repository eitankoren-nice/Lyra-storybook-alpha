import{j as o}from"./jsx-runtime-u17CrQMm.js";import{T as s,a,b as l,c}from"./tooltip-DZx6cnAE.js";import{B as p}from"./button-BXqy1VoR.js";import{P as d}from"./plus-C9iFWSqX.js";import{I as m}from"./info-CHtFsJeR.js";import"./iframe-DQFjSlNe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-BXjqDAmY.js";import"./index-z6BhDnS6.js";import"./index-DMGC-ohM.js";import"./index-COG-14iT.js";import"./index-BpIsosLX.js";import"./index-BH1e72rj.js";import"./index-UkCzX0Jp.js";import"./index-Bf-YUqJM.js";import"./index-CrGZRD4o.js";import"./index-ByxLMRuu.js";import"./index-B0JKHVSP.js";import"./index-t4iTqBom.js";import"./index-Y9Y8SifL.js";import"./index-BUfa1wMM.js";import"./index-LHNt3CwB.js";import"./createLucideIcon-l8_twk-U.js";const E={title:"Components/Tooltip",parameters:{layout:"centered"},decorators:[e=>o.jsx(c,{children:o.jsx(e,{})})]},t={render:()=>o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(p,{variant:"outline",children:"Hover me"})}),o.jsx(l,{children:o.jsx("p",{children:"Add to library"})})]})},n={name:"On Icon Button",render:()=>o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(p,{variant:"outline",size:"icon",children:o.jsx(d,{})})}),o.jsx(l,{children:o.jsx("p",{children:"Add new item"})})]})},r={render:()=>o.jsx("div",{className:"flex gap-4",children:["top","right","bottom","left"].map(e=>o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(p,{variant:"outline",className:"capitalize",children:e})}),o.jsx(l,{side:e,children:o.jsxs("p",{children:["Tooltip on ",e]})})]},e))})},i={name:"Inline Help Icon",render:()=>o.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[o.jsx("span",{children:"API Key"}),o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(m,{className:"size-3.5 text-muted-foreground"})}),o.jsx(l,{children:o.jsx("p",{children:"Your unique API key for authentication."})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "On Icon Button",
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon">
          <PlusIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add new item</p>
      </TooltipContent>
    </Tooltip>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["top", "right", "bottom", "left"] as const).map(side => <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </TooltipTrigger>
          <TooltipContent side={side}>
            <p>Tooltip on {side}</p>
          </TooltipContent>
        </Tooltip>)}
    </div>
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Inline Help Icon",
  render: () => <div className="flex items-center gap-1 text-sm">
      <span>API Key</span>
      <Tooltip>
        <TooltipTrigger asChild>
          <InfoIcon className="size-3.5 text-muted-foreground" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Your unique API key for authentication.</p>
        </TooltipContent>
      </Tooltip>
    </div>
}`,...i.parameters?.docs?.source}}};const K=["Default","OnIconButton","Sides","WithInlineIcon"];export{t as Default,n as OnIconButton,r as Sides,i as WithInlineIcon,K as __namedExportsOrder,E as default};
