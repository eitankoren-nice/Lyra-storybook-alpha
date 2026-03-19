import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as a,a as n,b as s,c as t,d,e as x,f as g}from"./card-CKBy6sN6.js";import{B as C}from"./button-BXqy1VoR.js";import{B as j}from"./badge-BzcmPxaJ.js";import{I as h}from"./input-BkPxoM4h.js";import{L as u}from"./label-DI5Ue-X5.js";import"./iframe-DQFjSlNe.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BQHNewu7.js";import"./index-LHNt3CwB.js";import"./index-DMGC-ohM.js";import"./index-BH1e72rj.js";import"./index-UkCzX0Jp.js";import"./index-Bf-YUqJM.js";const I={title:"Components/Card",component:a,argTypes:{size:{control:"select",options:["default","sm"]}}},i={render:r=>e.jsxs(a,{className:"w-[350px]",...r,children:[e.jsxs(n,{children:[e.jsx(s,{children:"Card Title"}),e.jsx(t,{children:"Card description goes here."})]}),e.jsx(d,{children:e.jsx("p",{children:"Card content and details."})}),e.jsx(x,{children:e.jsx(C,{children:"Action"})})]})},o={name:"With Action",render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Notifications"}),e.jsx(t,{children:"You have 3 unread messages."}),e.jsx(g,{children:e.jsx(C,{variant:"outline",size:"sm",children:"Mark all read"})})]}),e.jsx(d,{children:e.jsx("p",{children:"Check your inbox for the latest updates."})})]})},c={name:"Small Size",render:()=>e.jsxs(a,{size:"sm",className:"w-[300px]",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Compact Card"}),e.jsx(t,{children:"Smaller padding and gaps."})]}),e.jsx(d,{children:e.jsx("p",{children:"More space-efficient layout."})})]})},l={name:"Login Form",render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsxs(n,{children:[e.jsx(s,{children:"Login"}),e.jsx(t,{children:"Enter your credentials to access your account."})]}),e.jsxs(d,{className:"space-y-4",children:[e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(u,{htmlFor:"login-email",children:"Email"}),e.jsx(h,{id:"login-email",type:"email",placeholder:"name@example.com"})]}),e.jsxs("div",{className:"grid gap-1.5",children:[e.jsx(u,{htmlFor:"login-password",children:"Password"}),e.jsx(h,{id:"login-password",type:"password"})]})]}),e.jsx(x,{className:"flex-col gap-2",children:e.jsx(C,{className:"w-full",children:"Sign In"})})]})},m={name:"Stats Card",render:()=>e.jsx("div",{className:"flex flex-wrap gap-4",children:[{title:"Total Revenue",value:"$45,231.89",change:"+20.1%"},{title:"Subscriptions",value:"+2,350",change:"+180.1%"},{title:"Active Users",value:"+12,234",change:"+19%"}].map(r=>e.jsxs(a,{className:"w-[200px]",children:[e.jsxs(n,{children:[e.jsx(t,{children:r.title}),e.jsx(s,{className:"text-2xl",children:r.value})]}),e.jsx(d,{children:e.jsxs(j,{variant:"secondary",children:[r.change," from last month"]})})]},r.title))})},p={name:"With Image",render:()=>e.jsxs(a,{className:"w-[350px]",children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Abstract background",className:"h-40 w-full object-cover"}),e.jsxs(n,{children:[e.jsx(s,{children:"Beautiful Scenery"}),e.jsx(t,{children:"A stunning abstract background."})]}),e.jsx(d,{children:e.jsx("p",{children:"Cards can include images at the top."})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Card className="w-[350px]" {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content and details.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "With Action",
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Mark all read
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Check your inbox for the latest updates.</p>
      </CardContent>
    </Card>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Small Size",
  render: () => <Card size="sm" className="w-[300px]">
      <CardHeader>
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>Smaller padding and gaps.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>More space-efficient layout.</p>
      </CardContent>
    </Card>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "Login Form",
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-1.5">
          <Label htmlFor="login-email">Email</Label>
          <Input id="login-email" type="email" placeholder="name@example.com" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="login-password">Password</Label>
          <Input id="login-password" type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Sign In</Button>
      </CardFooter>
    </Card>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: "Stats Card",
  render: () => <div className="flex flex-wrap gap-4">
      {[{
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%"
    }, {
      title: "Subscriptions",
      value: "+2,350",
      change: "+180.1%"
    }, {
      title: "Active Users",
      value: "+12,234",
      change: "+19%"
    }].map(stat => <Card key={stat.title} className="w-[200px]">
          <CardHeader>
            <CardDescription>{stat.title}</CardDescription>
            <CardTitle className="text-2xl">{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">{stat.change} from last month</Badge>
          </CardContent>
        </Card>)}
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "With Image",
  render: () => <Card className="w-[350px]">
      <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Abstract background" className="h-40 w-full object-cover" />
      <CardHeader>
        <CardTitle>Beautiful Scenery</CardTitle>
        <CardDescription>A stunning abstract background.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cards can include images at the top.</p>
      </CardContent>
    </Card>
}`,...p.parameters?.docs?.source}}};const k=["Default","WithAction","SmallSize","LoginForm","StatsCard","WithImage"];export{i as Default,l as LoginForm,c as SmallSize,m as StatsCard,o as WithAction,p as WithImage,k as __namedExportsOrder,I as default};
