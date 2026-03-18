import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-2OQw23Jk.js";import{c as U}from"./utils-BQHNewu7.js";import{u as W,c as H}from"./index-CxcMapXh.js";import{u as R}from"./index-1hLCTjpC.js";import{c as q}from"./index-BZ3o8y06.js";import{u as O}from"./index-C664G1zq.js";import{u as G}from"./index-D18q1sh2.js";import{P as _}from"./index-jDDBY0BM.js";import{L as j}from"./label-lN6LXaIs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BaqHVo_4.js";import"./index-X-5xaZIZ.js";import"./index-ZkPJRuOb.js";var N="Switch",[V]=q(N),[X,$]=V(N),D=i.forwardRef((a,s)=>{const{__scopeSwitch:t,name:n,checked:r,defaultChecked:y,required:l,disabled:o,value:u="on",onCheckedChange:C,form:d,...z}=a,[m,p]=i.useState(null),P=R(s,f=>p(f)),E=i.useRef(!1),L=m?d||!!m.closest("form"):!0,[h,B]=W({prop:r,defaultProp:y??!1,onChange:C,caller:N});return e.jsxs(X,{scope:t,checked:h,disabled:o,children:[e.jsx(_.button,{type:"button",role:"switch","aria-checked":h,"aria-required":l,"data-state":I(h),"data-disabled":o?"":void 0,disabled:o,value:u,...z,ref:P,onClick:H(a.onClick,f=>{B(A=>!A),L&&(E.current=f.isPropagationStopped(),E.current||f.stopPropagation())})}),L&&e.jsx(T,{control:m,bubbles:!E.current,name:n,value:u,checked:h,required:l,disabled:o,form:d,style:{transform:"translateX(-100%)"}})]})});D.displayName=N;var F="SwitchThumb",M=i.forwardRef((a,s)=>{const{__scopeSwitch:t,...n}=a,r=$(F,t);return e.jsx(_.span,{"data-state":I(r.checked),"data-disabled":r.disabled?"":void 0,...n,ref:s})});M.displayName=F;var J="SwitchBubbleInput",T=i.forwardRef(({__scopeSwitch:a,control:s,checked:t,bubbles:n=!0,...r},y)=>{const l=i.useRef(null),o=R(l,y),u=O(t),C=G(s);return i.useEffect(()=>{const d=l.current;if(!d)return;const z=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(z,"checked").set;if(u!==t&&p){const P=new Event("click",{bubbles:n});p.call(d,t),d.dispatchEvent(P)}},[u,t,n]),e.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:t,...r,tabIndex:-1,ref:o,style:{...r.style,...C,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});T.displayName=J;function I(a){return a?"checked":"unchecked"}var K=D,Q=M;function c({className:a,size:s="default",...t}){return e.jsx(K,{"data-slot":"switch","data-size":s,className:U("peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",a),...t,children:e.jsx(Q,{"data-slot":"switch-thumb",className:"pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"})})}c.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "default"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"default"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};const me={title:"Components/Inputs/Switch",component:c,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["default","sm"]}}},b={},g={name:"With Label",render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{id:"airplane-mode"}),e.jsx(j,{htmlFor:"airplane-mode",children:"Airplane Mode"})]})},v={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{size:"sm",id:"sm"}),e.jsx(j,{htmlFor:"sm",children:"Small"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{size:"default",id:"default"}),e.jsx(j,{htmlFor:"default",children:"Default"})]})]})},x={args:{checked:!0}},w={args:{disabled:!0}},k={name:"Disabled Checked",args:{disabled:!0,checked:!0}},S={name:"Settings Panel",render:()=>e.jsx("div",{className:"w-full max-w-sm space-y-4",children:[{id:"notifications",label:"Push Notifications",desc:"Receive push notifications on your device"},{id:"emails",label:"Marketing Emails",desc:"Receive emails about new products and features"},{id:"updates",label:"Product Updates",desc:"Get notified when we ship updates"}].map(a=>e.jsxs("div",{className:"flex items-center justify-between gap-4 rounded-lg border border-border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(j,{htmlFor:a.id,children:a.label}),e.jsx("p",{className:"text-sm text-muted-foreground",children:a.desc})]}),e.jsx(c,{id:a.id})]},a.id))})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{}",...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="flex items-center gap-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex items-center gap-2">
        <Switch size="sm" id="sm" />
        <Label htmlFor="sm">Small</Label>
      </div>
      <div className="flex items-center gap-2">
        <Switch size="default" id="default" />
        <Label htmlFor="default">Default</Label>
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Disabled Checked",
  args: {
    disabled: true,
    checked: true
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "Settings Panel",
  render: () => <div className="w-full max-w-sm space-y-4">
      {[{
      id: "notifications",
      label: "Push Notifications",
      desc: "Receive push notifications on your device"
    }, {
      id: "emails",
      label: "Marketing Emails",
      desc: "Receive emails about new products and features"
    }, {
      id: "updates",
      label: "Product Updates",
      desc: "Get notified when we ship updates"
    }].map(item => <div key={item.id} className="flex items-center justify-between gap-4 rounded-lg border border-border p-4">
          <div className="space-y-0.5">
            <Label htmlFor={item.id}>{item.label}</Label>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
          <Switch id={item.id} />
        </div>)}
    </div>
}`,...S.parameters?.docs?.source}}};const pe=["Default","WithLabel","Sizes","Checked","Disabled","DisabledChecked","SettingsExample"];export{x as Checked,b as Default,w as Disabled,k as DisabledChecked,S as SettingsExample,v as Sizes,g as WithLabel,pe as __namedExportsOrder,me as default};
