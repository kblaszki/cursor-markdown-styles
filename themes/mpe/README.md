# Markdown Preview Enhanced — Global CSS

This directory contains the **primary recommended setup** for this repository: ready-to-paste global CSS bundles for **Markdown Preview Enhanced (MPE)**.

If you want a Markdown workflow that feels close to Cursor inline preview, but is more stable and configurable, use **MPE + `Preview Mode: Previews Only`**.

## Recommended Preview Mode

Set this in your **user** `settings.json`:

```json
{
  "markdown-preview-enhanced.previewMode": "Previews Only"
}
```

Notes:

- Restart VS Code or Cursor after changing `previewMode`.
- In this mode, Markdown files open directly into MPE preview.
- You can edit from inside the preview using the in-preview editor.
- To open raw source, use the preview context menu: **Edit Markdown → Open VS Code Editor**.

Recommended companion extensions are listed in the root [README.md](../../README.md).

## Files

### Primary Families

| File | Theme |
| ---- | ----- |
| [global-cpp-modern.less](global-cpp-modern.less) | C++ Modern dark (recommended default) |
| [global-cpp-modern-light.less](global-cpp-modern-light.less) | C++ Modern light |
| [global-studio.less](global-studio.less) | Studio light (recommended light peer to C++ Modern) |
| [global-lumina.less](global-lumina.less) | Lumina dark |
| [global-lumina-light.less](global-lumina-light.less) | Lumina light |
| [global-graphite.less](global-graphite.less) | Graphite dark |
| [global-graphite-light.less](global-graphite-light.less) | Graphite light |
| [global-graphite-code.less](global-graphite-code.less) | Graphite Code dark (Graphite + C++ Modern syntax colors) |
| [global-graphite-code-light.less](global-graphite-code-light.less) | Graphite Code light |
| [global-meridian.less](global-meridian.less) | Meridian dark |
| [global-meridian-light.less](global-meridian-light.less) | Meridian light |
| [global-blueprint.less](global-blueprint.less) | Blueprint dark (cyanotype drafting) |
| [global-blueprint-light.less](global-blueprint-light.less) | Blueprint light |
| [global-phosphor.less](global-phosphor.less) | Phosphor (green CRT) |
| [global-phosphor-amber.less](global-phosphor-amber.less) | Phosphor Amber (amber CRT) |
| [global-matcha.less](global-matcha.less) | Matcha dark (tea garden) |
| [global-matcha-light.less](global-matcha-light.less) | Matcha light |
| [global-beacon.less](global-beacon.less) | Beacon dark (readability-first) |
| [global-beacon-light.less](global-beacon-light.less) | Beacon light |

### Legacy C++ Modern Variants

| File | Theme |
| ---- | ----- |
| [global-cpp-modern-v1-syntax.less](global-cpp-modern-v1-syntax.less) | C++ Modern v1 Syntax |
| [global-cpp-modern-v2-readable.less](global-cpp-modern-v2-readable.less) | C++ Modern v2 Readable |
| [global-cpp-modern-v3-diagrams.less](global-cpp-modern-v3-diagrams.less) | C++ Modern v3 Diagrams (Mermaid + diagram styling) |
| [global-cpp-modern-v3-diagrams-light.less](global-cpp-modern-v3-diagrams-light.less) | C++ Modern v3 Diagrams Light |

### Legacy Lumina Variants

| File | Theme |
| ---- | ----- |
| [global-lumina-v1-neon.less](global-lumina-v1-neon.less) | Lumina v1 Neon |
| [global-lumina-v2-muted.less](global-lumina-v2-muted.less) | Lumina v2 Muted |
| [global-lumina-v3-balanced.less](global-lumina-v3-balanced.less) | Lumina v3 Balanced |
| [global-lumina-v4-neon-blue.less](global-lumina-v4-neon-blue.less) | Lumina v4 Neon Blue |

Each file contains install instructions in the header comment plus the full inlined theme CSS.

