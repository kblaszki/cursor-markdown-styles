# Cursor Inline Themes

Installable CSS themes for Cursor's inline Markdown preview.

Every file in this directory tree is self-contained and ready to copy into Cursor. The `_shared-rules.css` and `_frontmatter-heuristic-rules.css` files are included only as source reference and should not be copied on their own.

## Directory Layout

- `popular/` - themes inspired by recognizable products or palettes
- `original/cpp-modern/` - the C++ Modern family
- `original/lumina/` - the Lumina family
- `cursor-inline-preview.css` - default GitHub-style theme file

## Popular Themes

- `popular/cursor-inline-github.css`
- `popular/cursor-inline-notion.css`
- `popular/cursor-inline-nord.css`
- `popular/cursor-inline-dracula.css`
- `popular/cursor-inline-solarized.css`
- `popular/cursor-inline-editorial.css`
- `popular/cursor-inline-obsidian.css`
- `popular/cursor-inline-bear.css`
- `popular/cursor-inline-docs.css`
- `popular/cursor-inline-catppuccin.css`

## Original Themes

- `original/cpp-modern/cursor-inline-cpp-modern.css` - recommended C++ Modern version
- `original/lumina/cursor-inline-lumina.css` - recommended Lumina version

## Install In Cursor

1. Choose the CSS file you want to use.
2. Back up the original `workbench.desktop.main.css`.
3. Copy the full contents of the chosen theme file into `workbench.desktop.main.css`.
4. Restart Cursor.

### Global Install (system-wide Cursor)

```text
C:\Program Files\cursor\resources\app\out\vs\workbench\workbench.desktop.main.css
```

### Per-User Install (local Cursor install)

```text
%LOCALAPPDATA%\Programs\cursor\resources\app\out\vs\workbench\workbench.desktop.main.css
```

## Preview Before Installing

Use `preview/index.html` with **Load CSS** or drag-and-drop, or open `examples/theme-preview.md` in Cursor after applying a theme.
