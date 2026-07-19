# Beacon

Readability-first family for daily docs: calm slate/paper surfaces, clear hierarchy signals, and tempered Dark+/Light+ code colors that stay vivid without glare.

## Design Goals

- Long-form prose stays easy on the eyes (`max-width`, generous line-height).
- Things that should stand out do: H2 (blue), H3 (warm amber), `strong`, links, quotes, `mark`.
- Fenced code sits on a clearly separated panel with C++-friendly token roles.
- Uses the shared Graphite Code C++ refine layer for stronger Prism/hljs splits (boolean ≠ number, macros, types, etc.).

## Files

- `vscode-preview-beacon.css` - dark
- `vscode-preview-beacon-light.css` - light

## MPE Bundles

- `themes/mpe/experimental/beacon/style.less`
- `themes/mpe/experimental/beacon-light/style.less`

<!-- palette:start -->
## Color palette

Source: `vscode-preview-beacon.css`.

### Tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--be-bg` | `#1a1d24` | Background |
| `--be-border` | `#3a4150` | Border |
| `--be-code-bg` | `#2e3440` | Code surface |
| `--be-code-text` | `#8ec8e8` | Text |
| `--be-fence-bg` | `#151820` | Background |
| `--be-fence-fg` | `#d6dae3` | Text |
| `--be-link` | `#6aafde` | Link / accent |
| `--be-muted` | `#9aa3b2` | Muted text |
| `--be-panel` | `#22262f` | Panel |
| `--be-panel-raised` | `#2a2f3a` | Raised panel |
| `--be-primary` | `#5a9fd4` | Primary accent |
| `--be-secondary` | `#c9a06a` | Secondary accent |
| `--be-strong` | `#f2f4f8` | Theme token |
| `--be-text` | `#e6e8ee` | Text |
| `--md-syntax-comment` | `#6e9a62` | Syntax: comment |
| `--md-syntax-constant` | `#4aafd9` | Syntax: constant |
| `--md-syntax-control` | `#b87eb0` | Syntax: control |
| `--md-syntax-deleted` | `#d96b72` | Syntax: deleted |
| `--md-syntax-escape` | `#c9a06a` | Theme token |
| `--md-syntax-fg` | `#d6dae3` | Text |
| `--md-syntax-function` | `#d0c48a` | Syntax: function |
| `--md-syntax-inserted` | `#7fbf88` | Syntax: inserted |
| `--md-syntax-keyword` | `#5a9fd4` | Syntax: keyword |
| `--md-syntax-label` | `#b0b7c4` | Theme token |
| `--md-syntax-number` | `#a8c49c` | Syntax: number |
| `--md-syntax-operator` | `#c5cad4` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#5a9fd4` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#8b93a3` | Syntax: operator/punct |
| `--md-syntax-string` | `#c98970` | Syntax: string |
| `--md-syntax-type` | `#4db8a8` | Syntax: type |
| `--md-syntax-variable` | `#8ec8e8` | Syntax: variable |

### Unique hex values

| Color |
| ----- |
| `#151820` |
| `#1a1d24` |
| `#22262f` |
| `#2a2f3a` |
| `#2e3440` |
| `#3a4150` |
| `#4aafd9` |
| `#4db8a8` |
| `#5a9fd4` |
| `#6aafde` |
| `#6e9a62` |
| `#7fbf88` |
| `#8b93a3` |
| `#8bc4ea` |
| `#8ec8e8` |
| `#9aa3b2` |
| `#a8c49c` |
| `#b0b7c4` |
| `#b87eb0` |
| `#b8c0ce` |
| `#c5cad4` |
| `#c98970` |
| `#c9a06a` |
| `#d0c48a` |
| `#d5dae4` |
| `#d6dae3` |
| `#d96b72` |
| `#e6e8ee` |
| `#f2f4f8` |


Light source: `vscode-preview-beacon-light.css`.

### Light tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--be-bg` | `#f6f7fa` | Background |
| `--be-border` | `#c5cddb` | Border |
| `--be-code-bg` | `#e2e8f2` | Code surface |
| `--be-code-text` | `#0f4f8f` | Text |
| `--be-fence-bg` | `#eef2f8` | Background |
| `--be-fence-fg` | `#1a2030` | Text |
| `--be-link` | `#1a62a0` | Link / accent |
| `--be-muted` | `#5f6b7c` | Muted text |
| `--be-panel` | `#e9edf4` | Panel |
| `--be-panel-raised` | `#ffffff` | Raised panel |
| `--be-primary` | `#1f6fb3` | Primary accent |
| `--be-secondary` | `#9a5f28` | Secondary accent |
| `--be-strong` | `#12151c` | Theme token |
| `--be-text` | `#1f2430` | Text |
| `--md-syntax-comment` | `#3d7340` | Syntax: comment |
| `--md-syntax-constant` | `#0a6f96` | Syntax: constant |
| `--md-syntax-control` | `#8a2f8a` | Syntax: control |
| `--md-syntax-deleted` | `#b42318` | Syntax: deleted |
| `--md-syntax-escape` | `#9a6700` | Theme token |
| `--md-syntax-fg` | `#1a2030` | Text |
| `--md-syntax-function` | `#7a5a00` | Syntax: function |
| `--md-syntax-inserted` | `#067647` | Syntax: inserted |
| `--md-syntax-keyword` | `#1558a0` | Syntax: keyword |
| `--md-syntax-label` | `#475569` | Theme token |
| `--md-syntax-number` | `#2f7340` | Syntax: number |
| `--md-syntax-operator` | `#334155` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#1558a0` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#64748b` | Syntax: operator/punct |
| `--md-syntax-string` | `#b03f18` | Syntax: string |
| `--md-syntax-type` | `#0d7480` | Syntax: type |
| `--md-syntax-variable` | `#0f5ab5` | Syntax: variable |

### Light unique hex values

| Color |
| ----- |
| `#067647` |
| `#0a6f96` |
| `#0d7480` |
| `#0f4f8f` |
| `#0f5ab5` |
| `#12151c` |
| `#1558a0` |
| `#1a2030` |
| `#1a62a0` |
| `#1f2430` |
| `#1f6fb3` |
| `#2a3140` |
| `#2f7340` |
| `#334155` |
| `#3a4558` |
| `#3d7340` |
| `#475569` |
| `#4a5568` |
| `#5f6b7c` |
| `#64748b` |
| `#7a5a00` |
| `#8a2f8a` |
| `#9a5f28` |
| `#9a6700` |
| `#b03f18` |
| `#b42318` |
| `#c5cddb` |
| `#e2e8f2` |
| `#e9edf4` |
| `#eef2f8` |
| `#f6f7fa` |
| `#ffffff` |

<!-- palette:end -->
