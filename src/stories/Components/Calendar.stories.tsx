import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
      />
    );
  },
};

export const Range: Story = {
  name: "Range Selection",
  render: () => {
    const today = new Date();
    const inOneWeek = new Date(today);
    inOneWeek.setDate(today.getDate() + 7);

    const [range, setRange] = useState<DateRange | undefined>({
      from: today,
      to: inOneWeek,
    });

    return (
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        numberOfMonths={2}
        className="rounded-lg border"
      />
    );
  },
};

export const DisabledDates: Story = {
  name: "Disabled Past Dates",
  render: () => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        disabled={{ before: new Date() }}
        className="rounded-lg border"
      />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
      <div className="flex flex-col items-center gap-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
        <p className="text-sm text-muted-foreground">
          Selected:{" "}
          <span className="font-medium text-foreground">
            {date ? date.toLocaleDateString() : "None"}
          </span>
        </p>
        <div className="flex gap-2">
          <button
            className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
            onClick={() => setDate(new Date())}
          >
            Today
          </button>
          <button
            className="rounded-md border px-3 py-1 text-sm hover:bg-muted"
            onClick={() => setDate(undefined)}
          >
            Clear
          </button>
        </div>
      </div>
    );
  },
};