## Family Guide

- **C++ Modern** - balanced technical dark/light theme with blue-teal hierarchy and restrained code styling
- **C++ Modern v3 Diagrams** - same prose/code as C++ Modern plus `--md-diagram-*` Mermaid and diagram chrome (legacy variant)
- **Studio** - light-first peer to C++ Modern: daylight paper, sapphire hierarchy, tempered Light+ code
- **Lumina** - brighter neon identity with gradient headings and luminous accents
- **Graphite** - editorial documentation theme with warm copper contrast
- **Graphite Code** - Graphite visuals with Dark+ syntax colors plus a stronger C++ token refine layer
- **Meridian** - blue-green structural theme for checklists, tables, and runbooks
- **Blueprint** - cyanotype drafting look with dashed rules and grid-lined fences
- **Phosphor** - CRT terminal vibes (green + amber phosphor pair)
- **Matcha** - serif tea-garden prose with moss and gold accents
- **Beacon** - readability-first daily driver: calm surfaces, clear hierarchy, tempered Dark+/Light+ code

## Fenced Code And C++ Syntax

Primary bundles ship **C++-first Prism token colors** for fenced ``` blocks (keywords, types, strings, numbers, comments, functions, preprocessor).

- Token colors come from `--md-syntax-*` variables defined by each family.
- Per-token gray chip backgrounds from MPE `codeBlockTheme` remain stripped.
- Keep `"markdown-preview-enhanced.codeBlockTheme": "auto.css"` — the theme overrides token colors while preserving highlighting structure.
- After updating a bundle, re-paste the full `themes/mpe/global-*.less` file into `%USERPROFILE%\.crossnote\style.less` and refresh the MPE preview.

Best fixtures for checking code styling: `examples/code-showcase.md` and `examples/documentation-patterns.md`.

## Diagrams / Mermaid

Mermaid diagrams render in **MPE only** (not in the browser workbench). For themed diagram output use the **v3 Diagrams** bundle:

| File | Theme |
| ---- | ----- |
| [global-cpp-modern-v3-diagrams.less](global-cpp-modern-v3-diagrams.less) | C++ Modern v3 Diagrams (dark) |
| [global-cpp-modern-v3-diagrams-light.less](global-cpp-modern-v3-diagrams-light.less) | C++ Modern v3 Diagrams Light |
| [mermaid-config-cpp-modern.json](mermaid-config-cpp-modern.json) | Fields to put inside `mermaidConfig` in `config.js` (not a whole `config.js` file) |

MPE does not provide a separate global CSS file for Mermaid — diagram colors come from `mermaidConfig` (init / `themeVariables`) plus `--md-diagram-*` overrides in the v3 `style.less` bundle (see `_diagram-tokens.css` in the vscode-preview add-on).

Best fixture for checking diagram styling: `examples/mermaid-showcase.md`.

### Configure Mermaid (Open Config Script)

Without `theme: "base"` and `themeVariables` in `config.js`, Mermaid keeps default light-gray edge-label backgrounds (`yes` / `no` / `assign`). CSS alone often cannot win over those defaults.

#### 1. Install the v3 CSS bundle

Paste [global-cpp-modern-v3-diagrams.less](global-cpp-modern-v3-diagrams.less) into `%USERPROFILE%\.crossnote\style.less` (same steps as [Install step by step](#install-step-by-step-windows) below).

#### 2. VS Code / Cursor settings

Add to user or workspace `settings.json`:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default"
}
```

Use `"default"`, not `"dark"`. The built-in `mermaid.dark.css` theme often restores light edge-label backgrounds.

#### 3. Open the global config script

1. Press `Ctrl+Shift+P` (Command Palette).
2. Run: **Markdown Preview Enhanced: Open Config Script (Global)**.
3. VS Code opens (or creates):

```text
C:\Users\<YourUser>\.crossnote\config.js
```

A fresh file looks like this — `mermaidConfig` only has `startOnLoad`:

