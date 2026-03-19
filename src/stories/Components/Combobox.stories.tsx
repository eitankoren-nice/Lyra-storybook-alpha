import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Combobox, type ComboboxOption } from "@/components/ui/combobox";
import { Label } from "@/components/ui/label";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const frameworks: ComboboxOption[] = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
  { value: "qwik", label: "Qwik" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Combobox
        options={frameworks}
        value={value}
        onChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
      />
    );
  },
};

export const WithPreSelectedValue: Story = {
  name: "With Pre-selected Value",
  render: () => {
    const [value, setValue] = useState("react");
    return (
      <Combobox
        options={frameworks}
        value={value}
        onChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
      />
    );
  },
};

const countries: ComboboxOption[] = [
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "kr", label: "South Korea" },
  { value: "br", label: "Brazil" },
  { value: "mx", label: "Mexico" },
  { value: "in", label: "India" },
  { value: "cn", label: "China" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "nl", label: "Netherlands" },
  { value: "se", label: "Sweden" },
  { value: "no", label: "Norway" },
  { value: "dk", label: "Denmark" },
  { value: "fi", label: "Finland" },
  { value: "pl", label: "Poland" },
];

export const LongList: Story = {
  name: "Long List",
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Combobox
        options={countries}
        value={value}
        onChange={setValue}
        placeholder="Select country..."
        searchPlaceholder="Search countries..."
        emptyMessage="No country found."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Combobox
      options={frameworks}
      value=""
      placeholder="Disabled combobox"
      disabled
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="grid gap-1.5">
          <Label>Favorite Framework</Label>
          <Combobox
            options={frameworks}
            value={value}
            onChange={setValue}
            placeholder="Select framework..."
            searchPlaceholder="Search frameworks..."
            className="w-[250px]"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          Selected: <span className="font-medium text-foreground">{value || "none"}</span>
        </p>
        <button
          onClick={() => setValue("")}
          className="text-sm text-primary underline underline-offset-4"
        >
          Clear selection
        </button>
      </div>
    );
  },
};
