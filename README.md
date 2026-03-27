# Substrate UI

A neobrutalist React component library built on Radix UI primitives, CSS custom properties, and Tailwind CSS v4.

## Features

- 27 accessible UI primitives (Button, Dialog, Tabs, Select, etc.)
- 12 landing page components (Hero, Pricing, FAQ, etc.)
- 5 composite components (NavBar, CardGrid, SimplePage, etc.)
- Light & dark themes with CSS custom properties
- Hard pixel-offset shadows and bold borders (neobrutalist aesthetic)
- Built on Radix UI for accessibility out of the box
- Tree-shakeable ESM + CJS builds
- TypeScript with full type exports

## Installation

```bash
npm install substrate-ui
```

Peer dependencies:

```bash
npm install react react-dom
```

## Quick Start

### 1. Import the stylesheet

Import the base stylesheet once in your app root. This provides all design tokens and component styles.

```tsx
// app/layout.tsx (Next.js) or src/main.tsx (Vite)
import "substrate-ui/styles";
```

### 2. Set up fonts

Substrate UI uses three font families via CSS custom properties. Set them on your root element:

| Token          | Default Font    | Purpose    |
| -------------- | --------------- | ---------- |
| `--font-head`  | Archivo Black   | Headings   |
| `--font-sans`  | Space Grotesk   | Body text  |
| `--font-mono`  | Space Mono      | Code       |

**Next.js example:**

```tsx
import { Space_Grotesk, Archivo_Black, Space_Mono } from "next/font/google";

const sans = Space_Grotesk({ variable: "--font-sans", subsets: ["latin"], weight: "400" });
const head = Archivo_Black({ variable: "--font-head", subsets: ["latin"], weight: "400" });
const mono = Space_Mono({ variable: "--font-mono", subsets: ["latin"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html className={`${sans.variable} ${head.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

**Plain HTML / Vite:**

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&family=Space+Mono&display=swap" rel="stylesheet">
<style>
  :root {
    --font-head: 'Archivo Black', sans-serif;
    --font-sans: 'Space Grotesk', sans-serif;
    --font-mono: 'Space Mono', monospace;
  }
</style>
```

If fonts aren't loaded, the library falls back to `Space Grotesk -> system-ui -> sans-serif`.

### 3. Use components

```tsx
import { Button, Card, Text } from "substrate-ui";

export function Example() {
  return (
    <Card>
      <Card.Header>
        <Text variant="h3">Hello</Text>
      </Card.Header>
      <Card.Body>
        <Text>Neobrutalist components, ready to go.</Text>
        <Button>Get Started</Button>
      </Card.Body>
    </Card>
  );
}
```

## Theming

### Light / Dark Mode

Use the built-in `ThemeProvider` to manage theme switching:

```tsx
import { ThemeProvider } from "substrate-ui";

function App({ children }) {
  return (
    <ThemeProvider defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
```

Access and toggle the theme anywhere:

```tsx
import { useTheme } from "substrate-ui";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      Toggle theme
    </button>
  );
}
```

The `ThemeProvider` accepts `"light"`, `"dark"`, or `"system"` (default). It persists the user's choice to `localStorage` and respects `prefers-color-scheme`.

### Rounded Corners

By default, components have sharp corners (radius: 0). Add the `with-radius` class to your root to opt in to rounded corners:

```html
<html class="with-radius">
```

### Custom Tokens

Override any CSS custom property to customize the theme:

```css
:root {
  --primary: #6366f1;
  --primary-foreground: #fff;
  --primary-hover: #4f46e5;
}
```

See the full token reference in the [design tokens page](/tokens) or in `base/substrate.css`.

## Components

### Primitives

Alert, Avatar, Badge, Button, Card, Checkbox, Container, Dialog, Divider, Drawer, Flex, FormLayout, Grid, IconButton, Input, Label, Link, Loader, Menu, RadioGroup, Select, Slider, Stack, Switch, Tabs, Text, Textarea

### Landing

AnnouncementBanner, CTABanner, FAQ, FeatureSection, Footer, Hero, LogoCloud, NewsletterSignup, PricingTable, Section, StatsBar, Testimonial

### Composite

CardGrid, NavBar, SectionNav, SimplePage, TwoColumnLayout

## Framework Compatibility

All primitives and landing components work in any React 19 environment (Vite, Remix, etc.).

The `NavBar` component accepts an optional `linkComponent` prop for framework-specific link components:

```tsx
import Link from "next/link";
import { NavBar } from "substrate-ui";

<NavBar linkComponent={Link} brand={{ name: "MyApp" }} auth={{ state: "signed-out", href: "/login" }} />
```

When omitted, it defaults to a plain `<a>` tag.

## Development

```bash
# Install dependencies
npm install

# Start the demo app (Next.js)
npm run dev

# Start Storybook
npm run storybook

# Run tests
npm run test

# Build the library
npm run build

# Build Storybook
npm run build-storybook
```

## License

MIT