```js
({
  katexConfig: {
    "macros": {}
  },

  mathjaxConfig: {
    "tex": {},
    "options": {
      "enableEnrichment": false
    },
    "loader": {}
  },

  mermaidConfig: {
    "startOnLoad": false
  },
})
```

#### 4. Fill in `mermaidConfig`

Do **not** replace the entire `config.js` with the JSON file.  
[mermaid-config-cpp-modern.json](mermaid-config-cpp-modern.json) is the **contents** of `mermaidConfig` only.

Keep `startOnLoad: false`, then merge in every field from that JSON (`theme`, `themeVariables`, `flowchart`, …).

Copy-paste example (katex / mathjax unchanged; full dark v3 Mermaid config):

```js
({
  katexConfig: {
    "macros": {}
  },

  mathjaxConfig: {
    "tex": {},
    "options": {
      "enableEnrichment": false
    },
    "loader": {}
  },

  mermaidConfig: {
    "startOnLoad": false,
    "theme": "base",
    "themeVariables": {
      "darkMode": true,
      "background": "#2b2b2b",
      "primaryColor": "#2d2d30",
      "primaryTextColor": "#ffffff",
      "primaryBorderColor": "#569cd6",
      "secondaryColor": "#333333",
      "secondaryTextColor": "#ffffff",
      "secondaryBorderColor": "#569cd6",
      "tertiaryColor": "#252526",
      "tertiaryTextColor": "#ffffff",
      "tertiaryBorderColor": "#4ec9b0",
      "lineColor": "#b0b0b0",
      "arrowheadColor": "#4ec9b0",
      "textColor": "#ffffff",
      "mainBkg": "#2d2d30",
      "nodeBorder": "#569cd6",
      "nodeTextColor": "#ffffff",
      "clusterBkg": "#2f3634",
      "clusterBorder": "#4ec9b0",
      "titleColor": "#4ec9b0",
      "edgeLabelBackground": "transparent",
      "labelBackground": "transparent",
      "labelTextColor": "#ffffff",
      "relationLabelBackground": "transparent",
      "actorBkg": "#2d2d30",
      "actorBorder": "#569cd6",
      "actorTextColor": "#ffffff",
      "actorLineColor": "#4ec9b0",
      "signalColor": "#4ec9b0",
      "signalTextColor": "#ffffff",
      "stateBkg": "#2d2d30",
      "stateBorder": "#569cd6",
      "stateLabelColor": "#ffffff",
      "transitionColor": "#b0b0b0",
      "transitionLabelColor": "#ffffff",
      "labelBackgroundColor": "transparent",
      "attributeBackgroundColorOdd": "#2d2d30",
      "attributeBackgroundColorEven": "#252526",
      "pie1": "#569cd6",
      "pie2": "#4ec9b0",
      "pie3": "#6a9955",
      "pie4": "#ce9178",
      "pie5": "#b5cea8",
      "pie6": "#c586c0",
      "pie7": "#dcdcaa",
      "pieTitleTextColor": "#ffffff",
      "pieSectionTextColor": "#ffffff",
      "pieSectionTextSize": "14px",
      "pieLegendTextColor": "#e8e8e8",
      "pieStrokeColor": "#2b2b2b",
      "pieStrokeWidth": "1px",
      "git0": "#569cd6",
      "git1": "#4ec9b0",
      "git2": "#6a9955",
      "git3": "#ce9178",
      "gitBranchLabel0": "#ffffff",
      "gitBranchLabel1": "#ffffff",
      "gitBranchLabel2": "#ffffff",
      "commitLabelColor": "#e8e8e8",
      "commitLabelBackground": "#333333",
      "gitInv0": "#4ec9b0",
      "gitInv1": "#569cd6",
      "fontFamily": "Segoe UI, Inter, system-ui, sans-serif",
      "fontSize": "14px",
      "quadrant1Fill": "#2a3438",
      "quadrant2Fill": "#283238",
      "quadrant3Fill": "#262a2e",
      "quadrant4Fill": "#24282c",
      "quadrantPointFill": "#4ec9b0",
      "quadrantPointStrokeColor": "#ffffff",
      "quadrantPointTextFill": "#ffffff",
      "quadrantXAxisTextColor": "#cccccc",
      "quadrantYAxisTextColor": "#cccccc",
      "quadrantTitleFill": "#4ec9b0",
      "quadrantLabelFill": "#ffffff",
      "quadrantInnerStrokeFill": "#569cd6",
      "quadrantOuterStrokeFill": "#4ec9b0"
    },
    "themeCSS": ".row-rect-odd>path:first-child{fill:#2d2d30!important}.row-rect-even>path:first-child{fill:#252526!important}.er.attributeBoxOdd{fill:#2d2d30!important}.er.attributeBoxEven{fill:#252526!important}.er.entityBox{fill:#2d2d30!important;stroke:#569cd6!important}.er.entityLabel{fill:#ffffff!important}.nodeLabel,.nodeLabel p{color:#ffffff!important}.er.relationshipLabel{fill:#ffffff!important}.er.relationshipLabelBox{fill:transparent!important;stroke:none!important;opacity:0!important}.edgeLabel .background{fill:#252526!important}",
    "flowchart": {
      "htmlLabels": false,
      "padding": 12,
      "nodeSpacing": 50,
      "rankSpacing": 55
    },
    "sequence": {
      "diagramMarginX": 24,
      "diagramMarginY": 20,
      "boxMargin": 10,
      "actorFontSize": 14
    },
    "class": {
      "padding": 10
    },
    "state": {
      "padding": 6,
      "nodeSpacing": 30,
      "rankSpacing": 30,
      "fontSize": 12,
      "dividerMargin": 6
    },
    "gantt": {
      "leftPadding": 75,
      "gridLineStartPadding": 35
    },
    "journey": {
      "sectionFontSize": 14,
      "taskFontSize": 13
    },
    "pie": {
      "textPosition": 0.75
    },
    "gitGraph": {
      "showBranches": true,
      "showCommitLabel": true,
      "rotateCommitLabel": true
    }
  },
})
```

