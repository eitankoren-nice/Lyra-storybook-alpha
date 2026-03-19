import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as m}from"./checkbox-C3GxtAGf.js";import{L as d}from"./label-DI5Ue-X5.js";import"./iframe-DQFjSlNe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./check-BAHUCrue.js";import"./createLucideIcon-l8_twk-U.js";import"./index-DMGC-ohM.js";import"./index-COG-14iT.js";import"./index-BXjqDAmY.js";import"./index-z6BhDnS6.js";import"./index-DxflxE-g.js";import"./index-t4iTqBom.js";import"./index-Y9Y8SifL.js";import"./index-BH1e72rj.js";import"./index-UkCzX0Jp.js";import"./index-Bf-YUqJM.js";const F={title:"Components/Checkbox",component:m,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},r={},a={name:"With Label",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:"terms"}),e.jsx(d,{htmlFor:"terms",children:"Accept terms and conditions"})]})},t={args:{checked:!0}},o={args:{disabled:!0}},n={name:"Disabled Checked",args:{disabled:!0,checked:!0}},c={name:"Invalid State",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:"terms-invalid","aria-invalid":"true"}),e.jsx(d,{htmlFor:"terms-invalid",children:"Accept terms and conditions"})]}),e.jsx("p",{className:"text-sm text-destructive",children:"You must accept the terms."})]})},i={name:"Multiple Options",render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm font-medium text-foreground",children:"Select your interests"}),["Design","Development","Marketing","Analytics"].map(s=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{id:s.toLowerCase()}),e.jsx(d,{htmlFor:s.toLowerCase(),children:s})]},s))]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
