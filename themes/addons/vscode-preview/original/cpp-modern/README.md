# C++ Modern (VS Code Preview)

VS Code / Cursor side-preview port of the C++ Modern inline theme family.

## Files

- `vscode-preview-cpp-modern.css` — recommended dark (released MPE package)
- `vscode-preview-cpp-modern-light.css` — light peer (same selectors/roles; experimental MPE)
- `vscode-preview-cpp-modern-v1-syntax.css` — syntax-token variant (headings mapped to C++ colors)
- `vscode-preview-cpp-modern-v2-readable.css` — historical readable variant kept for comparison

## Install

Add to `.vscode/settings.json` or user settings:

```json
{
  "markdown.styles": [
    "${workspaceFolder}/themes/addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css"
  ],
  "markdown.preview.frontMatter": "hide"
}
```

For light preview CSS, point `markdown.styles` at `vscode-preview-cpp-modern-light.css` instead.

Set `markdown.preview.frontMatter` to `"show"` if you want YAML front matter rendered as a muted metadata table (styled by the theme).

### Markdown Preview Enhanced (global)

- Dark (released): paste [themes/mpe/released/cpp-modern/style.less](../../../../mpe/released/cpp-modern/style.less) (+ package `config.js`)
- Light (experimental): paste [themes/mpe/experimental/cpp-modern-light/style.less](../../../../mpe/experimental/cpp-modern-light/style.less)

See [themes/mpe/README.md](../../../../mpe/README.md).

## Notes

- Scoped to `.markdown-body` (VS Code), `.markdown-preview` (MPE), and `body` (fallback).
- Task lists use GFM classes: `ul.contains-task-list`, `li.task-list-item`.
- Close and reopen preview after editing the CSS file.

## Inline equivalent

For Cursor inline `Preview | Markdown`, use [themes/addons/cursor-inline/original/cpp-modern/](../../../cursor-inline/original/cpp-modern/).

<!-- palette:start -->
## Color palette

Source: `vscode-preview-cpp-modern.css`.

### Tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--cpp-accent` | `#0078d4` | UI accent |
| `--cpp-bg` | `#1f1f1f` | Background |
| `--cpp-border` | `#3c3c3c` | Border |
| `--cpp-code-bg` | `#3c3c3c` | Code surface |
| `--cpp-code-fg` | `#d4d4d4` | Text |
| `--cpp-code-inline` | `#9cdcfe` | Inline code |
| `--cpp-fg` | `#cccccc` | Text |
| `--cpp-link` | `#4daafc` | Link / accent |
| `--cpp-link-hover` | `#6cb6ff` | Link hover |
| `--cpp-muted` | `#9d9d9d` | Muted text |
| `--cpp-panel` | `#2b2b2b` | Panel |
| `--cpp-panel-raised` | `#333333` | Raised panel |
| `--cpp-primary` | `#4ec9b0` | Primary accent |
| `--cpp-secondary` | `#569cd6` | Secondary accent |
| `--cpp-syntax-comment` | `#6a9955` | Syntax: comment |
| `--cpp-syntax-number` | `#b5cea8` | Syntax: number |
| `--cpp-syntax-string` | `#ce9178` | Syntax: string |
| `--md-syntax-comment` | `#6a9955` | Syntax: comment |
| `--md-syntax-constant` | `#4fc1ff` | Syntax: constant |
| `--md-syntax-control` | `#c586c0` | Syntax: control |
| `--md-syntax-deleted` | `#f44747` | Syntax: deleted |
| `--md-syntax-function` | `#dcdcaa` | Syntax: function |
| `--md-syntax-inserted` | `#89d185` | Syntax: inserted |
| `--md-syntax-keyword` | `#569cd6` | Syntax: keyword |
| `--md-syntax-number` | `#b5cea8` | Syntax: number |
| `--md-syntax-operator` | `#d4d4d4` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#569cd6` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#d4d4d4` | Syntax: operator/punct |
| `--md-syntax-string` | `#ce9178` | Syntax: string |
| `--md-syntax-type` | `#4ec9b0` | Syntax: type |
| `--md-syntax-variable` | `#9cdcfe` | Syntax: variable |

### Unique hex values

| Color |
| ----- |
| `#0078d4` |
| `#1f1f1f` |
| `#2b2b2b` |
| `#333333` |
| `#3c3c3c` |
| `#4daafc` |
| `#4ec9b0` |
| `#4fc1ff` |
| `#569cd6` |
| `#6a9955` |
| `#6cb6ff` |
| `#89d185` |
| `#9cdcfe` |
| `#9d9d9d` |
| `#b5cea8` |
| `#c586c0` |
| `#cccccc` |
| `#ce9178` |
| `#d4d4d4` |
| `#dcdcaa` |
| `#f44747` |


Light source: `vscode-preview-cpp-modern-light.css`.

### Light tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--cpp-accent` | `#2563eb` | UI accent |
| `--cpp-bg` | `#f7f9fc` | Background |
| `--cpp-border` | `#d0d7e2` | Border |
| `--cpp-code-bg` | `#e2e8f0` | Code surface |
| `--cpp-code-fg` | `#1e293b` | Text |
| `--cpp-code-inline` | `#1d4ed8` | Inline code |
| `--cpp-fg` | `#1f2937` | Text |
| `--cpp-link` | `#1d4ed8` | Link / accent |
| `--cpp-link-hover` | `#1e40af` | Link hover |
| `--cpp-muted` | `#64748b` | Muted text |
| `--cpp-panel` | `#eef2f7` | Panel |
| `--cpp-panel-raised` | `#ffffff` | Raised panel |
| `--cpp-primary` | `#0f766e` | Primary accent |
| `--cpp-secondary` | `#1d4ed8` | Secondary accent |
| `--cpp-syntax-comment` | `#3f6212` | Syntax: comment |
| `--cpp-syntax-number` | `#166534` | Syntax: number |
| `--cpp-syntax-string` | `#9a3412` | Syntax: string |
| `--md-syntax-comment` | `#3f6212` | Syntax: comment |
| `--md-syntax-constant` | `#0284c7` | Syntax: constant |
| `--md-syntax-control` | `#7e22ce` | Syntax: control |
| `--md-syntax-deleted` | `#b91c1c` | Syntax: deleted |
| `--md-syntax-function` | `#a16207` | Syntax: function |
| `--md-syntax-inserted` | `#15803d` | Syntax: inserted |
| `--md-syntax-keyword` | `#1d4ed8` | Syntax: keyword |
| `--md-syntax-number` | `#166534` | Syntax: number |
| `--md-syntax-operator` | `#334155` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#1d4ed8` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#475569` | Syntax: operator/punct |
| `--md-syntax-string` | `#9a3412` | Syntax: string |
| `--md-syntax-type` | `#0f766e` | Syntax: type |
| `--md-syntax-variable` | `#0369a1` | Syntax: variable |

### Light unique hex values

| Color |
| ----- |
| `#0284c7` |
| `#0369a1` |
| `#0f766e` |
| `#15803d` |
| `#166534` |
| `#1d4ed8` |
| `#1e293b` |
| `#1e40af` |
| `#1f2937` |
| `#2563eb` |
| `#334155` |
| `#3f6212` |
| `#475569` |
| `#64748b` |
| `#7e22ce` |
| `#9a3412` |
| `#a16207` |
| `#b91c1c` |
| `#d0d7e2` |
| `#e2e8f0` |
| `#eef2f7` |
| `#f7f9fc` |
| `#ffffff` |

<!-- palette:end -->
