import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-CSTJd8pR.js";import{c as K}from"./index-LHNt3CwB.js";import{c as j}from"./utils-BQHNewu7.js";import{u as U,c as _}from"./index-DR2O7Poo.js";import{c as J}from"./index-CO5IueMu.js";import{R as Q,I as W,c as F}from"./index-CBfJ65U5.js";import{P as X}from"./index-C-ljd_cB.js";import{P as N}from"./index-C6RaBJWp.js";import{u as Y}from"./index-BrGnSjho.js";import{u as Z}from"./index-Dte2Hmuk.js";import{C as L,a as S,b as D,c as V,d as P}from"./card-Bp3Tqc2u.js";import{B as R}from"./button-BmFYNnfe.js";import{I as f}from"./input-BWGvPssP.js";import{L as x}from"./label-B8bcHfmC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-I8i1ZqAf.js";import"./index-CLgKPshB.js";import"./index-CuFCIjjP.js";import"./index-Bbqrm6GA.js";import"./index-Bi6xzWi3.js";var w="Tabs",[ee]=J(w,[F]),k=F(),[ae,A]=ee(w),E=b.forwardRef((a,t)=>{const{__scopeTabs:n,value:s,onValueChange:i,defaultValue:c,orientation:r="horizontal",dir:p,activationMode:g="automatic",...v}=a,d=Y(p),[o,m]=U({prop:s,onChange:i,defaultProp:c??"",caller:w});return e.jsx(ae,{scope:n,baseId:Z(),value:o,onValueChange:m,orientation:r,dir:d,activationMode:g,children:e.jsx(N.div,{dir:d,"data-orientation":r,...v,ref:t})})});E.displayName=w;var M="TabsList",z=b.forwardRef((a,t)=>{const{__scopeTabs:n,loop:s=!0,...i}=a,c=A(M,n),r=k(n);return e.jsx(Q,{asChild:!0,...r,orientation:c.orientation,dir:c.dir,loop:s,children:e.jsx(N.div,{role:"tablist","aria-orientation":c.orientation,...i,ref:t})})});z.displayName=M;var B="TabsTrigger",$=b.forwardRef((a,t)=>{const{__scopeTabs:n,value:s,disabled:i=!1,...c}=a,r=A(B,n),p=k(n),g=O(r.baseId,s),v=q(r.baseId,s),d=s===r.value;return e.jsx(W,{asChild:!0,...p,focusable:!i,active:d,children:e.jsx(N.button,{type:"button",role:"tab","aria-selected":d,"aria-controls":v,"data-state":d?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:g,...c,ref:t,onMouseDown:_(a.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?r.onValueChange(s):o.preventDefault()}),onKeyDown:_(a.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&r.onValueChange(s)}),onFocus:_(a.onFocus,()=>{const o=r.activationMode!=="manual";!d&&!i&&o&&r.onValueChange(s)})})})});$.displayName=B;var G="TabsContent",H=b.forwardRef((a,t)=>{const{__scopeTabs:n,value:s,forceMount:i,children:c,...r}=a,p=A(G,n),g=O(p.baseId,s),v=q(p.baseId,s),d=s===p.value,o=b.useRef(d);return b.useEffect(()=>{const m=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(m)},[]),e.jsx(X,{present:i||d,children:({present:m})=>e.jsx(N.div,{"data-state":d?"active":"inactive","data-orientation":p.orientation,role:"tabpanel","aria-labelledby":g,hidden:!m,id:v,tabIndex:0,...r,ref:t,style:{...a.style,animationDuration:o.current?"0s":void 0},children:m&&c})})});H.displayName=G;function O(a,t){return`${a}-trigger-${t}`}function q(a,t){return`${a}-content-${t}`}var te=E,se=z,re=$,ne=H;function y({className:a,orientation:t="horizontal",...n}){return e.jsx(te,{"data-slot":"tabs","data-orientation":t,className:j("group/tabs flex gap-2 data-horizontal:flex-col",a),...n})}const oe=K("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function I({className:a,variant:t="default",...n}){return e.jsx(se,{"data-slot":"tabs-list","data-variant":t,className:j(oe({variant:t}),a),...n})}function l({className:a,...t}){return e.jsx(re,{"data-slot":"tabs-trigger",className:j("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent","data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground","after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",a),...t})}function u({className:a,...t}){return e.jsx(ne,{"data-slot":"tabs-content",className:j("flex-1 text-sm outline-none",a),...t})}y.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1}}};I.__docgenInfo={description:"",methods:[],displayName:"TabsList",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};u.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};const Ae={title:"Components/Navigation/Tabs",parameters:{layout:"centered"}},h={render:()=>e.jsxs(y,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(I,{children:[e.jsx(l,{value:"account",children:"Account"}),e.jsx(l,{value:"password",children:"Password"})]}),e.jsx(u,{value:"account",children:e.jsxs(L,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"Account"}),e.jsx(V,{children:"Make changes to your account here. Click save when you're done."})]}),e.jsxs(P,{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(x,{htmlFor:"tab-name",children:"Name"}),e.jsx(f,{id:"tab-name",defaultValue:"Pedro Duarte"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(x,{htmlFor:"tab-username",children:"Username"}),e.jsx(f,{id:"tab-username",defaultValue:"@peduarte"})]}),e.jsx(R,{children:"Save changes"})]})]})}),e.jsx(u,{value:"password",children:e.jsxs(L,{children:[e.jsxs(S,{children:[e.jsx(D,{children:"Password"}),e.jsx(V,{children:"Change your password here. After saving, you'll be logged out."})]}),e.jsxs(P,{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(x,{htmlFor:"current",children:"Current password"}),e.jsx(f,{id:"current",type:"password"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(x,{htmlFor:"new",children:"New password"}),e.jsx(f,{id:"new",type:"password"})]}),e.jsx(R,{children:"Save password"})]})]})})]})},T={render:()=>e.jsxs(y,{defaultValue:"overview",className:"w-[400px]",children:[e.jsxs(I,{children:[e.jsx(l,{value:"overview",children:"Overview"}),e.jsx(l,{value:"analytics",children:"Analytics"}),e.jsx(l,{value:"reports",children:"Reports"}),e.jsx(l,{value:"notifications",children:"Notifications"})]}),e.jsx(u,{value:"overview",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Overview content goes here."})}),e.jsx(u,{value:"analytics",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Analytics dashboard content."})}),e.jsx(u,{value:"reports",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Reports list here."})}),e.jsx(u,{value:"notifications",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Notification settings."})})]})},C={name:"Disabled Tab",render:()=>e.jsxs(y,{defaultValue:"active",className:"w-[400px]",children:[e.jsxs(I,{children:[e.jsx(l,{value:"active",children:"Active"}),e.jsx(l,{value:"disabled",disabled:!0,children:"Disabled"}),e.jsx(l,{value:"settings",children:"Settings"})]}),e.jsx(u,{value:"active",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"This tab is active. The middle tab is disabled."})}),e.jsx(u,{value:"settings",className:"p-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Settings content."})})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-1.5">
              <Label htmlFor="tab-name">Name</Label>
              <Input id="tab-name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="tab-username">Username</Label>
              <Input id="tab-username" defaultValue="@peduarte" />
            </div>
            <Button>Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-1.5">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
            <Button>Save password</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4">
        <p className="text-sm text-muted-foreground">
          Overview content goes here.
        </p>
      </TabsContent>
      <TabsContent value="analytics" className="p-4">
        <p className="text-sm text-muted-foreground">
          Analytics dashboard content.
        </p>
      </TabsContent>
      <TabsContent value="reports" className="p-4">
        <p className="text-sm text-muted-foreground">Reports list here.</p>
      </TabsContent>
      <TabsContent value="notifications" className="p-4">
        <p className="text-sm text-muted-foreground">
          Notification settings.
        </p>
      </TabsContent>
    </Tabs>
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: "Disabled Tab",
  render: () => <Tabs defaultValue="active" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="p-4">
        <p className="text-sm text-muted-foreground">
          This tab is active. The middle tab is disabled.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="p-4">
        <p className="text-sm text-muted-foreground">Settings content.</p>
      </TabsContent>
    </Tabs>
}`,...C.parameters?.docs?.source}}};const Le=["Default","Simple","DisabledTab"];export{h as Default,C as DisabledTab,T as Simple,Le as __namedExportsOrder,Ae as default};
