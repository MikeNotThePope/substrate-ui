@AGENTS.md

## Claude Code

- Run `bun test` after modifying components to catch regressions
- Run `bun run build` to verify library exports compile cleanly
- Check `src/index.ts` when adding/removing components — it must stay in sync
- Prefer editing existing components over creating new files
- Do not modify `base/substrate.css` token values without confirming with the user
