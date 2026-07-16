# Markdown Preview Setup (MPE) + Themes

This repository is a setup guide for writing Markdown in **VS Code** or **Cursor** with **Markdown Preview Enhanced (MPE)** as the primary preview workflow.

It also includes:

- ready-to-paste global CSS bundles for MPE
- example Markdown files for testing preview behavior
- built-in VS Code preview themes as a fallback path
- legacy Cursor inline themes for the custom `cpp-modern` and `lumina` families

If you want something closest to Cursor inline preview, but more stable and configurable, the recommended setup is **MPE + `Preview Mode: Previews Only`**.

## Quick Start

1. Install the recommended extensions listed below.
2. Set MPE **Preview Mode** to **`Previews Only`** and restart VS Code or Cursor.
3. Paste one of this repo's global CSS bundles into `%USERPROFILE%\.crossnote\style.less`.
4. Open `examples/theme-preview.md` or `examples/extended.md`.
5. Verify that headings, lists, front matter, and fenced code blocks render correctly.

## Recommended Extensions

| Extension | ID | Purpose |
| --- | --- | --- |
| **Markdown Preview Enhanced** | `shd101wyy.markdown-preview-enhanced` | Primary preview and editing workflow |
| **Markdown All in One** | `yzhang.markdown-all-in-one` | TOC, keyboard helpers, and common Markdown editing shortcuts |
| **markdownlint** | `DavidAnson.vscode-markdownlint` | Markdown linting |

This repo also includes workspace recommendations in [`.vscode/extensions.json`](.vscode/extensions.json).

## Recommended User Settings

Add these to your **user** `settings.json`:

```json
{
  "markdown-preview-enhanced.previewMode": "Previews Only",
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css",
  "markdown-preview-enhanced.enableScriptExecution": false
}
```

Notes:

- `markdown-preview-enhanced.previewMode: "Previews Only"` requires a restart after you change it.
- In this mode, Markdown files open directly into preview instead of a separate source editor.
- You can still edit inside the preview using the in-preview editor.
- To open raw source, use the preview context menu: **Edit Markdown → Open VS Code Editor**.
- MPE does not currently provide a dedicated preview-to-editor toggle button in this mode. See [issue #2045](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/2045).

## Recommended Workflow

### Daily Use

1. Open a Markdown file.
2. Work primarily in the MPE preview.
3. Click into the rendered content when you want in-preview editing.
4. Save with `Ctrl+S`.
5. Press `Esc` to close the in-preview editor when needed.

### Useful Shortcuts

| Action | Shortcut / command |
| --- | --- |
| Open MPE preview to the side | `Ctrl+K V` → `Markdown Preview Enhanced: Open Preview to the Side` |
| Open MPE preview | `Ctrl+Shift+V` → `Markdown Preview Enhanced: Open Preview` |
| Save in-preview editor | `Ctrl+S` |
| Close in-preview editor | `Esc` |
| Open raw source | Preview context menu → **Edit Markdown → Open VS Code Editor** |

## Global CSS for MPE

The main output of this repo is a set of ready-to-paste MPE global styles:

- [`themes/mpe/global-cpp-modern.less`](themes/mpe/global-cpp-modern.less) - recommended
- [`themes/mpe/global-cpp-modern-light.less`](themes/mpe/global-cpp-modern-light.less)
- [`themes/mpe/global-lumina.less`](themes/mpe/global-lumina.less)
- [`themes/mpe/global-lumina-light.less`](themes/mpe/global-lumina-light.less)
- [`themes/mpe/global-graphite.less`](themes/mpe/global-graphite.less)
- [`themes/mpe/global-graphite-light.less`](themes/mpe/global-graphite-light.less)
- [`themes/mpe/global-meridian.less`](themes/mpe/global-meridian.less)
- [`themes/mpe/global-meridian-light.less`](themes/mpe/global-meridian-light.less)
- [`themes/mpe/global-cpp-modern-v1-syntax.less`](themes/mpe/global-cpp-modern-v1-syntax.less)
- [`themes/mpe/global-cpp-modern-v2-readable.less`](themes/mpe/global-cpp-modern-v2-readable.less)

Recommended family choices:

- `C++ Modern` - balanced technical default
- `Lumina` - brighter neon style
- `Graphite` - editorial, prose-first style
- `Meridian` - structured docs and checklist style

### Copy-Paste Install

1. Open the Command Palette with `Ctrl+Shift+P`.
2. Run `Markdown Preview Enhanced: Customize CSS (Global)`.
3. VS Code or Cursor opens `%USERPROFILE%\.crossnote\style.less`.
4. Select all, delete the existing content, and paste one full bundle from this repo.
5. Save the file.
6. Refresh the MPE preview.

Full walkthrough: [`themes/mpe/README.md`](themes/mpe/README.md)

## Example Files

Use the files in [`examples/`](examples/) to verify your setup:

- [`examples/theme-preview.md`](examples/theme-preview.md) - overall visual sanity check
- [`examples/extended.md`](examples/extended.md) - tables, images, HTML, code fences
- [`examples/code-showcase.md`](examples/code-showcase.md) - code-heavy technical samples
- [`examples/frontmatter.md`](examples/frontmatter.md) - YAML front matter behavior
- [`examples/documentation-patterns.md`](examples/documentation-patterns.md) - documentation structure

## Repository Layout

- [`themes/README.md`](themes/README.md) - theme index and entry points
- [`themes/mpe/`](themes/mpe/) - MPE-first global CSS bundles
- [`themes/addons/`](themes/addons/) - built-in preview and legacy Cursor inline assets
- [`examples/`](examples/) - Markdown fixtures for testing
- [`preview/`](preview/) - browser-based MPE style workbench and visual preview tools

## Other Modes

### Built-in VS Code Preview

If you prefer the built-in Markdown preview with `markdown.styles`, see:

- [`themes/addons/vscode-preview/README.md`](themes/addons/vscode-preview/README.md)

### Browser Preview

For MPE-first browser-based theme editing and quick offline visual checks:

- [`preview/README.md`](preview/README.md)

### Legacy Cursor Inline

Cursor inline preview is kept as a legacy / curiosity path:

- [`themes/addons/cursor-inline/README.md`](themes/addons/cursor-inline/README.md)

It requires patching Cursor's `workbench.desktop.main.css` and can break after Cursor updates.

## License

This project is licensed under the [MIT License](LICENSE).

- **Copyright (c) 2026 kblaszki**
- Themes in `themes/addons/cursor-inline/original/` are original work by kblaszki and are included under the same MIT license.
