---
name: create-mpe-theme
description: >-
  Create or extend MPE (Markdown Preview Enhanced) theme families as vscode-preview
  CSS sources, register them in build-mpe-global.mjs, and rebuild paste-ready
  global-*.less bundles. Use when adding a new MPE theme, style.less bundle,
  vscode-preview CSS family, dark/light variant, or when the user asks for a new
  preview theme.
---

# Create MPE theme

## Workflow

Copy this checklist and track progress:

```
Theme progress:
- [ ] 1. Slug, dark/light, flags
- [ ] 2. Copy nearest family template
- [ ] 3. Style surfaces / type / code
- [ ] 4. Register variants in build
- [ ] 5. Rebuild globals
- [ ] 6. Update READMEs
- [ ] 7. Tell user how to install in MPE
```

### 1. Decide scope

- **slug**: kebab-case family name (e.g. `beacon`, `matcha`)
- **pair**: dark (`vscode-preview-<slug>.css`) and usually light (`-light.css`)
- **flags**: `appendDiagramTokens` only for Mermaid CSS overlays; `appendSyntaxRefine` only when copying graphite-code-style C++ refine

### 2. Author source CSS

Edit under `themes/addons/vscode-preview/original/<family>/`.

Copy the closest existing family (beacon / matcha / meridian are good baselines). Keep selectors on `.markdown-body`, `.markdown-preview`, `body`. Do **not** duplicate `_syntax-tokens.css` wholesale.

Optional: iterate in `preview/` first, then hand off into `original/`.

### 3. Register and build

Add entries to `variants` in `themes/addons/vscode-preview/build-mpe-global.mjs` (see [reference.md](reference.md)).

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Output: `themes/mpe/global-<slug>.less` (+ light/variants). Never treat generated `.less` as the long-term edit surface.

### 4. Docs

Update when adding a family or named variant:

- `themes/README.md`
- `themes/mpe/README.md`
- `themes/addons/vscode-preview/original/<family>/README.md`

### 5. Install hint for the user

1. Command Palette → **Markdown Preview Enhanced: Customize CSS (Global)**
2. Replace `%USERPROFILE%\.crossnote\style.less` with the full `themes/mpe/global-*.less`
3. Settings: `"markdown-preview-enhanced.previewTheme": "none.css"`, `"markdown-preview-enhanced.codeBlockTheme": "auto.css"`

For Mermaid colors, use the `style-mermaid-mpe` skill / `mermaid-config-*.json` — not CSS alone.

## Additional resources

- Naming, registry snippet, exceptions: [reference.md](reference.md)
- Install detail: `themes/mpe/README.md`
