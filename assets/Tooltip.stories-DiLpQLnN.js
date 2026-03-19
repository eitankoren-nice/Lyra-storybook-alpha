import{j as o}from"./jsx-runtime-u17CrQMm.js";import{T as s,a,b as l,c}from"./tooltip-D9ZNXNW2.js";import{B as p}from"./button-CR7DX97M.js";import{P as d}from"./plus-_qOFmRHw.js";import{I as m}from"./info-BpfRVvzK.js";import"./iframe-DnETVZJP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-D1Wwc4Ls.js";import"./index-CLZ7_oxF.js";import"./index-DSoy0_Dk.js";import"./index-D5prXcjY.js";import"./index-DIr13BBP.js";import"./index-TvJ2bEeG.js";import"./index-DwGs9Epf.js";import"./index-Kab2VDxh.js";import"./index-OlCSfi9a.js";import"./index-DZrhUfUk.js";import"./index-BMJluI7x.js";import"./index-BI14ANg9.js";import"./index-DLmjT3BM.js";import"./index-CKPbWoA-.js";import"./index-LHNt3CwB.js";import"./createLucideIcon-CXS1OEu6.js";const E={title:"Components/Tooltip",parameters:{layout:"centered"},decorators:[e=>o.jsx(c,{children:o.jsx(e,{})})]},t={render:()=>o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(p,{variant:"outline",children:"Hover me"})}),o.jsx(l,{children:o.jsx("p",{children:"Add to library"})})]})},n={name:"On Icon Button",render:()=>o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(p,{variant:"outline",size:"icon",children:o.jsx(d,{})})}),o.jsx(l,{children:o.jsx("p",{children:"Add new item"})})]})},r={render:()=>o.jsx("div",{className:"flex gap-4",children:["top","right","bottom","left"].map(e=>o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(p,{variant:"outline",className:"capitalize",children:e})}),o.jsx(l,{side:e,children:o.jsxs("p",{children:["Tooltip on ",e]})})]},e))})},i={name:"Inline Help Icon",render:()=>o.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[o.jsx("span",{children:"API Key"}),o.jsxs(s,{children:[o.jsx(a,{asChild:!0,children:o.jsx(m,{className:"size-3.5 text-muted-foreground"})}),o.jsx(l,{children:o.jsx("p",{children:"Your unique API key for authentication."})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
