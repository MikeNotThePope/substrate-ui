import Link from "next/link";
import { Card, Badge, Button } from "@/components/ui";

const jobCards = [
  { title: "Senior Frontend Engineer", status: "Active" as const, date: "Mar 18, 2026" },
  { title: "Product Designer", status: "Paused" as const, date: "Mar 10, 2026" },
  { title: "Backend Engineer", status: "Closed" as const, date: "Feb 28, 2026" },
];

const statusVariant = {
  Active: "success",
  Paused: "warning",
  Closed: "destructive",
} as const;

function CardPropsTable() {
  const props = [
    { name: "variant", type: '"default" | "outlined" | "elevated" | "interactive"', description: "Visual treatment. Interactive adds hover/active animation." },
    { name: "asChild", type: "boolean", description: "Render as child element (e.g. Link) via Radix Slot" },
    { name: "className", type: "string", description: "Additional classes on the root element" },
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
            <tr key={prop.name} className="border-b last:border-b-0">
              <td className="p-3 font-mono text-xs">{prop.name}</td>
              <td className="p-3 font-mono text-xs text-muted-foreground">{prop.type}</td>
              <td className="p-3">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function CardPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; All Components
          </Link>
          <h1 className="font-head text-4xl mb-2">Card</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            Generic container with header, body, and footer. Multiple visual
            treatments including interactive.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-12">
        {/* ─── Card Variants ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Card Variants</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(["default", "outlined", "elevated", "interactive"] as const).map(
              (variant) => (
                <Card key={variant} variant={variant}>
                  <Card.Header>
                    <h3 className="font-head text-lg capitalize">{variant}</h3>
                  </Card.Header>
                  <Card.Body>
                    <p className="font-sans text-sm text-muted-foreground">
                      The {variant} card variant.
                    </p>
                  </Card.Body>
                  <Card.Footer>
                    <Button size="sm">Action</Button>
                  </Card.Footer>
                </Card>
              ),
            )}
          </div>
        </section>

        {/* ─── Job Card Example ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Composing: Job Cards</h2>
          <p className="font-sans text-sm text-muted-foreground mb-4">
            Interactive cards composed with Badge for a &ldquo;my jobs&rdquo; view.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobCards.map((job) => (
              <Card key={job.title} variant="interactive">
                <Card.Header>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-head text-base">{job.title}</h3>
                    <Badge variant={statusVariant[job.status]} size="sm">
                      {job.status}
                    </Badge>
                  </div>
                </Card.Header>
                <Card.Body>
                  <p className="font-sans text-sm text-muted-foreground">
                    Posted {job.date}
                  </p>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="outline">View</Button>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </section>

        {/* ─── Card Props ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Card Props</h2>
          <CardPropsTable />
          <p className="font-sans text-sm text-muted-foreground mt-2">
            Sub-components: <code className="font-mono">Card.Header</code>,{" "}
            <code className="font-mono">Card.Body</code>,{" "}
            <code className="font-mono">Card.Footer</code> each accept{" "}
            <code className="font-mono">className</code> and standard div props.
          </p>
        </section>

        {/* ─── Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-4">Usage</h2>
          <div className="border-2 bg-secondary text-secondary-foreground p-6 font-mono text-sm whitespace-pre overflow-x-auto">{`<Card variant="interactive">
  <Card.Header>
    <h3 className="font-head">Job Title</h3>
    <Badge variant="success" size="sm">Active</Badge>
  </Card.Header>
  <Card.Body>
    <p>Posted Mar 18, 2026</p>
  </Card.Body>
  <Card.Footer>
    <Button size="sm">View</Button>
  </Card.Footer>
</Card>`}</div>
        </section>
      </main>
    </div>
  );
}
