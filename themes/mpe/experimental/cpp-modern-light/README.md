# C++ Modern Light (experimental)

Light peer of released [C++ Modern](../../released/cpp-modern/): same selector inventory and accent jobs (teal primary, blue secondary, link blue), hex tuned for paper surfaces.

## Install

1. Paste the entire [`style.less`](style.less) into `%USERPROFILE%\.crossnote\style.less` via **Markdown Preview Enhanced: Customize CSS (Global)**.
2. Open **Markdown Preview Enhanced: Open Config Script (Global)** and replace the entire `%USERPROFILE%\.crossnote\config.js` with [`config.js`](config.js) from this package (paste as-is — Crossnote `({ … })` form, `"darkMode": false`).
3. Optional settings:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

Verify diagrams with [`examples/mermaid-showcase.md`](../../../../examples/mermaid-showcase.md).

## Source

[`addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css`](../../../addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css)

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Role map: [docs/mpe-theme-reference.md](../../../../docs/mpe-theme-reference.md) §7. Mermaid: same jobs as dark `config.js`, paper hex.

<!-- palette:start -->
## Color palette

Extracted literal hex tokens from generated `style.less` (+ Mermaid hex from `config.js`).

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

### Mermaid `themeVariables` (hex)

| Variable | Color |
| -------- | ----- |
| `activeTaskBkgColor` | `#14b8a6` |
| `activeTaskBorderColor` | `#0d9488` |
| `actorBkg` | `#ffffff` |
| `actorBorder` | `#3b82f6` |
| `actorLineColor` | `#14b8a6` |
| `actorTextColor` | `#1f2937` |
| `altSectionBkgColor` | `#f1f5f9` |
| `arrowheadColor` | `#0f766e` |
| `attributeBackgroundColorEven` | `#e2e8f0` |
| `attributeBackgroundColorOdd` | `#ffffff` |
| `background` | `#f7f9fc` |
| `clusterBkg` | `#ecfdf5` |
| `clusterBorder` | `#14b8a6` |
| `commitLabelBackground` | `#eef2f7` |
| `commitLabelColor` | `#1f2937` |
| `critBkgColor` | `#ef4444` |
| `critBorderColor` | `#dc2626` |
| `cScale0` | `#3b82f6` |
| `cScale1` | `#14b8a6` |
| `cScale2` | `#65a30d` |
| `cScale3` | `#f59e0b` |
| `cScale4` | `#8b5cf6` |
| `cScale5` | `#0ea5e9` |
| `cScale6` | `#84cc16` |
| `cScale7` | `#6366f1` |
| `cScaleLabel0` | `#ffffff` |
| `cScaleLabel1` | `#ffffff` |
| `cScaleLabel2` | `#ffffff` |
| `cScaleLabel3` | `#1f2937` |
| `cScaleLabel4` | `#ffffff` |
| `cScaleLabel5` | `#ffffff` |
| `cScaleLabel6` | `#1f2937` |
| `cScaleLabel7` | `#ffffff` |
| `doneTaskBkgColor` | `#cbd5e1` |
| `doneTaskBorderColor` | `#65a30d` |
| `excludeBkgColor` | `#e2e8f0` |
| `fillType0` | `#ffffff` |
| `fillType1` | `#dbeafe` |
| `fillType2` | `#ccfbf1` |
| `fillType3` | `#ecfccb` |
| `fillType4` | `#ffedd5` |
| `fillType5` | `#f3e8ff` |
| `fillType6` | `#eef2f7` |
| `fillType7` | `#e2e8f0` |
| `git0` | `#3b82f6` |
| `git1` | `#14b8a6` |
| `git2` | `#65a30d` |
| `git3` | `#f59e0b` |
| `gitBranchLabel0` | `#ffffff` |
| `gitBranchLabel1` | `#ffffff` |
| `gitBranchLabel2` | `#ffffff` |
| `gitInv0` | `#14b8a6` |
| `gitInv1` | `#3b82f6` |
| `gridColor` | `#d0d7e2` |
| `labelTextColor` | `#1f2937` |
| `lineColor` | `#94a3b8` |
| `mainBkg` | `#ffffff` |
| `nodeBorder` | `#3b82f6` |
| `nodeTextColor` | `#1f2937` |
| `pie1` | `#3b82f6` |
| `pie2` | `#14b8a6` |
| `pie3` | `#65a30d` |
| `pie4` | `#f59e0b` |
| `pie5` | `#8b5cf6` |
| `pie6` | `#ec4899` |
| `pie7` | `#0ea5e9` |
| `pieLegendTextColor` | `#334155` |
| `pieSectionTextColor` | `#ffffff` |
| `pieStrokeColor` | `#f7f9fc` |
| `pieTitleTextColor` | `#1f2937` |
| `primaryBorderColor` | `#3b82f6` |
| `primaryColor` | `#ffffff` |
| `primaryTextColor` | `#1f2937` |
| `quadrant1Fill` | `#eff6ff` |
| `quadrant1TextFill` | `#1f2937` |
| `quadrant2Fill` | `#ecfdf5` |
| `quadrant2TextFill` | `#1f2937` |
| `quadrant3Fill` | `#f8fafc` |
| `quadrant3TextFill` | `#1f2937` |
| `quadrant4Fill` | `#f1f5f9` |
| `quadrant4TextFill` | `#1f2937` |
| `quadrantExternalBorderStrokeFill` | `#0f766e` |
| `quadrantInternalBorderStrokeFill` | `#3b82f6` |
| `quadrantPointFill` | `#0f766e` |
| `quadrantPointTextFill` | `#1f2937` |
| `quadrantTitleFill` | `#0f766e` |
| `quadrantXAxisTextFill` | `#64748b` |
| `quadrantYAxisTextFill` | `#64748b` |
| `scaleLabelColor` | `#1f2937` |
| `secondaryBorderColor` | `#3b82f6` |
| `secondaryColor` | `#eef2f7` |
| `secondaryTextColor` | `#1f2937` |
| `sectionBkgColor` | `#dbeafe` |
| `sectionBkgColor2` | `#ccfbf1` |
| `signalColor` | `#14b8a6` |
| `signalTextColor` | `#1f2937` |
| `stateBkg` | `#ffffff` |
| `stateBorder` | `#3b82f6` |
| `stateLabelColor` | `#1f2937` |
| `taskBkgColor` | `#3b82f6` |
| `taskBorderColor` | `#2563eb` |
| `taskTextColor` | `#ffffff` |
| `taskTextDarkColor` | `#1f2937` |
| `taskTextLightColor` | `#ffffff` |
| `taskTextOutsideColor` | `#1f2937` |
| `tertiaryBorderColor` | `#14b8a6` |
| `tertiaryColor` | `#e2e8f0` |
| `tertiaryTextColor` | `#1f2937` |
| `textColor` | `#1f2937` |
| `titleColor` | `#0f766e` |
| `todayLineColor` | `#f59e0b` |
| `transitionColor` | `#94a3b8` |
| `transitionLabelColor` | `#1f2937` |

