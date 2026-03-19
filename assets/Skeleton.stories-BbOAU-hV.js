import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as m}from"./utils-BQHNewu7.js";function s({className:o,...d}){return e.jsx("div",{"data-slot":"skeleton",className:m("animate-pulse rounded-md bg-muted",o),...d})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const p={title:"Components/Skeleton",component:s},a={render:()=>e.jsx(s,{className:"h-4 w-[250px]"})},l={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{className:"size-12 rounded-full"}),e.jsx(s,{className:"h-4 w-[200px]"}),e.jsx(s,{className:"h-8 w-[120px] rounded-lg"})]})},n={name:"Card Loading",render:()=>e.jsxs("div",{className:"w-[350px] space-y-4 rounded-xl border border-border p-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(s,{className:"size-10 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(s,{className:"h-4 w-[150px]"}),e.jsx(s,{className:"h-3 w-[100px]"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-3 w-full"}),e.jsx(s,{className:"h-3 w-full"}),e.jsx(s,{className:"h-3 w-3/4"})]}),e.jsx(s,{className:"h-40 w-full rounded-lg"})]})},r={name:"Table Loading",render:()=>e.jsxs("div",{className:"w-full max-w-lg space-y-3",children:[e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{className:"h-4 w-1/4"}),e.jsx(s,{className:"h-4 w-1/4"}),e.jsx(s,{className:"h-4 w-1/4"}),e.jsx(s,{className:"h-4 w-1/4"})]}),Array.from({length:5}).map((o,d)=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(s,{className:"h-4 w-1/4"}),e.jsx(s,{className:"h-4 w-1/4"}),e.jsx(s,{className:"h-4 w-1/4"}),e.jsx(s,{className:"h-4 w-1/4"})]},d))]})},c={name:"Profile Loading",render:()=>e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx(s,{className:"size-16 rounded-full"}),e.jsxs("div",{className:"flex-1 space-y-3",children:[e.jsx(s,{className:"h-5 w-[180px]"}),e.jsx(s,{className:"h-4 w-[250px]"}),e.jsxs("div",{className:"flex gap-4 pt-2",children:[e.jsx(s,{className:"h-8 w-20 rounded-lg"}),e.jsx(s,{className:"h-8 w-20 rounded-lg"})]})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Skeleton className="h-4 w-[250px]" />
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
      <Skeleton className="size-12 rounded-full" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-8 w-[120px] rounded-lg" />
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Card Loading",
  render: () => <div className="w-[350px] space-y-4 rounded-xl border border-border p-4">
      <div className="flex items-center gap-3">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-3 w-[100px]" />
        </div>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-3/4" />
      </div>
      <Skeleton className="h-40 w-full rounded-lg" />
    </div>
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Table Loading",
  render: () => <div className="w-full max-w-lg space-y-3">
      <div className="flex gap-4">
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
        <Skeleton className="h-4 w-1/4" />
      </div>
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} className="flex gap-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-4 w-1/4" />
        </div>)}
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Profile Loading",
  render: () => <div className="flex items-start gap-4">
      <Skeleton className="size-16 rounded-full" />
      <div className="flex-1 space-y-3">
        <Skeleton className="h-5 w-[180px]" />
        <Skeleton className="h-4 w-[250px]" />
        <div className="flex gap-4 pt-2">
          <Skeleton className="h-8 w-20 rounded-lg" />
          <Skeleton className="h-8 w-20 rounded-lg" />
        </div>
      </div>
    </div>
}`,...c.parameters?.docs?.source}}};const x=["Default","Shapes","CardSkeleton","TableSkeleton","ProfileSkeleton"];export{n as CardSkeleton,a as Default,c as ProfileSkeleton,l as Shapes,r as TableSkeleton,x as __namedExportsOrder,p as default};
