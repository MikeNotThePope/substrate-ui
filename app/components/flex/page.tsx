import Link from "next/link";
import { Flex } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "direction", type: '"row" | "row-reverse" | "column" | "column-reverse"', default: '"row"', description: "Flex direction" },
    { name: "wrap", type: '"nowrap" | "wrap" | "wrap-reverse"', default: "—", description: "Flex wrapping behavior" },
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

export default function FlexPage() {
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
          <h1 className="font-head text-4xl mb-2">Flex</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            General-purpose flexbox container with direction, wrap, gap, and alignment controls.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Row (default) ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Row (default)</h2>
          <div className="border-2 p-6">
            <Flex>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">A</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">B</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">C</div>
            </Flex>
          </div>
        </section>

        {/* ─── Column ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Column</h2>
          <div className="border-2 p-6">
            <Flex direction="column">
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">A</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">B</div>
              <div className="bg-primary border-2 border-border p-3 font-mono text-sm">C</div>
            </Flex>
          </div>
        </section>

        {/* ─── Wrap ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Wrap</h2>
          <div className="border-2 p-6">
            <Flex wrap="wrap" gap="sm">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="bg-secondary text-secondary-foreground border-2 border-border px-4 py-2 font-mono text-xs"
                >
                  Tag {i + 1}
                </div>
              ))}
            </Flex>
          </div>
        </section>

        {/* ─── Justify & Align ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Justify &amp; Align</h2>
          <div className="flex flex-col gap-4">
            {(["start", "center", "end", "between", "around", "evenly"] as const).map((j) => (
              <div key={j}>
                <p className="font-mono text-xs text-muted-foreground mb-2">justify=&quot;{j}&quot;</p>
                <div className="border-2 p-4">
                  <Flex justify={j} align="center">
                    <div className="bg-primary border-2 border-border px-3 py-1 font-mono text-xs">A</div>
                    <div className="bg-primary border-2 border-border px-3 py-1 font-mono text-xs">B</div>
                    <div className="bg-primary border-2 border-border px-3 py-1 font-mono text-xs">C</div>
                  </Flex>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Props</h2>
          <PropsTable />
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Flex } from "substrateui";

<Flex gap="lg" align="center" justify="between">
  <Logo />
  <Nav />
  <UserMenu />
</Flex>

<Flex wrap="wrap" gap="sm">
  {tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
</Flex>

<Flex direction="column" gap="xl">
  <Header />
  <Main />
  <Footer />
</Flex>`}</div>
        </section>
      </main>
    </div>
  );
}
