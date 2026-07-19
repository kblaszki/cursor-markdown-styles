---
name: style-mermaid-mpe
description: >-
  Style Mermaid diagrams for Markdown Preview Enhanced using Crossnote config.js
  (mermaidConfig themeVariables and themeCSS), not CSS-only fights. Use when fixing
  Mermaid colors, edge labels, ER zebra rows, state transitions, pie/git palettes,
  package config.js, or dark-preview diagram contrast in MPE / Crossnote.
---

# Style Mermaid for MPE

## Workflow

```
Mermaid progress:
- [ ] 1. Edit package config.js → mermaidConfig
- [ ] 2. Sync README snippets if needed
- [ ] 3. User tests showcase in MPE
- [ ] 4. themeCSS only for gaps variables miss
- [ ] 5. Optional v3 CSS overlay if requested
- [ ] 6. Commit this Mermaid unit
```

### 1. Edit config (primary)

Change `themes/mpe/released/<slug>/config.js` (today: `released/cpp-modern/config.js`) under `mermaidConfig`.

On **promotion** from experimental → released, add a full Crossnote `config.js` next to the package `style.less` (adapt from cpp-modern). Experimental packages may omit it until then.

That file is the **full** Crossnote config script (`({ … })`). User pastes it over `%USERPROFILE%\.crossnote\config.js`. Keep `"startOnLoad": false` inside `mermaidConfig`.

Required `mermaidConfig` shape:

- `"startOnLoad": false`
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

When the Mermaid change is a finished unit (config + any matching docs/showcase notes), **create a git commit** without waiting for the user. Examples: ER zebra fix, gantt/pie/mindmap palette pass, new released `config.js`.

Skip or batch tiny mid-iteration tweaks. Follow the repo git protocol (status/diff/log, HEREDOC message, no push unless asked). See `repo-theme-map` — commit after major changes.

## Related

- `docs/mermaid-styling.md`
- `themes/mpe/README.md` — Configure Mermaid
- Skill `create-mpe-theme` for the preview chrome around diagrams
