# Cursor Inline Themes

> **Legacy / experimental.** This path requires patching `workbench.desktop.main.css`, can break after Cursor updates, and is no longer the main workflow in this repository. For daily Markdown work, use the [MPE setup](../vscode-preview/mpe/README.md) instead.

Installable CSS themes for Cursor's inline Markdown preview.

Every file in this directory tree is self-contained and ready to copy into Cursor. The `_shared-rules.css` and `_frontmatter-heuristic-rules.css` files are included only as source reference and should not be copied on their own.

## Directory Layout

- `popular/` - themes inspired by recognizable products or palettes
- `original/cpp-modern/` - the C++ Modern family
- `original/lumina/` - the Lumina family
- `cursor-inline-preview.css` - default GitHub-style theme file

## Recommended Files

- `original/cpp-modern/cursor-inline-cpp-modern.css` - recommended C++ Modern version
- `original/lumina/cursor-inline-lumina.css` - recommended Lumina version
- `popular/cursor-inline-github.css` - familiar GitHub-style fallback

## Install In Cursor

1. Choose the CSS file you want to use.
2. Back up the original `workbench.desktop.main.css`.
3. Copy the full contents of the chosen theme file into `workbench.desktop.main.css`.
4. Restart Cursor.

Repeat this process after Cursor updates if the patched stylesheet gets replaced.

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

## Related

- `cursor-inline-patch/frontmatter-patch.js` - optional front matter patch for inline preview experiments
- `../vscode-preview/mpe/README.md` - recommended modern workflow for Markdown in VS Code / Cursor
