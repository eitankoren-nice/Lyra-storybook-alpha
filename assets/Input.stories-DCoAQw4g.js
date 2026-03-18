import{j as e}from"./jsx-runtime-u17CrQMm.js";import{I as a}from"./input-BWGvPssP.js";import{L as r}from"./label-B8bcHfmC.js";import"./iframe-CSTJd8pR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-C6RaBJWp.js";import"./index-Bbqrm6GA.js";import"./index-Bi6xzWi3.js";import"./index-CLgKPshB.js";const N={title:"Components/Inputs/Input",component:a,args:{type:"text",placeholder:"Enter text...",disabled:!1},argTypes:{type:{control:"select",options:["text","email","password","number","search","tel","url"]},disabled:{control:"boolean"}}},l={},s={name:"With Label",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"email",children:"Email"}),e.jsx(a,{type:"email",id:"email",placeholder:"name@example.com"})]})},i={args:{disabled:!0,placeholder:"Disabled input"}},t={name:"File Input",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"picture",children:"Picture"}),e.jsx(a,{id:"picture",type:"file"})]})},n={name:"With Helper Text",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"email-help",children:"Email"}),e.jsx(a,{type:"email",id:"email-help",placeholder:"name@example.com"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"We'll never share your email."})]})},m={name:"Invalid State",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-1.5",children:[e.jsx(r,{htmlFor:"email-invalid",children:"Email"}),e.jsx(a,{type:"email",id:"email-invalid",placeholder:"name@example.com","aria-invalid":"true",defaultValue:"not-an-email"}),e.jsx("p",{className:"text-sm text-destructive",children:"Please enter a valid email address."})]})},d={name:"Input Types",render:()=>e.jsxs("div",{className:"grid w-full max-w-sm gap-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{children:"Text"}),e.jsx(a,{type:"text",placeholder:"Text input"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{children:"Email"}),e.jsx(a,{type:"email",placeholder:"Email input"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{children:"Password"}),e.jsx(a,{type:"password",placeholder:"Password input"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{children:"Number"}),e.jsx(a,{type:"number",placeholder:"Number input"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(r,{children:"Search"}),e.jsx(a,{type:"search",placeholder:"Search..."})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"{}",...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="name@example.com" />
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "File Input",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "With Helper Text",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-help">Email</Label>
      <Input type="email" id="email-help" placeholder="name@example.com" />
      <p className="text-sm text-muted-foreground">
        We&apos;ll never share your email.
      </p>
    </div>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Invalid State",
  render: () => <div className="grid w-full max-w-sm gap-1.5">
      <Label htmlFor="email-invalid">Email</Label>
      <Input type="email" id="email-invalid" placeholder="name@example.com" aria-invalid="true" defaultValue="not-an-email" />
      <p className="text-sm text-destructive">
        Please enter a valid email address.
      </p>
    </div>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Input Types",
  render: () => <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label>Text</Label>
        <Input type="text" placeholder="Text input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Email</Label>
        <Input type="email" placeholder="Email input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Password</Label>
        <Input type="password" placeholder="Password input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Number</Label>
        <Input type="number" placeholder="Number input" />
      </div>
      <div className="grid gap-1.5">
        <Label>Search</Label>
        <Input type="search" placeholder="Search..." />
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const w=["Default","WithLabel","Disabled","File","WithHelperText","Invalid","InputTypes"];export{l as Default,i as Disabled,t as File,d as InputTypes,m as Invalid,n as WithHelperText,s as WithLabel,w as __namedExportsOrder,N as default};
