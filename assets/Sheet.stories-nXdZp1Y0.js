import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-2OQw23Jk.js";import{c as i}from"./utils-BQHNewu7.js";import{B as s}from"./button--91D2eWF.js";import{R as v,T as N,C as b,a as y,X as T,b as C,D as _,P as D,O as B}from"./x-DqTfOUCY.js";import{I as u}from"./input-di0lM4VE.js";import{L as g}from"./label-lN6LXaIs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./index-1hLCTjpC.js";import"./index-CxcMapXh.js";import"./index-BaqHVo_4.js";import"./index-BZ3o8y06.js";import"./index-D9U9efI-.js";import"./index-CAY1EETW.js";import"./index-jDDBY0BM.js";import"./index-X-5xaZIZ.js";import"./index-ZkPJRuOb.js";import"./index-BgLNti_V.js";import"./index-DQN5IHo-.js";import"./index-EtbW2nTX.js";import"./createLucideIcon-zMYeAore.js";function d({...t}){return e.jsx(v,{"data-slot":"sheet",...t})}function l({...t}){return e.jsx(N,{"data-slot":"sheet-trigger",...t})}function w({...t}){return e.jsx(D,{"data-slot":"sheet-portal",...t})}function I({className:t,...a}){return e.jsx(B,{"data-slot":"sheet-overlay",className:i("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",t),...a})}function h({className:t,children:a,side:x="right",showCloseButton:S=!0,...j}){return e.jsxs(w,{children:[e.jsx(I,{}),e.jsxs(b,{"data-slot":"sheet-content","data-side":x,className:i("fixed z-50 flex flex-col gap-4 bg-background bg-clip-padding text-sm shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",t),...j,children:[a,S&&e.jsx(y,{"data-slot":"sheet-close",asChild:!0,children:e.jsxs(s,{variant:"ghost",className:"absolute top-3 right-3",size:"icon-sm",children:[e.jsx(T,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})})]})]})}function m({className:t,...a}){return e.jsx("div",{"data-slot":"sheet-header",className:i("flex flex-col gap-0.5 p-4",t),...a})}function f({className:t,...a}){return e.jsx("div",{"data-slot":"sheet-footer",className:i("mt-auto flex flex-col gap-2 p-4",t),...a})}function c({className:t,...a}){return e.jsx(C,{"data-slot":"sheet-title",className:i("text-base font-medium text-foreground",t),...a})}function p({className:t,...a}){return e.jsx(_,{"data-slot":"sheet-description",className:i("text-sm text-muted-foreground",t),...a})}d.__docgenInfo={description:"",methods:[],displayName:"Sheet"};l.__docgenInfo={description:"",methods:[],displayName:"SheetTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"SheetContent",props:{side:{required:!1,tsType:{name:"union",raw:'"top" | "right" | "bottom" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"right"'},{name:"literal",value:'"bottom"'},{name:"literal",value:'"left"'}]},description:"",defaultValue:{value:'"right"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};f.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};c.__docgenInfo={description:"",methods:[],displayName:"SheetTitle"};p.__docgenInfo={description:"",methods:[],displayName:"SheetDescription"};const $={title:"Components/Overlay/Sheet",parameters:{layout:"centered"}},n={render:()=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Sheet"})}),e.jsxs(h,{children:[e.jsxs(m,{children:[e.jsx(c,{children:"Edit Profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 p-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(g,{htmlFor:"sheet-name",children:"Name"}),e.jsx(u,{id:"sheet-name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(g,{htmlFor:"sheet-username",children:"Username"}),e.jsx(u,{id:"sheet-username",defaultValue:"@peduarte"})]})]}),e.jsx(f,{children:e.jsx(s,{type:"submit",children:"Save changes"})})]})]})},r={name:"All Sides",render:()=>e.jsx("div",{className:"flex gap-3",children:["top","right","bottom","left"].map(t=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",className:"capitalize",children:t})}),e.jsxs(h,{side:t,children:[e.jsxs(m,{children:[e.jsxs(c,{className:"capitalize",children:[t," Sheet"]}),e.jsxs(p,{children:["This sheet slides in from the ",t,"."]})]}),e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Sheet content goes here."})})]})]},t))})},o={name:"Navigation Example",render:()=>e.jsxs(d,{children:[e.jsx(l,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Menu"})}),e.jsxs(h,{side:"left",children:[e.jsx(m,{children:e.jsx(c,{children:"Navigation"})}),e.jsx("nav",{className:"grid gap-1 p-4",children:["Dashboard","Projects","Team","Settings","Help"].map(t=>e.jsx(s,{variant:"ghost",className:"w-full justify-start",children:t},t))})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
          <div className="grid gap-1.5">
            <Label htmlFor="sheet-name">Name</Label>
            <Input id="sheet-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="sheet-username">Username</Label>
            <Input id="sheet-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "All Sides",
  render: () => <div className="flex gap-3">
      {(["top", "right", "bottom", "left"] as const).map(side => <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="capitalize">{side} Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the {side}.
              </SheetDescription>
            </SheetHeader>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">
                Sheet content goes here.
              </p>
            </div>
          </SheetContent>
        </Sheet>)}
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Navigation Example",
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Menu</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <nav className="grid gap-1 p-4">
          {["Dashboard", "Projects", "Team", "Settings", "Help"].map(item => <Button key={item} variant="ghost" className="w-full justify-start">
                {item}
              </Button>)}
        </nav>
      </SheetContent>
    </Sheet>
}`,...o.parameters?.docs?.source}}};const ee=["Default","Sides","NavigationSheet"];export{n as Default,o as NavigationSheet,r as Sides,ee as __namedExportsOrder,$ as default};
