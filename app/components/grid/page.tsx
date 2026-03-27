import Link from "next/link";
import { Grid } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "columns", type: "1 | 2 | 3 | 4 | 5 | 6", default: "1", description: "Number of grid columns" },
    { name: "gap", type: '"none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"', default: '"md"', description: "Space between items" },
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

function GridCell({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-primary border-2 border-border p-4 font-mono text-sm text-center">
      {children}
    </div>
  );
}

export default function GridPage() {
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
          <h1 className="font-head text-4xl mb-2">Grid</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            CSS grid layout with configurable column count and gap.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Column Counts ─── */}
        {([1, 2, 3, 4] as const).map((cols) => (
          <section key={cols}>
            <h2 className="font-head text-2xl mb-4">{cols} Column{cols > 1 ? "s" : ""}</h2>
            <div className="border-2 p-6">
              <Grid columns={cols} gap="md">
                {Array.from({ length: cols * 2 }, (_, i) => (
                  <GridCell key={i}>{i + 1}</GridCell>
                ))}
              </Grid>
            </div>
          </section>
        ))}

        {/* ─── Gap Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Gap Sizes</h2>
          <div className="flex flex-col gap-6">
            {(["xs", "sm", "md", "lg", "xl"] as const).map((gap) => (
              <div key={gap}>
                <p className="font-mono text-xs text-muted-foreground mb-2">gap=&quot;{gap}&quot;</p>
                <div className="border-2 p-4">
                  <Grid columns={3} gap={gap}>
                    <div className="bg-secondary text-secondary-foreground border-2 border-border p-2 font-mono text-xs text-center">1</div>
                    <div className="bg-secondary text-secondary-foreground border-2 border-border p-2 font-mono text-xs text-center">2</div>
                    <div className="bg-secondary text-secondary-foreground border-2 border-border p-2 font-mono text-xs text-center">3</div>
                  </Grid>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Grid } from "substrate-ui";

<Grid columns={3} gap="lg">
  <Card>Feature 1</Card>
  <Card>Feature 2</Card>
  <Card>Feature 3</Card>
</Grid>

<Grid columns={2} gap="md">
  <Sidebar />
  <MainContent />
</Grid>`}</div>
        </section>
      </main>
    </div>
  );
}
