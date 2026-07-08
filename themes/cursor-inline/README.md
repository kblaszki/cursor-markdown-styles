# Cursor Inline Themes

Installable CSS themes for Cursor's inline Markdown preview.

Every file in this directory tree is self-contained and can be copied into a Cursor installation. The `_shared-rules.css` file is included only as source reference and should not be copied on its own.

## Directory Layout

- `popular/` - themes inspired by recognizable products or palettes
- `original/cpp-modern/` - the C++ Modern family
- `original/lumina/` - the Lumina family
- `cursor-inline-preview.css` - default GitHub-style inline preview file

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
2. Copy it to:

```text
C:\Program Files\cursor\resources\app\out\vs\workbench\cursor-inline-preview.css
```

3. Make sure `workbench.html` contains:

```html
<link rel="stylesheet" href="../../../workbench/cursor-inline-preview.css">
```

4. Restart Cursor.

## Preview Strategy

Use `examples/theme-preview.md` as the fixed comparison document and keep screenshots in `assets/previews/` so visitors can compare styles directly on GitHub.
