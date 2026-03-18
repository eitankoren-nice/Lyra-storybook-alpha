import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Card> = {
  title: "Components/DataDisplay/Card",
  component: Card,
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
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
  ),
};

export const WithAction: Story = {
  name: "With Action",
  render: () => (
    <Card className="w-[350px]">
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
  ),
};

export const SmallSize: Story = {
  name: "Small Size",
  render: () => (
    <Card size="sm" className="w-[300px]">
      <CardHeader>
        <CardTitle>Compact Card</CardTitle>
        <CardDescription>Smaller padding and gaps.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>More space-efficient layout.</p>
      </CardContent>
    </Card>
  ),
};

export const LoginForm: Story = {
  name: "Login Form",
  render: () => (
    <Card className="w-[350px]">
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
  ),
};

export const StatsCard: Story = {
  name: "Stats Card",
  render: () => (
    <div className="flex flex-wrap gap-4">
      {[
        { title: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
        { title: "Subscriptions", value: "+2,350", change: "+180.1%" },
        { title: "Active Users", value: "+12,234", change: "+19%" },
      ].map((stat) => (
        <Card key={stat.title} className="w-[200px]">
          <CardHeader>
            <CardDescription>{stat.title}</CardDescription>
            <CardTitle className="text-2xl">{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="secondary">{stat.change} from last month</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};

export const WithImage: Story = {
  name: "With Image",
  render: () => (
    <Card className="w-[350px]">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Abstract background"
        className="h-40 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>Beautiful Scenery</CardTitle>
        <CardDescription>A stunning abstract background.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Cards can include images at the top.</p>
      </CardContent>
    </Card>
  ),
};