For the light v3 bundle, set `"darkMode": false` in `themeVariables` (and use [global-cpp-modern-v3-diagrams-light.less](global-cpp-modern-v3-diagrams-light.less)).

#### 5. Save and verify

1. Save `config.js` (`Ctrl+S`).
2. Refresh the MPE preview (toolbar refresh, or close/reopen preview).
3. Open `examples/mermaid-showcase.md` and check flowchart `yes` / `no` and state labels like `assign` — they should have **no** light-gray label background.

### Mermaid troubleshooting

| Symptom | Fix |
| ------- | --- |
| Light-gray “glow” behind `yes` / `no` / `assign` | Confirm `theme: "base"`, `edgeLabelBackground: "transparent"`, and for state diagrams also `labelBackgroundColor: "transparent"` inside `mermaidConfig` |
| ER attribute rows unreadable (white zebra stripes) | Newer Mermaid ER uses `.row-rect-odd` / `.row-rect-even` (not `.er.attributeBoxOdd`). Update `themeCSS` accordingly — see `mermaid-config-cpp-modern.json`. |
| Config seems ignored | Re-open via **Open Config Script (Global)** — the live file is `%USERPROFILE%\.crossnote\config.js` |
| Labels still light after CSS paste | Do not use `"markdown-preview-enhanced.mermaidTheme": "dark"` |
| Only `startOnLoad: false` in `mermaidConfig` | Merge the full [mermaid-config-cpp-modern.json](mermaid-config-cpp-modern.json) fields into that object |

## Install step by step (Windows)

### 1. Open the global style file

1. Press `Ctrl+Shift+P` (Command Palette).
2. Type: `Markdown Preview Enhanced: Customize CSS (Global)`
3. Press Enter.

VS Code opens (or creates):

