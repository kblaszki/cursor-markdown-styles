# Graphite Code

A hybrid theme family: **Graphite** styling with **C++ Modern / Dark+** syntax colors and a Graphite-Code-only refine layer.

## Files

- `vscode-preview-graphite-code.css` - dark hybrid
- `vscode-preview-graphite-code-light.css` - light hybrid
- `_cpp-syntax-refine.css` - stronger C++ token splits (appended after shared syntax tokens)

## MPE Bundles

- `themes/mpe/experimental/graphite-code/style.less`
- `themes/mpe/experimental/graphite-code-light/style.less`

## Notes

- The full visual style stays aligned with Graphite, including inline code and fenced block chrome.
- Syntax colors follow VS Code Dark+ / C++ Modern.
- The refine layer strengthens mapping for:
  - `boolean` as keyword (not number)
  - types / class names / builtins
  - functions
  - macros / directives / nested macro tokens
  - constants, variables, escapes
  - quieter punctuation vs operators
- Control-flow purple (`--md-syntax-control`) applies when the highlighter emits `.token.control` / `.keyword.control`. Plain Prism C++ still paints most keywords blue, which matches stock Dark+.
- Light fences use a recessed warm panel (`#ebe2d6`) and a higher-chroma Light+ token palette for clearer C++ contrast.
- Best fixtures: `examples/code-showcase.md`.

<!-- palette:start -->
## Color palette

Source: `vscode-preview-graphite-code.css`.

### Tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--graphite-accent` | `#d19a66` | UI accent |
| `--graphite-accent-strong` | `#f0b27a` | UI accent |
| `--graphite-bg` | `#171616` | Background |
| `--graphite-border` | `#4b423d` | Border |
| `--graphite-code-bg` | `#241f1a` | Code surface |
| `--graphite-code-text` | `#f2d4b2` | Text |
| `--graphite-link` | `#e6b98b` | Link / accent |
| `--graphite-muted` | `#a59a90` | Muted text |
| `--graphite-panel` | `#221f1d` | Panel |
| `--graphite-panel-raised` | `#2b2623` | Raised panel |
| `--graphite-text` | `#ddd6cf` | Text |
| `--md-syntax-comment` | `#6a9955` | Syntax: comment |
| `--md-syntax-constant` | `#4fc1ff` | Syntax: constant |
| `--md-syntax-control` | `#c586c0` | Syntax: control |
| `--md-syntax-deleted` | `#f44747` | Syntax: deleted |
| `--md-syntax-escape` | `#d7ba7d` | Theme token |
| `--md-syntax-fg` | `#d4d4d4` | Text |
| `--md-syntax-function` | `#dcdcaa` | Syntax: function |
| `--md-syntax-inserted` | `#89d185` | Syntax: inserted |
| `--md-syntax-keyword` | `#569cd6` | Syntax: keyword |
| `--md-syntax-label` | `#c8c8c8` | Theme token |
| `--md-syntax-number` | `#b5cea8` | Syntax: number |
| `--md-syntax-operator` | `#d4d4d4` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#569cd6` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#a0a0a0` | Syntax: operator/punct |
| `--md-syntax-string` | `#ce9178` | Syntax: string |
| `--md-syntax-type` | `#4ec9b0` | Syntax: type |
| `--md-syntax-variable` | `#9cdcfe` | Syntax: variable |

### Unique hex values

| Color |
| ----- |
| `#171616` |
| `#221f1d` |
| `#241f1a` |
| `#2b2623` |
| `#4b423d` |
| `#4ec9b0` |
| `#4fc1ff` |
| `#569cd6` |
| `#6a9955` |
| `#89d185` |
| `#9cdcfe` |
| `#a0a0a0` |
| `#a59a90` |
| `#b5cea8` |
| `#c586c0` |
| `#c8c8c8` |
| `#c9b9aa` |
| `#ce9178` |
| `#d19a66` |
| `#d4d4d4` |
| `#d7ba7d` |
| `#dcdcaa` |
| `#ddd6cf` |
| `#e4c7a4` |
| `#e6b98b` |
| `#f0b27a` |
| `#f2d4b2` |
| `#f2e8dc` |
| `#f3dfc9` |
| `#f44747` |
| `#f5ede3` |


Light source: `vscode-preview-graphite-code-light.css`.

### Light tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--graphite-accent` | `#b56c35` | UI accent |
| `--graphite-accent-strong` | `#8f4d1d` | UI accent |
| `--graphite-bg` | `#fcfaf7` | Background |
| `--graphite-border` | `#dac8b7` | Border |
| `--graphite-code-bg` | `#efe6de` | Code surface |
| `--graphite-code-fence-bg` | `#ebe2d6` | Theme token |
| `--graphite-code-fence-border` | `#c9b29a` | Border |
| `--graphite-code-text` | `#7b3f12` | Text |
| `--graphite-link` | `#9a5521` | Link / accent |
| `--graphite-muted` | `#786a5d` | Muted text |
| `--graphite-panel` | `#f4ede6` | Panel |
| `--graphite-panel-raised` | `#fffdf9` | Raised panel |
| `--graphite-text` | `#2c241e` | Text |
| `--md-syntax-comment` | `#1b7a38` | Syntax: comment |
| `--md-syntax-constant` | `#026aa2` | Syntax: constant |
| `--md-syntax-control` | `#a21caf` | Syntax: control |
| `--md-syntax-deleted` | `#b42318` | Syntax: deleted |
| `--md-syntax-escape` | `#a16207` | Theme token |
| `--md-syntax-fg` | `#1a1520` | Text |
| `--md-syntax-function` | `#8b5a00` | Syntax: function |
| `--md-syntax-inserted` | `#067647` | Syntax: inserted |
| `--md-syntax-keyword` | `#0550ae` | Syntax: keyword |
| `--md-syntax-label` | `#4a3f36` | Theme token |
| `--md-syntax-number` | `#157a3a` | Syntax: number |
| `--md-syntax-operator` | `#1e293b` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#0550ae` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#6b5c4f` | Syntax: operator/punct |
| `--md-syntax-string` | `#c0391a` | Syntax: string |
| `--md-syntax-type` | `#0a7a8c` | Syntax: type |
| `--md-syntax-variable` | `#0b4fd6` | Syntax: variable |

### Light unique hex values

| Color |
| ----- |
| `#026aa2` |
| `#0550ae` |
| `#067647` |
| `#0a7a8c` |
| `#0b4fd6` |
| `#157a3a` |
| `#1a1520` |
| `#1b7a38` |
| `#1e293b` |
| `#2c241e` |
| `#3a2b20` |
| `#4a3f36` |
| `#4c3426` |
| `#69594e` |
| `#6b5c4f` |
| `#786a5d` |
| `#7b3f12` |
| `#8b5a00` |
| `#8f4d1d` |
| `#9a5521` |
| `#a16207` |
| `#a21caf` |
| `#a35a28` |
| `#b42318` |
| `#b56c35` |
| `#c0391a` |
| `#c9b29a` |
| `#dac8b7` |
| `#ebe2d6` |
| `#efe6de` |
| `#f4ede6` |
| `#fcfaf7` |
| `#fffdf9` |
| `#ffffff` |

<!-- palette:end -->
