# Lumina v5 Aurora (released)

Ready-to-paste MPE package for the refined Lumina dark theme (blue core + restrained spectrum accents).

## Install

1. Paste the entire [`style.less`](style.less) into `%USERPROFILE%\.crossnote\style.less` via **Markdown Preview Enhanced: Customize CSS (Global)**.
2. Open **Markdown Preview Enhanced: Open Config Script (Global)** and replace the **entire** `%USERPROFILE%\.crossnote\config.js` with [`config.js`](config.js) from this package (paste as-is — already in Crossnote `({ … })` form).
3. Optional settings:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

Full steps: [themes/mpe/README.md](../../README.md). Mermaid deep dive: [docs/mermaid-styling.md](../../../../docs/mermaid-styling.md). Contrast lessons: [docs/mpe-theme-reference.md](../../../../docs/mpe-theme-reference.md) §8.

## Source

Author CSS in [`addons/vscode-preview/original/lumina/vscode-preview-lumina-v5-aurora.css`](../../../addons/vscode-preview/original/lumina/vscode-preview-lumina-v5-aurora.css), then rebuild:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Do not hand-edit generated `style.less`. Light peer: [`../lumina-v5-aurora-light/`](../lumina-v5-aurora-light/).

<!-- palette:start -->
## Color palette

Full palette for the released `lumina-v5-aurora` package (preview CSS + Mermaid in `config.js`). See also [`docs/mpe-theme-reference.md`](../../../../docs/mpe-theme-reference.md).

### Preview CSS tokens

| Token | Color | Role |
| ----- | ----- | ---- |
| `--lum-bg` | `#1a1d24` | Background |
| `--lum-border` | `#5eb8ff` | Border |
| `--lum-link` | `#4ec9ff` | Link / accent |
| `--lum-link-hover` | `#7ddfff` | Link hover |
| `--lum-muted` | `#8b95a8` | Muted text |
| `--lum-panel` | `#222833` | Panel |
| `--lum-panel-deep` | `#181c28` | Panel |
| `--lum-primary` | `#5eb8ff` | Primary accent |
| `--lum-rose` | `#e08aa8` | Theme token |
| `--lum-sage` | `#7dcea0` | Theme token |
| `--lum-secondary` | `#8b9cff` | Secondary accent |
| `--lum-text` | `#c8d0dc` | Text |
| `--lum-warm` | `#e0b46a` | Theme token |
| `--md-code-bg` | `#2a3142` | Code surface |
| `--md-syntax-comment` | `#6d8f6a` | Syntax: comment |
| `--md-syntax-constant` | `#7dd3fc` | Syntax: constant |
| `--md-syntax-control` | `#c4a8e8` | Syntax: control |
| `--md-syntax-deleted` | `#f07878` | Syntax: deleted |
| `--md-syntax-function` | `#e0b46a` | Syntax: function |
| `--md-syntax-inserted` | `#7dcea0` | Syntax: inserted |
| `--md-syntax-keyword` | `#7eb8f0` | Syntax: keyword |
| `--md-syntax-number` | `#7dcea0` | Syntax: number |
| `--md-syntax-operator` | `#b0b8c8` | Syntax: operator/punct |
| `--md-syntax-preprocessor` | `#7eb8f0` | Syntax: preprocessor |
| `--md-syntax-punctuation` | `#9aa3b5` | Syntax: operator/punct |
| `--md-syntax-string` | `#e08aa8` | Syntax: string |
| `--md-syntax-type` | `#4ec9d4` | Syntax: type |
| `--md-syntax-variable` | `#a8c8f0` | Syntax: variable |
| `--neon-blue` | `#5b8def` | Theme token |
| `--neon-cyan` | `#3ecfd8` | Theme token |
| `--neon-deep` | `#3b6fd4` | Theme token |
| `--neon-electric` | `#5eb8ff` | Theme token |
| `--neon-glow` | `#4aa8e8` | Theme token |
| `--neon-ice` | `#b8dcf8` | Theme token |
| `--neon-indigo` | `#818cf8` | Theme token |
| `--neon-sky` | `#7cc8f0` | Theme token |

### Mermaid `themeVariables` (hex)

