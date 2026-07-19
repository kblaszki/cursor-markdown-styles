# create-mpe-theme reference

## File map

| Artifact | Path |
| -------- | ---- |
| Family CSS | `themes/addons/vscode-preview/original/<family>/vscode-preview-<slug>.css` |
| Light peer | `…/vscode-preview-<slug>-light.css` |
| Variant | `…/vscode-preview-<slug>-vN-<desc>.css` |
| Registry | `themes/addons/vscode-preview/build-mpe-global.mjs` → `variants` |
| Paste package | `themes/mpe/<tier>/<slug>/style.less` |
| Released Crossnote config | `themes/mpe/released/<slug>/config.js` |
| Always appended | `_scope.css`, `_syntax-tokens.css` |
| Diagram tokens | `_diagram-tokens.css` when `appendDiagramTokens: true` |
| C++ refine | `original/graphite-code/_cpp-syntax-refine.css` when `appendSyntaxRefine: true` |

## Registry snippet

```js
{
  css: join(root, "original/my-theme/vscode-preview-my-theme.css"),
  slug: "my-theme",
  tier: "experimental",
  label: "My Theme",
},
{
  css: join(root, "original/my-theme/vscode-preview-my-theme-light.css"),
  slug: "my-theme-light",
  tier: "experimental",
  label: "My Theme Light",
},
```

Diagram overlay example:

```js
{
  css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v3-diagrams.css"),
  slug: "cpp-modern-v3-diagrams",
  tier: "experimental",
  label: "C++ Modern v3 Diagrams",
  appendDiagramTokens: true,
},
```

## Naming exceptions

| Family | Note |
| ------ | ---- |
| Studio | Light-only → slug `studio` (no `-light` suffix) |
| Phosphor | Dark green + `phosphor-amber` as warm sibling |
| cpp-modern / lumina | Multiple `-vN-` experimental variants allowed |

## Promote to released

1. Add `themes/mpe/released/<slug>/config.js` (full Crossnote skeleton):
   - Dark → adapt [`released/cpp-modern/config.js`](../../../themes/mpe/released/cpp-modern/config.js) (`darkMode: true`)
   - Light → adapt [`released/cpp-modern-light/config.js`](../../../themes/mpe/released/cpp-modern-light/config.js) (`darkMode: false`, paper surfaces)
   - Align Mermaid hex to preview roles; keep transparent label backgrounds + ER `themeCSS` (see [`mpe-theme-reference.md` §8](../../../docs/mpe-theme-reference.md#8-dark-vs-light--lessons-and-authoring-checklist))
2. Set `tier: "released"` (and matching `slug`) in `build-mpe-global.mjs`.
3. Rebuild; add a short package `README.md`; run `node scripts/update-palette-readmes.mjs`.
4. Update `themes/mpe/README.md`, `themes/README.md`, root README, and vscode-preview mapping table.
5. Remove the empty `experimental/<slug>/` folder if the path moved.
6. **Commit** the promotion (separate commit from unrelated WIP).

## Legacy path

`build-from-inline.mjs` and `themes/addons/cursor-inline/` only for older cpp-modern / lumina. Prefer `original/` + `build-mpe-global.mjs` for new work. Do not add cursor-inline for new families unless asked.

## README touchpoints

After a new family:

1. List under experimental in `themes/mpe/README.md`
2. Point family README at `themes/mpe/experimental/<slug>/style.less`
3. Short family blurb in `original/<family>/README.md`
