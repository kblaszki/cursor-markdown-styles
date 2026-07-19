# Markdown Preview Enhanced — packages

Ready-to-paste **style.less** packages for **Markdown Preview Enhanced (MPE)**, split into **released** (install these) and **experimental** (WIP; may lack Crossnote `config.js`).

Source CSS lives under [`../addons/vscode-preview/original/`](../addons/vscode-preview/original/). Rebuild after edits:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Do **not** hand-edit generated `style.less` files.

Each package README includes a **Color palette** table (CSS tokens + unique hex). Regenerate after token changes:

```bash
node scripts/update-palette-readmes.mjs
```

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

## Released

Stable install packages. Each folder has `style.less` plus a full Crossnote [`config.js`](released/cpp-modern/config.js) (katex + mathjax + `mermaidConfig`).

| Package | Theme |
| ------- | ----- |
| [released/cpp-modern/](released/cpp-modern/) | C++ Modern dark (recommended default) |
| [released/cpp-modern-light/](released/cpp-modern-light/) | C++ Modern light |

Install dark: paste [`released/cpp-modern/style.less`](released/cpp-modern/style.less) into `%USERPROFILE%\.crossnote\style.less`, then replace `%USERPROFILE%\.crossnote\config.js` with [`released/cpp-modern/config.js`](released/cpp-modern/config.js) (see [Configure Mermaid](#configure-mermaid-open-config-script)).

Install light: same steps with [`released/cpp-modern-light/`](released/cpp-modern-light/) (`style.less` + `config.js`, `"darkMode": false`).

Short package guides: [released/cpp-modern/README.md](released/cpp-modern/README.md), [released/cpp-modern-light/README.md](released/cpp-modern-light/README.md).

## Experimental

Work-in-progress variants and families. Paste `style.less`; add a package `config.js` when promoting to released.

| Package | Theme |
| ------- | ----- |
| [experimental/studio/](experimental/studio/) | Studio light |
| [experimental/lumina/](experimental/lumina/) | Lumina dark |
| [experimental/lumina-light/](experimental/lumina-light/) | Lumina light |
| [experimental/graphite/](experimental/graphite/) | Graphite dark |
| [experimental/graphite-light/](experimental/graphite-light/) | Graphite light |
| [experimental/graphite-code/](experimental/graphite-code/) | Graphite Code dark |
| [experimental/graphite-code-light/](experimental/graphite-code-light/) | Graphite Code light |
| [experimental/meridian/](experimental/meridian/) | Meridian dark |
| [experimental/meridian-light/](experimental/meridian-light/) | Meridian light |
| [experimental/blueprint/](experimental/blueprint/) | Blueprint dark |
| [experimental/blueprint-light/](experimental/blueprint-light/) | Blueprint light |
| [experimental/phosphor/](experimental/phosphor/) | Phosphor (green CRT) |
| [experimental/phosphor-amber/](experimental/phosphor-amber/) | Phosphor Amber |
| [experimental/matcha/](experimental/matcha/) | Matcha dark |
| [experimental/matcha-light/](experimental/matcha-light/) | Matcha light |
| [experimental/beacon/](experimental/beacon/) | Beacon dark |
| [experimental/beacon-light/](experimental/beacon-light/) | Beacon light |
| [experimental/cpp-modern-v1-syntax/](experimental/cpp-modern-v1-syntax/) | C++ Modern v1 Syntax |
| [experimental/cpp-modern-v2-readable/](experimental/cpp-modern-v2-readable/) | C++ Modern v2 Readable |
| [experimental/cpp-modern-v3-diagrams/](experimental/cpp-modern-v3-diagrams/) | C++ Modern v3 Diagrams (+ diagram CSS tokens) |
| [experimental/cpp-modern-v3-diagrams-light/](experimental/cpp-modern-v3-diagrams-light/) | C++ Modern v3 Diagrams Light |
| [experimental/lumina-v1-neon/](experimental/lumina-v1-neon/) | Lumina v1 Neon |
| [experimental/lumina-v2-muted/](experimental/lumina-v2-muted/) | Lumina v2 Muted |
| [experimental/lumina-v3-balanced/](experimental/lumina-v3-balanced/) | Lumina v3 Balanced |
| [experimental/lumina-v4-neon-blue/](experimental/lumina-v4-neon-blue/) | Lumina v4 Neon Blue |

## Family Guide

- **C++ Modern** - balanced technical dark/light theme with blue-teal hierarchy and restrained code styling (both dark and light released)
- **C++ Modern v3 Diagrams** - same prose/code as C++ Modern plus `--md-diagram-*` Mermaid chrome (experimental)
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
- After updating a package, re-paste the full `style.less` into `%USERPROFILE%\.crossnote\style.less` and refresh the MPE preview.

Best fixtures for checking code styling: `examples/code-showcase.md` and `examples/documentation-patterns.md`.

## Diagrams / Mermaid

Mermaid diagrams render in **MPE only** (not in the browser workbench).

For the **released** dark package, use:

| File | Role |
| ---- | ---- |
| [released/cpp-modern/style.less](released/cpp-modern/style.less) | Preview theme |
| [released/cpp-modern/config.js](released/cpp-modern/config.js) | Full Crossnote config — paste over `%USERPROFILE%\.crossnote\config.js` |

Optional experimental CSS overlay for `--md-diagram-*` tokens: [experimental/cpp-modern-v3-diagrams/](experimental/cpp-modern-v3-diagrams/) (pair with the released `config.js` until that variant is promoted).

Best fixture: `examples/mermaid-showcase.md`. Deep dive: [`docs/mermaid-styling.md`](../../docs/mermaid-styling.md).

### Configure Mermaid (Open Config Script)

Without `theme: "base"` and `themeVariables` in `config.js`, Mermaid keeps default light-gray edge-label backgrounds (`yes` / `no` / `assign`). CSS alone often cannot win over those defaults.

#### 1. Install the released CSS package

Paste [released/cpp-modern/style.less](released/cpp-modern/style.less) into `%USERPROFILE%\.crossnote\style.less` (same steps as [Install step by step](#install-step-by-step-windows) below).

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

#### 4. Replace the entire `config.js`

[released/cpp-modern/config.js](released/cpp-modern/config.js) (dark) or [released/cpp-modern-light/config.js](released/cpp-modern-light/config.js) (light) is already a full Crossnote config script (`({ katexConfig, mathjaxConfig, mermaidConfig })` with `"startOnLoad": false`).

1. Select all in `%USERPROFILE%\.crossnote\config.js` and delete.
2. Paste the **entire** contents of the package `config.js` that matches your `style.less`.
3. Save.

Keep the package file as the single source of truth in the repo.

For other experimental packages, adapt `themeVariables` when you add a package-local `config.js` on promotion.

#### 5. Save and verify

1. Save `config.js` (`Ctrl+S`).
2. Refresh the MPE preview (toolbar refresh, or close/reopen preview).
3. Open `examples/mermaid-showcase.md` and check flowchart `yes` / `no`, state labels, ER rows, gantt/pie/journey/mindmap/quadrant contrast.

### Mermaid troubleshooting

| Symptom | Fix |
| ------- | --- |
| Light-gray “glow” behind `yes` / `no` / `assign` | Confirm `theme: "base"`, `edgeLabelBackground: "transparent"`, and for state diagrams also `labelBackgroundColor: "transparent"` inside `mermaidConfig` |
| ER attribute rows unreadable (white zebra stripes) | Newer Mermaid ER uses `.row-rect-odd` / `.row-rect-even` (not `.er.attributeBoxOdd`). Update `themeCSS` accordingly — see `released/cpp-modern/config.js`. |
| Gantt purple bars / yellow sections | Set `taskBkgColor`, `sectionBkgColor*`, and matching `themeCSS` — see JSON |
| Mindmap pastel nodes / white-on-yellow | Force dark `.section-N` fills + white labels via `cScale*` and `themeCSS` |
| Quadrant names black | Use `quadrant1TextFill`…`quadrant4TextFill` (not `quadrantLabelFill`); `themeCSS` `.quadrant text` |
| Journey huge empty bottom | Mermaid reserves vertical score space for faces; config sets `bottomMarginAdj: 0`, `taskMargin: 25`, `todayMarker` off on gantt |
| Config seems ignored | Re-open via **Open Config Script (Global)** — the live file is `%USERPROFILE%\.crossnote\config.js` |
| Labels still light after CSS paste | Do not use `"markdown-preview-enhanced.mermaidTheme": "dark"` |
| Only `startOnLoad: false` in `mermaidConfig` | Replace `config.js` with the full [released/cpp-modern/config.js](released/cpp-modern/config.js) (paste as-is) |

### Promote experimental → released

1. Add `config.js` next to that package’s `style.less` (adapt from cpp-modern’s full Crossnote skeleton; palette aligned to the family).
2. Set `tier: "released"` for that variant in [`build-mpe-global.mjs`](../addons/vscode-preview/build-mpe-global.mjs).
3. Rebuild; add a short package `README.md`; update this index and the root theme docs.
4. Remove the empty experimental folder if the path changed.

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
3. Open the released package from the repo:

```text
themes/mpe/released/cpp-modern/style.less
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

For the released C++ Modern dark package you should see:

- dark background (`#1f1f1f`)
- teal `h2` headings
- blue-teal list bullets
- styled code blocks with left accent bar

For experimental packages, verify that headings, links, blockquotes, tables, and fenced code blocks match the family tone.

## Editing Workflow

### In-preview editing

- Click into the rendered Markdown to activate the in-preview editor.
- Save with `Ctrl+S`.
- Press `Esc` to close the in-preview editor.

### Open raw source

- Right-click in the preview and choose **Edit Markdown → Open VS Code Editor**.
- Use this when you want the plain text editor instead of the in-preview editing experience.

## Regenerate packages

After editing vscode-preview source CSS:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

(`build-from-inline.mjs` remains only for the legacy cursor-inline path.)

## Workspace vs global

| Scope | Command | File |
| ----- | ------- | ---- |
| Global (all projects) | Customize CSS **(Global)** | `%USERPROFILE%\.crossnote\style.less` |
| Workspace (this repo only) | Customize CSS **(Workspace)** | `.crossnote/style.less` |

For workspace-only install, paste the same package `style.less` into `.crossnote/style.less` at the repo root.

## Troubleshooting

### Styles not applied

- Confirm you replaced the **entire** `style.less` content, not just appended.
- Set `markdown-preview-enhanced.previewMode` to `"Previews Only"` if you want preview-first behavior.
- Set `markdown-preview-enhanced.previewTheme` to `none.css`.
- Refresh the MPE preview after saving.

### Gray boxes on operators or punctuation inside ``` blocks

- MPE's built-in `codeBlockTheme` adds per-token backgrounds (e.g. on `&&`, `<`, `>`).
- Re-paste the latest released package (`released/cpp-modern/style.less`) into `%USERPROFILE%\.crossnote\style.less` — the theme strips token backgrounds while keeping family syntax colors.
- Refresh the MPE preview after saving.

### Code colors look wrong or washed out

- Confirm you pasted a **current** package that includes `--md-syntax-*` variables.
- Refresh the preview after saving `style.less`.
- Check `examples/code-showcase.md` under C++ fences for keyword / type / string contrast.

### Wrong file location

- Global config: `~/.crossnote/` (Windows: `%USERPROFILE%\.crossnote\`)
- Old MPE versions used `~/.mume/` — re-run **Customize CSS (Global)** to migrate.

### Built-in VS Code preview unchanged

- MPE global CSS affects **MPE preview only**.
- For built-in preview, use `markdown.styles` — see [../addons/vscode-preview/README.md](../addons/vscode-preview/README.md).
