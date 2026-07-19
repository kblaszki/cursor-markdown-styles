# Lumina

An original luminous blue theme family with gradient headings, bright links, and higher-energy surfaces than the other MPE bundles.

## Primary Files

- `vscode-preview-lumina-v5-aurora.css` / `-light.css` — **released** refined pair (recommended)
- `vscode-preview-lumina.css` - dark neon variant (legacy recommended before v5)
- `vscode-preview-lumina-light.css` - light icy variant (truncated legacy peer)

## v5 Aurora (released)

Synthesizes lessons from all Lumina versions + `docs/mpe-theme-reference.md` §8:

- Blue identity from current / v4
- Restrained multi-hue syntax (warm functions, rose strings, mauve control) from v1 / v3
- Softer glow from v2
- Full dark CSS structure for both modes (light is no longer a truncated peer)
- Hardcoded light surfaces; explicit primary / secondary / link roles

| Mode | Source | MPE package |
| ---- | ------ | ----------- |
| Dark | `vscode-preview-lumina-v5-aurora.css` | [`themes/mpe/released/lumina-v5-aurora/`](../../../mpe/released/lumina-v5-aurora/) (`style.less` + `config.js`) |
| Light | `vscode-preview-lumina-v5-aurora-light.css` | [`themes/mpe/released/lumina-v5-aurora-light/`](../../../mpe/released/lumina-v5-aurora-light/) (`style.less` + `config.js`) |

## Legacy Variants (converted from cursor-inline)

- `vscode-preview-lumina-v1-neon.css` - original vivid multi-hue neon
- `vscode-preview-lumina-v2-muted.css` - softer, lower-glow palette
- `vscode-preview-lumina-v3-balanced.css` - midpoint between vivid and muted
- `vscode-preview-lumina-v4-neon-blue.css` - historical unified blue neon

## MPE Bundles

- `themes/mpe/released/lumina-v5-aurora/style.less` (+ `config.js`)
- `themes/mpe/released/lumina-v5-aurora-light/style.less` (+ `config.js`)
- `themes/mpe/experimental/lumina/style.less`
- `themes/mpe/experimental/lumina-light/style.less`
- `themes/mpe/experimental/lumina-v1-neon/style.less`
- `themes/mpe/experimental/lumina-v2-muted/style.less`
- `themes/mpe/experimental/lumina-v3-balanced/style.less`
- `themes/mpe/experimental/lumina-v4-neon-blue/style.less`

## Notes

- Lumina keeps its expressive blue identity in both primary modes.
- Prefer **released v5 Aurora** for new installs; keep older variants for comparison.
- Legacy variants are kept for comparison and regenerated via `build-from-inline.mjs`.
- The light variants are tuned manually for readability instead of being an automatic inversion of the dark palette.

<!-- palette:start -->
## Color palette

Source: `vscode-preview-lumina.css`.

### Tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--lum-bg` | `#1e1e1e` | Background |
| `--lum-border` | `#38bdf8` | Border |
| `--lum-muted` | `#9d9d9d` | Muted text |
| `--lum-panel` | `#1e3a5f` | Panel |
| `--lum-panel-deep` | `#0f2744` | Panel |
| `--lum-text` | `#d4d4d4` | Text |
| `--md-syntax-comment` | `#7aa2c8` | Syntax: comment |
| `--md-syntax-constant` | `#38bdf8` | Syntax: constant |
| `--md-syntax-control` | `#c792ea` | Syntax: control |
| `--md-syntax-deleted` | `#fb7185` | Syntax: deleted |
| `--md-syntax-function` | `#7dd3fc` | Syntax: function |
| `--md-syntax-inserted` | `#4ade80` | Syntax: inserted |
| `--md-syntax-keyword` | `#82aaff` | Syntax: keyword |
| `--md-syntax-number` | `#a5b4fc` | Syntax: number |
| `--md-syntax-operator` | `#93c5fd` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#60a5fa` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#bfdbfe` | Syntax: operator/punct |
| `--md-syntax-string` | `#7dd3fc` | Syntax: string |
| `--md-syntax-type` | `#22d3ee` | Syntax: type |
| `--md-syntax-variable` | `#bae6fd` | Syntax: variable |
| `--neon-blue` | `#3b82f6` | Theme token |
| `--neon-cyan` | `#22d3ee` | Theme token |
| `--neon-deep` | `#1d4ed8` | Theme token |
| `--neon-electric` | `#60a5fa` | Theme token |
| `--neon-glow` | `#0ea5e9` | Theme token |
| `--neon-ice` | `#7dd3fc` | Theme token |
| `--neon-indigo` | `#6366f1` | Theme token |
| `--neon-sky` | `#38bdf8` | Theme token |

