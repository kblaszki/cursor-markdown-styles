# Markdown CSS Playground

A public playground for experimenting with Markdown fixtures, browser preview styles, and Cursor inline preview themes.

## What This Repo Contains

- reusable Markdown samples for testing rendered content
- a local browser preview setup for stylesheet iteration
- Cursor inline preview themes inspired by popular products and custom personal themes

## Structure

- `examples/`
  - `basic.md` - core Markdown syntax
  - `extended.md` - tables, images, embedded HTML, and code fences
  - `theme-preview.md` - a fixed comparison document for screenshots and theme previews
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
  - `cursor-inline-preview.css` - the default installable GitHub-style inline preview file
- `assets/previews/`
  - notes for storing screenshot previews that can be browsed directly on GitHub

## Preview Locally

### Browser Preview

1. Open `preview/index.html` in a browser.
2. Edit `preview/markdown.css`.
3. Refresh the page to review the updated styling.

### Cursor Markdown Preview

1. Open any file from `examples/`.
2. Use Cursor's Markdown preview.
3. For side preview styling, use `preview/cursor-preview.css`.

### Cursor Inline Preview Themes

Browse installable themes in `themes/cursor-inline/`:

- `themes/cursor-inline/popular/` for styles inspired by GitHub, Notion, Dracula, Nord, Solarized, and similar references
- `themes/cursor-inline/original/cpp-modern/` for the C++ Modern family
- `themes/cursor-inline/original/lumina/` for the Lumina family

## Install A Cursor Inline Theme

Choose one CSS file from `themes/cursor-inline/` and copy it to:

```text
C:\Program Files\cursor\resources\app\out\vs\workbench\cursor-inline-preview.css
```

Then make sure `workbench.html` includes:

```html
<link rel="stylesheet" href="../../../workbench/cursor-inline-preview.css">
```

File location:

```text
C:\Program Files\cursor\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html
```

After that:

1. Restart Cursor.
2. Reapply the file after Cursor updates.

Important notes:

- Do not use an external `file:///D:/...` stylesheet path. Chromium blocks it in this context.
- `preview/cursor-preview.css` is for side preview only.
- `themes/cursor-inline/...` files are for the inline `Preview | Markdown` experience.

## Recommended Theme Files

- `themes/cursor-inline/popular/cursor-inline-github.css` - GitHub-style default
- `themes/cursor-inline/original/cpp-modern/cursor-inline-cpp-modern.css` - recommended C++ Modern theme
- `themes/cursor-inline/original/lumina/cursor-inline-lumina.css` - recommended Lumina theme

## GitHub-Friendly Theme Presentation

This repository is prepared for screenshot-based previews.

Recommended approach:

1. Use `examples/theme-preview.md` as the fixed comparison document.
2. Generate one screenshot per theme from the same content.
3. Store the images in `assets/previews/`.
4. Link those screenshots from this README and from `themes/cursor-inline/README.md`.

This keeps previews easy to browse directly on GitHub without requiring installation.

## License

This project uses the MIT License. See `LICENSE`.
