import Link from "next/link";

export default function DesignPrinciplesPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b-2 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <Link
            href="/"
            className="font-sans text-sm text-muted-foreground hover:underline decoration-primary underline-offset-4 mb-4 inline-block"
          >
            &larr; Home
          </Link>
          <h1 className="font-head text-4xl mb-2">Design Principles</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            The philosophy, patterns, and rules behind Substrate UI.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-16">
        {/* ─── Core Philosophy ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Core Philosophy</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            Substrate UI is a <strong>neobrutalist</strong> design system. Neobrutalism draws
            from raw, unpolished web aesthetics &mdash; bold borders, hard shadows, high
            contrast, and unapologetic visual weight. The result is interfaces that feel
            tangible and direct.
          </p>
          <div className="border-2 p-6 flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <span className="font-head text-primary text-lg shrink-0">01</span>
              <div>
                <span className="font-head text-base">Bold over subtle</span>
                <p className="font-sans text-sm text-muted-foreground">
                  Hard pixel-offset shadows, 2px solid borders, and high-contrast colors.
                  Every element should feel deliberate and present.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-head text-primary text-lg shrink-0">02</span>
              <div>
                <span className="font-head text-base">Sharp by default, round by choice</span>
                <p className="font-sans text-sm text-muted-foreground">
                  All corners are square (<code className="font-mono bg-muted px-1">--radius: 0</code>).
                  Add the <code className="font-mono bg-muted px-1">.with-radius</code> class to
                  opt into 0.5rem rounding.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-head text-primary text-lg shrink-0">03</span>
              <div>
                <span className="font-head text-base">Tokens drive everything</span>
                <p className="font-sans text-sm text-muted-foreground">
                  Colors, spacing, typography, shadows, and motion are defined as CSS custom
                  properties. Change a token once and every component updates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="font-head text-primary text-lg shrink-0">04</span>
              <div>
                <span className="font-head text-base">Accessible by construction</span>
                <p className="font-sans text-sm text-muted-foreground">
                  Every interactive component wraps a Radix UI primitive, inheriting keyboard
                  navigation, focus management, and ARIA attributes for free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Component Anatomy ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Component Anatomy</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            Every Substrate UI component follows a consistent visual recipe.
          </p>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Layer</th>
                  <th className="text-left p-3 font-head">Pattern</th>
                  <th className="text-left p-3 font-head">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-head">Border</td>
                  <td className="p-3">2px solid, uses <code className="font-mono bg-muted px-1">--border</code></td>
                  <td className="p-3 font-mono text-xs">border-2 border-border</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-head">Shadow</td>
                  <td className="p-3">Hard pixel offset from the shadow scale, no blur</td>
                  <td className="p-3 font-mono text-xs">shadow-md (4px 4px 0 0)</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-head">Radius</td>
                  <td className="p-3">0 by default; 0.5rem with <code className="font-mono bg-muted px-1">.with-radius</code></td>
                  <td className="p-3 font-mono text-xs">rounded-[var(--radius)]</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-head">Colors</td>
                  <td className="p-3">Semantic tokens only &mdash; never raw hex in components</td>
                  <td className="p-3 font-mono text-xs">bg-primary text-primary-foreground</td>
                </tr>
                <tr>
                  <td className="p-3 font-head">Interaction</td>
                  <td className="p-3">Shadow reduces and element translates on press (&ldquo;push down&rdquo; effect)</td>
                  <td className="p-3 font-mono text-xs">hover:shadow-none hover:translate-x-[4px]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Variant Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">When to Use Which Variant</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            Guidance for choosing between component variants.
          </p>

          <h3 className="font-head text-lg mb-3">Button</h3>
          <div className="border-2 overflow-x-auto mb-6">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Variant</th>
                  <th className="text-left p-3 font-head">When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-mono text-xs">default</td><td className="p-3">Primary call to action &mdash; one per section/view</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">secondary</td><td className="p-3">Secondary actions alongside a primary button</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">outline</td><td className="p-3">Tertiary or less prominent actions</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">ghost</td><td className="p-3">De-emphasized actions, toolbar items</td></tr>
                <tr><td className="p-3 font-mono text-xs">link</td><td className="p-3">Inline navigation that looks like a text link</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-head text-lg mb-3">Alert / Badge</h3>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Variant</th>
                  <th className="text-left p-3 font-head">When to use</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-mono text-xs">default</td><td className="p-3">Neutral information or status</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">success</td><td className="p-3">Positive outcome or completion</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">warning</td><td className="p-3">Caution &mdash; something needs attention</td></tr>
                <tr><td className="p-3 font-mono text-xs">destructive</td><td className="p-3">Error, danger, or irreversible action</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Spacing Philosophy ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Spacing Philosophy</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            All spacing is based on a <strong>4px grid</strong>. Use the spacing scale consistently
            to maintain visual rhythm.
          </p>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Context</th>
                  <th className="text-left p-3 font-head">Recommended tokens</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Tight internal padding (badges, chips)</td><td className="p-3 font-mono text-xs">--spacing-1 to --spacing-2 (4px&ndash;8px)</td></tr>
                <tr className="border-b"><td className="p-3">Standard component padding</td><td className="p-3 font-mono text-xs">--spacing-3 to --spacing-4 (12px&ndash;16px)</td></tr>
                <tr className="border-b"><td className="p-3">Gap between related elements</td><td className="p-3 font-mono text-xs">--spacing-4 to --spacing-6 (16px&ndash;24px)</td></tr>
                <tr className="border-b"><td className="p-3">Section spacing</td><td className="p-3 font-mono text-xs">--spacing-8 to --spacing-12 (32px&ndash;48px)</td></tr>
                <tr><td className="p-3">Major layout spacing (hero, page gaps)</td><td className="p-3 font-mono text-xs">--spacing-16 to --spacing-28 (64px&ndash;112px)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Typography Hierarchy ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Typography Hierarchy</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            Three font families serve distinct roles. Use the size scale to establish clear hierarchy.
          </p>
          <div className="border-2 overflow-x-auto mb-6">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Family</th>
                  <th className="text-left p-3 font-head">Token</th>
                  <th className="text-left p-3 font-head">Use for</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-head">Archivo Black</td><td className="p-3 font-mono text-xs">--font-head</td><td className="p-3">Headings, labels, navigation</td></tr>
                <tr className="border-b"><td className="p-3" style={{ fontFamily: "var(--font-sans)" }}>Space Grotesk</td><td className="p-3 font-mono text-xs">--font-sans</td><td className="p-3">Body text, descriptions, UI copy</td></tr>
                <tr><td className="p-3 font-mono">Space Mono</td><td className="p-3 font-mono text-xs">--font-mono</td><td className="p-3">Code, technical values, token names</td></tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-head text-lg mb-3">Size Guidance</h3>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Context</th>
                  <th className="text-left p-3 font-head">Recommended sizes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Page titles / hero headings</td><td className="p-3 font-mono text-xs">text-4xl to text-6xl (or fluid variants)</td></tr>
                <tr className="border-b"><td className="p-3">Section headings</td><td className="p-3 font-mono text-xs">text-2xl to text-3xl</td></tr>
                <tr className="border-b"><td className="p-3">Sub-headings</td><td className="p-3 font-mono text-xs">text-lg to text-xl</td></tr>
                <tr className="border-b"><td className="p-3">Body text</td><td className="p-3 font-mono text-xs">text-base to text-lg</td></tr>
                <tr><td className="p-3">Captions, labels, fine print</td><td className="p-3 font-mono text-xs">text-xs to text-sm</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-muted-foreground mt-3">
            For responsive headings, use the fluid tokens (<code className="font-mono bg-muted px-1">--text-3xl-fluid</code> through{" "}
            <code className="font-mono bg-muted px-1">--text-6xl-fluid</code>) which scale
            smoothly between breakpoints via <code className="font-mono bg-muted px-1">clamp()</code>.
          </p>
        </section>

        {/* ─── Color Usage ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Color Usage</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            Always use semantic color tokens. Never use raw hex values in components.
          </p>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Token</th>
                  <th className="text-left p-3 font-head">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--primary / --primary-foreground</td><td className="p-3">Primary actions, active states, key UI elements</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--secondary / --secondary-foreground</td><td className="p-3">Secondary surfaces, alternative backgrounds</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--destructive</td><td className="p-3">Danger, delete, irreversible actions</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--success / --warning / --info / --error</td><td className="p-3">Feedback and status communication</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--muted / --muted-foreground</td><td className="p-3">De-emphasized content, placeholders, secondary text</td></tr>
                <tr><td className="p-3 font-mono text-xs">--primary-50 to --primary-900</td><td className="p-3">Extended palette for gradients, subtle backgrounds, and detailed UI</td></tr>
              </tbody>
            </table>
          </div>
          <p className="font-sans text-xs text-muted-foreground mt-3">
            Every semantic color has a <code className="font-mono bg-muted px-1">-foreground</code> companion
            designed for text placed on that color. Both light and dark themes override these tokens
            automatically.
          </p>
        </section>

        {/* ─── Shadows & Depth ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Shadows &amp; Depth</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            The shadow scale communicates elevation and interactivity. Larger shadows = more elevated / more interactive.
          </p>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Context</th>
                  <th className="text-left p-3 font-head">Shadow</th>
                  <th className="text-left p-3 font-head">Behavior</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3">Interactive at rest (buttons, cards)</td><td className="p-3 font-mono text-xs">shadow-md (4px)</td><td className="p-3">Reduces to shadow-none + translate on hover/press</td></tr>
                <tr className="border-b"><td className="p-3">Static elevated (panels, callouts)</td><td className="p-3 font-mono text-xs">shadow-sm to shadow (2px&ndash;3px)</td><td className="p-3">No state change</td></tr>
                <tr className="border-b"><td className="p-3">High emphasis (dialogs, drawers)</td><td className="p-3 font-mono text-xs">shadow-lg to shadow-xl (6px&ndash;10px)</td><td className="p-3">Overlay context</td></tr>
                <tr><td className="p-3">Subtle / inline</td><td className="p-3 font-mono text-xs">shadow-xs (1px)</td><td className="p-3">Minimal lift for inputs, dividers</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Accessibility ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Accessibility</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6 max-w-2xl">
            Substrate UI is built on accessible foundations.
          </p>
          <div className="border-2 p-6 flex flex-col gap-4">
            <div>
              <span className="font-head text-base">Radix UI Primitives</span>
              <p className="font-sans text-sm text-muted-foreground">
                All interactive components wrap Radix UI, providing keyboard navigation, focus
                management, screen reader announcements, and correct ARIA attributes out of the box.
              </p>
            </div>
            <div>
              <span className="font-head text-base">Color Contrast</span>
              <p className="font-sans text-sm text-muted-foreground">
                Semantic color pairings (e.g. <code className="font-mono bg-muted px-1">--primary-foreground</code> on{" "}
                <code className="font-mono bg-muted px-1">--primary</code>) are designed to meet
                WCAG AA contrast ratios. See the{" "}
                <Link href="/tokens#contrast" className="underline decoration-primary underline-offset-2">
                  contrast audit on the Tokens page
                </Link>{" "}
                for the full matrix.
              </p>
            </div>
            <div>
              <span className="font-head text-base">Reduced Motion</span>
              <p className="font-sans text-sm text-muted-foreground">
                All animations and transitions are disabled when the user has{" "}
                <code className="font-mono bg-muted px-1">prefers-reduced-motion: reduce</code> enabled
                in their OS settings.
              </p>
            </div>
            <div>
              <span className="font-head text-base">Theme Support</span>
              <p className="font-sans text-sm text-muted-foreground">
                Light and dark themes are fully supported via the{" "}
                <code className="font-mono bg-muted px-1">ThemeProvider</code> component. The
                system preference is respected by default.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
