import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as a}from"./textarea-C9ZzcQbV.js";import{L as d}from"./label-9LTXHiBv.js";import"./iframe-DE1cbr3P.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-C3pdZAOa.js";import"./index-BWnlG_0A.js";import"./index-CKHGrub8.js";import"./index-D8y5YKQA.js";const v={title:"Components/Inputs/Textarea",component:a,args:{placeholder:"Type your message here...",disabled:!1},argTypes:{disabled:{control:"boolean"}}},r={},s={name:"With Label",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(d,{htmlFor:"message",children:"Your Message"}),e.jsx(a,{id:"message",placeholder:"Type your message here..."})]})},t={args:{disabled:!0,placeholder:"Disabled textarea"}},l={name:"Invalid State",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(d,{htmlFor:"bio",children:"Bio"}),e.jsx(a,{id:"bio","aria-invalid":"true",defaultValue:"x"}),e.jsx("p",{className:"text-sm text-destructive",children:"Bio must be at least 10 characters."})]})},o={name:"With Helper Text",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(d,{htmlFor:"feedback",children:"Feedback"}),e.jsx(a,{id:"feedback",placeholder:"Tell us what you think..."}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Your feedback helps us improve."})]})},i={name:"With Default Value",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(d,{htmlFor:"note",children:"Note"}),e.jsx(a,{id:"note",defaultValue:"This textarea has a default value. The field-sizing-content CSS property allows it to auto-resize based on content."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="message">Your Message</Label>
      <Textarea id="message" placeholder="Type your message here..." />
    </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled textarea"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Invalid State",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="bio">Bio</Label>
      <Textarea id="bio" aria-invalid="true" defaultValue="x" />
      <p className="text-sm text-destructive">
        Bio must be at least 10 characters.
      </p>
    </div>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Helper Text",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="feedback">Feedback</Label>
      <Textarea id="feedback" placeholder="Tell us what you think..." />
      <p className="text-sm text-muted-foreground">
        Your feedback helps us improve.
      </p>
    </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Default Value",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="note">Note</Label>
      <Textarea id="note" defaultValue="This textarea has a default value. The field-sizing-content CSS property allows it to auto-resize based on content." />
    </div>
}`,...i.parameters?.docs?.source}}};const T=["Default","WithLabel","Disabled","Invalid","WithHelperText","WithDefaultValue"];export{r as Default,t as Disabled,l as Invalid,i as WithDefaultValue,o as WithHelperText,s as WithLabel,T as __namedExportsOrder,v as default};
