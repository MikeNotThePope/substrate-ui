import Link from "next/link";

const colors = [
  { token: "--background", tw: "bg-background" },
  { token: "--foreground", tw: "bg-foreground" },
  { token: "--primary", tw: "bg-primary" },
  { token: "--primary-hover", tw: "bg-primary-hover" },
  { token: "--primary-foreground", tw: "bg-primary-foreground" },
  { token: "--secondary", tw: "bg-secondary" },
  { token: "--secondary-foreground", tw: "bg-secondary-foreground" },
  { token: "--card", tw: "bg-card" },
  { token: "--card-foreground", tw: "bg-card-foreground" },
  { token: "--muted", tw: "bg-muted" },
  { token: "--muted-foreground", tw: "bg-muted-foreground" },
  { token: "--accent", tw: "bg-accent" },
  { token: "--accent-foreground", tw: "bg-accent-foreground" },
  { token: "--destructive", tw: "bg-destructive" },
  { token: "--destructive-foreground", tw: "bg-destructive-foreground" },
  { token: "--border", tw: "bg-border" },
];

const spacing = [
  { token: "--spacing-0", value: "0", px: "0px" },
  { token: "--spacing-0_5", value: "0.125rem", px: "2px" },
  { token: "--spacing-1", value: "0.25rem", px: "4px" },
  { token: "--spacing-1_5", value: "0.375rem", px: "6px" },
  { token: "--spacing-2", value: "0.5rem", px: "8px" },
  { token: "--spacing-3", value: "0.75rem", px: "12px" },
  { token: "--spacing-4", value: "1rem", px: "16px" },
  { token: "--spacing-6", value: "1.5rem", px: "24px" },
  { token: "--spacing-8", value: "2rem", px: "32px" },
  { token: "--spacing-10", value: "2.5rem", px: "40px" },
  { token: "--spacing-12", value: "3rem", px: "48px" },
  { token: "--spacing-16", value: "4rem", px: "64px" },
  { token: "--spacing-20", value: "5rem", px: "80px" },
  { token: "--spacing-24", value: "6rem", px: "96px" },
  { token: "--spacing-28", value: "7rem", px: "112px" },
];

const typography = [
  { token: "--text-xs", value: "0.75rem", px: "12px" },
  { token: "--text-sm", value: "0.875rem", px: "14px" },
  { token: "--text-base", value: "1rem", px: "16px" },
  { token: "--text-lg", value: "1.125rem", px: "18px" },
  { token: "--text-xl", value: "1.25rem", px: "20px" },
  { token: "--text-2xl", value: "1.5rem", px: "24px" },
  { token: "--text-3xl", value: "1.875rem", px: "30px" },
  { token: "--text-4xl", value: "2.25rem", px: "36px" },
  { token: "--text-5xl", value: "3rem", px: "48px" },
  { token: "--text-6xl", value: "3.75rem", px: "60px" },
];

const shadows = [
  { name: "xs", tw: "shadow-xs", offset: "1px 1px 0 0" },
  { name: "sm", tw: "shadow-sm", offset: "2px 2px 0 0" },
  { name: "DEFAULT", tw: "shadow", offset: "3px 3px 0 0" },
  { name: "md", tw: "shadow-md", offset: "4px 4px 0 0" },
  { name: "lg", tw: "shadow-lg", offset: "6px 6px 0 0" },
  { name: "xl", tw: "shadow-xl", offset: "10px 10px 0 1px" },
  { name: "2xl", tw: "shadow-2xl", offset: "16px 16px 0 1px" },
];

const contrastPairings = [
  { fg: "--foreground", fgHex: "#000", bg: "--background", bgHex: "#fff", ratio: "21.0:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--primary-foreground", fgHex: "#000", bg: "--primary", bgHex: "#5294FF", ratio: "6.4:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--primary", fgHex: "#5294FF", bg: "--background", bgHex: "#fff", ratio: "3.3:1", aaNormal: false, aaLarge: true, theme: "light", note: "Use as background with dark foreground, not as text on white" },
  { fg: "--destructive-foreground", fgHex: "#fff", bg: "--destructive", bgHex: "#e63946", ratio: "4.0:1", aaNormal: false, aaLarge: true, theme: "light", note: "Passes for large/bold text only" },
  { fg: "--muted-foreground", fgHex: "#555", bg: "--background", bgHex: "#fff", ratio: "7.5:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--success-foreground", fgHex: "#000", bg: "--success", bgHex: "#4ade80", ratio: "11.0:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--warning-foreground", fgHex: "#000", bg: "--warning", bgHex: "#fbbf24", ratio: "13.5:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--info-foreground", fgHex: "#000", bg: "--info", bgHex: "#60a5fa", ratio: "7.4:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--error-foreground", fgHex: "#000", bg: "--error", bgHex: "#f87171", ratio: "5.6:1", aaNormal: true, aaLarge: true, theme: "light" },
  { fg: "--foreground", fgHex: "#E6E6E6", bg: "--background", bgHex: "#1F1F1F", ratio: "12.3:1", aaNormal: true, aaLarge: true, theme: "dark" },
  { fg: "--primary-foreground", fgHex: "#000", bg: "--primary", bgHex: "#5294FF", ratio: "6.4:1", aaNormal: true, aaLarge: true, theme: "dark" },
  { fg: "--muted-foreground", fgHex: "#999", bg: "--background", bgHex: "#1F1F1F", ratio: "3.4:1", aaNormal: false, aaLarge: true, theme: "dark", note: "Fails AA for normal text; suitable for large/decorative text only" },
  { fg: "--card-foreground", fgHex: "#E6E6E6", bg: "--card", bgHex: "#20294B", ratio: "9.1:1", aaNormal: true, aaLarge: true, theme: "dark" },
];