### Unique hex values

| Color |
| ----- |
| `#0284c7` |
| `#0369a1` |
| `#0d9488` |
| `#0ea5e9` |
| `#0f766e` |
| `#14b8a6` |
| `#15803d` |
| `#166534` |
| `#1d4ed8` |
| `#1e293b` |
| `#1e40af` |
| `#1f2937` |
| `#2563eb` |
| `#334155` |
| `#3b82f6` |
| `#3f6212` |
| `#475569` |
| `#4ec9b0` |
| `#4fc1ff` |
| `#569cd6` |
| `#5eead4` |
| `#6366f1` |
| `#64748b` |
| `#65a30d` |
| `#6a9955` |
| `#7e22ce` |
| `#84cc16` |
| `#89d185` |
| `#8b5cf6` |
| `#93c5fd` |
| `#94a3b8` |
| `#9a3412` |
| `#9cdcfe` |
| `#a16207` |
| `#b5cea8` |
| `#b91c1c` |
| `#bef264` |
| `#c586c0` |
| `#cbd5e1` |
| `#ccfbf1` |
| `#ce9178` |
| `#d0d7e2` |
| `#d4d4d4` |
| `#dbeafe` |
| `#dc2626` |
| `#dcdcaa` |
| `#e2e8f0` |
| `#ec4899` |
| `#ecfccb` |
| `#ecfdf5` |
| `#eef2f7` |
| `#ef4444` |
| `#eff6ff` |
| `#f1f5f9` |
| `#f3e8ff` |
| `#f44747` |
| `#f59e0b` |
| `#f7f9fc` |
| `#f8fafc` |
| `#fdba74` |
| `#fef9c3` |
| `#ffedd5` |
| `#ffffff` |

<!-- palette:end -->
