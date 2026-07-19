---
name: style-mermaid-mpe
description: >-
  Style Mermaid diagrams for Markdown Preview Enhanced using Crossnote config.js
  (mermaidConfig themeVariables and themeCSS), not CSS-only fights. Use when fixing
  Mermaid colors, edge labels, ER zebra rows, state transitions, pie/git palettes,
  package config.js, dark or light preview diagram contrast in MPE / Crossnote.
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

Change `themes/mpe/released/<slug>/config.js` under `mermaidConfig`:

- Dark: [`released/cpp-modern/config.js`](../../../themes/mpe/released/cpp-modern/config.js)
- Light: [`released/cpp-modern-light/config.js`](../../../themes/mpe/released/cpp-modern-light/config.js)
- Lumina Aurora: [`released/lumina-v5-aurora/config.js`](../../../themes/mpe/released/lumina-v5-aurora/config.js) / [`lumina-v5-aurora-light`](../../../themes/mpe/released/lumina-v5-aurora-light/config.js)

On **promotion** from experimental → released, add a full Crossnote `config.js` next to the package `style.less` (adapt from the matching dark or light skeleton). Experimental packages may omit it until then.

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

### Light contrast traps

| Problem | Fix |
| ------- | --- |
| Quadrant point labels invisible | Dark `quadrantPointTextFill` + `.data-point text{fill:#1f2937}` |
| Journey smileys muddy | `.face` light fill + dark stroke (not brown-on-brown) |
| Mindmap root unreadable | White text on root; dark text on pastel sections; override `.section-root .nodeLabel` after `.mindmap-node` |
| ER zebra wrong / washed out | Vars **and** `.row-rect-odd/even` in `themeCSS` |
| Gantt bars blend into chart | Deeper `taskBkgColor` / `.task0` than section bands |

Full light checklist: [`docs/mermaid-styling.md`](../../../docs/mermaid-styling.md) — Light checklist. Broader lessons: [`mpe-theme-reference.md` §8](../../../docs/mpe-theme-reference.md#8-dark-vs-light--lessons-and-authoring-checklist).

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
- Skill `create-mpe-theme` / `create-mpe-light-peer` for preview chrome around diagrams
- Rule `mpe-contrast` for text-on-fill bans
