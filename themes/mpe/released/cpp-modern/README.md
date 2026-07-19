# C++ Modern (released)

Ready-to-paste MPE package for the recommended dark C++ Modern theme.

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

Full steps: [themes/mpe/README.md](../../README.md). Mermaid deep dive: [docs/mermaid-styling.md](../../../../docs/mermaid-styling.md).

## Source

Author CSS in [`addons/vscode-preview/original/cpp-modern/`](../../../addons/vscode-preview/original/cpp-modern/), then rebuild:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Do not hand-edit generated `style.less`.

<!-- palette:start -->
## Color palette

Full palette for the released `cpp-modern` package (preview CSS + Mermaid in `config.js`). See also [`docs/mpe-theme-reference.md`](../../../../docs/mpe-theme-reference.md).

### Preview CSS tokens

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

### Mermaid `themeVariables` (hex)

| Variable | Color |
| -------- | ----- |
| `activeTaskBkgColor` | `#4ec9b0` |
| `activeTaskBorderColor` | `#1e4d40` |
| `actorBkg` | `#2d2d30` |
| `actorBorder` | `#569cd6` |
| `actorLineColor` | `#4ec9b0` |
| `actorTextColor` | `#ffffff` |
| `altSectionBkgColor` | `#2d2d30` |
| `arrowheadColor` | `#4ec9b0` |
| `attributeBackgroundColorEven` | `#252526` |
| `attributeBackgroundColorOdd` | `#2d2d30` |
| `background` | `#1f1f1f` |
| `clusterBkg` | `#2f3634` |
| `clusterBorder` | `#4ec9b0` |
| `commitLabelBackground` | `#333333` |
| `commitLabelColor` | `#e8e8e8` |
| `critBkgColor` | `#f44747` |
| `critBorderColor` | `#f44747` |
| `cScale0` | `#569cd6` |
| `cScale1` | `#4ec9b0` |
| `cScale2` | `#6a9955` |
| `cScale3` | `#ce9178` |
| `cScale4` | `#c586c0` |
| `cScale5` | `#dcdcaa` |
| `cScale6` | `#b5cea8` |
| `cScale7` | `#9cdcfe` |
| `cScaleLabel0` | `#ffffff` |
| `cScaleLabel1` | `#ffffff` |
| `cScaleLabel2` | `#ffffff` |
| `cScaleLabel3` | `#ffffff` |
| `cScaleLabel4` | `#ffffff` |
| `cScaleLabel5` | `#1f1f1f` |
| `cScaleLabel6` | `#1f1f1f` |
| `cScaleLabel7` | `#1f1f1f` |
| `doneTaskBkgColor` | `#3e3e42` |
| `doneTaskBorderColor` | `#6a9955` |
| `excludeBkgColor` | `#252526` |
| `fillType0` | `#2d2d30` |
| `fillType1` | `#264f78` |
| `fillType2` | `#1e4d40` |
| `fillType3` | `#3b4a28` |
| `fillType4` | `#5c3d2e` |
| `fillType5` | `#3d264f` |
| `fillType6` | `#333333` |
| `fillType7` | `#252526` |
| `git0` | `#569cd6` |
| `git1` | `#4ec9b0` |
| `git2` | `#6a9955` |
| `git3` | `#ce9178` |
| `gitBranchLabel0` | `#ffffff` |
| `gitBranchLabel1` | `#ffffff` |
| `gitBranchLabel2` | `#ffffff` |
| `gitInv0` | `#4ec9b0` |
| `gitInv1` | `#569cd6` |
| `gridColor` | `#3e3e42` |
| `labelTextColor` | `#ffffff` |
| `lineColor` | `#b0b0b0` |
| `mainBkg` | `#2d2d30` |
| `nodeBorder` | `#569cd6` |
| `nodeTextColor` | `#ffffff` |
| `pie1` | `#569cd6` |
| `pie2` | `#4ec9b0` |
| `pie3` | `#6a9955` |
| `pie4` | `#ce9178` |
| `pie5` | `#b5cea8` |
| `pie6` | `#c586c0` |
| `pie7` | `#dcdcaa` |
| `pieLegendTextColor` | `#e8e8e8` |
| `pieSectionTextColor` | `#ffffff` |
| `pieStrokeColor` | `#1f1f1f` |
| `pieTitleTextColor` | `#ffffff` |
| `primaryBorderColor` | `#569cd6` |
| `primaryColor` | `#2d2d30` |
| `primaryTextColor` | `#ffffff` |
| `quadrant1Fill` | `#2a3438` |
| `quadrant1TextFill` | `#e8e8e8` |
| `quadrant2Fill` | `#283238` |
| `quadrant2TextFill` | `#e8e8e8` |
| `quadrant3Fill` | `#262a2e` |
| `quadrant3TextFill` | `#e8e8e8` |
| `quadrant4Fill` | `#24282c` |
| `quadrant4TextFill` | `#e8e8e8` |
| `quadrantExternalBorderStrokeFill` | `#4ec9b0` |
| `quadrantInternalBorderStrokeFill` | `#569cd6` |
| `quadrantPointFill` | `#4ec9b0` |
| `quadrantPointTextFill` | `#ffffff` |
| `quadrantTitleFill` | `#4ec9b0` |
| `quadrantXAxisTextFill` | `#cccccc` |
| `quadrantYAxisTextFill` | `#cccccc` |
| `scaleLabelColor` | `#ffffff` |
| `secondaryBorderColor` | `#569cd6` |
| `secondaryColor` | `#333333` |
| `secondaryTextColor` | `#ffffff` |
| `sectionBkgColor` | `#264f78` |
| `sectionBkgColor2` | `#1e4d40` |
| `signalColor` | `#4ec9b0` |
| `signalTextColor` | `#ffffff` |
| `stateBkg` | `#2d2d30` |
| `stateBorder` | `#569cd6` |
| `stateLabelColor` | `#ffffff` |
| `taskBkgColor` | `#569cd6` |
| `taskBorderColor` | `#264f78` |
| `taskTextColor` | `#ffffff` |
| `taskTextDarkColor` | `#ffffff` |
| `taskTextLightColor` | `#ffffff` |
| `taskTextOutsideColor` | `#e8e8e8` |
| `tertiaryBorderColor` | `#4ec9b0` |
| `tertiaryColor` | `#252526` |
| `tertiaryTextColor` | `#ffffff` |
| `textColor` | `#ffffff` |
| `titleColor` | `#4ec9b0` |
| `todayLineColor` | `#ce9178` |
| `transitionColor` | `#b0b0b0` |
| `transitionLabelColor` | `#ffffff` |

### Complete unique hex set (preview + Mermaid)

| Color |
| ----- |
| `#0078d4` |
| `#1e4d40` |
| `#1f1f1f` |
| `#24282c` |
| `#252526` |
| `#262a2e` |
| `#264f78` |
| `#283238` |
| `#2a3438` |
| `#2b2b2b` |
| `#2d2d30` |
| `#2f3634` |
| `#333333` |
| `#3b4a28` |
| `#3c3c3c` |
| `#3d264f` |
| `#3e3e42` |
| `#4daafc` |
| `#4ec9b0` |
| `#4fc1ff` |
| `#569cd6` |
| `#5c3d2e` |
| `#6a9955` |
| `#6cb6ff` |
| `#89d185` |
| `#9cdcfe` |
| `#9d9d9d` |
| `#b0b0b0` |
| `#b5cea8` |
| `#c586c0` |
| `#cccccc` |
| `#ce9178` |
| `#d4d4d4` |
| `#dcdcaa` |
| `#e8e8e8` |
| `#f44747` |
| `#ffffff` |

<!-- palette:end -->
