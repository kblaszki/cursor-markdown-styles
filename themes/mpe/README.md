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
| [global-lumina.less](global-lumina.less) | Lumina dark |
| [global-lumina-light.less](global-lumina-light.less) | Lumina light |
| [global-graphite.less](global-graphite.less) | Graphite dark |
| [global-graphite-light.less](global-graphite-light.less) | Graphite light |
| [global-graphite-code.less](global-graphite-code.less) | Graphite Code dark (Graphite + C++ Modern syntax colors) |
| [global-graphite-code-light.less](global-graphite-code-light.less) | Graphite Code light |
| [global-meridian.less](global-meridian.less) | Meridian dark |
| [global-meridian-light.less](global-meridian-light.less) | Meridian light |

### Legacy C++ Modern Variants

| File | Theme |
| ---- | ----- |
| [global-cpp-modern-v1-syntax.less](global-cpp-modern-v1-syntax.less) | C++ Modern v1 Syntax |
| [global-cpp-modern-v2-readable.less](global-cpp-modern-v2-readable.less) | C++ Modern v2 Readable |

Each file contains install instructions in the header comment plus the full inlined theme CSS.

## Family Guide

- **C++ Modern** - balanced technical dark/light theme with blue-teal hierarchy and restrained code styling
- **Lumina** - brighter neon identity with gradient headings and luminous accents
- **Graphite** - editorial documentation theme with warm copper contrast
- **Graphite Code** - Graphite visuals with Dark+ syntax colors plus a stronger C++ token refine layer
- **Meridian** - blue-green structural theme for checklists, tables, and runbooks

## Fenced Code And C++ Syntax

Primary bundles ship **C++-first Prism token colors** for fenced ``` blocks (keywords, types, strings, numbers, comments, functions, preprocessor).

- Token colors come from `--md-syntax-*` variables defined by each family.
- Per-token gray chip backgrounds from MPE `codeBlockTheme` remain stripped.
- Keep `"markdown-preview-enhanced.codeBlockTheme": "auto.css"` — the theme overrides token colors while preserving highlighting structure.
- After updating a bundle, re-paste the full `themes/mpe/global-*.less` file into `%USERPROFILE%\.crossnote\style.less` and refresh the MPE preview.

Best fixtures for checking code styling: `examples/code-showcase.md` and `examples/documentation-patterns.md`.

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
