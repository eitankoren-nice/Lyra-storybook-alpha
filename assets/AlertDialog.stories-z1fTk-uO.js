import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DQFjSlNe.js";import{A as o,a as l,b as a,c as i,d as s,e as c,f as d,g,h as A}from"./alert-dialog-DuLKWwbZ.js";import{B as D}from"./button-BXqy1VoR.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-COG-14iT.js";import"./index-DMGC-ohM.js";import"./index-hnacNt7J.js";import"./index-BXjqDAmY.js";import"./index-z6BhDnS6.js";import"./index-ByxLMRuu.js";import"./index-BpIsosLX.js";import"./index-BH1e72rj.js";import"./index-UkCzX0Jp.js";import"./index-Bf-YUqJM.js";import"./index-CrGZRD4o.js";import"./index-Cx-XPqnF.js";import"./index-Y9Y8SifL.js";import"./index-LHNt3CwB.js";const P={title:"Components/AlertDialog",parameters:{layout:"centered"}},t={render:()=>e.jsxs(o,{children:[e.jsx(A,{asChild:!0,children:e.jsx(D,{variant:"outline",children:"Show Dialog"})}),e.jsxs(l,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Are you absolutely sure?"}),e.jsx(s,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(g,{children:"Continue"})]})]})]})},r={render:()=>e.jsxs(o,{children:[e.jsx(A,{asChild:!0,children:e.jsx(D,{variant:"destructive",children:"Delete Project"})}),e.jsxs(l,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Delete project"}),e.jsx(s,{children:"Are you sure you want to delete this project? All associated data, including files and settings, will be permanently removed. This action cannot be undone."})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Cancel"}),e.jsx(g,{variant:"destructive",children:"Yes, delete project"})]})]})]})},n={render:()=>{const[u,p]=m.useState(!1);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(D,{variant:"outline",onClick:()=>p(!0),children:"Open Alert"}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:["State: ",u?"open":"closed"]}),e.jsx(o,{open:u,onOpenChange:p,children:e.jsxs(l,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Discard unsaved changes?"}),e.jsx(s,{children:"You have unsaved changes that will be lost if you leave this page. Do you want to discard them?"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"Keep editing"}),e.jsx(g,{children:"Discard"})]})]})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete project</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this project? All associated data,
            including files and settings, will be permanently removed. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">
            Yes, delete project
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div className="flex items-center gap-4">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Alert
        </Button>
        <span className="text-sm text-muted-foreground">
          State: {open ? "open" : "closed"}
        </span>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Discard unsaved changes?</AlertDialogTitle>
              <AlertDialogDescription>
                You have unsaved changes that will be lost if you leave this
                page. Do you want to discard them?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Keep editing</AlertDialogCancel>
              <AlertDialogAction>Discard</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>;
  }
}`,...n.parameters?.docs?.source}}};const _=["Default","Destructive","Controlled"];export{n as Controlled,t as Default,r as Destructive,_ as __namedExportsOrder,P as default};
