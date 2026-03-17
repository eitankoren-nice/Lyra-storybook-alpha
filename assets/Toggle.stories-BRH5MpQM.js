import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as P,R as u}from"./iframe-BZO_6OJb.js";import{c as K}from"./index-LHNt3CwB.js";import{c as N}from"./utils-BQHNewu7.js";import{u as M,c as Q}from"./index-DoGYz5kB.js";import{P as C}from"./index-_KBOoKNm.js";import{c as X}from"./index-CYGQtEJH.js";import{I as Y,c as $,R as Z}from"./index-DruSp1Ky.js";import{u as ee}from"./index-DBoxrDxv.js";import{c as v}from"./createLucideIcon-DxSL0fpQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQeh9k9W.js";import"./index-5Ppg89rs.js";import"./index-DhA_qP6J.js";import"./index-D6t_dSs-.js";import"./index-CpYbQVgf.js";import"./index-DE_suUiQ.js";var E="Toggle",V=P.forwardRef((o,a)=>{const{pressed:t,defaultPressed:r,onPressedChange:l,...n}=o,[s,i]=M({prop:t,onChange:l,defaultProp:r??!1,caller:E});return e.jsx(C.button,{type:"button","aria-pressed":s,"data-state":s?"on":"off","data-disabled":o.disabled?"":void 0,...n,ref:a,onClick:Q(o.onClick,()=>{o.disabled||i(!s)})})});V.displayName=E;var oe=V,c="ToggleGroup",[H]=X(c,[$]),B=$(),R=u.forwardRef((o,a)=>{const{type:t,...r}=o;if(t==="single"){const l=r;return e.jsx(re,{...l,ref:a})}if(t==="multiple"){const l=r;return e.jsx(ae,{...l,ref:a})}throw new Error(`Missing prop \`type\` expected on \`${c}\``)});R.displayName=c;var[D,F]=H(c),re=u.forwardRef((o,a)=>{const{value:t,defaultValue:r,onValueChange:l=()=>{},...n}=o,[s,i]=M({prop:t,defaultProp:r??"",onChange:l,caller:c});return e.jsx(D,{scope:o.__scopeToggleGroup,type:"single",value:u.useMemo(()=>s?[s]:[],[s]),onItemActivate:i,onItemDeactivate:u.useCallback(()=>i(""),[i]),children:e.jsx(W,{...n,ref:a})})}),ae=u.forwardRef((o,a)=>{const{value:t,defaultValue:r,onValueChange:l=()=>{},...n}=o,[s,i]=M({prop:t,defaultProp:r??[],onChange:l,caller:c}),p=u.useCallback(f=>i((x=[])=>[...x,f]),[i]),k=u.useCallback(f=>i((x=[])=>x.filter(J=>J!==f)),[i]);return e.jsx(D,{scope:o.__scopeToggleGroup,type:"multiple",value:s,onItemActivate:p,onItemDeactivate:k,children:e.jsx(W,{...n,ref:a})})});R.displayName=c;var[te,ne]=H(c),W=u.forwardRef((o,a)=>{const{__scopeToggleGroup:t,disabled:r=!1,rovingFocus:l=!0,orientation:n,dir:s,loop:i=!0,...p}=o,k=B(t),f=ee(s),x={role:"group",dir:f,...p};return e.jsx(te,{scope:t,rovingFocus:l,disabled:r,children:l?e.jsx(Z,{asChild:!0,...k,orientation:n,dir:f,loop:i,children:e.jsx(C.div,{...x,ref:a})}):e.jsx(C.div,{...x,ref:a})})}),z="ToggleGroupItem",q=u.forwardRef((o,a)=>{const t=F(z,o.__scopeToggleGroup),r=ne(z,o.__scopeToggleGroup),l=B(o.__scopeToggleGroup),n=t.value.includes(o.value),s=r.disabled||o.disabled,i={...o,pressed:n,disabled:s},p=u.useRef(null);return r.rovingFocus?e.jsx(Y,{asChild:!0,...l,focusable:!s,active:n,ref:p,children:e.jsx(A,{...i,ref:a})}):e.jsx(A,{...i,ref:a})});q.displayName=z;var A=u.forwardRef((o,a)=>{const{__scopeToggleGroup:t,value:r,...l}=o,n=F(z,t),s={role:"radio","aria-checked":o.pressed,"aria-pressed":void 0},i=n.type==="single"?s:void 0;return e.jsx(V,{...i,...l,ref:a,onPressedChange:p=>{p?n.onItemActivate(r):n.onItemDeactivate(r)}})}),le=R,se=q;const ie=[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]],m=v("bold",ie);const ue=[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]],w=v("italic",ue);const ge=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],de=v("star",ge);const ce=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M17 12H7",key:"16if0g"}],["path",{d:"M19 19H5",key:"vjpgq2"}]],pe=v("text-align-center",ce);const me=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M21 19H7",key:"4cu937"}]],ve=v("text-align-end",me);const fe=[["path",{d:"M21 5H3",key:"1fi0y6"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 19H3",key:"z6ezky"}]],xe=v("text-align-start",fe);const he=[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]],L=v("underline",he),O=K("group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",{variants:{variant:{default:"bg-transparent",outline:"border border-input bg-transparent hover:bg-muted"},size:{default:"h-8 min-w-8 px-2",sm:"h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-1.5 text-[0.8rem]",lg:"h-9 min-w-9 px-2.5"}},defaultVariants:{variant:"default",size:"default"}});function d({className:o,variant:a="default",size:t="default",...r}){return e.jsx(oe,{"data-slot":"toggle",className:N(O({variant:a,size:t,className:o})),...r})}d.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const U=P.createContext({size:"default",variant:"default",spacing:0,orientation:"horizontal"});function S({className:o,variant:a,size:t,spacing:r=0,orientation:l="horizontal",children:n,...s}){return e.jsx(le,{"data-slot":"toggle-group","data-variant":a,"data-size":t,"data-spacing":r,"data-orientation":l,style:{"--gap":r},className:N("group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch",o),...s,children:e.jsx(U.Provider,{value:{variant:a,size:t,spacing:r,orientation:l},children:n})})}function g({className:o,children:a,variant:t="default",size:r="default",...l}){const n=P.useContext(U);return e.jsx(se,{"data-slot":"toggle-group-item","data-variant":n.variant||t,"data-size":n.size||r,"data-spacing":n.spacing,className:N("shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",O({variant:n.variant||t,size:n.size||r}),o),...l,children:a})}S.__docgenInfo={description:"",methods:[],displayName:"ToggleGroup",props:{spacing:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"ToggleGroupItem",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};const Ae={title:"Components/Inputs/Toggle",component:d,argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]},disabled:{control:"boolean"}}},h={render:o=>e.jsx(d,{...o,children:e.jsx(m,{})})},T={name:"With Text",render:()=>e.jsxs(d,{children:[e.jsx(de,{}),"Favorite"]})},G={render:()=>e.jsx(d,{variant:"outline",children:e.jsx(w,{})})},j={render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(d,{size:"sm",children:e.jsx(m,{})}),e.jsx(d,{size:"default",children:e.jsx(m,{})}),e.jsx(d,{size:"lg",children:e.jsx(m,{})})]})},I={render:()=>e.jsx(d,{disabled:!0,children:e.jsx(m,{})})},y={name:"Toggle Group",render:()=>e.jsxs(S,{type:"multiple",variant:"outline",children:[e.jsx(g,{value:"bold",children:e.jsx(m,{})}),e.jsx(g,{value:"italic",children:e.jsx(w,{})}),e.jsx(g,{value:"underline",children:e.jsx(L,{})})]})},b={name:"Toggle Group (Single)",render:()=>e.jsxs(S,{type:"single",variant:"outline",defaultValue:"center",children:[e.jsx(g,{value:"left",children:e.jsx(xe,{})}),e.jsx(g,{value:"center",children:e.jsx(pe,{})}),e.jsx(g,{value:"right",children:e.jsx(ve,{})})]})},_={name:"Toggle Group (With Spacing)",render:()=>e.jsxs(S,{type:"multiple",variant:"outline",spacing:1,children:[e.jsx(g,{value:"bold",children:e.jsx(m,{})}),e.jsx(g,{value:"italic",children:e.jsx(w,{})}),e.jsx(g,{value:"underline",children:e.jsx(L,{})})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Toggle {...args}>
      <BoldIcon />
    </Toggle>
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: "With Text",
  render: () => <Toggle>
      <StarIcon />
      Favorite
    </Toggle>
}`,...T.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle variant="outline">
      <ItalicIcon />
    </Toggle>
}`,...G.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Toggle size="sm">
        <BoldIcon />
      </Toggle>
      <Toggle size="default">
        <BoldIcon />
      </Toggle>
      <Toggle size="lg">
        <BoldIcon />
      </Toggle>
    </div>
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle disabled>
      <BoldIcon />
    </Toggle>
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: "Toggle Group",
  render: () => <ToggleGroup type="multiple" variant="outline">
      <ToggleGroupItem value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Toggle Group (Single)",
  render: () => <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: "Toggle Group (With Spacing)",
  render: () => <ToggleGroup type="multiple" variant="outline" spacing={1}>
      <ToggleGroupItem value="bold">
        <BoldIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic">
        <ItalicIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline">
        <UnderlineIcon />
      </ToggleGroupItem>
    </ToggleGroup>
}`,..._.parameters?.docs?.source}}};const $e=["Default","WithText","Outline","Sizes","Disabled","Group","GroupSingle","GroupWithSpacing"];export{h as Default,I as Disabled,y as Group,b as GroupSingle,_ as GroupWithSpacing,G as Outline,j as Sizes,T as WithText,$e as __namedExportsOrder,Ae as default};
