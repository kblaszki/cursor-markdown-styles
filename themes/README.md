# Theme Index

This repository is organized around **Markdown Preview Enhanced (MPE)** as the primary Markdown workflow for VS Code and Cursor.

## Recommended Path

1. Use **Markdown Preview Enhanced** for daily Markdown work.
2. Paste a **released** package from [`mpe/released/`](mpe/released) into your global `style.less` (start with [`mpe/released/cpp-modern/`](mpe/released/cpp-modern)).
3. Replace `%USERPROFILE%\.crossnote\config.js` with that package’s `config.js` (paste as-is).
4. Use the browser workbench in [`../preview/`](../preview) to iterate on theme ideas.
5. Keep built-in preview and Cursor inline themes only as secondary add-ons.

## Theme Areas

### MPE First

- [`mpe/`](mpe) - install packages for Markdown Preview Enhanced
- [`mpe/released/`](mpe/released) - stable packages (`style.less` + `config.js`)
- [`mpe/experimental/`](mpe/experimental) - WIP variants (CSS only until promoted)
- [`mpe/README.md`](mpe/README.md) - full install and editing workflow

Released now:

- **C++ Modern** dark — [`mpe/released/cpp-modern/`](mpe/released/cpp-modern)

Experimental families (and light / legacy variants) live under [`mpe/experimental/`](mpe/experimental).

### Add-ons And Legacy

Add-ons are **delivery channels**, not a second `released` / `experimental` tree. Tiering applies to MPE packages only.

| Channel | Path | Role |
| ------- | ---- | ---- |
| vscode-preview | [`addons/vscode-preview/`](addons/vscode-preview) | CSS source of truth + optional `markdown.styles` for built-in preview |
| cursor-inline | [`addons/cursor-inline/`](addons/cursor-inline) | Legacy Cursor inline (`Preview \| Markdown`); prefer MPE released |

#### MPE ↔ vscode-preview mapping

| MPE package | vscode-preview CSS | Status |
| ----------- | ------------------ | ------ |
| [`mpe/released/cpp-modern`](mpe/released/cpp-modern) | [`original/cpp-modern/vscode-preview-cpp-modern.css`](addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css) | released |
| [`mpe/experimental/<slug>`](mpe/experimental) | matching `original/<family>/vscode-preview-*.css` | experimental |

Use add-ons only when you specifically need built-in preview compatibility or the old Cursor inline path. Details: [`addons/README.md`](addons/README.md), [`addons/vscode-preview/README.md`](addons/vscode-preview/README.md), [`addons/cursor-inline/README.md`](addons/cursor-inline/README.md).
