---
name: create-mpe-theme
description: >-
  Create or extend MPE (Markdown Preview Enhanced) theme families as vscode-preview
  CSS sources, register them in build-mpe-global.mjs with tier experimental|released,
  and rebuild paste-ready packages under themes/mpe/released|experimental/<slug>/.
  Use when adding a new MPE theme, style.less package, vscode-preview CSS family,
  dark/light variant, or when the user asks for a new preview theme.
---

# Create MPE theme

Before authoring a new family, read [`docs/mpe-theme-reference.md`](../../../docs/mpe-theme-reference.md) (dark C++ Modern token and selector inventory).

## Workflow

Copy this checklist and track progress:

```
Theme progress:
- [ ] 1. Slug, dark/light, flags (tier = experimental)
- [ ] 2. Copy nearest family template
- [ ] 3. Style surfaces / type / code
- [ ] 4. Register variants in build
- [ ] 5. Rebuild packages
- [ ] 6. Update READMEs
- [ ] 7. Commit this theme unit
- [ ] 8. Tell user how to install in MPE
```

### 1. Decide scope

- **slug**: kebab-case package name (e.g. for light: `beacon-light`)
- **tier**: always **`experimental`** for new work (promote later with Mermaid JSON)
- **pair**: dark (`vscode-preview-<slug>.css`) and usually light (`-light.css`)
- **flags**: `appendDiagramTokens` only for Mermaid CSS overlays; `appendSyntaxRefine` only when copying graphite-code-style C++ refine
- **cursor-inline**: do **not** create unless the user asks (legacy add-on)

### 2. Author source CSS

Edit under `themes/addons/vscode-preview/original/<family>/`.

Copy the closest existing family (beacon / matcha / meridian are good baselines). Keep selectors on `.markdown-body`, `.markdown-preview`, `body`. Do **not** duplicate `_syntax-tokens.css` wholesale.

Optional: iterate in `preview/` first, then hand off into `original/`.

### 3. Register and build

Add entries to `variants` in `themes/addons/vscode-preview/build-mpe-global.mjs` (see [reference.md](reference.md)).

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

Output: `themes/mpe/experimental/<slug>/style.less` (+ light/variants). Never treat generated `style.less` as the long-term edit surface.

### 4. Docs

Update when adding a family or named variant:

- `themes/README.md`
- `themes/mpe/README.md` (experimental table)
- `themes/addons/vscode-preview/original/<family>/README.md`
- Mapping row in `themes/addons/vscode-preview/README.md` if useful

### 5. Commit this theme unit

After CSS + registry + rebuild + README updates for the new family/variant are done, **create a git commit** (do not wait for the user). Message focuses on why (e.g. “Add experimental Beacon MPE package.”). Follow the repo git protocol: status/diff/log, stage only theme files, HEREDOC message, no push unless asked. See `repo-theme-map` — commit after major changes.

Do **not** commit half-finished color experiments; finish the checklist through step 6 first, then commit.

### 6. Install hint for the user

1. Command Palette → **Markdown Preview Enhanced: Customize CSS (Global)**
2. Replace `%USERPROFILE%\.crossnote\style.less` with the full package `style.less`
3. Settings: `"markdown-preview-enhanced.previewTheme": "none.css"`, `"markdown-preview-enhanced.codeBlockTheme": "auto.css"`

For Mermaid on **released** packages, use the `style-mermaid-mpe` skill / package `config.js` — not CSS alone. Experimental packages may omit Crossnote config until promotion.

## Promote to released

See [reference.md](reference.md#promote-to-released). After promotion steps succeed, **commit** that promotion as its own unit.

## Additional resources

- Naming, registry snippet, exceptions: [reference.md](reference.md)
- Install detail: `themes/mpe/README.md`
