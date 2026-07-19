# C++ Modern Light (released)

Ready-to-paste MPE package for the light peer of C++ Modern (paper surfaces, blue-teal accents).

## Install

1. Paste the entire [`style.less`](style.less) into `%USERPROFILE%\.crossnote\style.less` via **Markdown Preview Enhanced: Customize CSS (Global)**.
2. Open **Markdown Preview Enhanced: Open Config Script (Global)** and replace the **entire** `%USERPROFILE%\.crossnote\config.js` with [`config.js`](config.js) from this package (paste as-is — Crossnote `({ … })` form, `"darkMode": false`).
3. Optional settings:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

Full steps: [themes/mpe/README.md](../../README.md). Mermaid deep dive: [docs/mermaid-styling.md](../../../../docs/mermaid-styling.md). Dark peer: [../cpp-modern/](../cpp-modern/).

## Source

Author CSS in [`addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css`](../../../addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css), then rebuild:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Do not hand-edit generated `style.less`. Role map: [docs/mpe-theme-reference.md](../../../../docs/mpe-theme-reference.md) §7.

<!-- palette:start -->
## Color palette

Full palette for the released `cpp-modern-light` package (preview CSS + Mermaid in `config.js`). See also [`docs/mpe-theme-reference.md`](../../../../docs/mpe-theme-reference.md).

### Preview CSS tokens

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
| `activeTaskBkgColor` | `#0f766e` |
| `activeTaskBorderColor` | `#115e59` |
| `actorBkg` | `#ffffff` |
| `actorBorder` | `#3b82f6` |
| `actorLineColor` | `#14b8a6` |
| `actorTextColor` | `#1f2937` |
| `altSectionBkgColor` | `#f8fafc` |
| `arrowheadColor` | `#0f766e` |
| `attributeBackgroundColorEven` | `#ffffff` |
| `attributeBackgroundColorOdd` | `#e2e8f0` |
| `background` | `#f7f9fc` |
| `clusterBkg` | `#ecfdf5` |
| `clusterBorder` | `#14b8a6` |
| `commitLabelBackground` | `#eef2f7` |
| `commitLabelColor` | `#1f2937` |
| `critBkgColor` | `#dc2626` |
| `critBorderColor` | `#b91c1c` |
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
| `doneTaskBkgColor` | `#64748b` |
| `doneTaskBorderColor` | `#475569` |
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
| `gridColor` | `#cbd5e1` |
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
| `sectionBkgColor` | `#bfdbfe` |
| `sectionBkgColor2` | `#99f6e4` |
| `signalColor` | `#14b8a6` |
| `signalTextColor` | `#1f2937` |
| `stateBkg` | `#ffffff` |
| `stateBorder` | `#3b82f6` |
| `stateLabelColor` | `#1f2937` |
| `taskBkgColor` | `#1d4ed8` |
| `taskBorderColor` | `#1e3a8a` |
| `taskTextColor` | `#ffffff` |
| `taskTextDarkColor` | `#1f2937` |
| `taskTextLightColor` | `#ffffff` |
| `taskTextOutsideColor` | `#1f2937` |
| `tertiaryBorderColor` | `#14b8a6` |
| `tertiaryColor` | `#e2e8f0` |
| `tertiaryTextColor` | `#1f2937` |
| `textColor` | `#1f2937` |
| `titleColor` | `#0f766e` |
| `todayLineColor` | `#ea580c` |
| `transitionColor` | `#94a3b8` |
| `transitionLabelColor` | `#1f2937` |

### Complete unique hex set (preview + Mermaid)

| Color |
| ----- |
| `#0284c7` |
| `#0369a1` |
| `#0d9488` |
| `#0ea5e9` |
| `#0f766e` |
| `#115e59` |
| `#14b8a6` |
| `#15803d` |
| `#166534` |
| `#1d4ed8` |
| `#1e293b` |
| `#1e3a8a` |
| `#1e40af` |
| `#1f2937` |
| `#2563eb` |
| `#334155` |
| `#3b82f6` |
| `#3f6212` |
| `#475569` |
| `#5eead4` |
| `#6366f1` |
| `#64748b` |
| `#65a30d` |
| `#7e22ce` |
| `#84cc16` |
| `#8b5cf6` |
| `#93c5fd` |
| `#94a3b8` |
| `#99f6e4` |
| `#9a3412` |
| `#a16207` |
| `#b91c1c` |
| `#bef264` |
| `#bfdbfe` |
| `#cbd5e1` |
| `#ccfbf1` |
| `#d0d7e2` |
| `#dbeafe` |
| `#dc2626` |
| `#e2e8f0` |
| `#ea580c` |
| `#ec4899` |
| `#ecfccb` |
| `#ecfdf5` |
| `#eef2f7` |
| `#eff6ff` |
| `#f1f5f9` |
| `#f3e8ff` |
| `#f59e0b` |
| `#f7f9fc` |
| `#f8fafc` |
| `#fdba74` |
| `#fef9c3` |
| `#ffedd5` |
| `#ffffff` |

<!-- palette:end -->
