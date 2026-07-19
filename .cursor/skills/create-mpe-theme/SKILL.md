---
name: create-mpe-theme
description: >-
  Create or extend MPE (Markdown Preview Enhanced) theme families as vscode-preview
  CSS sources, register them in build-mpe-global.mjs with tier experimental|released,
  and rebuild paste-ready packages under themes/mpe/released|experimental/<slug>/.
  Use when adding a new MPE theme, style.less package, vscode-preview CSS family,
  dark/light variant, or when the user asks for a new preview theme. For a light
  peer of an existing dark only, prefer create-mpe-light-peer.
---

# Create MPE theme

Before authoring a new family, read [`docs/mpe-theme-reference.md`](../../../docs/mpe-theme-reference.md) §2–§9 (dark inventory, light peer, **§8 contrast lessons**).

If the user only wants a **light peer of an existing dark** family, switch to skill [`create-mpe-light-peer`](../create-mpe-light-peer/SKILL.md).

## Workflow

Copy this checklist and track progress:

```
Theme progress:
- [ ] 1. Slug, dark/light, flags (tier = experimental)
- [ ] 2. Copy nearest family template
- [ ] 3. Style surfaces / type / code (contrast audit §8)
- [ ] 4. Register variants in build
- [ ] 5. Rebuild packages + palette READMEs
- [ ] 6. Update READMEs
- [ ] 7. Commit this theme unit
- [ ] 8. Tell user how to install in MPE
```

### 1. Decide scope

- **slug**: kebab-case package name (e.g. for light: `beacon-light`)
- **tier**: always **`experimental`** for new work (promote later with full `config.js`)
- **pair**: dark (`vscode-preview-<slug>.css`) and usually light (`-light.css`)
- **flags**: `appendDiagramTokens` only for Mermaid CSS overlays; `appendSyntaxRefine` only when copying graphite-code-style C++ refine
- **cursor-inline**: do **not** create unless the user asks (legacy add-on)

### 2. Author source CSS

Edit under `themes/addons/vscode-preview/original/<family>/`.

Copy the closest existing family (cpp-modern / cpp-modern-light for technical; beacon / matcha / meridian also fine). Keep selectors on `.markdown-body`, `.markdown-preview`, `body`. Do **not** duplicate `_syntax-tokens.css` wholesale.

**Contrast (required):**

- Light: hardcode `--*-bg` / `--*-fg` / `--*-muted` — never bind to `--vscode-editor-*`
- Never light text on light panels or dark text on dark panels (blockquote, inline code, Mermaid labels)
- See §8 and rule `mpe-contrast`

Optional: iterate in `preview/` first, then hand off into `original/`.

### 3. Register and build

Add entries to `variants` in `themes/addons/vscode-preview/build-mpe-global.mjs` (see [reference.md](reference.md)).

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
node scripts/update-palette-readmes.mjs
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
- Contrast / dark vs light: [`docs/mpe-theme-reference.md`](../../../docs/mpe-theme-reference.md) §8
- Install detail: `themes/mpe/README.md`
