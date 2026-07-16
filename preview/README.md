# Preview Assets

Files in this directory are for **local visual review and offline theme iteration**.

- `index.html` renders example fixtures from `examples/` in the browser.
- `fixtures.js` embeds the same markdown for offline `file://` preview.
- `build-fixtures.mjs` regenerates `fixtures.js` after example files change.
- `markdown.css` styles the browser preview page.
- `cursor-preview.css` styles Cursor's side Markdown preview (`Ctrl+K V`).
- `index.html` can load Cursor inline theme files at runtime via **Load CSS** or drag-and-drop.

## Tabs

The preview page exposes one tab per example file: Theme Preview, Basic, Extended, Checklists, Code, Docs, and Long Form.

When opened over HTTP, the page loads live markdown from `examples/`. When opened directly as `file://`, it falls back to the embedded copy in `fixtures.js`.

Regenerate embedded fixtures after editing examples:

```bash
node preview/build-fixtures.mjs
```

Use these files when you want to:

- sanity-check typography, spacing, and layout without opening VS Code
- compare example fixtures quickly in a browser
- iterate on general Markdown rendering ideas before updating the main MPE bundles

This is a **secondary tool** in the repository. The main daily workflow is documented in the root [README.md](../README.md) and in [themes/vscode-preview/mpe/README.md](../themes/vscode-preview/mpe/README.md).
