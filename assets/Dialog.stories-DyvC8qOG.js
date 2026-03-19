import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as a,a as l,b as s,c,d,e as u,f as g}from"./dialog-DZq5ds5B.js";import{B as o}from"./button-CR7DX97M.js";import{I as m}from"./input-YYOOfn_S.js";import{L as p}from"./label-Cp7T_9Ez.js";import"./iframe-DnETVZJP.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./x-Zq_kXnmr.js";import"./createLucideIcon-CXS1OEu6.js";import"./index-DZO311WM.js";import"./index-D1Wwc4Ls.js";import"./index-CLZ7_oxF.js";import"./index-DSoy0_Dk.js";import"./index-D5prXcjY.js";import"./index-DZrhUfUk.js";import"./index-DIr13BBP.js";import"./index-TvJ2bEeG.js";import"./index-DwGs9Epf.js";import"./index-Kab2VDxh.js";import"./index-OlCSfi9a.js";import"./index-CGmYEQIX.js";import"./index-DLmjT3BM.js";import"./index-LHNt3CwB.js";const O={title:"Components/Dialog",parameters:{layout:"centered"}},n={render:()=>e.jsxs(a,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Open Dialog"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Edit Profile"}),e.jsx(u,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(p,{htmlFor:"name",children:"Name"}),e.jsx(m,{id:"name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(p,{htmlFor:"username",children:"Username"}),e.jsx(m,{id:"username",defaultValue:"@peduarte"})]})]}),e.jsx(g,{children:e.jsx(o,{type:"submit",children:"Save changes"})})]})]})},r={name:"With Footer Close Button",render:()=>e.jsxs(a,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"outline",children:"Terms of Service"})}),e.jsxs(s,{showCloseButton:!1,children:[e.jsxs(c,{children:[e.jsx(d,{children:"Terms of Service"}),e.jsx(u,{children:"Please read and accept our terms of service."})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"By using our service, you agree to our terms and conditions. This includes our privacy policy and acceptable use policy."}),e.jsx(g,{showCloseButton:!0,children:e.jsx(o,{children:"I Accept"})})]})]})},t={name:"No Close Button",render:()=>e.jsxs(a,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{children:"Confirm Action"})}),e.jsxs(s,{showCloseButton:!1,children:[e.jsxs(c,{children:[e.jsx(d,{children:"Are you sure?"}),e.jsx(u,{children:"This action cannot be undone."})]}),e.jsxs(g,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{variant:"destructive",children:"Delete"})]})]})]})},i={name:"Simple Alert",render:()=>e.jsxs(a,{children:[e.jsx(l,{asChild:!0,children:e.jsx(o,{variant:"destructive",children:"Delete Account"})}),e.jsxs(s,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Delete Account"}),e.jsx(u,{children:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone."})]}),e.jsxs(g,{children:[e.jsx(o,{variant:"outline",children:"Cancel"}),e.jsx(o,{variant:"destructive",children:"Delete"})]})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const M=["Default","WithFooterClose","NoCloseButton","SimpleAlert"];export{n as Default,t as NoCloseButton,i as SimpleAlert,r as WithFooterClose,M as __namedExportsOrder,O as default};
