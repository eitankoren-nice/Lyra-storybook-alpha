import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-V4Wu0_eO.js";import{c as _}from"./utils-BQHNewu7.js";import{c as $}from"./index-DRWpz-Kw.js";import{P as b}from"./index-qroIz-yI.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BelDqYTJ.js";import"./index-D40oIU76.js";import"./index-0CtgsbTt.js";var g="Progress",N=100,[A]=$(g),[V,z]=A(g),P=y.forwardRef((s,a)=>{const{__scopeProgress:l,value:n=null,max:r,getValueLabel:f=D,...d}=s;(r||r===0)&&!j(r)&&console.error(G(`${r}`,"Progress"));const o=j(r)?r:N;n!==null&&!h(n,o)&&console.error(L(`${n}`,"Progress"));const i=h(n,o)?n:null,I=x(i)?f(i,o):void 0;return e.jsx(V,{scope:l,value:i,max:o,children:e.jsx(b.div,{"aria-valuemax":o,"aria-valuemin":0,"aria-valuenow":x(i)?i:void 0,"aria-valuetext":I,role:"progressbar","data-state":E(i,o),"data-value":i??void 0,"data-max":o,...d,ref:a})})});P.displayName=g;var w="ProgressIndicator",S=y.forwardRef((s,a)=>{const{__scopeProgress:l,...n}=s,r=z(w,l);return e.jsx(b.div,{"data-state":E(r.value,r.max),"data-value":r.value??void 0,"data-max":r.max,...n,ref:a})});S.displayName=w;function D(s,a){return`${Math.round(s/a*100)}%`}function E(s,a){return s==null?"indeterminate":s===a?"complete":"loading"}function x(s){return typeof s=="number"}function j(s){return x(s)&&!isNaN(s)&&s>0}function h(s,a){return x(s)&&!isNaN(s)&&s<=a&&s>=0}function G(s,a){return`Invalid prop \`max\` of value \`${s}\` supplied to \`${a}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${N}\`.`}function L(s,a){return`Invalid prop \`value\` of value \`${s}\` supplied to \`${a}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${N} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var R=P,U=S;function t({className:s,value:a,...l}){return e.jsx(R,{"data-slot":"progress",className:_("relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",s),...l,children:e.jsx(U,{"data-slot":"progress-indicator",className:"size-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(a||0)}%)`}})})}t.__docgenInfo={description:"",methods:[],displayName:"Progress"};const X={title:"Components/Feedback/Progress",component:t,args:{value:60},argTypes:{value:{control:{type:"range",min:0,max:100,step:1}}},decorators:[s=>e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(s,{})})]},c={},m={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{className:"text-muted-foreground",children:"0%"})}),e.jsx(t,{value:0})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{className:"text-muted-foreground",children:"25%"})}),e.jsx(t,{value:25})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{className:"text-muted-foreground",children:"50%"})}),e.jsx(t,{value:50})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{className:"text-muted-foreground",children:"75%"})}),e.jsx(t,{value:75})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"flex justify-between text-sm",children:e.jsx("span",{className:"text-muted-foreground",children:"100%"})}),e.jsx(t,{value:100})]})]})},u={name:"With Label",render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"font-medium",children:"Uploading..."}),e.jsx("span",{className:"text-muted-foreground",children:"60%"})]}),e.jsx(t,{value:60})]})},p={render:()=>{const{useState:s,useEffect:a}=require("react");function l(){const[n,r]=s(0);return a(()=>{const f=setInterval(()=>{r(d=>d>=100?0:d+1)},50);return()=>clearInterval(f)},[]),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"font-medium",children:"Processing..."}),e.jsxs("span",{className:"text-muted-foreground",children:[n,"%"]})]}),e.jsx(t,{value:n})]})}return e.jsx(l,{})}},v={name:"Storage Usage Example",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"Storage"}),[{label:"Documents",value:45,size:"4.5 GB"},{label:"Photos",value:72,size:"7.2 GB"},{label:"Videos",value:23,size:"2.3 GB"}].map(s=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{children:s.label}),e.jsx("span",{className:"text-muted-foreground",children:s.size})]}),e.jsx(t,{value:s.value})]},s.label))]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"{}",...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">0%</span>
        </div>
        <Progress value={0} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">25%</span>
        </div>
        <Progress value={25} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">50%</span>
        </div>
        <Progress value={50} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">75%</span>
        </div>
        <Progress value={75} />
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">100%</span>
        </div>
        <Progress value={100} />
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">Uploading...</span>
        <span className="text-muted-foreground">60%</span>
      </div>
      <Progress value={60} />
    </div>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      useState,
      useEffect
    } = require("react");
    function AnimatedProgress() {
      const [progress, setProgress] = useState(0);
      useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prev: number) => {
            if (prev >= 100) return 0;
            return prev + 1;
          });
        }, 50);
        return () => clearInterval(timer);
      }, []);
      return <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Processing...</span>
            <span className="text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>;
    }
    return <AnimatedProgress />;
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Storage Usage Example",
  render: () => <div className="space-y-4">
      <h4 className="text-sm font-medium">Storage</h4>
      {[{
      label: "Documents",
      value: 45,
      size: "4.5 GB"
    }, {
      label: "Photos",
      value: 72,
      size: "7.2 GB"
    }, {
      label: "Videos",
      value: 23,
      size: "2.3 GB"
    }].map(item => <div key={item.label} className="space-y-1">
          <div className="flex justify-between text-sm">
            <span>{item.label}</span>
            <span className="text-muted-foreground">{item.size}</span>
          </div>
          <Progress value={item.value} />
        </div>)}
    </div>
}`,...v.parameters?.docs?.source}}};const H=["Default","Values","WithLabel","Animated","StorageUsage"];export{p as Animated,c as Default,v as StorageUsage,m as Values,u as WithLabel,H as __namedExportsOrder,X as default};
