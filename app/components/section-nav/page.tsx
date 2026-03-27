"use client";

import Link from "next/link";
import { SectionNav } from "@/components/SectionNav/SectionNav";

const exampleItems = [
  { label: "Overview", id: "overview" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

function PropsTable() {
  const props = [
    {
      name: "items",
      type: "{ label: string; id: string }[]",
      description: "Section labels and their corresponding element IDs",
    },
    {
      name: "className",
      type: "string",
      description: "Additional classes on the root nav element",
    },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Prop</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b">
              <td className="p-3 font-mono">{prop.name}</td>
              <td className="p-3 font-mono text-muted-foreground">
                {prop.type}
              </td>
              <td className="p-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DemoSection({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="py-24">
      <h2 className="font-head text-2xl mb-4">{title}</h2>
      <p className="font-sans text-muted-foreground">
        Scroll between sections to see the active state update in the nav above.
      </p>
    </section>
  );
}

export default function SectionNavDemo() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <Link
          href="/"
          className="font-head text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
        >
          ← Back
        </Link>

        <h1 className="font-head text-4xl mb-2">SectionNav</h1>
        <p className="font-sans text-lg text-muted-foreground mb-8">
          Sticky horizontal anchor navigation that highlights the active section
          as you scroll. Uses IntersectionObserver for scroll tracking.
        </p>

        <div className="flex flex-col gap-12 mb-12">
          <div>
            <h2 className="font-head text-xl mb-4">Props</h2>
            <PropsTable />
          </div>
        </div>
      </div>

      <SectionNav items={exampleItems} />

      <div className="mx-auto max-w-4xl px-4">
        {exampleItems.map((item) => (
          <DemoSection key={item.id} id={item.id} title={item.label} />
        ))}
      </div>
    </div>
  );
}
