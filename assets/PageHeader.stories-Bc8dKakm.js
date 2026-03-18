import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as d}from"./button-Day0oUCs.js";import"./iframe-V4Wu0_eO.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./utils-BQHNewu7.js";import"./index-0CtgsbTt.js";function n({title:c,description:o,primaryAction:i}){return e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h1",{className:"text-2xl font-semibold tracking-tight text-foreground",children:c}),o&&e.jsx("p",{className:"max-w-2xl text-sm text-muted-foreground",children:o})]}),i&&e.jsx(d,{onClick:i.onClick,children:i.label})]})}n.displayName="PageHeader";n.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},primaryAction:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  label: string
  onClick?: () => void
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:""}}};const f={title:"Patterns/PageHeader",component:n,parameters:{layout:"padded"}},r={args:{title:"Team Members",description:"Manage your team members and their account permissions.",primaryAction:{label:"Add Member"}}},t={args:{title:"Dashboard",primaryAction:{label:"Export"}}},a={args:{title:"Application Performance Monitoring & Observability Dashboard",description:"View real-time metrics, traces, and logs across all of your distributed services and infrastructure components in a single unified dashboard.",primaryAction:{label:"Configure Alerts"}}},s={args:{title:"Audit Logs",description:"View system activity and security events."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Team Members",
    description: "Manage your team members and their account permissions.",
    primaryAction: {
      label: "Add Member"
    }
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Dashboard",
    primaryAction: {
      label: "Export"
    }
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Application Performance Monitoring & Observability Dashboard",
    description: "View real-time metrics, traces, and logs across all of your distributed services and infrastructure components in a single unified dashboard.",
    primaryAction: {
      label: "Configure Alerts"
    }
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Audit Logs",
    description: "View system activity and security events."
  }
}`,...s.parameters?.docs?.source}}};const x=["Default","WithoutDescription","LongContent","NoAction"];export{r as Default,a as LongContent,s as NoAction,t as WithoutDescription,x as __namedExportsOrder,f as default};
