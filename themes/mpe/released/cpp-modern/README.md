# C++ Modern (released)

Ready-to-paste MPE package for the recommended dark C++ Modern theme.

## Install

1. Paste the entire [`style.less`](style.less) into `%USERPROFILE%\.crossnote\style.less` via **Markdown Preview Enhanced: Customize CSS (Global)**.
2. Merge every field from [`mermaid-config.json`](mermaid-config.json) into `mermaidConfig` in `%USERPROFILE%\.crossnote\config.js` (keep `"startOnLoad": false`). That JSON is the **contents** of `mermaidConfig`, not a whole `config.js`.
3. Optional settings:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

Full steps: [themes/mpe/README.md](../../README.md). Mermaid deep dive: [docs/mermaid-styling.md](../../../../docs/mermaid-styling.md).

## Source

Author CSS in [`addons/vscode-preview/original/cpp-modern/`](../../../addons/vscode-preview/original/cpp-modern/), then rebuild:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Do not hand-edit generated `style.less`.
