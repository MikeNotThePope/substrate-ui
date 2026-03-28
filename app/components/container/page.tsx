import Link from "next/link";
import { Container } from "@/components/ui";

function PropsTable() {
  const props = [
    { name: "size", type: '"sm" | "md" | "lg" | "xl" | "full"', default: '"lg"', description: "Maximum width of the container" },
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

export default function ContainerPage() {
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
          <h1 className="font-head text-4xl mb-2">Container</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Centered, max-width wrapper with responsive horizontal padding.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Sizes ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Sizes</h2>
          <div className="flex flex-col gap-6">
            {(["sm", "md", "lg", "xl", "full"] as const).map((size) => (
              <div key={size}>
                <p className="font-mono text-xs text-muted-foreground mb-2">
                  size=&quot;{size}&quot;
                  <span className="ml-2">
                    ({size === "sm" ? "max-w-2xl / 672px" : size === "md" ? "max-w-4xl / 896px" : size === "lg" ? "max-w-6xl / 1152px" : size === "xl" ? "max-w-7xl / 1280px" : "max-w-full"})
                  </span>
                </p>
                <div className="border-2 border-dashed border-muted-foreground">
                  <Container size={size}>
                    <div className="bg-primary border-2 border-border p-4 font-mono text-sm text-center">
                      Container size=&quot;{size}&quot;
                    </div>
                  </Container>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Custom Element ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Custom Element</h2>
          <div className="border-2 p-6">
            <Container as="section" size="md">
              <div className="bg-secondary text-secondary-foreground border-2 border-border p-4 font-mono text-sm text-center">
                Rendered as &lt;section&gt; with size=&quot;md&quot;
              </div>
            </Container>
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
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`import { Container } from "substrateui";

<Container>
  <h1>Page content at max-w-6xl</h1>
</Container>

<Container size="sm">
  <ArticleBody />
</Container>

<Container as="main" size="xl">
  <Dashboard />
</Container>`}</div>
        </section>
      </main>
    </div>
  );
}
