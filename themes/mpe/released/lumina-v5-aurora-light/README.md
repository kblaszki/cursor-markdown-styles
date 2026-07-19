# Lumina v5 Aurora Light (released)

Ready-to-paste MPE package for the Lumina Aurora light peer (hardcoded paper surfaces, deepened accents).

## Install

1. Paste the entire [`style.less`](style.less) into `%USERPROFILE%\.crossnote\style.less` via **Markdown Preview Enhanced: Customize CSS (Global)**.
2. Open **Markdown Preview Enhanced: Open Config Script (Global)** and replace the **entire** `%USERPROFILE%\.crossnote\config.js` with [`config.js`](config.js) from this package (`"darkMode": false`).
3. Optional settings:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

Full steps: [themes/mpe/README.md](../../README.md). Mermaid deep dive: [docs/mermaid-styling.md](../../../../docs/mermaid-styling.md). Contrast lessons: [docs/mpe-theme-reference.md](../../../../docs/mpe-theme-reference.md) §7–§8.

## Source

Author CSS in [`addons/vscode-preview/original/lumina/vscode-preview-lumina-v5-aurora-light.css`](../../../addons/vscode-preview/original/lumina/vscode-preview-lumina-v5-aurora-light.css), then rebuild:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Do not hand-edit generated `style.less`. Dark peer: [`../lumina-v5-aurora/`](../lumina-v5-aurora/).

<!-- palette:start -->
## Color palette

Full palette for the released `lumina-v5-aurora-light` package (preview CSS + Mermaid in `config.js`). See also [`docs/mpe-theme-reference.md`](../../../../docs/mpe-theme-reference.md).

### Preview CSS tokens

| Token | Color | Role |
| ----- | ----- | ---- |
| `--lum-bg` | `#f4f7fc` | Background |
| `--lum-border` | `#c5d4ea` | Border |
| `--lum-link` | `#0369a1` | Link / accent |
| `--lum-link-hover` | `#0c4a6e` | Link hover |
| `--lum-muted` | `#5a6b85` | Muted text |
| `--lum-panel` | `#e8eef8` | Panel |
| `--lum-panel-deep` | `#ffffff` | Panel |
| `--lum-primary` | `#1d6fd4` | Primary accent |
| `--lum-rose` | `#9d174d` | Theme token |
| `--lum-sage` | `#047857` | Theme token |
| `--lum-secondary` | `#4338ca` | Secondary accent |
| `--lum-text` | `#1a2740` | Text |
| `--lum-warm` | `#a16207` | Theme token |
| `--md-code-bg` | `#e2eaf6` | Code surface |
| `--md-code-text` | `#0e4f7a` | Text |
| `--md-syntax-comment` | `#3f6212` | Syntax: comment |
| `--md-syntax-constant` | `#0369a1` | Syntax: constant |
| `--md-syntax-control` | `#6d28d9` | Syntax: control |
| `--md-syntax-deleted` | `#b42318` | Syntax: deleted |
| `--md-syntax-function` | `#a16207` | Syntax: function |
| `--md-syntax-inserted` | `#067647` | Syntax: inserted |
| `--md-syntax-keyword` | `#1d4ed8` | Syntax: keyword |
| `--md-syntax-number` | `#047857` | Syntax: number |
| `--md-syntax-operator` | `#334155` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#1d4ed8` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#475569` | Syntax: operator/punct |
| `--md-syntax-string` | `#9d174d` | Syntax: string |
| `--md-syntax-type` | `#0e7490` | Syntax: type |
| `--md-syntax-variable` | `#1e40af` | Syntax: variable |
| `--neon-blue` | `#1d4ed8` | Theme token |
| `--neon-cyan` | `#0e7490` | Theme token |
| `--neon-deep` | `#1e40af` | Theme token |
| `--neon-electric` | `#0284c7` | Theme token |
| `--neon-glow` | `#0284c7` | Theme token |
| `--neon-ice` | `#1e3a8a` | Theme token |
| `--neon-indigo` | `#4338ca` | Theme token |
| `--neon-sky` | `#0369a1` | Theme token |

### Mermaid `themeVariables` (hex)

