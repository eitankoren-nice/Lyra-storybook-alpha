import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-DQFjSlNe.js";import{c as L}from"./utils-BQHNewu7.js";import{u as H,c as w}from"./index-BXjqDAmY.js";import{u as S}from"./index-DMGC-ohM.js";import{c as _}from"./index-COG-14iT.js";import{P as k}from"./index-BH1e72rj.js";import{R as W,I as X,c as E}from"./index-ui6aRyuv.js";import{u as Y}from"./index-BEoE7NiV.js";import{u as J}from"./index-t4iTqBom.js";import{u as Q}from"./index-DxflxE-g.js";import{P as Z}from"./index-Y9Y8SifL.js";import{L as h}from"./label-DI5Ue-X5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-z6BhDnS6.js";import"./index-UkCzX0Jp.js";import"./index-Bf-YUqJM.js";import"./index-ByxLMRuu.js";import"./index-CrGZRD4o.js";var F="Radio",[ee,A]=_(F),[ae,re]=ee(F),D=d.forwardRef((a,t)=>{const{__scopeRadio:o,name:n,checked:r=!1,required:s,disabled:i,value:m="on",onCheck:v,form:f,...x}=a,[u,b]=d.useState(null),l=S(t,y=>b(y)),c=d.useRef(!1),g=u?f||!!u.closest("form"):!0;return e.jsxs(ae,{scope:o,checked:r,disabled:i,children:[e.jsx(k.button,{type:"button",role:"radio","aria-checked":r,"data-state":$(r),"data-disabled":i?"":void 0,disabled:i,value:m,...x,ref:l,onClick:w(a.onClick,y=>{r||v?.(),g&&(c.current=y.isPropagationStopped(),c.current||y.stopPropagation())})}),g&&e.jsx(z,{control:u,bubbles:!c.current,name:n,value:m,checked:r,required:s,disabled:i,form:f,style:{transform:"translateX(-100%)"}})]})});D.displayName=F;var O="RadioIndicator",V=d.forwardRef((a,t)=>{const{__scopeRadio:o,forceMount:n,...r}=a,s=re(O,o);return e.jsx(Z,{present:n||s.checked,children:e.jsx(k.span,{"data-state":$(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:t})})});V.displayName=O;var oe="RadioBubbleInput",z=d.forwardRef(({__scopeRadio:a,control:t,checked:o,bubbles:n=!0,...r},s)=>{const i=d.useRef(null),m=S(i,s),v=Q(o),f=J(t);return d.useEffect(()=>{const x=i.current;if(!x)return;const u=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(u,"checked").set;if(v!==o&&l){const c=new Event("click",{bubbles:n});l.call(x,o),x.dispatchEvent(c)}},[v,o,n]),e.jsx(k.input,{type:"radio","aria-hidden":!0,defaultChecked:o,...r,tabIndex:-1,ref:m,style:{...r.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});z.displayName=oe;function $(a){return a?"checked":"unchecked"}var te=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],C="RadioGroup",[se]=_(C,[E,A]),M=E(),q=A(),[ie,de]=se(C),B=d.forwardRef((a,t)=>{const{__scopeRadioGroup:o,name:n,defaultValue:r,value:s,required:i=!1,disabled:m=!1,orientation:v,dir:f,loop:x=!0,onValueChange:u,...b}=a,l=M(o),c=Y(f),[g,y]=H({prop:s,defaultProp:r??null,onChange:u,caller:C});return e.jsx(ie,{scope:o,name:n,required:i,disabled:m,value:g,onValueChange:y,children:e.jsx(W,{asChild:!0,...l,orientation:v,dir:c,loop:x,children:e.jsx(k.div,{role:"radiogroup","aria-required":i,"aria-orientation":v,"data-disabled":m?"":void 0,dir:c,...b,ref:t})})})});B.displayName=C;var K="RadioGroupItem",T=d.forwardRef((a,t)=>{const{__scopeRadioGroup:o,disabled:n,...r}=a,s=de(K,o),i=s.disabled||n,m=M(o),v=q(o),f=d.useRef(null),x=S(t,f),u=s.value===r.value,b=d.useRef(!1);return d.useEffect(()=>{const l=g=>{te.includes(g.key)&&(b.current=!0)},c=()=>b.current=!1;return document.addEventListener("keydown",l),document.addEventListener("keyup",c),()=>{document.removeEventListener("keydown",l),document.removeEventListener("keyup",c)}},[]),e.jsx(X,{asChild:!0,...m,focusable:!i,active:u,children:e.jsx(D,{disabled:i,required:s.required,checked:u,...v,...r,name:s.name,ref:x,onCheck:()=>s.onValueChange(r.value),onKeyDown:w(l=>{l.key==="Enter"&&l.preventDefault()}),onFocus:w(r.onFocus,()=>{b.current&&f.current?.click()})})})});T.displayName=K;var ne="RadioGroupIndicator",U=d.forwardRef((a,t)=>{const{__scopeRadioGroup:o,...n}=a,r=q(o);return e.jsx(V,{...r,...n,ref:t})});U.displayName=ne;var le=B,ce=T,ue=U;function R({className:a,...t}){return e.jsx(le,{"data-slot":"radio-group",className:L("grid w-full gap-2",a),...t})}function p({className:a,...t}){return e.jsx(ce,{"data-slot":"radio-group-item",className:L("group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",a),...t,children:e.jsx(ue,{"data-slot":"radio-group-indicator",className:"flex size-4 items-center justify-center",children:e.jsx("span",{className:"absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground"})})})}R.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};p.__docgenInfo={description:"",methods:[],displayName:"RadioGroupItem"};const Fe={title:"Components/RadioGroup",component:R},j={render:()=>e.jsxs(R,{defaultValue:"comfortable",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"default",id:"r1"}),e.jsx(h,{htmlFor:"r1",children:"Default"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"comfortable",id:"r2"}),e.jsx(h,{htmlFor:"r2",children:"Comfortable"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"compact",id:"r3"}),e.jsx(h,{htmlFor:"r3",children:"Compact"})]})]})},N={render:()=>e.jsx(R,{defaultValue:"medium",className:"flex flex-row gap-4",children:["small","medium","large"].map(a=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:a,id:`h-${a}`}),e.jsx(h,{htmlFor:`h-${a}`,className:"capitalize",children:a})]},a))})},P={render:()=>e.jsxs(R,{defaultValue:"option-1",disabled:!0,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"option-1",id:"d1"}),e.jsx(h,{htmlFor:"d1",children:"Option 1"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"option-2",id:"d2"}),e.jsx(h,{htmlFor:"d2",children:"Option 2"})]})]})},G={name:"Invalid State",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Select a plan"}),e.jsxs(R,{"aria-invalid":"true",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"free",id:"inv1","aria-invalid":"true"}),e.jsx(h,{htmlFor:"inv1",children:"Free"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{value:"pro",id:"inv2","aria-invalid":"true"}),e.jsx(h,{htmlFor:"inv2",children:"Pro"})]})]}),e.jsx("p",{className:"text-sm text-destructive",children:"Please select a plan."})]})},I={name:"Card Style",render:()=>e.jsx(R,{defaultValue:"card",className:"grid gap-3",children:[{value:"card",label:"Card Payment",desc:"Pay with credit card"},{value:"paypal",label:"PayPal",desc:"Pay with PayPal account"},{value:"apple",label:"Apple Pay",desc:"Pay with Apple Pay"}].map(a=>e.jsxs(h,{htmlFor:`card-${a.value}`,className:"flex cursor-pointer items-center gap-3 rounded-lg border border-border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5",children:[e.jsx(p,{value:a.value,id:`card-${a.value}`}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-medium",children:a.label}),e.jsx("p",{className:"text-sm text-muted-foreground",children:a.desc})]})]},a.value))})};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="medium" className="flex flex-row gap-4">
      {["small", "medium", "large"].map(size => <div key={size} className="flex items-center gap-2">
          <RadioGroupItem value={size} id={\`h-\${size}\`} />
          <Label htmlFor={\`h-\${size}\`} className="capitalize">
            {size}
          </Label>
        </div>)}
    </RadioGroup>
}`,...N.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="option-1" disabled>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-1" id="d1" />
        <Label htmlFor="d1">Option 1</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="option-2" id="d2" />
        <Label htmlFor="d2">Option 2</Label>
      </div>
    </RadioGroup>
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: "Invalid State",
  render: () => <div className="space-y-2">
      <p className="text-sm font-medium">Select a plan</p>
      <RadioGroup aria-invalid="true">
        <div className="flex items-center gap-2">
          <RadioGroupItem value="free" id="inv1" aria-invalid="true" />
          <Label htmlFor="inv1">Free</Label>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="pro" id="inv2" aria-invalid="true" />
          <Label htmlFor="inv2">Pro</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-destructive">Please select a plan.</p>
    </div>
}`,...G.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: "Card Style",
  render: () => <RadioGroup defaultValue="card" className="grid gap-3">
      {[{
      value: "card",
      label: "Card Payment",
      desc: "Pay with credit card"
    }, {
      value: "paypal",
      label: "PayPal",
      desc: "Pay with PayPal account"
    }, {
      value: "apple",
      label: "Apple Pay",
      desc: "Pay with Apple Pay"
    }].map(item => <Label key={item.value} htmlFor={\`card-\${item.value}\`} className="flex cursor-pointer items-center gap-3 rounded-lg border border-border p-4 has-[:checked]:border-primary has-[:checked]:bg-primary/5">
          <RadioGroupItem value={item.value} id={\`card-\${item.value}\`} />
          <div>
            <p className="text-sm font-medium">{item.label}</p>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        </Label>)}
    </RadioGroup>
}`,...I.parameters?.docs?.source}}};const Le=["Default","Horizontal","Disabled","Invalid","CardStyle"];export{I as CardStyle,j as Default,P as Disabled,N as Horizontal,G as Invalid,Le as __namedExportsOrder,Fe as default};
