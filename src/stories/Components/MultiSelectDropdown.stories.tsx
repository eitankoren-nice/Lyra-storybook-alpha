import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  MultiSelectDropdown,
  type MultiSelectOption,
} from "@/components/ui/multi-select-dropdown";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof MultiSelectDropdown> = {
  title: "Components/MultiSelectDropdown",
  component: MultiSelectDropdown,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelectDropdown>;

const departments: MultiSelectOption[] = [
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Support", value: "support" },
  { label: "Engineering", value: "engineering" },
  { label: "Finance", value: "finance" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <MultiSelectDropdown
        options={departments}
        value={value}
        onChange={setValue}
        placeholder="Select departments"
      />
    );
  },
};

export const WithSelectedValues: Story = {
  name: "With Selected Values",
  render: () => {
    const [value, setValue] = useState<string[]>([
      "engineering",
      "marketing",
    ]);
    return (
      <MultiSelectDropdown
        options={departments}
        value={value}
        onChange={setValue}
        placeholder="Select departments"
      />
    );
  },
};

const manyOptions: MultiSelectOption[] = [
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Support", value: "support" },
  { label: "Engineering", value: "engineering" },
  { label: "Finance", value: "finance" },
  { label: "Human Resources", value: "hr" },
  { label: "Legal", value: "legal" },
  { label: "Operations", value: "operations" },
  { label: "Product", value: "product" },
  { label: "Design", value: "design" },
  { label: "Data Science", value: "data-science" },
  { label: "Quality Assurance", value: "qa" },
  { label: "DevOps", value: "devops" },
  { label: "Security", value: "security" },
  { label: "Customer Success", value: "customer-success" },
];

export const ManyOptions: Story = {
  name: "Many Options (Scrollable)",
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return (
      <MultiSelectDropdown
        options={manyOptions}
        value={value}
        onChange={setValue}
        placeholder="Select departments"
        className="w-[250px]"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <MultiSelectDropdown
      options={departments}
      value={["sales"]}
      placeholder="Select departments"
      disabled
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    const selectedLabels = departments
      .filter((d) => value.includes(d.value))
      .map((d) => d.label);

    return (
      <div className="flex flex-col items-center gap-4">
        <div className="grid gap-1.5">
          <Label>Departments</Label>
          <MultiSelectDropdown
            options={departments}
            value={value}
            onChange={setValue}
            placeholder="Select departments"
            className="w-[250px]"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          <span className="font-medium text-foreground">
            {selectedLabels.length > 0 ? selectedLabels.join(", ") : "none"}
          </span>
        </p>
        <button
          onClick={() => setValue([])}
          className="text-sm text-primary underline underline-offset-4"
        >
          Clear all
        </button>
      </div>
    );
  },
};
