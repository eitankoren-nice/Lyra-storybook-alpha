import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-B0kHLf8d.js";import{c as g}from"./utils-BQHNewu7.js";import{c as M}from"./index-D1PZ6OVp.js";import{u as R}from"./index-DpcLPgx0.js";import{u as k}from"./index-BRShwktA.js";import{P as F}from"./index-Benmn2cN.js";import{s as W}from"./index-D5qValDk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-bHRTFriH.js";import"./index-BP_Sgt07.js";import"./index-Cb9IwNWd.js";function U(){return W.useSyncExternalStore(P,()=>!0,()=>!1)}function P(){return()=>{}}var N="Avatar",[T]=M(N),[H,C]=T(N),I=u.forwardRef((e,r)=>{const{__scopeAvatar:o,...l}=e,[c,t]=u.useState("idle");return a.jsx(H,{scope:o,imageLoadingStatus:c,onImageLoadingStatusChange:t,children:a.jsx(F.span,{...l,ref:r})})});I.displayName=N;var _="AvatarImage",L=u.forwardRef((e,r)=>{const{__scopeAvatar:o,src:l,onLoadingStatusChange:c=()=>{},...t}=e,v=C(_,o),i=J(l,t),m=R(p=>{c(p),v.onImageLoadingStatusChange(p)});return k(()=>{i!=="idle"&&m(i)},[i,m]),i==="loaded"?a.jsx(F.img,{...t,ref:r,src:l}):null});L.displayName=_;var E="AvatarFallback",G=u.forwardRef((e,r)=>{const{__scopeAvatar:o,delayMs:l,...c}=e,t=C(E,o),[v,i]=u.useState(l===void 0);return u.useEffect(()=>{if(l!==void 0){const m=window.setTimeout(()=>i(!0),l);return()=>window.clearTimeout(m)}},[l]),v&&t.imageLoadingStatus!=="loaded"?a.jsx(F.span,{...c,ref:r}):null});G.displayName=E;function y(e,r){return e?r?(e.src!==r&&(e.src=r),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function J(e,{referrerPolicy:r,crossOrigin:o}){const l=U(),c=u.useRef(null),t=l?(c.current||(c.current=new window.Image),c.current):null,[v,i]=u.useState(()=>y(t,e));return k(()=>{i(y(t,e))},[t,e]),k(()=>{const m=w=>()=>{i(w)};if(!t)return;const p=m("loaded"),S=m("error");return t.addEventListener("load",p),t.addEventListener("error",S),r&&(t.referrerPolicy=r),typeof o=="string"&&(t.crossOrigin=o),()=>{t.removeEventListener("load",p),t.removeEventListener("error",S)}},[t,o,r]),v}var V=I,K=L,$=G;function s({className:e,size:r="default",...o}){return a.jsx(V,{"data-slot":"avatar","data-size":r,className:g("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",e),...o})}function d({className:e,...r}){return a.jsx(K,{"data-slot":"avatar-image",className:g("aspect-square size-full rounded-full object-cover",e),...r})}function n({className:e,...r}){return a.jsx($,{"data-slot":"avatar-fallback",className:g("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",e),...r})}function z({className:e,...r}){return a.jsx("span",{"data-slot":"avatar-badge",className:g("absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none","group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden","group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2","group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",e),...r})}function B({className:e,...r}){return a.jsx("div",{"data-slot":"avatar-group",className:g("group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",e),...r})}function D({className:e,...r}){return a.jsx("div",{"data-slot":"avatar-group-count",className:g("relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",e),...r})}s.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:'"default" | "sm" | "lg"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"};n.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"};B.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup"};D.__docgenInfo={description:"",methods:[],displayName:"AvatarGroupCount"};z.__docgenInfo={description:"",methods:[],displayName:"AvatarBadge"};const oa={title:"Components/DataDisplay/Avatar",component:s,argTypes:{size:{control:"select",options:["default","sm","lg"]}}},f={render:e=>a.jsxs(s,{...e,children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),a.jsx(n,{children:"CN"})]})},h={name:"With Fallback",render:()=>a.jsxs(s,{children:[a.jsx(d,{src:"/broken-image.jpg",alt:"User"}),a.jsx(n,{children:"JD"})]})},A={render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs(s,{size:"sm",children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"sm"}),a.jsx(n,{children:"SM"})]}),a.jsxs(s,{size:"default",children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"default"}),a.jsx(n,{children:"MD"})]}),a.jsxs(s,{size:"lg",children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"lg"}),a.jsx(n,{children:"LG"})]})]})},x={name:"With Badge",render:()=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs(s,{size:"default",children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"User"}),a.jsx(n,{children:"CN"}),a.jsx(z,{})]}),a.jsxs(s,{size:"lg",children:[a.jsx(d,{src:"https://github.com/shadcn.png",alt:"User"}),a.jsx(n,{children:"CN"}),a.jsx(z,{})]})]})},b={name:"Avatar Group",render:()=>a.jsxs(B,{children:[["CN","JD","AB","MK"].map((e,r)=>a.jsxs(s,{children:[r===0?a.jsx(d,{src:"https://github.com/shadcn.png",alt:e}):null,a.jsx(n,{children:e})]},e)),a.jsx(D,{children:"+5"})]})},j={name:"Fallback Variants",render:()=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(s,{children:a.jsx(n,{children:"AB"})}),a.jsx(s,{children:a.jsx(n,{className:"bg-primary text-primary-foreground",children:"CD"})}),a.jsx(s,{children:a.jsx(n,{className:"bg-destructive/10 text-destructive",children:"EF"})}),a.jsx(s,{children:a.jsx(n,{className:"bg-accent text-accent-foreground",children:"GH"})})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "With Fallback",
  render: () => <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="sm" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="default">
        <AvatarImage src="https://github.com/shadcn.png" alt="default" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="lg" />
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
}`,...A.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "With Badge",
  render: () => <div className="flex items-center gap-4">
      <Avatar size="default">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="User" />
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge />
      </Avatar>
    </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: "Avatar Group",
  render: () => <AvatarGroup>
      {["CN", "JD", "AB", "MK"].map((initials, i) => <Avatar key={initials}>
          {i === 0 ? <AvatarImage src="https://github.com/shadcn.png" alt={initials} /> : null}
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>)}
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: "Fallback Variants",
  render: () => <div className="flex items-center gap-3">
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-primary text-primary-foreground">CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-destructive/10 text-destructive">EF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-accent text-accent-foreground">GH</AvatarFallback>
      </Avatar>
    </div>
}`,...j.parameters?.docs?.source}}};const la=["Default","WithFallback","Sizes","WithBadge","Group","FallbackColors"];export{f as Default,j as FallbackColors,b as Group,A as Sizes,x as WithBadge,h as WithFallback,la as __namedExportsOrder,oa as default};
