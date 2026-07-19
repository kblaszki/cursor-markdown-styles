# C++ Modern Light (experimental)

Light peer of released [C++ Modern](../../released/cpp-modern/): same selector inventory and accent jobs (teal primary, blue secondary, link blue), hex tuned for paper surfaces.

## Install

1. Paste the entire [`style.less`](style.less) into `%USERPROFILE%\.crossnote\style.less` via **Markdown Preview Enhanced: Customize CSS (Global)**.
2. Optional settings:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

No package `config.js` yet — Mermaid stays on MPE defaults until promotion to released.

## Source

[`addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css`](../../../addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css)

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Role map: [docs/mpe-theme-reference.md](../../../../docs/mpe-theme-reference.md) §7.

<!-- palette:start -->
## Color palette

Extracted literal hex tokens from generated `style.less`.

### Tokens (literal hex)

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

### Unique hex values

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
| `#4ec9b0` |
| `#4fc1ff` |
| `#569cd6` |
| `#64748b` |
| `#6a9955` |
| `#7e22ce` |
| `#89d185` |
| `#9a3412` |
| `#9cdcfe` |
| `#a16207` |
| `#b5cea8` |
| `#b91c1c` |
| `#c586c0` |
| `#ce9178` |
| `#d0d7e2` |
| `#d4d4d4` |
| `#dcdcaa` |
| `#e2e8f0` |
| `#eef2f7` |
| `#f44747` |
| `#f7f9fc` |
| `#ffffff` |

<!-- palette:end -->
