import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as l,a,b as r,c as n,d as t,e as p,f as d,g as u}from"./select-DitwYDiC.js";import{L as h}from"./label-BMxxsBHF.js";import"./iframe-B0kHLf8d.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./chevron-up-BjM532nQ.js";import"./createLucideIcon-DbzT1Q_k.js";import"./check-CEcicpln.js";import"./index-bHRTFriH.js";import"./index-BP_Sgt07.js";import"./index-BdQq_4o_.js";import"./index-CkMOVJMk.js";import"./index-BRShwktA.js";import"./index-DzJqBxue.js";import"./index-D1PZ6OVp.js";import"./index-Cb9IwNWd.js";import"./index-DBu8Re0c.js";import"./index-Benmn2cN.js";import"./index-DpcLPgx0.js";import"./index-BbXHZqwY.js";import"./index-hE6thCiu.js";import"./index-G4YeSyJp.js";import"./index-DOkKkuEF.js";import"./index-5KDS6Fap.js";import"./index-CBg5L4aB.js";const R={title:"Components/Inputs/Select",parameters:{layout:"centered"}},c={render:()=>e.jsxs(l,{children:[e.jsx(a,{className:"w-[200px]",children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(n,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"}),e.jsx(t,{value:"grape",children:"Grape"}),e.jsx(t,{value:"mango",children:"Mango"})]})]})},s={name:"With Label",render:()=>e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(h,{children:"Favorite Fruit"}),e.jsxs(l,{children:[e.jsx(a,{className:"w-[200px]",children:e.jsx(r,{placeholder:"Select a fruit"})}),e.jsxs(n,{children:[e.jsx(t,{value:"apple",children:"Apple"}),e.jsx(t,{value:"banana",children:"Banana"}),e.jsx(t,{value:"orange",children:"Orange"})]})]})]})},i={name:"With Groups",render:()=>e.jsxs(l,{children:[e.jsx(a,{className:"w-[200px]",children:e.jsx(r,{placeholder:"Select a timezone"})}),e.jsxs(n,{children:[e.jsxs(p,{children:[e.jsx(d,{children:"North America"}),e.jsx(t,{value:"est",children:"Eastern (EST)"}),e.jsx(t,{value:"cst",children:"Central (CST)"}),e.jsx(t,{value:"mst",children:"Mountain (MST)"}),e.jsx(t,{value:"pst",children:"Pacific (PST)"})]}),e.jsx(u,{}),e.jsxs(p,{children:[e.jsx(d,{children:"Europe"}),e.jsx(t,{value:"gmt",children:"GMT"}),e.jsx(t,{value:"cet",children:"Central European (CET)"}),e.jsx(t,{value:"eet",children:"Eastern European (EET)"})]})]})]})},o={name:"Small Size",render:()=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs(l,{children:[e.jsx(a,{size:"sm",className:"w-[160px]",children:e.jsx(r,{placeholder:"Small"})}),e.jsxs(n,{children:[e.jsx(t,{value:"a",children:"Option A"}),e.jsx(t,{value:"b",children:"Option B"})]})]}),e.jsxs(l,{children:[e.jsx(a,{size:"default",className:"w-[160px]",children:e.jsx(r,{placeholder:"Default"})}),e.jsxs(n,{children:[e.jsx(t,{value:"a",children:"Option A"}),e.jsx(t,{value:"b",children:"Option B"})]})]})]})},m={render:()=>e.jsxs(l,{disabled:!0,children:[e.jsx(a,{className:"w-[200px]",children:e.jsx(r,{placeholder:"Disabled"})}),e.jsx(n,{children:e.jsx(t,{value:"a",children:"Option A"})})]})},S={name:"With Disabled Items",render:()=>e.jsxs(l,{children:[e.jsx(a,{className:"w-[200px]",children:e.jsx(r,{placeholder:"Select a plan"})}),e.jsxs(n,{children:[e.jsx(t,{value:"free",children:"Free"}),e.jsx(t,{value:"pro",children:"Pro"}),e.jsx(t,{value:"enterprise",disabled:!0,children:"Enterprise (Coming Soon)"})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
        <SelectItem value="mango">Mango</SelectItem>
      </SelectContent>
    </Select>
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "With Label",
  render: () => <div className="grid gap-1.5">
      <Label>Favorite Fruit</Label>
      <Select>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "With Groups",
  render: () => <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a timezone" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>North America</SelectLabel>
          <SelectItem value="est">Eastern (EST)</SelectItem>
          <SelectItem value="cst">Central (CST)</SelectItem>
          <SelectItem value="mst">Mountain (MST)</SelectItem>
          <SelectItem value="pst">Pacific (PST)</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Europe</SelectLabel>
          <SelectItem value="gmt">GMT</SelectItem>
          <SelectItem value="cet">Central European (CET)</SelectItem>
          <SelectItem value="eet">Eastern European (EET)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Small Size",
  render: () => <div className="flex items-center gap-3">
      <Select>
        <SelectTrigger size="sm" className="w-[160px]">
          <SelectValue placeholder="Small" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="default" className="w-[160px]">
          <SelectValue placeholder="Default" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="a">Option A</SelectItem>
          <SelectItem value="b">Option B</SelectItem>
        </SelectContent>
      </Select>
    </div>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="a">Option A</SelectItem>
      </SelectContent>
    </Select>
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "With Disabled Items",
  render: () => <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="free">Free</SelectItem>
        <SelectItem value="pro">Pro</SelectItem>
        <SelectItem value="enterprise" disabled>
          Enterprise (Coming Soon)
        </SelectItem>
      </SelectContent>
    </Select>
}`,...S.parameters?.docs?.source}}};const k=["Default","WithLabel","WithGroups","SmallSize","Disabled","WithDisabledItems"];export{c as Default,m as Disabled,o as SmallSize,S as WithDisabledItems,i as WithGroups,s as WithLabel,k as __namedExportsOrder,R as default};
