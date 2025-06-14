"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "../lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700  dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Edsger W. Dijkstra",
    designation: "Pioneer of Structured Programming & Algorithmic Thinking",
    content: (
      <p>
            The computing scientist’s main challenge is not to get confused by the{" "}
            <Highlight>complexities of his own making</Highlight>.{" "}
            <Highlight>Elegance in code</Highlight> is not a luxury — it’s a{" "}
            <Highlight>necessity</Highlight>. The real challenge isn't solving problems,
            it's avoiding <Highlight>new ones</Highlight> you create.
          </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Founder of Tesla, SpaceX & Neuralink",
    content: (
      <p>
        Great engineers don’t just build things — they build things that{" "}
        <Highlight>should exist.</Highlight> They start with ‘what if’ and end
        with something <Highlight>real and working.</Highlight> They don’t wait for permission, they
        act on <Highlight>conviction.</Highlight> That’s how progress is made — not cautiously, but
        <Highlight>relentlessly.</Highlight>
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
          Engineering is not about perfect solutions — it’s about doing the best you
          can with <Highlight>imperfect data</Highlight>, under{" "}
          <Highlight>uncertain conditions</Highlight>, in a{" "}
          <Highlight>finite world</Highlight>. Every product is a{" "}
          <Highlight>balance</Highlight> between idealism and reality. The{" "}
          <Highlight>beauty</Highlight> lies in that compromise.
        </p>

    ),
  },
  {
    id: 3,
    name: "Alan Turing ",
    designation: "Father of Modern Computing & Pioneer of Artificial Intelligence",
    content: (
      <p>
    Sometimes it is the people no one imagines anything of who do the things that{" "}
    <Highlight>no one can imagine</Highlight>. True intelligence isn’t imitation — it’s the{" "}
    <Highlight>ability to create</Highlight>, to challenge assumptions, and to see{" "}
    <Highlight>possibility where others see limits</Highlight>.
  </p>
    ),
  },
];