```text
C:\Users\<YourUser>\.crossnote\style.less
```

If the command fails, create the folder manually:

```text
%USERPROFILE%\.crossnote\
```

Then run the command again.

### 2. Replace the file content

1. In `style.less`, press `Ctrl+A` (select all).
2. Press `Delete`.
3. Open one bundle file from the repo in VS Code:

```text
themes/mpe/global-cpp-modern.less
```

1. Press `Ctrl+A` → `Ctrl+C` (copy entire file).
2. Switch back to `%USERPROFILE%\.crossnote\style.less`.
3. Press `Ctrl+V` (paste).
4. Press `Ctrl+S` (save).

### 3. Recommended MPE settings

Add to user or workspace `settings.json`:

```json
{
  "markdown-preview-enhanced.previewMode": "Previews Only",
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

This keeps MPE focused on preview-first editing and reduces conflicts with built-in preview themes.

### 4. Open preview

1. Open any `.md` file (for example `examples/theme-preview.md`).
2. If you use `Previews Only`, the file should open directly in MPE preview after restart.
3. Otherwise run **Markdown Preview Enhanced: Open Preview to the Side**.
4. If styles do not appear, click the **refresh** button in the preview toolbar.

### 5. Verify

For the default C++ Modern dark bundle you should see:

- dark background (`#1f1f1f`)
- teal `h2` headings
- blue-teal list bullets
- styled code blocks with left accent bar

For other bundles, verify that headings, links, blockquotes, tables, and fenced code blocks all match the family tone in both light and dark variants.

## Editing Workflow

### In-preview editing

- Click into the rendered Markdown to activate the in-preview editor.
- Save with `Ctrl+S`.
- Press `Esc` to close the in-preview editor.

### Open raw source

- Right-click in the preview and choose **Edit Markdown → Open VS Code Editor**.
- Use this when you want the plain text editor instead of the in-preview editing experience.

## Regenerate bundles

After editing inline or vscode-preview themes:

```bash
node themes/addons/vscode-preview/build-from-inline.mjs
node themes/addons/vscode-preview/build-mpe-global.mjs
```

## Workspace vs global

| Scope | Command | File |
| ----- | ------- | ---- |
| Global (all projects) | Customize CSS **(Global)** | `%USERPROFILE%\.crossnote\style.less` |
| Workspace (this repo only) | Customize CSS **(Workspace)** | `.crossnote/style.less` |

For workspace-only install, paste the same bundle into `.crossnote/style.less` at the repo root.

## Troubleshooting

### Styles not applied

- Confirm you replaced the **entire** `style.less` content, not just appended.
- Set `markdown-preview-enhanced.previewMode` to `"Previews Only"` if you want preview-first behavior.
- Set `markdown-preview-enhanced.previewTheme` to `none.css`.
- Refresh the MPE preview after saving.

### Gray boxes on operators or punctuation inside ``` blocks

- MPE's built-in `codeBlockTheme` adds per-token backgrounds (e.g. on `&&`, `<`, `>`).
- Re-paste the latest primary bundle (for example `global-cpp-modern.less`) into `%USERPROFILE%\.crossnote\style.less` — the theme strips token backgrounds while keeping family syntax colors.
- Refresh the MPE preview after saving.

### Code colors look wrong or washed out

- Confirm you pasted a **current** primary bundle that includes `--md-syntax-*` variables.
- Refresh the preview after saving `style.less`.
- Check `examples/code-showcase.md` under C++ fences for keyword / type / string contrast.

### Wrong file location

- Global config: `~/.crossnote/` (Windows: `%USERPROFILE%\.crossnote\`)
- Old MPE versions used `~/.mume/` — re-run **Customize CSS (Global)** to migrate.

### Built-in VS Code preview unchanged

- MPE global CSS affects **MPE preview only**.
- For built-in preview, use `markdown.styles` — see [../addons/vscode-preview/README.md](../addons/vscode-preview/README.md).
