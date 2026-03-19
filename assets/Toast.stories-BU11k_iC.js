import{j as e}from"./jsx-runtime-u17CrQMm.js";import{t as n,T as d}from"./sonner-DPIjWek3.js";import{B as r}from"./button-CR7DX97M.js";import"./iframe-DnETVZJP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DwGs9Epf.js";import"./index-Kab2VDxh.js";import"./createLucideIcon-CXS1OEu6.js";import"./triangle-alert-DUmsGtbY.js";import"./info-BpfRVvzK.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-DSoy0_Dk.js";const E={title:"Components/Toast",parameters:{layout:"centered"},decorators:[u=>e.jsxs(e.Fragment,{children:[e.jsx(u,{}),e.jsx(d,{})]})]},t={render:()=>e.jsx(r,{variant:"outline",onClick:()=>n("Event has been created."),children:"Show Toast"})},o={name:"With Description",render:()=>e.jsx(r,{variant:"outline",onClick:()=>n("Event has been created",{description:"Sunday, December 03, 2023 at 9:00 AM"}),children:"Show Toast"})},a={render:()=>e.jsx(r,{variant:"outline",onClick:()=>n.success("Profile updated successfully!"),children:"Success Toast"})},s={render:()=>e.jsx(r,{variant:"outline",onClick:()=>n.error("Something went wrong",{description:"Please try again later."}),children:"Error Toast"})},i={name:"With Action",render:()=>e.jsx(r,{variant:"outline",onClick:()=>n("File deleted",{action:{label:"Undo",onClick:()=>n("File restored")}}),children:"With Action"})},c={render:()=>e.jsx(r,{variant:"outline",onClick:()=>{n.promise(new globalThis.Promise(u=>setTimeout(u,2e3)),{loading:"Loading...",success:"Data loaded successfully!",error:"Error loading data"})},children:"Promise Toast"})},l={name:"All Types",render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{variant:"outline",onClick:()=>n("Default toast message"),children:"Default"}),e.jsx(r,{variant:"outline",onClick:()=>n.success("Success!"),children:"Success"}),e.jsx(r,{variant:"outline",onClick:()=>n.error("Error!"),children:"Error"}),e.jsx(r,{variant:"outline",onClick:()=>n.warning("Warning!"),children:"Warning"}),e.jsx(r,{variant:"outline",onClick:()=>n.info("Info message"),children:"Info"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast("Event has been created.")}>
      Show Toast
    </Button>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Description",
  render: () => <Button variant="outline" onClick={() => toast("Event has been created", {
    description: "Sunday, December 03, 2023 at 9:00 AM"
  })}>
      Show Toast
    </Button>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast.success("Profile updated successfully!")}>
      Success Toast
    </Button>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => toast.error("Something went wrong", {
    description: "Please try again later."
  })}>
      Error Toast
    </Button>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Action",
  render: () => <Button variant="outline" onClick={() => toast("File deleted", {
    action: {
      label: "Undo",
      onClick: () => toast("File restored")
    }
  })}>
      With Action
    </Button>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="outline" onClick={() => {
    toast.promise(new globalThis.Promise(resolve => setTimeout(resolve, 2000)), {
      loading: "Loading...",
      success: "Data loaded successfully!",
      error: "Error loading data"
    });
  }}>
      Promise Toast
    </Button>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "All Types",
  render: () => <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Default toast message")}>
        Default
      </Button>
      <Button variant="outline" onClick={() => toast.success("Success!")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toast.error("Error!")}>
        Error
      </Button>
      <Button variant="outline" onClick={() => toast.warning("Warning!")}>
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.info("Info message")}>
        Info
      </Button>
    </div>
}`,...l.parameters?.docs?.source}}};const w=["Default","WithDescription","Success","Error","WithAction","Promise","AllTypes"];export{l as AllTypes,t as Default,s as Error,c as Promise,a as Success,i as WithAction,o as WithDescription,w as __namedExportsOrder,E as default};
