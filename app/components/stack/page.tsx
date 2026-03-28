import Link from "next/link";
import { Stack } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "direction", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Stack direction" },
    { name: "gap", type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: "Space between items" },
    { name: "align", type: '"start" | "center" | "end" | "stretch" | "baseline"', default: "—", description: "Cross-axis alignment (items-*)" },
    { name: "justify", type: '"start" | "center" | "end" | "between" | "around" | "evenly"', default: "—", description: "Main-axis alignment (justify-*)" },
    { name: "as", type: "React.ElementType", default: '"div"', description: "Rendered HTML element" },
    { name: "className", type: "string", default: "—", description: "Additional classes on the root element" },
  ];

  return (
    <div className="border-2 overflow-x-auto">
      <table className="w-full font-sans text-sm">
        <thead>
          <tr className="border-b-2 bg-muted">
            <th className="text-left p-3 font-head">Prop</th>
            <th className="text-left p-3 font-head">Type</th>
            <th className="text-left p-3 font-head">Default</th>
            <th className="text-left p-3 font-head">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{prop.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{prop.default}</td>
              <td className="p-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StackPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Stack</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Vertical or horizontal flex layout with consistent spacing between children.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Vertical Stack (default) ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Vertical (default)</h2>
          <div className="border-2 p-6">
            <Stack>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Item 1</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Item 2</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Item 3</div>
            </Stack>
          </div>
        </section>

        {/* ─── Horizontal Stack ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Horizontal</h2>
          <div className="border-2 p-6">
            <Stack direction="horizontal">
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Item 1</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Item 2</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Item 3</div>
            </Stack>
          </div>
        </section>

        {/* ─── Gap Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Gap Sizes</h2>
          <div className="flex flex-col gap-6">
            {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((gap) => (
              <div key={gap}>
                <p className="font-mono text-xs text-muted-foreground mb-2">gap=&quot;{gap}&quot;</p>
                <div className="border-2 p-4">
                  <Stack direction="horizontal" gap={gap}>
                    <div className="bg-secondary text-secondary-foreground border-2 border-border px-3 py-1 font-mono text-xs">A</div>
                    <div className="bg-secondary text-secondary-foreground border-2 border-border px-3 py-1 font-mono text-xs">B</div>
                    <div className="bg-secondary text-secondary-foreground border-2 border-border px-3 py-1 font-mono text-xs">C</div>
                  </Stack>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Alignment ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Alignment</h2>
          <div className="border-2 p-6">
            <Stack direction="horizontal" align="center" justify="between" className="w-full">
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Left</div>
              <div className="bg-primary border-2 border-border p-6 font-mono text-sm">Center (taller)</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">Right</div>
            </Stack>
          </div>
          <p className="font-sans text-sm text-muted-foreground mt-2">
            align=&quot;center&quot; justify=&quot;between&quot;
          </p>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Stack } from "substrateui";

<Stack gap="lg">
  <Card>First</Card>
  <Card>Second</Card>
  <Card>Third</Card>
</Stack>

<Stack direction="horizontal" align="center" justify="between">
  <Logo />
  <Nav />
  <UserMenu />
</Stack>`}</div>
        </section>
      </main>
    </div>
  );
}
