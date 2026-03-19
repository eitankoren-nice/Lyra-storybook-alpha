import{j as e}from"./jsx-runtime-u17CrQMm.js";import"./iframe-CuOAzUwt.js";import{c as n}from"./utils-BQHNewu7.js";import{B as t}from"./button-CGTpU3j4.js";import{X as B}from"./x-Ch8IRwBg.js";import{R as T,b,C as N,a as v,T as _,D as w,P as A,O as F}from"./index-CbOMlfNO.js";import{I as f}from"./input-DCAHQK2a.js";import{L as j}from"./label-DJs4Q-tx.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./index-Dd9Y3CeX.js";import"./createLucideIcon-MH2QmpBJ.js";import"./index-uq8FCGZ0.js";import"./index-ANm8KVnJ.js";import"./index-Dy8FaZ83.js";import"./index-Cwj87Tmb.js";import"./index-DjllESoK.js";import"./index-Cwk4M3nQ.js";import"./index-KxEY5z-S.js";import"./index-BXE1_Yop.js";import"./index-oCQ8DtYR.js";import"./index-Aw92L3zu.js";import"./index-OtnZucq-.js";function r({...o}){return e.jsx(T,{"data-slot":"dialog",...o})}function i({...o}){return e.jsx(b,{"data-slot":"dialog-trigger",...o})}function C({...o}){return e.jsx(A,{"data-slot":"dialog-portal",...o})}function y({className:o,...a}){return e.jsx(F,{"data-slot":"dialog-overlay",className:n("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",o),...a})}function s({className:o,children:a,showCloseButton:D=!0,...x}){return e.jsxs(C,{children:[e.jsx(y,{}),e.jsxs(N,{"data-slot":"dialog-content",className:n("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 text-sm ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",o),...x,children:[a,D&&e.jsx(v,{"data-slot":"dialog-close",asChild:!0,children:e.jsxs(t,{variant:"ghost",className:"absolute top-2 right-2",size:"icon-sm",children:[e.jsx(B,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})})]})]})}function l({className:o,...a}){return e.jsx("div",{"data-slot":"dialog-header",className:n("flex flex-col gap-2",o),...a})}function d({className:o,showCloseButton:a=!1,children:D,...x}){return e.jsxs("div",{"data-slot":"dialog-footer",className:n("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",o),...x,children:[D,a&&e.jsx(v,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Close"})})]})}function c({className:o,...a}){return e.jsx(_,{"data-slot":"dialog-title",className:n("text-base leading-none font-medium",o),...a})}function u({className:o,...a}){return e.jsx(w,{"data-slot":"dialog-description",className:n("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",o),...a})}r.__docgenInfo={description:"",methods:[],displayName:"Dialog"};s.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};d.__docgenInfo={description:"",methods:[],displayName:"DialogFooter",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};y.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};C.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};c.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};i.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const ee={title:"Components/Dialog",parameters:{layout:"centered"}},g={render:()=>e.jsxs(r,{children:[e.jsx(i,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(c,{children:"Edit Profile"}),e.jsx(u,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(j,{htmlFor:"name",children:"Name"}),e.jsx(f,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(j,{htmlFor:"username",children:"Username"}),e.jsx(f,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(d,{children:e.jsx(t,{type:"submit",children:"Save changes"})})]})]})},m={name:"With Footer Close Button",render:()=>e.jsxs(r,{children:[e.jsx(i,{asChild:!0,children:e.jsx(t,{variant:"outline",children:"Terms of Service"})}),e.jsxs(s,{showCloseButton:!1,children:[e.jsxs(l,{children:[e.jsx(c,{children:"Terms of Service"}),e.jsx(u,{children:"Please read and accept our terms of service."})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"By using our service, you agree to our terms and conditions. This includes our privacy policy and acceptable use policy."}),e.jsx(d,{showCloseButton:!0,children:e.jsx(t,{children:"I Accept"})})]})]})},p={name:"No Close Button",render:()=>e.jsxs(r,{children:[e.jsx(i,{asChild:!0,children:e.jsx(t,{children:"Confirm Action"})}),e.jsxs(s,{showCloseButton:!1,children:[e.jsxs(l,{children:[e.jsx(c,{children:"Are you sure?"}),e.jsx(u,{children:"This action cannot be undone."})]}),e.jsxs(d,{children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{variant:"destructive",children:"Delete"})]})]})]})},h={name:"Simple Alert",render:()=>e.jsxs(r,{children:[e.jsx(i,{asChild:!0,children:e.jsx(t,{variant:"destructive",children:"Delete Account"})}),e.jsxs(s,{children:[e.jsxs(l,{children:[e.jsx(c,{children:"Delete Account"}),e.jsx(u,{children:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."})]}),e.jsxs(d,{children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{variant:"destructive",children:"Delete"})]})]})]})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="username">Username</Label>
            <Input id="username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "With Footer Close Button",
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Terms of Service</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Please read and accept our terms of service.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          By using our service, you agree to our terms and conditions. This
          includes our privacy policy and acceptable use policy.
        </p>
        <DialogFooter showCloseButton>
          <Button>I Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "No Close Button",
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button>Confirm Action</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "Simple Alert",
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete your account? All of your data will
            be permanently removed. This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...h.parameters?.docs?.source}}};const oe=["Default","WithFooterClose","NoCloseButton","SimpleAlert"];export{g as Default,p as NoCloseButton,h as SimpleAlert,m as WithFooterClose,oe as __namedExportsOrder,ee as default};
