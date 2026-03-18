import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-2OQw23Jk.js";import{c as A}from"./index-LHNt3CwB.js";import{c as u}from"./utils-BQHNewu7.js";import{I as p}from"./info-C9y9HChc.js";import{c as m}from"./createLucideIcon-zMYeAore.js";import{T as h}from"./triangle-alert-FbaHUNtM.js";import"./preload-helper-PPVm8Dsz.js";const f=A("group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-card text-card-foreground",destructive:"bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"}},defaultVariants:{variant:"default"}});function r({className:s,variant:a,...g}){return e.jsx("div",{"data-slot":"alert",role:"alert",className:u(f({variant:a}),s),...g})}function n({className:s,...a}){return e.jsx("div",{"data-slot":"alert-title",className:u("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",s),...a})}function t({className:s,...a}){return e.jsx("div",{"data-slot":"alert-description",className:u("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",s),...a})}r.__docgenInfo={description:"",methods:[],displayName:"Alert"};n.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};t.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const v=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],x=m("circle-alert",v);const j=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],y=m("circle-check-big",j),Y={title:"Components/Feedback/Alert",component:r,argTypes:{variant:{control:"select",options:["default","destructive"]}}},i={render:()=>e.jsxs(r,{className:"max-w-lg",children:[e.jsx(p,{}),e.jsx(n,{children:"Heads up!"}),e.jsx(t,{children:"You can add components to your app using the cli."})]})},l={render:()=>e.jsxs(r,{variant:"destructive",className:"max-w-lg",children:[e.jsx(x,{}),e.jsx(n,{children:"Error"}),e.jsx(t,{children:"Your session has expired. Please log in again to continue."})]})},o={name:"All Variations",render:()=>e.jsxs("div",{className:"flex max-w-lg flex-col gap-4",children:[e.jsxs(r,{children:[e.jsx(p,{}),e.jsx(n,{children:"Info"}),e.jsx(t,{children:"This is an informational alert message."})]}),e.jsxs(r,{children:[e.jsx(y,{}),e.jsx(n,{children:"Success"}),e.jsx(t,{children:"Your changes have been saved successfully."})]}),e.jsxs(r,{children:[e.jsx(h,{}),e.jsx(n,{children:"Warning"}),e.jsx(t,{children:"Your account is nearing its storage limit."})]}),e.jsxs(r,{variant:"destructive",children:[e.jsx(x,{}),e.jsx(n,{children:"Error"}),e.jsx(t,{children:"Something went wrong. Please try again later."})]})]})},c={name:"Without Icon",render:()=>e.jsxs(r,{className:"max-w-lg",children:[e.jsx(n,{children:"Note"}),e.jsx(t,{children:"Alerts can be used without icons as well."})]})},d={name:"Description Only",render:()=>e.jsxs(r,{className:"max-w-lg",children:[e.jsx(p,{}),e.jsx(t,{children:"You can use alerts with just a description and no title."})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="max-w-lg">
      <InfoIcon />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="max-w-lg">
      <AlertCircleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again to continue.
      </AlertDescription>
    </Alert>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "All Variations",
  render: () => <div className="flex max-w-lg flex-col gap-4">
      <Alert>
        <InfoIcon />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>
          This is an informational alert message.
        </AlertDescription>
      </Alert>

      <Alert>
        <CheckCircleIcon />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </Alert>

      <Alert>
        <AlertTriangleIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Your account is nearing its storage limit.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again later.
        </AlertDescription>
      </Alert>
    </div>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Without Icon",
  render: () => <Alert className="max-w-lg">
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        Alerts can be used without icons as well.
      </AlertDescription>
    </Alert>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "Description Only",
  render: () => <Alert className="max-w-lg">
      <InfoIcon />
      <AlertDescription>
        You can use alerts with just a description and no title.
      </AlertDescription>
    </Alert>
}`,...d.parameters?.docs?.source}}};const S=["Default","Destructive","AllVariations","WithoutIcon","DescriptionOnly"];export{o as AllVariations,i as Default,d as DescriptionOnly,l as Destructive,c as WithoutIcon,S as __namedExportsOrder,Y as default};