| Variable | Color |
| -------- | ----- |
| `activeTaskBkgColor` | `#0e7490` |
| `activeTaskBorderColor` | `#155e75` |
| `actorBkg` | `#ffffff` |
| `actorBorder` | `#1d4ed8` |
| `actorLineColor` | `#0e7490` |
| `actorTextColor` | `#1a2740` |
| `altSectionBkgColor` | `#f8fafc` |
| `arrowheadColor` | `#0e7490` |
| `attributeBackgroundColorEven` | `#ffffff` |
| `attributeBackgroundColorOdd` | `#e2eaf6` |
| `background` | `#f4f7fc` |
| `clusterBkg` | `#ecfeff` |
| `clusterBorder` | `#0e7490` |
| `commitLabelBackground` | `#e8eef8` |
| `commitLabelColor` | `#1a2740` |
| `critBkgColor` | `#b42318` |
| `critBorderColor` | `#912018` |
| `cScale0` | `#1d4ed8` |
| `cScale1` | `#0e7490` |
| `cScale2` | `#047857` |
| `cScale3` | `#a16207` |
| `cScale4` | `#6d28d9` |
| `cScale5` | `#0369a1` |
| `cScale6` | `#65a30d` |
| `cScale7` | `#4338ca` |
| `cScaleLabel0` | `#ffffff` |
| `cScaleLabel1` | `#ffffff` |
| `cScaleLabel2` | `#ffffff` |
| `cScaleLabel3` | `#1a2740` |
| `cScaleLabel4` | `#ffffff` |
| `cScaleLabel5` | `#ffffff` |
| `cScaleLabel6` | `#1a2740` |
| `cScaleLabel7` | `#ffffff` |
| `doneTaskBkgColor` | `#5a6b85` |
| `doneTaskBorderColor` | `#475569` |
| `excludeBkgColor` | `#e2eaf6` |
| `fillType0` | `#ffffff` |
| `fillType1` | `#dbeafe` |
| `fillType2` | `#cffafe` |
| `fillType3` | `#dcfce7` |
| `fillType4` | `#ffedd5` |
| `fillType5` | `#f3e8ff` |
| `fillType6` | `#e8eef8` |
| `fillType7` | `#e2eaf6` |
| `git0` | `#1d4ed8` |
| `git1` | `#0e7490` |
| `git2` | `#047857` |
| `git3` | `#a16207` |
| `gitBranchLabel0` | `#ffffff` |
| `gitBranchLabel1` | `#ffffff` |
| `gitBranchLabel2` | `#ffffff` |
| `gitInv0` | `#0e7490` |
| `gitInv1` | `#1d4ed8` |
| `gridColor` | `#c5d4ea` |
| `labelTextColor` | `#1a2740` |
| `lineColor` | `#5a6b85` |
| `mainBkg` | `#ffffff` |
| `nodeBorder` | `#1d4ed8` |
| `nodeTextColor` | `#1a2740` |
| `pie1` | `#1d4ed8` |
| `pie2` | `#0e7490` |
| `pie3` | `#047857` |
| `pie4` | `#a16207` |
| `pie5` | `#9d174d` |
| `pie6` | `#6d28d9` |
| `pie7` | `#0369a1` |
| `pieLegendTextColor` | `#334155` |
| `pieSectionTextColor` | `#ffffff` |
| `pieStrokeColor` | `#f4f7fc` |
| `pieTitleTextColor` | `#1a2740` |
| `primaryBorderColor` | `#1d4ed8` |
| `primaryColor` | `#ffffff` |
| `primaryTextColor` | `#1a2740` |
| `quadrant1Fill` | `#eff6ff` |
| `quadrant1TextFill` | `#1a2740` |
| `quadrant2Fill` | `#ecfeff` |
| `quadrant2TextFill` | `#1a2740` |
| `quadrant3Fill` | `#f8fafc` |
| `quadrant3TextFill` | `#1a2740` |
| `quadrant4Fill` | `#f1f5f9` |
| `quadrant4TextFill` | `#1a2740` |
| `quadrantExternalBorderStrokeFill` | `#0e7490` |
| `quadrantInternalBorderStrokeFill` | `#1d4ed8` |
| `quadrantPointFill` | `#0e7490` |
| `quadrantPointTextFill` | `#1a2740` |
| `quadrantTitleFill` | `#0369a1` |
| `quadrantXAxisTextFill` | `#5a6b85` |
| `quadrantYAxisTextFill` | `#5a6b85` |
| `scaleLabelColor` | `#1a2740` |
| `secondaryBorderColor` | `#1d6fd4` |
| `secondaryColor` | `#e8eef8` |
| `secondaryTextColor` | `#1a2740` |
| `sectionBkgColor` | `#bfdbfe` |
| `sectionBkgColor2` | `#a5f3fc` |
| `signalColor` | `#0e7490` |
| `signalTextColor` | `#1a2740` |
| `stateBkg` | `#ffffff` |
| `stateBorder` | `#1d4ed8` |
| `stateLabelColor` | `#1a2740` |
| `taskBkgColor` | `#1d4ed8` |
| `taskBorderColor` | `#1e3a8a` |
| `taskTextColor` | `#ffffff` |
| `taskTextDarkColor` | `#1a2740` |
| `taskTextLightColor` | `#ffffff` |
| `taskTextOutsideColor` | `#1a2740` |
| `tertiaryBorderColor` | `#0e7490` |
| `tertiaryColor` | `#e2eaf6` |
| `tertiaryTextColor` | `#1a2740` |
| `textColor` | `#1a2740` |
| `titleColor` | `#0369a1` |
| `todayLineColor` | `#a16207` |
| `transitionColor` | `#5a6b85` |
| `transitionLabelColor` | `#1a2740` |

### Complete unique hex set (preview + Mermaid)

| Color |
| ----- |
| `#0284c7` |
| `#0369a1` |
| `#047857` |
| `#067647` |
| `#0c4a6e` |
| `#0e4f7a` |
| `#0e7490` |
| `#155e75` |
| `#1a2740` |
| `#1d4ed8` |
| `#1d6fd4` |
| `#1e3a8a` |
| `#1e40af` |
| `#334155` |
| `#3f6212` |
| `#4338ca` |
| `#475569` |
| `#5a6b85` |
| `#65a30d` |
| `#67e8f9` |
| `#6d28d9` |
| `#86efac` |
| `#912018` |
| `#93c5fd` |
| `#9d174d` |
| `#a16207` |
| `#a5f3fc` |
| `#b42318` |
| `#bfdbfe` |
| `#c5d4ea` |
| `#cffafe` |
| `#dbeafe` |
| `#dcfce7` |
| `#e2eaf6` |
| `#e8eef8` |
| `#ecfeff` |
| `#eff6ff` |
| `#f0f6ff` |
| `#f0f9ff` |
| `#f1f5f9` |
| `#f3e8ff` |
| `#f4f7fc` |
| `#f8fafc` |
| `#fdba74` |
| `#fef9c3` |
| `#ffedd5` |
| `#ffffff` |

<!-- palette:end -->