export default function TokensPage() {
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
          <h1 className="font-head text-4xl mb-2">Design Tokens</h1>
          <p className="font-sans text-lg text-muted-foreground max-w-xl">
            The full set of CSS custom properties that power Substrate UI.
            Import once via <code className="font-mono bg-muted px-1">substrate-ui/styles</code>.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 flex flex-col gap-16">
        {/* ─── Colors ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Colors</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Semantic color tokens with light and dark theme values. All colors map to Tailwind utilities.
          </p>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Swatch</th>
                  <th className="text-left p-3 font-head">Token</th>
                  <th className="text-left p-3 font-head">Tailwind</th>
                </tr>
              </thead>
              <tbody>
                {colors.map((c) => (
                  <tr key={c.token} className="border-b last:border-b-0">
                    <td className="p-3">
                      <div
                        className="w-8 h-8 border-2 border-border"
                        style={{ backgroundColor: `var(${c.token})` }}
                        title={c.token}
                      />
                    </td>
                    <td className="p-3 font-mono text-xs">{c.token}</td>
                    <td className="p-3 font-mono text-xs text-muted-foreground">{c.tw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Spacing ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Spacing</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            4px base unit spacing scale. Used for padding, margin, and gap.
          </p>
          <div className="flex flex-col gap-3">
            {spacing.map((s) => (
              <div key={s.token} className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted-foreground w-36 shrink-0">
                  {s.token}
                </span>
                <div
                  className="bg-primary border-2 border-border h-6"
                  style={{ width: s.value === "0" ? "2px" : `calc(${s.value} * 3)` }}
                />
                <span className="font-mono text-xs text-muted-foreground">
                  {s.value} ({s.px})
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Typography ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Typography</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Font size scale from xs to 6xl. Three font families: head (Archivo Black), sans (Space Grotesk), mono (Space Mono).
          </p>

          <div className="mb-8">
            <h3 className="font-head text-lg mb-4">Font Families</h3>
            <div className="flex flex-col gap-4 border-2 p-6">
              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-1">--font-head (Archivo Black)</span>
                <span className="font-head text-2xl">The quick brown fox jumps over the lazy dog</span>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-1">--font-sans (Space Grotesk)</span>
                <span className="font-sans text-2xl">The quick brown fox jumps over the lazy dog</span>
              </div>
              <div>
                <span className="font-mono text-xs text-muted-foreground block mb-1">--font-mono (Space Mono)</span>
                <span className="font-mono text-2xl">The quick brown fox jumps over the lazy dog</span>
              </div>
            </div>
          </div>

          <h3 className="font-head text-lg mb-4">Size Scale</h3>
          <div className="flex flex-col gap-4">
            {typography.map((t) => (
              <div key={t.token} className="flex items-baseline gap-4 border-b border-muted pb-3">
                <span className="font-mono text-xs text-muted-foreground w-28 shrink-0">
                  {t.token}
                </span>
                <span className="font-mono text-xs text-muted-foreground w-24 shrink-0">
                  {t.value} ({t.px})
                </span>
                <span className="font-sans" style={{ fontSize: t.value }}>
                  Substrate UI
                </span>
              </div>
            ))}
          </div>

          <h3 className="font-head text-lg mb-4 mt-8">Weights</h3>
          <div className="flex flex-col gap-3 border-2 p-6">
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">--weight-normal (400)</span>
              <span className="font-sans text-xl" style={{ fontWeight: 400 }}>Normal weight text</span>
            </div>
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">--weight-medium (500)</span>
              <span className="font-sans text-xl" style={{ fontWeight: 500 }}>Medium weight text</span>
            </div>
            <div>
              <span className="font-mono text-xs text-muted-foreground block mb-1">--weight-bold (700)</span>
              <span className="font-sans text-xl" style={{ fontWeight: 700 }}>Bold weight text</span>
            </div>
          </div>

          <h3 className="font-head text-lg mb-4 mt-8">Line Heights &amp; Tracking</h3>
          <div className="border-2 overflow-x-auto">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr className="border-b-2 bg-muted">
                  <th className="text-left p-3 font-head">Token</th>
                  <th className="text-left p-3 font-head">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--leading-none</td><td className="p-3 font-mono text-xs text-muted-foreground">1</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--leading-tight</td><td className="p-3 font-mono text-xs text-muted-foreground">1.25</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--leading-normal</td><td className="p-3 font-mono text-xs text-muted-foreground">1.5</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--leading-relaxed</td><td className="p-3 font-mono text-xs text-muted-foreground">1.625</td></tr>
                <tr className="border-b"><td className="p-3 font-mono text-xs">--tracking-tight</td><td className="p-3 font-mono text-xs text-muted-foreground">-0.025em</td></tr>
                <tr><td className="p-3 font-mono text-xs">--tracking-normal</td><td className="p-3 font-mono text-xs text-muted-foreground">0</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── Shadows ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Shadows</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Hard pixel-offset shadows with no blur — the neobrutalist signature.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {shadows.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3">
                <div
                  className={`w-20 h-20 bg-primary border-2 border-border ${s.tw}`}
                />
                <div className="text-center">
                  <span className="font-mono text-xs block">{s.name}</span>
                  <span className="font-mono text-xs text-muted-foreground block">{s.offset}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Border Radius ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Border Radius</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Default is 0 (sharp corners). Add the <code className="font-mono bg-muted px-1">.with-radius</code> class to get 0.5rem rounded corners.
          </p>
          <div className="flex gap-8 items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-primary border-2 border-border shadow-md" />
              <span className="font-mono text-xs">--radius: 0</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 bg-primary border-2 border-border shadow-md" style={{ borderRadius: "0.5rem" }} />
              <span className="font-mono text-xs">.with-radius (0.5rem)</span>
            </div>
          </div>
        </section>

        {/* ─── Color Contrast (WCAG AA) ─── */}
        <section>
          <h2 className="font-head text-2xl mb-2">Color Contrast (WCAG AA)</h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            WCAG AA requires at least <strong>4.5:1</strong> contrast for normal text and{" "}
            <strong>3:1</strong> for large text (18px+ or 14px bold). Pairings that fail AA
            for normal text are flagged below.
          </p>

          {(["light", "dark"] as const).map((theme) => {
            const pairs = contrastPairings.filter((p) => p.theme === theme);
            return (
              <div key={theme} className="mb-8">
                <h3 className="font-head text-lg mb-3 capitalize">{theme} Theme</h3>
                <div className="border-2 overflow-x-auto">
                  <table className="w-full font-sans text-sm">
                    <thead>
                      <tr className="border-b-2 bg-muted">
                        <th className="text-left p-3 font-head">Foreground</th>
                        <th className="text-left p-3 font-head">Background</th>
                        <th className="text-left p-3 font-head">Preview</th>
                        <th className="text-left p-3 font-head">Ratio</th>
                        <th className="text-left p-3 font-head">AA Normal</th>
                        <th className="text-left p-3 font-head">AA Large</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pairs.map((p, i) => (
                        <tr key={i} className="border-b last:border-b-0">
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border border-border shrink-0" style={{ backgroundColor: p.fgHex }} />
                              <span className="font-mono text-xs">{p.fg}</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border border-border shrink-0" style={{ backgroundColor: p.bgHex }} />
                              <span className="font-mono text-xs">{p.bg}</span>
                            </div>
                          </td>
                          <td className="p-3">
                            <span
                              className="font-sans text-sm font-bold px-2 py-0.5 border border-border"
                              style={{ color: p.fgHex, backgroundColor: p.bgHex }}
                            >
                              Aa
                            </span>
                          </td>
                          <td className="p-3 font-mono text-xs">{p.ratio}</td>
                          <td className="p-3">
                            <span className={`inline-block px-2 py-0.5 border-2 font-head text-xs ${p.aaNormal ? "bg-success text-success-foreground border-border" : "bg-destructive text-destructive-foreground border-border"}`}>
                              {p.aaNormal ? "Pass" : "Fail"}
                            </span>
                          </td>
                          <td className="p-3">
                            <span className={`inline-block px-2 py-0.5 border-2 font-head text-xs ${p.aaLarge ? "bg-success text-success-foreground border-border" : "bg-destructive text-destructive-foreground border-border"}`}>
                              {p.aaLarge ? "Pass" : "Fail"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {pairs.some((p) => p.note) && (
                  <div className="mt-3 flex flex-col gap-1">
                    {pairs.filter((p) => p.note).map((p, i) => (
                      <p key={i} className="font-sans text-xs text-muted-foreground">
                        <span className="font-mono">{p.fg}</span> on <span className="font-mono">{p.bg}</span>: {p.note}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
