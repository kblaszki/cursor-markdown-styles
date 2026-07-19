# C++ Modern (VS Code Preview)

VS Code / Cursor side-preview port of the C++ Modern inline theme family.

## Files

- `vscode-preview-cpp-modern.css` — recommended installable version
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

Set `markdown.preview.frontMatter` to `"show"` if you want YAML front matter rendered as a muted metadata table (styled by the theme).

### Markdown Preview Enhanced (global)

Paste the entire contents of [themes/mpe/released/cpp-modern/style.less](../../../../mpe/released/cpp-modern/style.less) into `%USERPROFILE%\.crossnote\style.less` via **Customize CSS (Global)**. See [themes/mpe/README.md](../../../../mpe/README.md).

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
| `--cpp-accent` | `#0f766e` | UI accent |
| `--cpp-bg` | `#f7f9fc` | Background |
| `--cpp-border` | `#c8d5df` | Border |
| `--cpp-code-bg` | `#e8eef5` | Code surface |
| `--cpp-code-fg` | `#16324a` | Text |
| `--cpp-code-inline` | `#0f5fd7` | Inline code |
| `--cpp-fg` | `#203040` | Text |
| `--cpp-link` | `#0f5fd7` | Link / accent |
| `--cpp-link-hover` | `#0b4bac` | Link hover |
| `--cpp-muted` | `#5f7284` | Muted text |
| `--cpp-panel` | `#eef4f8` | Panel |
| `--cpp-panel-raised` | `#ffffff` | Raised panel |
| `--cpp-primary` | `#0e7490` | Primary accent |
| `--cpp-secondary` | `#2563eb` | Secondary accent |
| `--md-code-bg` | `#e8eef5` | Code surface |
| `--md-syntax-comment` | `#2f6b2f` | Syntax: comment |
| `--md-syntax-constant` | `#0369a1` | Syntax: constant |
| `--md-syntax-control` | `#8a2f8a` | Syntax: control |
| `--md-syntax-deleted` | `#b42318` | Syntax: deleted |
| `--md-syntax-function` | `#6b5a00` | Syntax: function |
| `--md-syntax-inserted` | `#067647` | Syntax: inserted |
| `--md-syntax-keyword` | `#0b57a4` | Syntax: keyword |
| `--md-syntax-number` | `#2f6b2f` | Syntax: number |
| `--md-syntax-operator` | `#334155` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#0b57a4` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#475569` | Syntax: operator/punct |
| `--md-syntax-string` | `#a14a1f` | Syntax: string |
| `--md-syntax-type` | `#0e7490` | Syntax: type |
| `--md-syntax-variable` | `#0f5fd7` | Syntax: variable |

### Light unique hex values

| Color |
| ----- |
| `#0369a1` |
| `#067647` |
| `#0b4bac` |
| `#0b57a4` |
| `#0e7490` |
| `#0f5fd7` |
| `#0f766e` |
| `#16324a` |
| `#203040` |
| `#2563eb` |
| `#2f6b2f` |
| `#334155` |
| `#475569` |
| `#5f7284` |
| `#6b5a00` |
| `#8a2f8a` |
| `#a14a1f` |
| `#b42318` |
| `#c8d5df` |
| `#e8eef5` |
| `#eef4f8` |
| `#f7f9fc` |
| `#ffffff` |

<!-- palette:end -->
