import{j as r}from"./jsx-runtime-u17CrQMm.js";import"./iframe-DE1cbr3P.js";import{c as d}from"./utils-BQHNewu7.js";import{C as h}from"./chevron-right-DETqdrMr.js";import{E as x}from"./ellipsis-DMgB3G9R.js";import{S as j}from"./index-D8y5YKQA.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-C-fz0ll8.js";function o({className:e,...a}){return r.jsx("nav",{"aria-label":"breadcrumb","data-slot":"breadcrumb",className:d(e),...a})}function u({className:e,...a}){return r.jsx("ol",{"data-slot":"breadcrumb-list",className:d("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",e),...a})}function n({className:e,...a}){return r.jsx("li",{"data-slot":"breadcrumb-item",className:d("inline-flex items-center gap-1",e),...a})}function c({asChild:e,className:a,...b}){const p=e?j:"a";return r.jsx(p,{"data-slot":"breadcrumb-link",className:d("transition-colors hover:text-foreground",a),...b})}function l({className:e,...a}){return r.jsx("span",{"data-slot":"breadcrumb-page",role:"link","aria-disabled":"true","aria-current":"page",className:d("font-normal text-foreground",e),...a})}function s({children:e,className:a,...b}){return r.jsx("li",{"data-slot":"breadcrumb-separator",role:"presentation","aria-hidden":"true",className:d("[&>svg]:size-3.5",a),...b,children:e??r.jsx(h,{})})}function B({className:e,...a}){return r.jsxs("span",{"data-slot":"breadcrumb-ellipsis",role:"presentation","aria-hidden":"true",className:d("flex size-5 items-center justify-center [&>svg]:size-4",e),...a,children:[r.jsx(x,{}),r.jsx("span",{className:"sr-only",children:"More"})]})}o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};s.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbEllipsis"};const _={title:"Components/Navigation/Breadcrumb",parameters:{layout:"centered"}},m={render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"#",children:"Components"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Breadcrumb"})})]})})},t={name:"With Ellipsis",render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(B,{})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"#",children:"Category"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"Current Page"})})]})})},i={name:"Long Path",render:()=>r.jsx(o,{children:r.jsxs(u,{children:[r.jsx(n,{children:r.jsx(c,{href:"#",children:"Home"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"#",children:"Products"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"#",children:"Electronics"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(c,{href:"#",children:"Laptops"})}),r.jsx(s,{}),r.jsx(n,{children:r.jsx(l,{children:"MacBook Pro"})})]})})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...m.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "With Ellipsis",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbEllipsis />
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Category</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Long Path",
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Electronics</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Laptops</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>MacBook Pro</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...i.parameters?.docs?.source}}};const y=["Default","WithEllipsis","LongPath"];export{m as Default,i as LongPath,t as WithEllipsis,y as __namedExportsOrder,_ as default};
