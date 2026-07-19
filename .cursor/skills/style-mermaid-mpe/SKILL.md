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
- [ ] 1. Edit package mermaid-config.json
- [ ] 2. Sync README snippets if needed
- [ ] 3. User tests showcase in MPE
- [ ] 4. themeCSS only for gaps variables miss
- [ ] 5. Optional v3 CSS overlay if requested
- [ ] 6. Commit this Mermaid unit
```

### 1. Edit config (primary)

Change `themes/mpe/released/<slug>/mermaid-config.json` (today: `released/cpp-modern/mermaid-config.json`).

On **promotion** from experimental → released, add that file next to the package `style.less` (adapt palette from cpp-modern). Experimental packages may omit Mermaid until then.

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

Only when the user wants experimental v3 diagram LESS / `--md-diagram-*`:

- Source with `appendDiagramTokens: true` in `build-mpe-global.mjs`
- Still keep `mermaidConfig` for paint-at-generation colors

Do not replace a working config with CSS-only ER fixes.

### 5. Commit this Mermaid unit

When the Mermaid change is a finished unit (config + any matching docs/showcase notes), **create a git commit** without waiting for the user. Examples: ER zebra fix, gantt/pie/mindmap palette pass, new released `mermaid-config.json`.

Skip or batch tiny mid-iteration tweaks. Follow the repo git protocol (status/diff/log, HEREDOC message, no push unless asked). See `repo-theme-map` — commit after major changes.

## Related

- `docs/mermaid-styling.md`
- `themes/mpe/README.md` — Configure Mermaid
- Skill `create-mpe-theme` for the preview chrome around diagrams