### Unique hex values

| Color |
| ----- |
| `#0ea5e9` |
| `#0f2744` |
| `#1d4ed8` |
| `#1e1e1e` |
| `#1e3a5f` |
| `#22d3ee` |
| `#2b2b2b` |
| `#38bdf8` |
| `#3b82f6` |
| `#3c3c3c` |
| `#4ade80` |
| `#60a5fa` |
| `#6366f1` |
| `#7aa2c8` |
| `#7dd3fc` |
| `#82aaff` |
| `#93c5fd` |
| `#9d9d9d` |
| `#a5b4fc` |
| `#bae6fd` |
| `#bfdbfe` |
| `#c792ea` |
| `#cccccc` |
| `#d4d4d4` |
| `#e0f2fe` |
| `#eff6ff` |
| `#f0f9ff` |
| `#fb7185` |


Light source: `vscode-preview-lumina-light.css`.

### Light tokens (literal hex)

| Token | Color | Role |
| ----- | ----- | ---- |
| `--lum-bg` | `#f5f9ff` | Background |
| `--lum-border` | `#38bdf8` | Border |
| `--lum-muted` | `#60799b` | Muted text |
| `--lum-panel` | `#ebf3ff` | Panel |
| `--lum-panel-deep` | `#ffffff` | Panel |
| `--lum-text` | `#173052` | Text |
| `--md-code-bg` | `#e7efff` | Code surface |
| `--md-code-text` | `#155e75` | Text |
| `--md-syntax-comment` | `#3f6f95` | Syntax: comment |
| `--md-syntax-constant` | `#0284c7` | Syntax: constant |
| `--md-syntax-control` | `#6d28d9` | Syntax: control |
| `--md-syntax-deleted` | `#b42318` | Syntax: deleted |
| `--md-syntax-function` | `#0369a1` | Syntax: function |
| `--md-syntax-inserted` | `#067647` | Syntax: inserted |
| `--md-syntax-keyword` | `#1d4ed8` | Syntax: keyword |
| `--md-syntax-number` | `#1d4ed8` | Syntax: number |
| `--md-syntax-operator` | `#334155` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#2563eb` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#475569` | Syntax: operator/punct |
| `--md-syntax-string` | `#0f766e` | Syntax: string |
| `--md-syntax-type` | `#0e7490` | Syntax: type |
| `--md-syntax-variable` | `#1e40af` | Syntax: variable |
| `--neon-blue` | `#2563eb` | Theme token |
| `--neon-cyan` | `#0891b2` | Theme token |
| `--neon-deep` | `#1d4ed8` | Theme token |
| `--neon-electric` | `#0ea5e9` | Theme token |
| `--neon-ice` | `#0f5fd7` | Theme token |
| `--neon-indigo` | `#4f46e5` | Theme token |
| `--neon-sky` | `#38bdf8` | Theme token |

### Light unique hex values

| Color |
| ----- |
| `#0284c7` |
| `#0369a1` |
| `#067647` |
| `#0891b2` |
| `#0e7490` |
| `#0ea5e9` |
| `#0f5fd7` |
| `#0f766e` |
| `#155e75` |
| `#173052` |
| `#1d4ed8` |
| `#1e40af` |
| `#2563eb` |
| `#334155` |
| `#375374` |
| `#38bdf8` |
| `#3f6f95` |
| `#475569` |
| `#4f46e5` |
| `#60799b` |
| `#6d28d9` |
| `#b42318` |
| `#c8d8f5` |
| `#c9d8ef` |
| `#ccd8ea` |
| `#e4efff` |
| `#e7efff` |
| `#eaf2ff` |
| `#ebf3ff` |
| `#edf4ff` |
| `#edf5ff` |
| `#f0f6ff` |
| `#f5f9ff` |
| `#fbfdff` |
| `#ffffff` |

<!-- palette:end -->
