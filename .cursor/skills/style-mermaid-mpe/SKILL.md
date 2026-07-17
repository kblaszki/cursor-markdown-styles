---
name: style-mermaid-mpe
description: >-
  Style Mermaid diagrams for Markdown Preview Enhanced using mermaidConfig
  (themeVariables and themeCSS), not CSS-only fights. Use when fixing Mermaid
  colors, edge labels, ER zebra rows, state transitions, pie/git palettes,
  mermaid-config JSON, or dark-preview diagram contrast in MPE / Crossnote.
---

# Style Mermaid for MPE

## Workflow

```
Mermaid progress:
- [ ] 1. Edit mermaid-config JSON
- [ ] 2. Sync README snippets if needed
- [ ] 3. User tests showcase in MPE
- [ ] 4. themeCSS only for gaps variables miss
- [ ] 5. Optional v3 CSS overlay if requested
```

### 1. Edit config (primary)

Change `themes/mpe/mermaid-config-cpp-modern.json`, or add `themes/mpe/mermaid-config-<slug>.json` for a separate palette.

That file is the **object body** of Crossnote `mermaidConfig`. User merges it into `%USERPROFILE%\.crossnote\config.js` and keeps `"startOnLoad": false`.

Required shape:

- `"theme": "base"`
- `"themeVariables"` with `darkMode` and surfaces matching the preview theme
- `"themeCSS"` for ER / label overrides Mermaid does not honor via variables alone

VS Code / Cursor:

```json
{
  "markdown-preview-enhanced.mermaidTheme": "default"
}
```

Never recommend `"dark"` — it restores light edge-label backgrounds.

### 2. Known gaps → `themeCSS`

| Problem | Selector / variable |
| ------- | ------------------- |
| ER white rows | `.row-rect-odd>path:first-child`, `.row-rect-even>path:first-child` |
| Legacy ER | `.er.attributeBoxOdd` / `Even` |
| Edge label glow | `edgeLabelBackground`, `labelBackground`, state `labelBackgroundColor` → `transparent`; optional `.edgeLabel .background` |

Full DOM notes: `docs/mermaid-styling.md`.

### 3. Verify

Open `examples/mermaid-showcase.md` in **MPE** (not the browser workbench). Refresh after saving `config.js`.

If README copy-paste blocks drift from the JSON, update `themes/mpe/README.md`.

### 4. CSS overlay (secondary)

Only when the user wants v3 diagram LESS / `--md-diagram-*`:

- Source with `appendDiagramTokens: true` in `build-mpe-global.mjs`
- Still keep `mermaidConfig` for paint-at-generation colors

Do not replace a working config with CSS-only ER fixes.

## Related

- `docs/mermaid-styling.md`
- `themes/mpe/README.md` — Configure Mermaid
- Skill `create-mpe-theme` for the preview chrome around diagrams
