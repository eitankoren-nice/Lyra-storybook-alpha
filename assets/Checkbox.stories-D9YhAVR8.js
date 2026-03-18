import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as m}from"./checkbox-EZIjqyWk.js";import{L as d}from"./label-lN6LXaIs.js";import"./iframe-2OQw23Jk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./check-DTtQ7thv.js";import"./createLucideIcon-zMYeAore.js";import"./index-1hLCTjpC.js";import"./index-BZ3o8y06.js";import"./index-CxcMapXh.js";import"./index-BaqHVo_4.js";import"./index-C664G1zq.js";import"./index-D18q1sh2.js";import"./index-EtbW2nTX.js";import"./index-jDDBY0BM.js";import"./index-X-5xaZIZ.js";import"./index-ZkPJRuOb.js";const F={title:"Components/Inputs/Checkbox",component:m,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},r={},a={name:"With Label",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:"terms"}),e.jsx(d,{htmlFor:"terms",children:"Accept terms and conditions"})]})},t={args:{checked:!0}},o={args:{disabled:!0}},n={name:"Disabled Checked",args:{disabled:!0,checked:!0}},c={name:"Invalid State",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:"terms-invalid","aria-invalid":"true"}),e.jsx(d,{htmlFor:"terms-invalid",children:"Accept terms and conditions"})]}),e.jsx("p",{className:"text-sm text-destructive",children:"You must accept the terms."})]})},i={name:"Multiple Options",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:"Select your interests"}),["Design","Development","Marketing","Analytics"].map(s=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:s.toLowerCase()}),e.jsx(d,{htmlFor:s.toLowerCase(),children:s})]},s))]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="flex items-center gap-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Disabled Checked",
  args: {
    disabled: true,
    checked: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Invalid State",
  render: () => <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Checkbox id="terms-invalid" aria-invalid="true" />
        <Label htmlFor="terms-invalid">Accept terms and conditions</Label>
      </div>
      <p className="text-sm text-destructive">You must accept the terms.</p>
    </div>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Multiple Options",
  render: () => <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">
        Select your interests
      </p>
      {["Design", "Development", "Marketing", "Analytics"].map(item => <div key={item} className="flex items-center gap-2">
          <Checkbox id={item.toLowerCase()} />
          <Label htmlFor={item.toLowerCase()}>{item}</Label>
        </div>)}
    </div>
}`,...i.parameters?.docs?.source}}};const M=["Default","WithLabel","Checked","Disabled","DisabledChecked","Invalid","MultipleCheckboxes"];export{t as Checked,r as Default,o as Disabled,n as DisabledChecked,c as Invalid,i as MultipleCheckboxes,a as WithLabel,M as __namedExportsOrder,F as default};
