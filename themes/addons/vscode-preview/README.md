# VS Code Preview Add-on

Secondary theme path for:

- the built-in **VS Code / Cursor Markdown preview** via `markdown.styles`
- **source CSS** used to generate MPE packages under [`../../mpe/released/`](../../mpe/released/) and [`../../mpe/experimental/`](../../mpe/experimental/)

These files target `.markdown-body` (built-in preview), `.markdown-preview` (MPE), and `body` (iframe fallback).

They do **not** apply to Cursor's inline `Preview | Markdown` mode. That path is legacy documentation in [../cursor-inline/](../cursor-inline/).

Tiering (`released` / `experimental`) applies to **MPE packages only**. This add-on stays a shared authoring + `markdown.styles` channel; status is documented via the mapping table below.

## Directory Layout

- `original/<family>/` — family source CSS for built-in preview and MPE generation
- `_scope.css` — shared task-list and front-matter helpers (reference only)
- `_syntax-tokens.css` — shared C++-first Prism / hljs token colors (appended to MPE packages)
- `_diagram-tokens.css` — shared Mermaid / diagram SVG overrides (appended when `appendDiagramTokens: true`)
- `build-from-inline.mjs` — regenerate themes from cursor-inline sources (legacy)
- `build-mpe-global.mjs` — regenerate `mpe/released|experimental/<slug>/style.less`

## Recommended Workflow

1. Install **Markdown Preview Enhanced**.
2. Set `markdown-preview-enhanced.previewMode` to `"Previews Only"`.
3. Paste [`../../mpe/released/cpp-modern/style.less`](../../mpe/released/cpp-modern/style.less) into global `style.less` and replace `config.js` with its `config.js` (paste as-is).
4. Use the built-in preview only when you specifically want `markdown.styles`.

## Install — Markdown Preview Enhanced (Global)

MPE **does not read** `markdown.styles`. Use a package from [`../../mpe/`](../../mpe/).

### Quick steps

1. `Ctrl+Shift+P` → **Markdown Preview Enhanced: Customize CSS (Global)**
2. VS Code opens `%USERPROFILE%\.crossnote\style.less`
3. Select all (`Ctrl+A`) → delete
4. Open `themes/mpe/released/cpp-modern/style.less` from this repo
5. Copy the entire file → paste into `style.less` → save
6. Replace `%USERPROFILE%\.crossnote\config.js` with `themes/mpe/released/cpp-modern/config.js` (paste as-is)
7. Restart the editor if you just enabled `Previews Only`
8. Open any `.md`

Full walkthrough: [../../mpe/README.md](../../mpe/README.md)

### MPE ↔ this CSS mapping

| MPE package | vscode-preview CSS | Status |
| ----------- | ------------------ | ------ |
| [../../mpe/released/cpp-modern](../../mpe/released/cpp-modern) | [original/cpp-modern/vscode-preview-cpp-modern.css](original/cpp-modern/vscode-preview-cpp-modern.css) | released |
| [../../mpe/released/cpp-modern-light](../../mpe/released/cpp-modern-light) | [original/cpp-modern/vscode-preview-cpp-modern-light.css](original/cpp-modern/vscode-preview-cpp-modern-light.css) | released |
| [../../mpe/released/lumina-v5-aurora](../../mpe/released/lumina-v5-aurora) | [original/lumina/vscode-preview-lumina-v5-aurora.css](original/lumina/vscode-preview-lumina-v5-aurora.css) | released |
| [../../mpe/released/lumina-v5-aurora-light](../../mpe/released/lumina-v5-aurora-light) | [original/lumina/vscode-preview-lumina-v5-aurora-light.css](original/lumina/vscode-preview-lumina-v5-aurora-light.css) | released |
| [../../mpe/experimental/studio](../../mpe/experimental/studio) | [original/studio/vscode-preview-studio.css](original/studio/vscode-preview-studio.css) | experimental |
| [../../mpe/experimental/…](../../mpe/experimental) | matching `original/<family>/vscode-preview-*.css` | experimental |

Each package `style.less` inlines the full CSS (no `@import`) so copy-paste works reliably.

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

After changing CSS, close and reopen the Markdown preview. The CSS above is the peer of the **released** MPE package.

## Preview Before Installing

### Built-in preview

1. Set `markdown.styles` in `.vscode/settings.json`.
2. Open any file from `examples/`.
3. **Markdown: Open Preview to the Side** (`Ctrl+K V`).

### MPE preview

1. Paste `../../mpe/released/cpp-modern/style.less` into global `style.less` (see above).
2. Open any file from `examples/`.
3. If `Previews Only` is enabled, the file opens directly in MPE preview after restart.
4. Otherwise run **Markdown Preview Enhanced: Open Preview to the Side**.

## Related

- [themes/addons/cursor-inline/](../cursor-inline/) — legacy inline preview themes
- [preview/cursor-preview.css](../../preview/cursor-preview.css) — minimal generic side-preview starter
