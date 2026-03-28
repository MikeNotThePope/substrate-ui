# Contributing to Substrate UI

## Getting Started

```bash
git clone https://github.com/MikeNotThePope/substrateui.git
cd substrateui
bun install
bun dev            # Next.js demo site
bun storybook      # Component explorer
bun run test       # Unit tests (Vitest)
bun run build      # Library build (tsup)
```

## Adding a New Component

Follow these steps to add a component that fits the existing architecture.

### 1. Create the component file

Create `components/ui/MyComponent.tsx`:

```tsx
import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const myComponentVariants = cva(
  // Base classes — always include border-2 border-border and shadow from the scale
  "border-2 border-border shadow-md font-sans",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        primary: "bg-primary text-primary-foreground",
      },
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface IMyComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof myComponentVariants> {}

export const MyComponent = React.forwardRef<HTMLDivElement, IMyComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(myComponentVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

MyComponent.displayName = "MyComponent";
```

**Key patterns:**
- Use `class-variance-authority` (CVA) for variants
- Use `cn()` (tailwind-merge + clsx) to merge classes
- Use `React.forwardRef` for ref forwarding
- Export both the component and its variant function
- Use semantic color tokens (`bg-primary`, not `bg-[#5294FF]`)
- Interface name: `I` prefix + PascalCase (`IMyComponentProps`)

### 2. Export from the barrel

Add to `src/index.ts`:

```tsx
export { MyComponent, myComponentVariants } from "@/components/ui/MyComponent";
export type { IMyComponentProps } from "@/components/ui/MyComponent";
```

### 3. Add a Storybook story

Create `components/ui/MyComponent.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { MyComponent } from "./MyComponent";

const meta = {
  title: "UI/MyComponent",
  component: MyComponent,
} satisfies Meta<typeof MyComponent>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <MyComponent>Hello</MyComponent>,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <MyComponent variant="default">Default</MyComponent>
      <MyComponent variant="primary">Primary</MyComponent>
    </div>
  ),
};
```

### 4. Add a demo page

Create `app/components/my-component/page.tsx` following the layout pattern used by existing pages (header with back link, sections, PropsTable, Usage code block).

### 5. Add a test file

Create `components/ui/MyComponent.test.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("renders children", () => {
    render(<MyComponent>Hello</MyComponent>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("merges custom className", () => {
    render(<MyComponent className="my-class" data-testid="mc">Test</MyComponent>);
    expect(screen.getByTestId("mc")).toHaveClass("my-class");
  });
});
```

Every new component **must** ship with a `.test.tsx` file. Aim for 3-5 tests covering: rendering, className merging, variants, and key interactions.

### 6. Verify

```bash
bun run test       # No regressions
bun run build      # Library compiles cleanly
bun dev            # Check demo page renders
```

## Proposing Token Changes

Tokens live in `base/substrate.css` inside `@layer substrate`.

- **Adding new tokens** (new custom properties): Submit a normal PR. Register them in `@theme inline` if they need Tailwind utility access.
- **Changing existing token values** (modifying `--primary`, `--spacing-4`, etc.): Requires explicit confirmation in the PR description. Existing token values affect all downstream consumers. Flag the change clearly and explain the reasoning.

## Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Component | PascalCase | `DataTable` |
| Component file | PascalCase `.tsx` | `DataTable.tsx` |
| Variant function | camelCase | `dataTableVariants` |
| Interface | `I` + PascalCase | `IDataTableProps` |
| Route directory | kebab-case | `app/components/data-table/` |
| CSS token | kebab-case with `--` prefix | `--primary-foreground` |
| Story file | PascalCase `.stories.tsx` | `DataTable.stories.tsx` |

## PR Process

1. Branch from `main`
2. Make your changes following the patterns above
3. Run `bun run test` and `bun run build` before pushing
4. Open a PR with a clear description of what changed and why
5. If changing token values, flag it explicitly in the PR description

## Code Style

- Tailwind classes via `cn()` utility — never inline `style=` except for truly dynamic values
- CVA for variant management
- Semantic tokens only — no raw hex values in components
- Radix UI for interactive primitives — preserve accessibility props and forwarded refs
- TypeScript strict mode — no `any` types

## Component Status Labels

Every component is tracked in `STATUS.md` with one of three labels:

- **Stable** — Tests + stories + demo page + stable API. Safe for production use.
- **Beta** — Functional with tests, but the API may change in future releases.
- **Experimental** — New or minimal test coverage. Use with caution.

When adding a new component, add it to `STATUS.md` with an initial status of **Beta**. Promote to **Stable** once it has full test coverage and the API is settled.
