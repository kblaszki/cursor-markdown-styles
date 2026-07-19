---
name: create-mpe-light-peer
description: >-
  Create a light peer of an existing dark MPE theme family (vscode-preview CSS +
  Mermaid config), following the cpp-modern-light pattern. Use when the user asks
  for a light peer, jasny styl na bazie, light variant of an existing dark, or
  work “on the cpp-modern-light pattern.”
---

# Create MPE light peer

For a **new** theme family (dark + light from scratch), use [`create-mpe-theme`](../create-mpe-theme/SKILL.md) instead.

Read [`docs/mpe-theme-reference.md`](../../../docs/mpe-theme-reference.md) §7–§8 and follow rule `mpe-contrast` before editing tokens.

## Workflow

```
Light peer progress:
- [ ] 1. Copy full dark CSS → vscode-preview-<slug>-light.css
- [ ] 2. Retune tokens only (hardcoded paper; deepened accents/syntax)
- [ ] 3. Register tier experimental + rebuild + palette regen
- [ ] 4. Mermaid: copy cpp-modern-light config.js; map hex; darkMode false
- [ ] 5. Verify theme-preview + mermaid-showcase (contrast)
- [ ] 6. README touchpoints; commit unit
- [ ] 7. Promote separately when ready
```

### 1. Selector parity

Copy the **entire** dark family CSS structure into `vscode-preview-<slug>-light.css`. Truncated light peers miss lists, tasks, front-matter, fence chips.

### 2. Tokens only

Replace surfaces and accents — keep selector structure:

- Hardcode `--*-bg` / `--*-fg` / `--*-muted` (never `--vscode-editor-*`)
- Deepen primary / secondary / link / syntax for paper (`#f7f9fc`-class backgrounds)
- Dark fg on paper and panels; no light text on `#eef2f7` / white chips

Role map: theme-reference §7 (Dark role → Light hex).

### 3. Build

Register in `build-mpe-global.mjs` with `tier: "experimental"`, rebuild, then:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
node scripts/update-palette-readmes.mjs
```

### 4. Mermaid

Copy [`released/cpp-modern-light/config.js`](../../../themes/mpe/released/cpp-modern-light/config.js):

- `darkMode: false`
- Map hex to the new light CSS roles
- Keep light pitfalls fixed (quadrant points, journey `.face`, mindmap root, ER `themeCSS`, Gantt depth)

See skill `style-mermaid-mpe` and `docs/mermaid-styling.md` Light checklist. Full Crossnote `config.js` is required on **promote**; experimental may wait until then.

### 5. Verify

In MPE after pasting `style.less` (and config when present): `examples/theme-preview.md`, `code-showcase.md`, `mermaid-showcase.md` — run §8 contrast audit.

### 6. Commit

Commit the finished light-peer unit (CSS + registry + rebuild + READMEs). Promote to released later as its own unit (`create-mpe-theme` promote steps; light skeleton = cpp-modern-light).

## Related

- `docs/mpe-theme-reference.md` §7–§8
- Rule `mpe-contrast`
- Skill `style-mermaid-mpe`
