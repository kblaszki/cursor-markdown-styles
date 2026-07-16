# Theme Index

This repository is organized around **Markdown Preview Enhanced (MPE)** as the primary Markdown workflow for VS Code and Cursor.

## Recommended Path

1. Use **Markdown Preview Enhanced** for daily Markdown work.
2. Paste one of the ready-made bundles from [`mpe/`](d:\work\github\markdown\themes\mpe) into your global `style.less`.
3. Use the browser workbench in [`../preview/`](d:\work\github\markdown\preview) to iterate on theme ideas.
4. Keep built-in preview and Cursor inline themes only as secondary add-ons.

## Theme Areas

### MPE First

- [`mpe/`](d:\work\github\markdown\themes\mpe) - ready-to-paste global CSS bundles for Markdown Preview Enhanced
- [`mpe/README.md`](d:\work\github\markdown\themes\mpe\README.md) - full install and editing workflow for MPE

Current primary families:

- `C++ Modern` - balanced technical baseline with dark and light variants
- `Lumina` - luminous blue neon family with dark and light variants
- `Graphite` - editorial copper-accent family with dark and light variants
- `Graphite Code` - Graphite family with C++ Modern syntax colors only (dark and light)
- `Meridian` - blue-green structured docs family with dark and light variants

### Add-ons And Legacy

- [`addons/`](d:\work\github\markdown\themes\addons) - secondary theme paths, source families, and regeneration scripts
- [`addons/vscode-preview/`](d:\work\github\markdown\themes\addons\vscode-preview) - built-in VS Code preview CSS for `markdown.styles`
- [`addons/cursor-inline/`](d:\work\github\markdown\themes\addons\cursor-inline) - legacy Cursor inline themes for the custom `cpp-modern` and `lumina` families

Use add-ons only when you specifically need built-in preview compatibility or want to keep experimenting with Cursor's old inline `Preview | Markdown` path.
