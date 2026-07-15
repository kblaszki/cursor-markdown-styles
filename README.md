# Markdown CSS Playground

A public playground for experimenting with Markdown fixtures, browser preview styles, Cursor inline preview themes, and VS Code side-preview themes.

## What This Repo Contains

- reusable Markdown samples for testing rendered content
- a local browser preview setup for stylesheet iteration
- Cursor inline preview themes inspired by popular products and custom personal themes
- VS Code / Cursor side-preview themes loaded through `markdown.styles`

## Structure

- `examples/`
  - `basic.md` - core Markdown syntax
  - `extended.md` - tables, images, embedded HTML, and code fences
  - `checkboxes.md` - task lists and nested checklist patterns
  - `frontmatter.md` - YAML front matter example and renderer compatibility notes
  - `theme-preview.md` - a fixed comparison document for theme testing
  - `code-showcase.md` - C++-heavy snippets for technical theme testing
  - `documentation-patterns.md` - technical documentation patterns and release notes
  - `mvp-taskflow.md` - realistic long-form product and API documentation
- `preview/`
  - `index.html` - browser preview page with rendered Markdown-like HTML
  - `markdown.css` - browser preview stylesheet
  - `cursor-preview.css` - stylesheet for Cursor side preview (`Ctrl+K V`)
- `themes/cursor-inline/`
  - `popular/` - themes inspired by recognizable products and palettes
  - `original/` - personal theme families such as `cpp-modern` and `lumina`
  - `cursor-inline-preview.css` - default GitHub-style theme file
- `themes/vscode-preview/`
  - `original/cpp-modern/` - C++ Modern family for VS Code side preview (`markdown.styles`)

## Preview Locally

### Browser Preview

1. Open `preview/index.html` in a browser.
2. Switch between example fixtures with the tabs at the top of the page.
3. Edit `preview/markdown.css`, or use **Load CSS** / drag-and-drop to test a theme from `themes/cursor-inline/`.
4. Refresh the page when editing `preview/markdown.css` directly.

### VS Code / Cursor Side Markdown Preview

Recommended when using standard preview (`Ctrl+Shift+V` / `Ctrl+K V`) with Markdown extensions.

1. Add a theme path to `markdown.styles` in settings (see [themes/vscode-preview/README.md](themes/vscode-preview/README.md)).
2. Open any file from `examples/`.
3. Run **Markdown: Open Preview** or **Markdown: Open Preview to the Side**.

Example workspace setting:

```json
{
  "markdown.styles": [
    "${workspaceFolder}/themes/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css"
  ]
}
```

For **Markdown Preview Enhanced**, paste a ready-made bundle into global `style.less` — see [themes/vscode-preview/mpe/README.md](themes/vscode-preview/mpe/README.md).

### Cursor Markdown Preview (legacy side preview)

1. Open any file from `examples/`.
2. Use Cursor's Markdown preview.
3. For a minimal generic stylesheet, use `preview/cursor-preview.css`.

### Cursor Inline Preview Themes

Browse installable themes in `themes/cursor-inline/`:

- `themes/cursor-inline/popular/` for styles inspired by GitHub, Notion, Dracula, Nord, Solarized, and similar references
- `themes/cursor-inline/original/cpp-modern/` for the C++ Modern family
- `themes/cursor-inline/original/lumina/` for the Lumina family

## Install A Cursor Inline Theme

Cursor inline preview styling is applied by copying a theme CSS file into Cursor's workbench stylesheet.

1. Choose one CSS file from `themes/cursor-inline/`.
2. Back up the original `workbench.desktop.main.css`.
3. Copy the full contents of the chosen theme file into `workbench.desktop.main.css`.
4. Restart Cursor.
5. Repeat the process after Cursor updates.

### Global Install (system-wide Cursor)

```text
C:\Program Files\cursor\resources\app\out\vs\workbench\workbench.desktop.main.css
```

This path usually requires administrator rights.

### Per-User Install (local Cursor install)

```text
%LOCALAPPDATA%\Programs\cursor\resources\app\out\vs\workbench\workbench.desktop.main.css
```

Example:

```text
C:\Users\<YourUser>\AppData\Local\Programs\cursor\resources\app\out\vs\workbench\workbench.desktop.main.css
```

### Example

```text
themes/cursor-inline/original/cpp-modern/cursor-inline-cpp-modern.css
  -> workbench.desktop.main.css
```

Important notes:

- Replace the file contents with the theme CSS. Do not append a second stylesheet.
- Keep a backup of the original `workbench.desktop.main.css` so you can restore it later.
- `preview/cursor-preview.css` is for side preview only.
- `themes/cursor-inline/...` files are for the inline `Preview | Markdown` experience.

## Recommended Theme Files

- `themes/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css` - recommended C++ Modern for VS Code side preview
- `themes/cursor-inline/popular/cursor-inline-github.css` - GitHub-style default (inline)
- `themes/cursor-inline/original/cpp-modern/cursor-inline-cpp-modern.css` - recommended C++ Modern theme (inline)
- `themes/cursor-inline/original/lumina/cursor-inline-lumina.css` - recommended Lumina theme (inline)

## License

This project is licensed under the [MIT License](LICENSE).

- **Copyright (c) 2026 kblaszki**
- Themes in `themes/cursor-inline/original/` are original work by kblaszki and are included under the same MIT license.
- Themes in `themes/cursor-inline/popular/` are inspired by recognizable products and palettes; they are provided as stylistic references under the same MIT license.