| Variable | Color |
| -------- | ----- |
| `activeTaskBkgColor` | `#3ecfd8` |
| `activeTaskBorderColor` | `#1a4048` |
| `actorBkg` | `#222833` |
| `actorBorder` | `#5b8def` |
| `actorLineColor` | `#3ecfd8` |
| `actorTextColor` | `#ffffff` |
| `altSectionBkgColor` | `#222833` |
| `arrowheadColor` | `#3ecfd8` |
| `attributeBackgroundColorEven` | `#181c28` |
| `attributeBackgroundColorOdd` | `#222833` |
| `background` | `#1a1d24` |
| `clusterBkg` | `#1e2a38` |
| `clusterBorder` | `#3ecfd8` |
| `commitLabelBackground` | `#2a3142` |
| `commitLabelColor` | `#c8d0dc` |
| `critBkgColor` | `#f07878` |
| `critBorderColor` | `#f07878` |
| `cScale0` | `#5b8def` |
| `cScale1` | `#3ecfd8` |
| `cScale2` | `#7dcea0` |
| `cScale3` | `#e0b46a` |
| `cScale4` | `#c4a8e8` |
| `cScale5` | `#e08aa8` |
| `cScale6` | `#7dd3fc` |
| `cScale7` | `#818cf8` |
| `cScaleLabel0` | `#ffffff` |
| `cScaleLabel1` | `#ffffff` |
| `cScaleLabel2` | `#ffffff` |
| `cScaleLabel3` | `#1a1d24` |
| `cScaleLabel4` | `#ffffff` |
| `cScaleLabel5` | `#ffffff` |
| `cScaleLabel6` | `#1a1d24` |
| `cScaleLabel7` | `#ffffff` |
| `doneTaskBkgColor` | `#3a4254` |
| `doneTaskBorderColor` | `#6d8f6a` |
| `excludeBkgColor` | `#181c28` |
| `fillType0` | `#222833` |
| `fillType1` | `#243a5c` |
| `fillType2` | `#1a4048` |
| `fillType3` | `#2e3a28` |
| `fillType4` | `#4a3a28` |
| `fillType5` | `#3a2e4a` |
| `fillType6` | `#2a3142` |
| `fillType7` | `#181c28` |
| `git0` | `#5b8def` |
| `git1` | `#3ecfd8` |
| `git2` | `#7dcea0` |
| `git3` | `#e0b46a` |
| `gitBranchLabel0` | `#ffffff` |
| `gitBranchLabel1` | `#ffffff` |
| `gitBranchLabel2` | `#ffffff` |
| `gitInv0` | `#3ecfd8` |
| `gitInv1` | `#5b8def` |
| `gridColor` | `#3a4254` |
| `labelTextColor` | `#ffffff` |
| `lineColor` | `#8b95a8` |
| `mainBkg` | `#222833` |
| `nodeBorder` | `#5b8def` |
| `nodeTextColor` | `#ffffff` |
| `pie1` | `#5b8def` |
| `pie2` | `#3ecfd8` |
| `pie3` | `#7dcea0` |
| `pie4` | `#e0b46a` |
| `pie5` | `#e08aa8` |
| `pie6` | `#c4a8e8` |
| `pie7` | `#7dd3fc` |
| `pieLegendTextColor` | `#c8d0dc` |
| `pieSectionTextColor` | `#ffffff` |
| `pieStrokeColor` | `#1a1d24` |
| `pieTitleTextColor` | `#ffffff` |
| `primaryBorderColor` | `#5b8def` |
| `primaryColor` | `#222833` |
| `primaryTextColor` | `#ffffff` |
| `quadrant1Fill` | `#222a38` |
| `quadrant1TextFill` | `#c8d0dc` |
| `quadrant2Fill` | `#1e2a30` |
| `quadrant2TextFill` | `#c8d0dc` |
| `quadrant3Fill` | `#1c222c` |
| `quadrant3TextFill` | `#c8d0dc` |
| `quadrant4Fill` | `#1a2028` |
| `quadrant4TextFill` | `#c8d0dc` |
| `quadrantExternalBorderStrokeFill` | `#3ecfd8` |
| `quadrantInternalBorderStrokeFill` | `#5b8def` |
| `quadrantPointFill` | `#3ecfd8` |
| `quadrantPointTextFill` | `#ffffff` |
| `quadrantTitleFill` | `#5eb8ff` |
| `quadrantXAxisTextFill` | `#8b95a8` |
| `quadrantYAxisTextFill` | `#8b95a8` |
| `scaleLabelColor` | `#ffffff` |
| `secondaryBorderColor` | `#5eb8ff` |
| `secondaryColor` | `#2a3142` |
| `secondaryTextColor` | `#ffffff` |
| `sectionBkgColor` | `#243a5c` |
| `sectionBkgColor2` | `#1a4048` |
| `signalColor` | `#3ecfd8` |
| `signalTextColor` | `#ffffff` |
| `stateBkg` | `#222833` |
| `stateBorder` | `#5b8def` |
| `stateLabelColor` | `#ffffff` |
| `taskBkgColor` | `#5b8def` |
| `taskBorderColor` | `#243a5c` |
| `taskTextColor` | `#ffffff` |
| `taskTextDarkColor` | `#ffffff` |
| `taskTextLightColor` | `#ffffff` |
| `taskTextOutsideColor` | `#c8d0dc` |
| `tertiaryBorderColor` | `#3ecfd8` |
| `tertiaryColor` | `#181c28` |
| `tertiaryTextColor` | `#ffffff` |
| `textColor` | `#ffffff` |
| `titleColor` | `#5eb8ff` |
| `todayLineColor` | `#e0b46a` |
| `transitionColor` | `#8b95a8` |
| `transitionLabelColor` | `#ffffff` |

### Complete unique hex set (preview + Mermaid)

| Color |
| ----- |
| `#181c28` |
| `#1a1d24` |
| `#1a2028` |
| `#1a4048` |
| `#1c222c` |
| `#1e2a30` |
| `#1e2a38` |
| `#222833` |
| `#222a38` |
| `#243a5c` |
| `#2a3142` |
| `#2e3a28` |
| `#3a2e4a` |
| `#3a4254` |
| `#3b6fd4` |
| `#3ecfd8` |
| `#4a3a28` |
| `#4aa8e8` |
| `#4ec9d4` |
| `#4ec9ff` |
| `#5b8def` |
| `#5eb8ff` |
| `#6d8f6a` |
| `#7cc8f0` |
| `#7dcea0` |
| `#7dd3fc` |
| `#7ddfff` |
| `#7eb8f0` |
| `#818cf8` |
| `#8b95a8` |
| `#8b9cff` |
| `#9aa3b5` |
| `#a8c8f0` |
| `#b0b8c8` |
| `#b8dcf8` |
| `#c4a8e8` |
| `#c8d0dc` |
| `#e08aa8` |
| `#e0b46a` |
| `#e0f2fe` |
| `#f07878` |
| `#f0f6ff` |
| `#f0f9ff` |
| `#ffffff` |

<!-- palette:end -->
