import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-CuOAzUwt.js";import{c as q}from"./utils-BQHNewu7.js";import{u as K,c as f}from"./index-uq8FCGZ0.js";import{u as F,a as U}from"./index-Dd9Y3CeX.js";import{c as Z}from"./index-Dy8FaZ83.js";import{P as J,D as Q}from"./index-DjllESoK.js";import{h as X,R as Y,u as ee,F as oe}from"./index-Aw92L3zu.js";import{u as re}from"./index-Cwj87Tmb.js";import{R as te,A as S,c as T,C as ne,a as se}from"./index-CnPg1Ty-.js";import{P as I}from"./index-OtnZucq-.js";import{P as D}from"./index-Cwk4M3nQ.js";import{B as y}from"./button-CGTpU3j4.js";import{I as w}from"./input-DCAHQK2a.js";import{L as b}from"./label-DJs4Q-tx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ANm8KVnJ.js";import"./index-oCQ8DtYR.js";import"./index-KxEY5z-S.js";import"./index-BXE1_Yop.js";import"./index-BjT7Q4eN.js";import"./index-LHNt3CwB.js";var j="Popover",[M]=Z(j,[T]),g=T(),[ae,p]=M(j),k=o=>{const{__scopePopover:s,children:r,open:a,defaultOpen:t,onOpenChange:n,modal:i=!1}=o,l=g(s),m=c.useRef(null),[v,h]=c.useState(!1),[x,d]=K({prop:a,defaultProp:t??!1,onChange:n,caller:j});return e.jsx(te,{...l,children:e.jsx(ae,{scope:s,contentId:re(),triggerRef:m,open:x,onOpenChange:d,onOpenToggle:c.useCallback(()=>d(O=>!O),[d]),hasCustomAnchor:v,onCustomAnchorAdd:c.useCallback(()=>h(!0),[]),onCustomAnchorRemove:c.useCallback(()=>h(!1),[]),modal:i,children:r})})};k.displayName=j;var L="PopoverAnchor",ie=c.forwardRef((o,s)=>{const{__scopePopover:r,...a}=o,t=p(L,r),n=g(r),{onCustomAnchorAdd:i,onCustomAnchorRemove:l}=t;return c.useEffect(()=>(i(),()=>l()),[i,l]),e.jsx(S,{...n,...a,ref:s})});ie.displayName=L;var V="PopoverTrigger",B=c.forwardRef((o,s)=>{const{__scopePopover:r,...a}=o,t=p(V,r),n=g(r),i=F(s,t.triggerRef),l=e.jsx(D.button,{type:"button","aria-haspopup":"dialog","aria-expanded":t.open,"aria-controls":t.contentId,"data-state":G(t.open),...a,ref:i,onClick:f(o.onClick,t.onOpenToggle)});return t.hasCustomAnchor?l:e.jsx(S,{asChild:!0,...n,children:l})});B.displayName=V;var E="PopoverPortal",[ce,le]=M(E,{forceMount:void 0}),z=o=>{const{__scopePopover:s,forceMount:r,children:a,container:t}=o,n=p(E,s);return e.jsx(ce,{scope:s,forceMount:r,children:e.jsx(I,{present:r||n.open,children:e.jsx(J,{asChild:!0,container:t,children:a})})})};z.displayName=E;var u="PopoverContent",W=c.forwardRef((o,s)=>{const r=le(u,o.__scopePopover),{forceMount:a=r.forceMount,...t}=o,n=p(u,o.__scopePopover);return e.jsx(I,{present:a||n.open,children:n.modal?e.jsx(de,{...t,ref:s}):e.jsx(ue,{...t,ref:s})})});W.displayName=u;var pe=U("PopoverContent.RemoveScroll"),de=c.forwardRef((o,s)=>{const r=p(u,o.__scopePopover),a=c.useRef(null),t=F(s,a),n=c.useRef(!1);return c.useEffect(()=>{const i=a.current;if(i)return X(i)},[]),e.jsx(Y,{as:pe,allowPinchZoom:!0,children:e.jsx(H,{...o,ref:t,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:f(o.onCloseAutoFocus,i=>{i.preventDefault(),n.current||r.triggerRef.current?.focus()}),onPointerDownOutside:f(o.onPointerDownOutside,i=>{const l=i.detail.originalEvent,m=l.button===0&&l.ctrlKey===!0,v=l.button===2||m;n.current=v},{checkForDefaultPrevented:!1}),onFocusOutside:f(o.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})})}),ue=c.forwardRef((o,s)=>{const r=p(u,o.__scopePopover),a=c.useRef(!1),t=c.useRef(!1);return e.jsx(H,{...o,ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{o.onCloseAutoFocus?.(n),n.defaultPrevented||(a.current||r.triggerRef.current?.focus(),n.preventDefault()),a.current=!1,t.current=!1},onInteractOutside:n=>{o.onInteractOutside?.(n),n.defaultPrevented||(a.current=!0,n.detail.originalEvent.type==="pointerdown"&&(t.current=!0));const i=n.target;r.triggerRef.current?.contains(i)&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&t.current&&n.preventDefault()}})}),H=c.forwardRef((o,s)=>{const{__scopePopover:r,trapFocus:a,onOpenAutoFocus:t,onCloseAutoFocus:n,disableOutsidePointerEvents:i,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:v,onInteractOutside:h,...x}=o,d=p(u,r),O=g(r);return ee(),e.jsx(oe,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:t,onUnmountAutoFocus:n,children:e.jsx(Q,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:h,onEscapeKeyDown:l,onPointerDownOutside:m,onFocusOutside:v,onDismiss:()=>d.onOpenChange(!1),children:e.jsx(ne,{"data-state":G(d.open),role:"dialog",id:d.contentId,...O,...x,ref:s,style:{...x.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),$="PopoverClose",me=c.forwardRef((o,s)=>{const{__scopePopover:r,...a}=o,t=p($,r);return e.jsx(D.button,{type:"button",...a,ref:s,onClick:f(o.onClick,()=>t.onOpenChange(!1))})});me.displayName=$;var ve="PopoverArrow",fe=c.forwardRef((o,s)=>{const{__scopePopover:r,...a}=o,t=g(r);return e.jsx(se,{...t,...a,ref:s})});fe.displayName=ve;function G(o){return o?"open":"closed"}var ge=k,he=B,xe=z,Pe=W;function R({...o}){return e.jsx(ge,{"data-slot":"popover",...o})}function A({...o}){return e.jsx(he,{"data-slot":"popover-trigger",...o})}function _({className:o,align:s="center",sideOffset:r=4,...a}){return e.jsx(xe,{children:e.jsx(Pe,{"data-slot":"popover-content",align:s,sideOffset:r,className:q("z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",o),...a})})}R.__docgenInfo={description:"",methods:[],displayName:"Popover"};_.__docgenInfo={description:"",methods:[],displayName:"PopoverContent",props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}};A.__docgenInfo={description:"",methods:[],displayName:"PopoverTrigger"};const We={title:"Components/Popover",parameters:{layout:"centered"}},P={render:()=>e.jsxs(R,{children:[e.jsx(A,{asChild:!0,children:e.jsx(y,{variant:"outline",children:"Open Popover"})}),e.jsx(_,{className:"w-80",children:e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"font-medium leading-none",children:"Dimensions"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Set the dimensions for the layer."})]}),e.jsxs("div",{className:"grid gap-2",children:[e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(b,{htmlFor:"width",children:"Width"}),e.jsx(w,{id:"width",defaultValue:"100%",className:"col-span-2"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(b,{htmlFor:"maxWidth",children:"Max. width"}),e.jsx(w,{id:"maxWidth",defaultValue:"300px",className:"col-span-2"})]}),e.jsxs("div",{className:"grid grid-cols-3 items-center gap-4",children:[e.jsx(b,{htmlFor:"height",children:"Height"}),e.jsx(w,{id:"height",defaultValue:"25px",className:"col-span-2"})]})]})]})})]})},C={render:()=>e.jsx("div",{className:"flex gap-4",children:["start","center","end"].map(o=>e.jsxs(R,{children:[e.jsx(A,{asChild:!0,children:e.jsxs(y,{variant:"outline",className:"capitalize",children:["Align ",o]})}),e.jsx(_,{align:o,children:e.jsxs("p",{className:"text-sm",children:["This popover is aligned to ",e.jsx("strong",{children:o}),"."]})})]},o))})},N={render:()=>e.jsx("div",{className:"flex gap-4",children:["top","right","bottom","left"].map(o=>e.jsxs(R,{children:[e.jsx(A,{asChild:!0,children:e.jsx(y,{variant:"outline",className:"capitalize",children:o})}),e.jsx(_,{side:o,children:e.jsxs("p",{className:"text-sm",children:["This popover opens to the ",e.jsx("strong",{children:o}),"."]})})]},o))})};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input id="maxWidth" defaultValue="300px" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...P.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["start", "center", "end"] as const).map(align => <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="capitalize">
              Align {align}
            </Button>
          </PopoverTrigger>
          <PopoverContent align={align}>
            <p className="text-sm">
              This popover is aligned to <strong>{align}</strong>.
            </p>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      {(["top", "right", "bottom", "left"] as const).map(side => <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </PopoverTrigger>
          <PopoverContent side={side}>
            <p className="text-sm">
              This popover opens to the <strong>{side}</strong>.
            </p>
          </PopoverContent>
        </Popover>)}
    </div>
}`,...N.parameters?.docs?.source}}};const He=["Default","Alignment","Sides"];export{C as Alignment,P as Default,N as Sides,He as __namedExportsOrder,We as default};
