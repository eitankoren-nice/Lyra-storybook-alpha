import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DQFjSlNe.js";import{c as x}from"./utils-BQHNewu7.js";import{B as N}from"./button-BXqy1VoR.js";import{C as w}from"./checkbox-C3GxtAGf.js";import{P as D,a as V,b as M}from"./popover-BOG0FRTh.js";import{C as O}from"./chevrons-up-down-Cm_4fo2-.js";import{L as k}from"./label-DI5Ue-X5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-LHNt3CwB.js";import"./index-DMGC-ohM.js";import"./check-BAHUCrue.js";import"./createLucideIcon-l8_twk-U.js";import"./index-COG-14iT.js";import"./index-BXjqDAmY.js";import"./index-z6BhDnS6.js";import"./index-DxflxE-g.js";import"./index-t4iTqBom.js";import"./index-Y9Y8SifL.js";import"./index-BH1e72rj.js";import"./index-UkCzX0Jp.js";import"./index-Bf-YUqJM.js";import"./index-BpIsosLX.js";import"./index-CrGZRD4o.js";import"./index-Cx-XPqnF.js";import"./index-ByxLMRuu.js";import"./index-B0JKHVSP.js";function r({options:n,value:t=[],onChange:u,placeholder:o="Select options",disabled:b=!1,className:h}){const[f,S]=c.useState(!1);function y(a){const l=t.includes(a)?t.filter(s=>s!==a):[...t,a];u?.(l)}function j(){if(t.length===0)return o;const a=n.filter(s=>t.includes(s.value));return a.length<=2?a.map(s=>s.label).join(", "):`${a.slice(0,2).map(s=>s.label).join(", ")} +${a.length-2}`}const C=t.length>0;return e.jsxs(D,{open:f,onOpenChange:S,children:[e.jsx(V,{asChild:!0,children:e.jsxs(N,{variant:"outline",role:"combobox","aria-expanded":f,disabled:b,className:x("w-[200px] justify-between font-normal",!C&&"text-muted-foreground",h),children:[e.jsx("span",{className:"truncate",children:j()}),e.jsx(O,{className:"ml-2 size-4 shrink-0 opacity-50"})]})}),e.jsx(M,{className:"w-(--radix-popover-trigger-width) p-1",align:"start",children:e.jsx("div",{role:"listbox","aria-multiselectable":"true",className:"flex max-h-60 flex-col overflow-y-auto",children:n.map(a=>{const l=t.includes(a.value);return e.jsxs("button",{type:"button",role:"option","aria-selected":l,className:x("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none","hover:bg-muted hover:text-foreground","focus-visible:bg-muted focus-visible:text-foreground",l&&"text-foreground"),onClick:()=>y(a.value),children:[e.jsx(w,{checked:l,tabIndex:-1,"aria-hidden":!0,className:"pointer-events-none"}),e.jsx("span",{className:"truncate",children:a.label})]},a.value)})})})]})}r.__docgenInfo={description:"",methods:[],displayName:"MultiSelectDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"MultiSelectOption"}],raw:"MultiSelectOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select options"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Components/MultiSelectDropdown",component:r,parameters:{layout:"centered"}},i=[{label:"Marketing",value:"marketing"},{label:"Sales",value:"sales"},{label:"Support",value:"support"},{label:"Engineering",value:"engineering"},{label:"Finance",value:"finance"}],p={render:()=>{const[n,t]=c.useState([]);return e.jsx(r,{options:i,value:n,onChange:t,placeholder:"Select departments"})}},d={name:"With Selected Values",render:()=>{const[n,t]=c.useState(["engineering","marketing"]);return e.jsx(r,{options:i,value:n,onChange:t,placeholder:"Select departments"})}},L=[{label:"Marketing",value:"marketing"},{label:"Sales",value:"sales"},{label:"Support",value:"support"},{label:"Engineering",value:"engineering"},{label:"Finance",value:"finance"},{label:"Human Resources",value:"hr"},{label:"Legal",value:"legal"},{label:"Operations",value:"operations"},{label:"Product",value:"product"},{label:"Design",value:"design"},{label:"Data Science",value:"data-science"},{label:"Quality Assurance",value:"qa"},{label:"DevOps",value:"devops"},{label:"Security",value:"security"},{label:"Customer Success",value:"customer-success"}],m={name:"Many Options (Scrollable)",render:()=>{const[n,t]=c.useState([]);return e.jsx(r,{options:L,value:n,onChange:t,placeholder:"Select departments",className:"w-[250px]"})}},g={render:()=>e.jsx(r,{options:i,value:["sales"],placeholder:"Select departments",disabled:!0})},v={render:()=>{const[n,t]=c.useState([]),u=i.filter(o=>n.includes(o.value)).map(o=>o.label);return e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(k,{children:"Departments"}),e.jsx(r,{options:i,value:n,onChange:t,placeholder:"Select departments",className:"w-[250px]"})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Selected:"," ",e.jsx("span",{className:"font-medium text-foreground",children:u.length>0?u.join(", "):"none"})]}),e.jsx("button",{onClick:()=>t([]),className:"text-sm text-primary underline underline-offset-4",children:"Clear all"})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelectDropdown options={departments} value={value} onChange={setValue} placeholder="Select departments" />;
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: "With Selected Values",
  render: () => {
    const [value, setValue] = useState<string[]>(["engineering", "marketing"]);
    return <MultiSelectDropdown options={departments} value={value} onChange={setValue} placeholder="Select departments" />;
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Many Options (Scrollable)",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <MultiSelectDropdown options={manyOptions} value={value} onChange={setValue} placeholder="Select departments" className="w-[250px]" />;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <MultiSelectDropdown options={departments} value={["sales"]} placeholder="Select departments" disabled />
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const selectedLabels = departments.filter(d => value.includes(d.value)).map(d => d.label);
    return <div className="flex flex-col items-center gap-4">
        <div className="grid gap-1.5">
          <Label>Departments</Label>
          <MultiSelectDropdown options={departments} value={value} onChange={setValue} placeholder="Select departments" className="w-[250px]" />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          <span className="font-medium text-foreground">
            {selectedLabels.length > 0 ? selectedLabels.join(", ") : "none"}
          </span>
        </p>
        <button onClick={() => setValue([])} className="text-sm text-primary underline underline-offset-4">
          Clear all
        </button>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const le=["Default","WithSelectedValues","ManyOptions","Disabled","Controlled"];export{v as Controlled,p as Default,g as Disabled,m as ManyOptions,d as WithSelectedValues,le as __namedExportsOrder,re as default};
