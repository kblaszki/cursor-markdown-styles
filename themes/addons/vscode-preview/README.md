# VS Code Preview Add-on

This directory contains the secondary theme family for:

- the built-in **VS Code / Cursor Markdown preview** via `markdown.styles`
- source files used to generate the primary MPE bundles in [`../../mpe/`](../../mpe/)

These files target `.markdown-body` (built-in preview), `.markdown-preview` (MPE), and `body` (iframe fallback).

They do **not** apply to Cursor's inline `Preview | Markdown` mode. That path is kept as legacy documentation in [../cursor-inline/](../cursor-inline/).

## Directory Layout

- `original/cpp-modern/` — C++ Modern family for built-in preview
- `original/studio/` — Studio light-first peer to C++ Modern
- `original/lumina/` — Lumina family source CSS for built-in preview and MPE bundle generation
- `original/graphite/` — Graphite family source CSS for built-in preview and MPE bundle generation
- `original/graphite-code/` — Graphite Code hybrid (Graphite chrome + Dark+ syntax + C++ refine layer)
- `original/meridian/` — Meridian family source CSS for built-in preview and MPE bundle generation
- `original/blueprint/` — Blueprint cyanotype drafting family
- `original/phosphor/` — Phosphor CRT terminal family (green + amber)
- `original/matcha/` — Matcha tea-garden serif family
- `original/beacon/` — Beacon readability-first family (tempered Dark+/Light+ code)
- `_scope.css` — shared task-list and front-matter helpers (reference only)
- `build-from-inline.mjs` — regenerate themes from cursor-inline sources
- `build-mpe-global.mjs` — regenerate `../../mpe/global-*.less` bundles

## Recommended Workflow

For daily Markdown work in VS Code or Cursor:

1. Install **Markdown Preview Enhanced**.
2. Set `markdown-preview-enhanced.previewMode` to `"Previews Only"`.
3. Paste one of the bundles from [`../../mpe/`](../../mpe/) into global `style.less`.
4. Use the built-in preview only when you specifically want `markdown.styles`.

## Install — Markdown Preview Enhanced (Global)

MPE **does not read** `markdown.styles`. Use a ready-made bundle from [`../../mpe/`](../../mpe/).

### Quick steps

1. `Ctrl+Shift+P` → **Markdown Preview Enhanced: Customize CSS (Global)**
2. VS Code opens `%USERPROFILE%\.crossnote\style.less`
3. Select all (`Ctrl+A`) → delete
4. Open `themes/mpe/global-cpp-modern.less` from this repo
5. Copy the entire file (`Ctrl+A`, `Ctrl+C`) → paste into `style.less` → save
6. Restart the editor if you just enabled `Previews Only`
7. Open any `.md`

Full walkthrough: [../../mpe/README.md](../../mpe/README.md)

### Bundles

| File | Variant |
| ---- | ------- |
| [../../mpe/global-cpp-modern.less](../../mpe/global-cpp-modern.less) | C++ Modern (recommended) |
| [../../mpe/global-cpp-modern-light.less](../../mpe/global-cpp-modern-light.less) | C++ Modern Light |
| [../../mpe/global-studio.less](../../mpe/global-studio.less) | Studio (recommended light peer) |
| [../../mpe/global-cpp-modern-v1-syntax.less](../../mpe/global-cpp-modern-v1-syntax.less) | v1 Syntax |
| [../../mpe/global-cpp-modern-v2-readable.less](../../mpe/global-cpp-modern-v2-readable.less) | v2 Readable |
| [../../mpe/global-lumina.less](../../mpe/global-lumina.less) | Lumina |
| [../../mpe/global-lumina-light.less](../../mpe/global-lumina-light.less) | Lumina Light |
| [../../mpe/global-lumina-v1-neon.less](../../mpe/global-lumina-v1-neon.less) | Lumina v1 Neon |
| [../../mpe/global-lumina-v2-muted.less](../../mpe/global-lumina-v2-muted.less) | Lumina v2 Muted |
| [../../mpe/global-lumina-v3-balanced.less](../../mpe/global-lumina-v3-balanced.less) | Lumina v3 Balanced |
| [../../mpe/global-lumina-v4-neon-blue.less](../../mpe/global-lumina-v4-neon-blue.less) | Lumina v4 Neon Blue |
| [../../mpe/global-graphite.less](../../mpe/global-graphite.less) | Graphite |
| [../../mpe/global-graphite-light.less](../../mpe/global-graphite-light.less) | Graphite Light |
| [../../mpe/global-graphite-code.less](../../mpe/global-graphite-code.less) | Graphite Code |
| [../../mpe/global-graphite-code-light.less](../../mpe/global-graphite-code-light.less) | Graphite Code Light |
| [../../mpe/global-meridian.less](../../mpe/global-meridian.less) | Meridian |
| [../../mpe/global-meridian-light.less](../../mpe/global-meridian-light.less) | Meridian Light |
| [../../mpe/global-blueprint.less](../../mpe/global-blueprint.less) | Blueprint |
| [../../mpe/global-blueprint-light.less](../../mpe/global-blueprint-light.less) | Blueprint Light |
| [../../mpe/global-phosphor.less](../../mpe/global-phosphor.less) | Phosphor |
| [../../mpe/global-phosphor-amber.less](../../mpe/global-phosphor-amber.less) | Phosphor Amber |
| [../../mpe/global-matcha.less](../../mpe/global-matcha.less) | Matcha |
| [../../mpe/global-matcha-light.less](../../mpe/global-matcha-light.less) | Matcha Light |
| [../../mpe/global-beacon.less](../../mpe/global-beacon.less) | Beacon |
| [../../mpe/global-beacon-light.less](../../mpe/global-beacon-light.less) | Beacon Light |

Each bundle inlines the full CSS (no `@import`) so copy-paste works reliably.

### Recommended MPE settings

```json
{
  "markdown-preview-enhanced.previewMode": "Previews Only",
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

## Install — Built-in VS Code Preview

### Workspace (recommended)

Add to `.vscode/settings.json`:

```json
{
  "markdown.styles": [
    "${workspaceFolder}/themes/addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css"
  ],
  "markdown.preview.frontMatter": "hide"
}
```

After changing CSS, close and reopen the Markdown preview.

## Preview Before Installing

### Built-in preview

1. Set `markdown.styles` in `.vscode/settings.json`.
2. Open any file from `examples/`.
3. **Markdown: Open Preview to the Side** (`Ctrl+K V`).

### MPE preview

1. Paste `../../mpe/global-cpp-modern.less` into global `style.less` (see above).
2. Open any file from `examples/`.
3. If `Previews Only` is enabled, the file opens directly in MPE preview after restart.
4. Otherwise run **Markdown Preview Enhanced: Open Preview to the Side**.

## Related

- [themes/addons/cursor-inline/](../cursor-inline/) — legacy inline preview themes (workbench patch)
- [preview/cursor-preview.css](../../preview/cursor-preview.css) — minimal generic side-preview starter
