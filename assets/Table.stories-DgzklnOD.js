import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as d,a as T,b as c,c as t,d as n,e as m,f as a,g as u}from"./table-SsvVPoVA.js";import{B as h}from"./badge-CG22eNUa.js";import"./iframe-JO7qmgB8.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-DaoQqdtn.js";const b=[{invoice:"INV001",status:"Paid",method:"Credit Card",amount:"$250.00"},{invoice:"INV002",status:"Pending",method:"PayPal",amount:"$150.00"},{invoice:"INV003",status:"Unpaid",method:"Bank Transfer",amount:"$350.00"},{invoice:"INV004",status:"Paid",method:"Credit Card",amount:"$450.00"},{invoice:"INV005",status:"Paid",method:"PayPal",amount:"$550.00"},{invoice:"INV006",status:"Pending",method:"Bank Transfer",amount:"$200.00"}],f={title:"Components/DataDisplay/Table",parameters:{layout:"padded"}},i={render:()=>e.jsxs(d,{children:[e.jsx(T,{children:"A list of your recent invoices."}),e.jsx(c,{children:e.jsxs(t,{children:[e.jsx(n,{className:"w-[100px]",children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:b.map(l=>e.jsxs(t,{children:[e.jsx(a,{className:"font-medium",children:l.invoice}),e.jsx(a,{children:l.status}),e.jsx(a,{children:l.method}),e.jsx(a,{className:"text-right",children:l.amount})]},l.invoice))}),e.jsx(u,{children:e.jsxs(t,{children:[e.jsx(a,{colSpan:3,children:"Total"}),e.jsx(a,{className:"text-right",children:"$1,950.00"})]})})]})},r={name:"With Status Badges",render:()=>{const l=s=>{switch(s){case"Paid":return"default";case"Pending":return"secondary";case"Unpaid":return"destructive";default:return"outline"}};return e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs(t,{children:[e.jsx(n,{children:"Invoice"}),e.jsx(n,{children:"Status"}),e.jsx(n,{children:"Method"}),e.jsx(n,{className:"text-right",children:"Amount"})]})}),e.jsx(m,{children:b.map(s=>e.jsxs(t,{children:[e.jsx(a,{className:"font-medium",children:s.invoice}),e.jsx(a,{children:e.jsx(h,{variant:l(s.status),children:s.status})}),e.jsx(a,{children:s.method}),e.jsx(a,{className:"text-right",children:s.amount})]},s.invoice))})]})}},o={render:()=>e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs(t,{children:[e.jsx(n,{children:"Name"}),e.jsx(n,{children:"Email"}),e.jsx(n,{children:"Role"})]})}),e.jsx(m,{children:[{name:"Alice Johnson",email:"alice@example.com",role:"Admin"},{name:"Bob Smith",email:"bob@example.com",role:"Editor"},{name:"Carol Williams",email:"carol@example.com",role:"Viewer"}].map(l=>e.jsxs(t,{children:[e.jsx(a,{className:"font-medium",children:l.name}),e.jsx(a,{children:l.email}),e.jsx(a,{children:l.role})]},l.email))})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map(inv => <TableRow key={inv.invoice}>
            <TableCell className="font-medium">{inv.invoice}</TableCell>
            <TableCell>{inv.status}</TableCell>
            <TableCell>{inv.method}</TableCell>
            <TableCell className="text-right">{inv.amount}</TableCell>
          </TableRow>)}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$1,950.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "With Status Badges",
  render: () => {
    const statusVariant = (status: string) => {
      switch (status) {
        case "Paid":
          return "default" as const;
        case "Pending":
          return "secondary" as const;
        case "Unpaid":
          return "destructive" as const;
        default:
          return "outline" as const;
      }
    };
    return <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(inv => <TableRow key={inv.invoice}>
              <TableCell className="font-medium">{inv.invoice}</TableCell>
              <TableCell>
                <Badge variant={statusVariant(inv.status)}>{inv.status}</Badge>
              </TableCell>
              <TableCell>{inv.method}</TableCell>
              <TableCell className="text-right">{inv.amount}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[{
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin"
      }, {
        name: "Bob Smith",
        email: "bob@example.com",
        role: "Editor"
      }, {
        name: "Carol Williams",
        email: "carol@example.com",
        role: "Viewer"
      }].map(user => <TableRow key={user.email}>
            <TableCell className="font-medium">{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>)}
      </TableBody>
    </Table>
}`,...o.parameters?.docs?.source}}};const w=["Default","WithBadges","Minimal"];export{i as Default,o as Minimal,r as WithBadges,w as __namedExportsOrder,f as default};
