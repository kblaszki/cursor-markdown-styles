# C++ Modern (VS Code Preview)

VS Code / Cursor side-preview port of the C++ Modern inline theme family.

## Files

- `vscode-preview-cpp-modern.css` — recommended installable version
- `vscode-preview-cpp-modern-v1-syntax.css` — syntax-token variant (headings mapped to C++ colors)
- `vscode-preview-cpp-modern-v2-readable.css` — historical readable variant kept for comparison

## Install

Add to `.vscode/settings.json` or user settings:

```json
{
  "markdown.styles": [
    "${workspaceFolder}/themes/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css"
  ],
  "markdown.preview.frontMatter": "hide"
}
```

Set `markdown.preview.frontMatter` to `"show"` if you want YAML front matter rendered as a muted metadata table (styled by the theme).

### Markdown Preview Enhanced (global)

Paste the entire contents of [themes/vscode-preview/mpe/global-cpp-modern.less](themes/vscode-preview/mpe/global-cpp-modern.less) into `%USERPROFILE%\.crossnote\style.less` via **Customize CSS (Global)**. See [themes/vscode-preview/mpe/README.md](themes/vscode-preview/mpe/README.md).

## Notes

- Scoped to `.markdown-body` (VS Code), `.markdown-preview` (MPE), and `body` (fallback).
- Task lists use GFM classes: `ul.contains-task-list`, `li.task-list-item`.
- Close and reopen preview after editing the CSS file.

## Inline equivalent

For Cursor inline `Preview | Markdown`, use [themes/cursor-inline/original/cpp-modern/](../../cursor-inline/original/cpp-modern/).
