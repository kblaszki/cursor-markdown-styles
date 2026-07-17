# create-mpe-theme reference

## File map

| Artifact | Path |
| -------- | ---- |
| Family CSS | `themes/addons/vscode-preview/original/<family>/vscode-preview-<slug>.css` |
| Light peer | `…/vscode-preview-<slug>-light.css` |
| Variant | `…/vscode-preview-<slug>-vN-<desc>.css` |
| Registry | `themes/addons/vscode-preview/build-mpe-global.mjs` → `variants` |
| Paste target | `themes/mpe/global-<slug>.less` |
| Always appended | `_scope.css`, `_syntax-tokens.css` |
| Diagram tokens | `_diagram-tokens.css` when `appendDiagramTokens: true` |
| C++ refine | `original/graphite-code/_cpp-syntax-refine.css` when `appendSyntaxRefine: true` |

## Registry snippet

```js
{
  css: join(root, "original/my-theme/vscode-preview-my-theme.css"),
  out: join(mpeDir, "global-my-theme.less"),
  label: "My Theme",
},
{
  css: join(root, "original/my-theme/vscode-preview-my-theme-light.css"),
  out: join(mpeDir, "global-my-theme-light.less"),
  label: "My Theme Light",
},
```

Diagram overlay example:

```js
{
  css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v3-diagrams.css"),
  out: join(mpeDir, "global-cpp-modern-v3-diagrams.less"),
  label: "C++ Modern v3 Diagrams",
  appendDiagramTokens: true,
},
```

## Naming exceptions

| Family | Note |
| ------ | ---- |
| Studio | Light-only → `global-studio.less` (no `-light` suffix) |
| Phosphor | Dark green + `phosphor-amber` as warm sibling |
| cpp-modern / lumina | Multiple `-vN-` experimental variants allowed |

## Legacy path

`build-from-inline.mjs` only for older cpp-modern / lumina paths from `cursor-inline`. Prefer `original/` + `build-mpe-global.mjs` for new work.

## README touchpoints

After a new family:

1. List the theme in `themes/README.md` (MPE table)
2. List paste files in `themes/mpe/README.md`
3. Short family blurb in `original/<family>/README.md`
