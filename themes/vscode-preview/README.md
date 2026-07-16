# VS Code and MPE Preview Themes

This directory contains the shared theme family for:

- **Markdown Preview Enhanced (MPE)** - recommended primary workflow
- the built-in **VS Code / Cursor Markdown preview** via `markdown.styles`

These files target `.markdown-body` (built-in preview), `.markdown-preview` (MPE), and `body` (iframe fallback).

They do **not** apply to Cursor's inline `Preview | Markdown` mode. That path is kept as legacy documentation in [../cursor-inline/](../cursor-inline/).

## Directory Layout

- `original/cpp-modern/` — C++ Modern family (ported from cursor-inline)
- `mpe/` — ready-to-paste bundles for MPE global `style.less`
- `_scope.css` — shared task-list and front-matter helpers (reference only)
- `build-from-inline.mjs` — regenerate themes from cursor-inline sources
- `build-mpe-global.mjs` — regenerate `mpe/global-*.less` bundles

## Recommended Workflow

For daily Markdown work in VS Code or Cursor:

1. Install **Markdown Preview Enhanced**.
2. Set `markdown-preview-enhanced.previewMode` to `"Previews Only"`.
3. Paste one of the bundles from [`mpe/`](mpe/) into global `style.less`.
4. Use the built-in preview only when you specifically want `markdown.styles`.

## Install — Markdown Preview Enhanced (Global)

MPE **does not read** `markdown.styles`. Use a ready-made bundle from `mpe/`.

### Quick steps

1. `Ctrl+Shift+P` → **Markdown Preview Enhanced: Customize CSS (Global)**
2. VS Code opens `%USERPROFILE%\.crossnote\style.less`
3. Select all (`Ctrl+A`) → delete
4. Open `themes/vscode-preview/mpe/global-cpp-modern.less` from this repo
5. Copy the entire file (`Ctrl+A`, `Ctrl+C`) → paste into `style.less` → save
6. Restart the editor if you just enabled `Previews Only`
7. Open any `.md`

Full walkthrough: [mpe/README.md](mpe/README.md)

### Bundles

| File | Variant |
| ---- | ------- |
| [mpe/global-cpp-modern.less](mpe/global-cpp-modern.less) | C++ Modern (recommended) |
| [mpe/global-cpp-modern-v1-syntax.less](mpe/global-cpp-modern-v1-syntax.less) | v1 Syntax |
| [mpe/global-cpp-modern-v2-readable.less](mpe/global-cpp-modern-v2-readable.less) | v2 Readable |

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
    "${workspaceFolder}/themes/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css"
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

1. Paste `mpe/global-cpp-modern.less` into global `style.less` (see above).
2. Open any file from `examples/`.
3. If `Previews Only` is enabled, the file opens directly in MPE preview after restart.
4. Otherwise run **Markdown Preview Enhanced: Open Preview to the Side**.

## Related

- [themes/cursor-inline/](../cursor-inline/) — legacy inline preview themes (workbench patch)
- [preview/cursor-preview.css](../../preview/cursor-preview.css) — minimal generic side-preview starter
