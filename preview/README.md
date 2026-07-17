# MPE Theme Workbench

Files in this directory provide a **browser-based MPE-first theme workbench** for local visual review, style iteration, and session handoff.

## Purpose

Use `preview/index.html` when you want to:

- tune an MPE-oriented Markdown style with a left control panel and right live preview
- compare changes against the repository fixtures without opening VS Code
- capture the result as generated CSS, structured tokens, and a short handoff summary
- refine details with raw CSS overrides before turning the session into a real MPE bundle

## Files

- `index.html` - two-pane workbench shell
- `app.js` - preview state, preset logic, runtime CSS generation, and export actions
- `markdown.css` - workbench layout and browser UI styling
- `fixtures.js` - embedded markdown for offline `file://` use
- `build-fixtures.mjs` - regenerates `fixtures.js` from `examples/`
- `cursor-preview.css` - minimal generic side-preview CSS kept as a secondary reference

## Workflow

1. Open `preview/index.html` in a browser.
2. Pick a base family (`C++ Modern` or `Lumina`).
3. Choose a fixture from `examples/`.
4. Adjust colors, typography, quotes, tables, code, and other Markdown groups in the left panel.
5. Add raw CSS in **Advanced overrides** when you need finer control.
6. Copy or download the generated CSS / JSON / summary as the handoff package for a new MPE variant.

## Export And Handoff

The workbench produces three useful outputs:

- **Generated MPE CSS** - a starter stylesheet targeting `.markdown-body`, `.markdown-preview`, and `body`
- **Session tokens JSON** - structured values for colors, typography, and component groups
- **Handoff summary** - concise notes you can pass back into chat to request a new MPE bundle or a refined variant

If you want me to turn a workbench session into a new style later, send back at least one of these:

- the generated CSS
- the JSON export
- the handoff summary plus any extra intent

## Fixture Loading

When opened over HTTP, the page loads live markdown from `examples/`. When opened directly as `file://`, it falls back to the embedded copy in `fixtures.js`.

Regenerate embedded fixtures after editing examples:

```bash
node preview/build-fixtures.mjs
```

**Mermaid diagrams** do not render in this workbench — they appear as source code blocks. Test diagram styling in MPE with `examples/mermaid-showcase.md` and `global-cpp-modern-v3-diagrams.less`.

## Relationship To The Main Workflow

This directory is a **support tool** for the main setup, not a replacement for it.

- Primary workflow: [README.md](../README.md)
- Main MPE bundles: [themes/mpe/README.md](../themes/mpe/README.md)
- Secondary built-in preview path: [themes/addons/vscode-preview/README.md](../themes/addons/vscode-preview/README.md)
