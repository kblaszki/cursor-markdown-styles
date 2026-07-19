# Cursor Inline Themes

> **Legacy.** Prefer the **released** MPE package [`../../mpe/released/cpp-modern/`](../../mpe/released/cpp-modern/) for daily Markdown work. Cursor-inline themes here are older mirrors for `Preview | Markdown` / workbench CSS patching — not a released product line and not split into released/experimental tiers.

Installable CSS themes for Cursor's inline Markdown preview.

Every file in this directory tree is self-contained and ready to copy into Cursor. The `_shared-rules.css` and `_frontmatter-heuristic-rules.css` files are included only as source reference and should not be copied on their own.

## Directory Layout

- `original/cpp-modern/` - the C++ Modern family
- `original/lumina/` - the Lumina family
- `cursor-inline-preview.css` - generic starter file for inline preview experiments

## Recommended Files

- `original/cpp-modern/cursor-inline-cpp-modern.css` - recommended C++ Modern version
- `original/lumina/cursor-inline-lumina.css` - recommended Lumina version

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

- [`../../mpe/released/cpp-modern/`](../../mpe/released/cpp-modern/) - recommended released MPE package
- `../../mpe/README.md` - MPE install index (released vs experimental)
- `../../preview/README.md` - browser workbench for iterating on styles before handing off to `vscode-preview/original/`
