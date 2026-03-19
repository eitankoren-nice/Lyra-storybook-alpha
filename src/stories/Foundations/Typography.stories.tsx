import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta = {
  title: "Foundations/Typography",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj;

export const TypeScale: Story = {
  name: "Type Scale",
  render: () => (
    <div className="w-full max-w-3xl space-y-8 p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Typography
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Type scale using the Inter Variable font from the Tailwind preset.
        </p>
      </div>

      <section className="space-y-6">
        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            h1 &middot; scroll-m-20 text-4xl font-extrabold tracking-tight
            lg:text-5xl
          </p>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The DMV
          </h1>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            h2 &middot; scroll-m-20 border-b pb-2 text-3xl font-semibold
            tracking-tight first:mt-0
          </p>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The People of the Kingdom
          </h2>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            h3 &middot; scroll-m-20 text-2xl font-semibold tracking-tight
          </p>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            The Joke Tax Chronicles
          </h3>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            h4 &middot; scroll-m-20 text-xl font-semibold tracking-tight
          </p>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            People Stopped Telling Jokes
          </h4>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            p &middot; leading-7 [&:not(:first-child)]:mt-6
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax. Jokester was declared a
            hero and laughter echoed throughout the kingdom once more.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            blockquote &middot; mt-6 border-l-2 pl-6 italic
          </p>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &ldquo;After all,&rdquo; he said, &ldquo;everyone enjoys a good
            joke, so it&rsquo;s only fair that they should pay for the
            privilege.&rdquo;
          </blockquote>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            lead &middot; text-xl text-muted-foreground
          </p>
          <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and
            expects a response.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            large &middot; text-lg font-semibold
          </p>
          <div className="text-lg font-semibold">Are you absolutely sure?</div>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            small &middot; text-sm font-medium leading-none
          </p>
          <small className="text-sm font-medium leading-none">
            Email address
          </small>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            muted &middot; text-sm text-muted-foreground
          </p>
          <p className="text-sm text-muted-foreground">
            Enter your email address.
          </p>
        </div>

        <div className="space-y-1">
          <p className="font-mono text-xs text-muted-foreground">
            inline code &middot; relative rounded bg-muted px-[0.3rem]
            py-[0.2rem] font-mono text-sm font-semibold
          </p>
          <p>
            Use the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
              cn()
            </code>{" "}
            helper to merge Tailwind classes.
          </p>
        </div>
      </section>
    </div>
  ),
};

export const FontFamily: Story = {
  name: "Font Family",
  render: () => (
    <div className="w-full max-w-3xl space-y-6 p-6">
      <h2 className="text-lg font-semibold text-foreground">Font Family</h2>
      <div className="space-y-4">
        <div>
          <p className="mb-1 font-mono text-xs text-muted-foreground">
            font-sans (Geist Variable)
          </p>
          <p className="font-sans text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
        <div>
          <p className="mb-1 font-mono text-xs text-muted-foreground">
            font-mono
          </p>
          <p className="font-mono text-2xl">
            The quick brown fox jumps over the lazy dog
          </p>
        </div>
      </div>
    </div>
  ),
};

export const FontWeights: Story = {
  name: "Font Weights",
  render: () => {
    const weights = [
      { name: "Thin", cls: "font-thin" },
      { name: "Extra Light", cls: "font-extralight" },
      { name: "Light", cls: "font-light" },
      { name: "Normal", cls: "font-normal" },
      { name: "Medium", cls: "font-medium" },
      { name: "Semibold", cls: "font-semibold" },
      { name: "Bold", cls: "font-bold" },
      { name: "Extra Bold", cls: "font-extrabold" },
      { name: "Black", cls: "font-black" },
    ];
    return (
      <div className="w-full max-w-3xl space-y-3 p-6">
        <h2 className="mb-4 text-lg font-semibold text-foreground">
          Font Weights
        </h2>
        {weights.map((w) => (
          <div key={w.name} className="flex items-baseline gap-4">
            <span className="w-28 shrink-0 font-mono text-xs text-muted-foreground">
              {w.cls}
            </span>
            <span className={`text-xl ${w.cls}`}>
              {w.name} — Aa Bb Cc 0123
            </span>
          </div>
        ))}
      </div>
    );
  },
};
