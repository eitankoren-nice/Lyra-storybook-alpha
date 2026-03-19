import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CmZ5uWiA.js";import{c as s}from"./utils-BQHNewu7.js";import{B as g}from"./button-cSd2ZTat.js";import{c as G}from"./index-C-elOtzH.js";import{u as b,c as W}from"./index-8a4LLvRX.js";import{R as K,W as J,C as Q,T as U,D as X,a as w,b as Z,c as S,P as ee,O as te}from"./index-BqGmHg3U.js";import{c as ae}from"./index--niuIpz3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./index-qte31Kso.js";import"./index-CpN0KZLL.js";import"./index-AjXTxuLG.js";import"./index-CQ6A4TlU.js";import"./index-DrPyrK_L.js";import"./index-CQ0hFChn.js";import"./index-DKeaNEkD.js";import"./index-DSYFwbcU.js";import"./index-AtgC80Qb.js";var O="AlertDialog",[oe]=G(O,[S]),i=S(),E=t=>{const{__scopeAlertDialog:a,...o}=t,r=i(a);return e.jsx(K,{...r,...o,modal:!0})};E.displayName=O;var re="AlertDialogTrigger",P=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...r}=t,l=i(o);return e.jsx(Z,{...l,...r,ref:a})});P.displayName=re;var le="AlertDialogPortal",R=t=>{const{__scopeAlertDialog:a,...o}=t,r=i(a);return e.jsx(ee,{...r,...o})};R.displayName=le;var ne="AlertDialogOverlay",I=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...r}=t,l=i(o);return e.jsx(te,{...l,...r,ref:a})});I.displayName=ne;var d="AlertDialogContent",[ie,se]=oe(d),de=W("AlertDialogContent"),z=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,children:r,...l}=t,_=i(o),u=n.useRef(null),L=b(a,u),T=n.useRef(null);return e.jsx(J,{contentName:d,titleName:$,docsSlug:"alert-dialog",children:e.jsx(ie,{scope:o,cancelRef:T,children:e.jsxs(Q,{role:"alertdialog",..._,...l,ref:L,onOpenAutoFocus:ae(l.onOpenAutoFocus,c=>{c.preventDefault(),T.current?.focus({preventScroll:!0})}),onPointerDownOutside:c=>c.preventDefault(),onInteractOutside:c=>c.preventDefault(),children:[e.jsx(de,{children:r}),e.jsx(ge,{contentRef:u})]})})})});z.displayName=d;var $="AlertDialogTitle",F=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...r}=t,l=i(o);return e.jsx(U,{...l,...r,ref:a})});F.displayName=$;var M="AlertDialogDescription",B=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...r}=t,l=i(o);return e.jsx(X,{...l,...r,ref:a})});B.displayName=M;var ce="AlertDialogAction",H=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...r}=t,l=i(o);return e.jsx(w,{...l,...r,ref:a})});H.displayName=ce;var k="AlertDialogCancel",q=n.forwardRef((t,a)=>{const{__scopeAlertDialog:o,...r}=t,{cancelRef:l}=se(k,o),_=i(o),u=b(a,l);return e.jsx(w,{..._,...r,ref:u})});q.displayName=k;var ge=({contentRef:t})=>{const a=`\`${d}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${d}\` by passing a \`${M}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${d}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return n.useEffect(()=>{document.getElementById(t.current?.getAttribute("aria-describedby"))||console.warn(a)},[a,t]),null},ue=E,pe=P,me=R,De=I,Ae=z,fe=H,he=q,xe=F,ve=B;function A({...t}){return e.jsx(ue,{"data-slot":"alert-dialog",...t})}function N({...t}){return e.jsx(pe,{"data-slot":"alert-dialog-trigger",...t})}function V({...t}){return e.jsx(me,{"data-slot":"alert-dialog-portal",...t})}function Y({className:t,...a}){return e.jsx(De,{"data-slot":"alert-dialog-overlay",className:s("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",t),...a})}function f({className:t,size:a="default",...o}){return e.jsxs(V,{children:[e.jsx(Y,{}),e.jsx(Ae,{"data-slot":"alert-dialog-content","data-size":a,className:s("group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-background p-4 ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",t),...o})]})}function h({className:t,...a}){return e.jsx("div",{"data-slot":"alert-dialog-header",className:s("grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",t),...a})}function x({className:t,...a}){return e.jsx("div",{"data-slot":"alert-dialog-footer",className:s("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",t),...a})}function v({className:t,...a}){return e.jsx(xe,{"data-slot":"alert-dialog-title",className:s("text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",t),...a})}function j({className:t,...a}){return e.jsx(ve,{"data-slot":"alert-dialog-description",className:s("text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",t),...a})}function y({className:t,variant:a="default",size:o="default",...r}){return e.jsx(g,{variant:a,size:o,asChild:!0,children:e.jsx(fe,{"data-slot":"alert-dialog-action",className:s(t),...r})})}function C({className:t,variant:a="outline",size:o="default",...r}){return e.jsx(g,{variant:a,size:o,asChild:!0,children:e.jsx(he,{"data-slot":"alert-dialog-cancel",className:s(t),...r})})}A.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};C.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel",props:{variant:{defaultValue:{value:'"outline"',computed:!1},required:!1},size:{defaultValue:{value:'"default"',computed:!1},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent",props:{size:{required:!1,tsType:{name:"union",raw:'"default" | "sm"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}};j.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};x.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};h.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};Y.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};V.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};v.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};N.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};const He={title:"Components/AlertDialog",parameters:{layout:"centered"}},p={render:()=>e.jsxs(A,{children:[e.jsx(N,{asChild:!0,children:e.jsx(g,{variant:"outline",children:"Show Dialog"})}),e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx(v,{children:"Are you absolutely sure?"}),e.jsx(j,{children:"This action cannot be undone. This will permanently delete your account and remove your data from our servers."})]}),e.jsxs(x,{children:[e.jsx(C,{children:"Cancel"}),e.jsx(y,{children:"Continue"})]})]})]})},m={render:()=>e.jsxs(A,{children:[e.jsx(N,{asChild:!0,children:e.jsx(g,{variant:"destructive",children:"Delete Project"})}),e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx(v,{children:"Delete project"}),e.jsx(j,{children:"Are you sure you want to delete this project? All associated data, including files and settings, will be permanently removed. This action cannot be undone."})]}),e.jsxs(x,{children:[e.jsx(C,{children:"Cancel"}),e.jsx(y,{variant:"destructive",children:"Yes, delete project"})]})]})]})},D={render:()=>{const[t,a]=n.useState(!1);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(g,{variant:"outline",onClick:()=>a(!0),children:"Open Alert"}),e.jsxs("span",{className:"text-sm text-muted-foreground",children:["State: ",t?"open":"closed"]}),e.jsx(A,{open:t,onOpenChange:a,children:e.jsxs(f,{children:[e.jsxs(h,{children:[e.jsx(v,{children:"Discard unsaved changes?"}),e.jsx(j,{children:"You have unsaved changes that will be lost if you leave this page. Do you want to discard them?"})]}),e.jsxs(x,{children:[e.jsx(C,{children:"Keep editing"}),e.jsx(y,{children:"Discard"})]})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};const ke=["Default","Destructive","Controlled"];export{D as Controlled,p as Default,m as Destructive,ke as __namedExportsOrder,He as default};
