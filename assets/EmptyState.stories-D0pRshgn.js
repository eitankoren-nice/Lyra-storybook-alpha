import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s,d as r,a as g,b as j,c as b}from"./card-A-DcLvvd.js";import{B as t}from"./button-cSd2ZTat.js";import{c as m}from"./createLucideIcon-51Pu-Vjz.js";import{S as x}from"./search-CrqpV_uT.js";import{P as v}from"./plus-ApbTkfFf.js";import"./iframe-CmZ5uWiA.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-8a4LLvRX.js";const C=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}]],p=m("file",C);const I=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],f=m("inbox",I);const w=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],z=m("upload",w);const S=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],N=m("users",S),A={title:"Patterns/EmptyState",parameters:{layout:"centered"}},n={name:"No Search Results",render:()=>e.jsx(s,{className:"w-[420px]",children:e.jsxs(r,{className:"flex flex-col items-center justify-center py-10 text-center",children:[e.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-full bg-muted",children:e.jsx(x,{className:"size-6 text-muted-foreground"})}),e.jsx("h3",{className:"mb-1 text-lg font-semibold",children:"No results found"}),e.jsx("p",{className:"mb-4 max-w-xs text-sm text-muted-foreground",children:"We couldn't find anything matching your search. Try adjusting your filters or search terms."}),e.jsx(t,{variant:"outline",children:"Clear filters"})]})})},a={name:"Empty Inbox",render:()=>e.jsx(s,{className:"w-[420px]",children:e.jsxs(r,{className:"flex flex-col items-center justify-center py-10 text-center",children:[e.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-full bg-muted",children:e.jsx(f,{className:"size-6 text-muted-foreground"})}),e.jsx("h3",{className:"mb-1 text-lg font-semibold",children:"Inbox zero!"}),e.jsx("p",{className:"max-w-xs text-sm text-muted-foreground",children:"You're all caught up. No new messages to read."})]})})},o={name:"No Documents",render:()=>e.jsxs(s,{className:"w-[420px]",children:[e.jsxs(g,{className:"text-center",children:[e.jsx("div",{className:"mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-muted",children:e.jsx(p,{className:"size-6 text-muted-foreground"})}),e.jsx(j,{children:"No documents yet"}),e.jsx(b,{children:"Get started by creating your first document."})]}),e.jsxs(r,{className:"flex justify-center gap-2",children:[e.jsxs(t,{children:[e.jsx(v,{"data-icon":"inline-start"}),"New Document"]}),e.jsxs(t,{variant:"outline",children:[e.jsx(z,{"data-icon":"inline-start"}),"Import"]})]})]})},c={name:"No Team Members",render:()=>e.jsx(s,{className:"w-[420px]",children:e.jsxs(r,{className:"flex flex-col items-center justify-center py-10 text-center",children:[e.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10",children:e.jsx(N,{className:"size-6 text-primary"})}),e.jsx("h3",{className:"mb-1 text-lg font-semibold",children:"Build your team"}),e.jsx("p",{className:"mb-4 max-w-xs text-sm text-muted-foreground",children:"Invite team members to collaborate on projects together."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{children:"Invite Members"}),e.jsx(t,{variant:"outline",children:"Learn More"})]})]})})},i={name:"Error State",render:()=>e.jsx(s,{className:"w-[420px]",children:e.jsxs(r,{className:"flex flex-col items-center justify-center py-10 text-center",children:[e.jsx("div",{className:"mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10",children:e.jsx("span",{className:"text-2xl text-destructive",children:"!"})}),e.jsx("h3",{className:"mb-1 text-lg font-semibold",children:"Something went wrong"}),e.jsx("p",{className:"mb-4 max-w-xs text-sm text-muted-foreground",children:"We encountered an error while loading your data. Please try again."}),e.jsx(t,{variant:"outline",children:"Retry"})]})})},l={name:"All Empty States",parameters:{layout:"fullscreen"},render:()=>e.jsx("div",{className:"grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3",children:[{icon:x,title:"No results",description:"Try adjusting your search.",action:"Clear filters"},{icon:f,title:"Inbox zero",description:"You're all caught up.",action:void 0},{icon:p,title:"No documents",description:"Create your first document.",action:"New Document"},{icon:N,title:"No team members",description:"Invite people to collaborate.",action:"Invite"}].map(({icon:h,title:d,description:y,action:u})=>e.jsx(s,{children:e.jsxs(r,{className:"flex flex-col items-center justify-center py-8 text-center",children:[e.jsx("div",{className:"mb-3 flex size-10 items-center justify-center rounded-full bg-muted",children:e.jsx(h,{className:"size-5 text-muted-foreground"})}),e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:d}),e.jsx("p",{className:"mb-3 text-xs text-muted-foreground",children:y}),u&&e.jsx(t,{variant:"outline",size:"sm",children:u})]})},d))})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "No Search Results",
  render: () => <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
          <SearchIcon className="size-6 text-muted-foreground" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">No results found</h3>
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">
          We couldn&apos;t find anything matching your search. Try adjusting
          your filters or search terms.
        </p>
        <Button variant="outline">Clear filters</Button>
      </CardContent>
    </Card>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Empty Inbox",
  render: () => <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-muted">
          <InboxIcon className="size-6 text-muted-foreground" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">Inbox zero!</h3>
        <p className="max-w-xs text-sm text-muted-foreground">
          You&apos;re all caught up. No new messages to read.
        </p>
      </CardContent>
    </Card>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "No Documents",
  render: () => <Card className="w-[420px]">
      <CardHeader className="text-center">
        <div className="mx-auto mb-2 flex size-12 items-center justify-center rounded-full bg-muted">
          <FileIcon className="size-6 text-muted-foreground" />
        </div>
        <CardTitle>No documents yet</CardTitle>
        <CardDescription>
          Get started by creating your first document.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center gap-2">
        <Button>
          <PlusIcon data-icon="inline-start" />
          New Document
        </Button>
        <Button variant="outline">
          <UploadIcon data-icon="inline-start" />
          Import
        </Button>
      </CardContent>
    </Card>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "No Team Members",
  render: () => <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
          <UsersIcon className="size-6 text-primary" />
        </div>
        <h3 className="mb-1 text-lg font-semibold">Build your team</h3>
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">
          Invite team members to collaborate on projects together.
        </p>
        <div className="flex gap-2">
          <Button>Invite Members</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </CardContent>
    </Card>
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Error State",
  render: () => <Card className="w-[420px]">
      <CardContent className="flex flex-col items-center justify-center py-10 text-center">
        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-destructive/10">
          <span className="text-2xl text-destructive">!</span>
        </div>
        <h3 className="mb-1 text-lg font-semibold">Something went wrong</h3>
        <p className="mb-4 max-w-xs text-sm text-muted-foreground">
          We encountered an error while loading your data. Please try again.
        </p>
        <Button variant="outline">Retry</Button>
      </CardContent>
    </Card>
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "All Empty States",
  parameters: {
    layout: "fullscreen"
  },
  render: () => <div className="grid gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {[{
      icon: SearchIcon,
      title: "No results",
      description: "Try adjusting your search.",
      action: "Clear filters"
    }, {
      icon: InboxIcon,
      title: "Inbox zero",
      description: "You're all caught up.",
      action: undefined
    }, {
      icon: FileIcon,
      title: "No documents",
      description: "Create your first document.",
      action: "New Document"
    }, {
      icon: UsersIcon,
      title: "No team members",
      description: "Invite people to collaborate.",
      action: "Invite"
    }].map(({
      icon: Icon,
      title,
      description,
      action
    }) => <Card key={title}>
          <CardContent className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted">
              <Icon className="size-5 text-muted-foreground" />
            </div>
            <h3 className="mb-1 text-sm font-semibold">{title}</h3>
            <p className="mb-3 text-xs text-muted-foreground">{description}</p>
            {action && <Button variant="outline" size="sm">
                {action}
              </Button>}
          </CardContent>
        </Card>)}
    </div>
}`,...l.parameters?.docs?.source}}};const G=["NoResults","EmptyInbox","NoDocuments","NoTeamMembers","ErrorState","Gallery"];export{a as EmptyInbox,i as ErrorState,l as Gallery,o as NoDocuments,n as NoResults,c as NoTeamMembers,G as __namedExportsOrder,A as default};
