# MPE theme style reference

Reference for building Markdown Preview Enhanced (MPE) themes. Canonical **released dark** baseline: [C++ Modern](../themes/mpe/released/cpp-modern/).

| Artifact | Path |
| -------- | ---- |
| Source CSS (edit here) | [`themes/addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css`](../themes/addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css) |
| Generated package CSS | [`themes/mpe/released/cpp-modern/style.less`](../themes/mpe/released/cpp-modern/style.less) |
| Crossnote config | [`themes/mpe/released/cpp-modern/config.js`](../themes/mpe/released/cpp-modern/config.js) — paste over `%USERPROFILE%\.crossnote\config.js` |
| Mermaid SVG deep dive | [`mermaid-styling.md`](mermaid-styling.md) |

**Dark** is fully documented below. **Light** is the experimental peer with the same selector inventory and role map (paper hex) — see §7.

---

## 1. How packages are built

```text
original/<family>/vscode-preview-*.css
        │
        ▼  build-mpe-global.mjs
        │  (+ _scope.css + _syntax-tokens.css [+ optional layers])
        ▼
themes/mpe/<tier>/<slug>/style.less
themes/mpe/released/<slug>/config.js   ← only for released
```

- Always style under **three scopes**: `.markdown-body` (built-in VS Code preview), `.markdown-preview` (MPE / Crossnote), `body` (iframe fallback). In this doc, “scope” means that triple unless noted.
- Do **not** hand-edit generated `style.less`. Rebuild after source edits:

```bash
node themes/addons/vscode-preview/build-mpe-global.mjs
```

- Install: paste `style.less` into Crossnote global CSS; replace `config.js` with the package `config.js` (paste as-is).

---

## 2. Dark — palette roles (C++ Modern)

Readability rules used by this family:

1. **Surfaces** stay near Neutral Dark+ (`#1f1f1f` page, `#2b2b2b` / `#333333` panels). Body text is muted gray (`#cccccc`), not pure white — white is reserved for diagram labels and strong UI chrome.
2. **Accents** split by job: teal (`#4ec9b0`) = hierarchy / bullets / code accent bar; blue (`#569cd6`) = secondary hierarchy / borders; brighter blue (`#4daafc`) = links only.
3. **Code tokens** reuse VS Code Dark+ hues via `--md-syntax-*`. Never put gray “chip” backgrounds on tokens — `_scope.css` strips them so only color carries meaning.
4. **Mermaid** reuses the same hex roles (page bg, node fill, blue stroke, teal accent) so diagrams feel like the same theme.

### Role → hex → typical token

| Role | Dark hex | Token(s) |
| ---- | -------- | -------- |
| Page background | `#1f1f1f` | `--cpp-bg`, `--md-bg`; Mermaid `background` |
| Body / heading text | `#cccccc` | `--cpp-fg`, `--md-text` |
| Muted / meta | `#9d9d9d` | `--cpp-muted` |
| Panel (blockquote, `pre`, details) | `#2b2b2b` | `--cpp-panel`, `--md-panel` |
| Raised panel (table header) | `#333333` | `--cpp-panel-raised` |
| Hard border | `#3c3c3c` | `--cpp-border`, code bg |
| Subtle border | mix of fg | `--cpp-border-subtle`, `--md-border` |
| Primary accent (teal) | `#4ec9b0` | `--cpp-primary`; Mermaid `arrowheadColor`, `titleColor`, `tertiaryBorderColor` |
| Secondary accent (blue) | `#569cd6` | `--cpp-secondary`; Mermaid `primaryBorderColor`, `nodeBorder` |
| Link | `#4daafc` / hover `#6cb6ff` | `--cpp-link`, `--cpp-link-hover`, `--md-accent` |
| Checkbox accent | `#0078d4` | `--cpp-accent` |
| Inline code text | `#9cdcfe` | `--cpp-code-inline`, `--md-code-text` |
| Fenced code default text | `#d4d4d4` | `--cpp-code-fg` |
| Diagram node fill | `#2d2d30` | Mermaid `primaryColor`, `mainBkg`, … |
| Diagram alt surface | `#252526` | Mermaid `tertiaryColor`, ER even rows |

Exhaustive token + Mermaid hex tables (including every unique color): [`themes/mpe/released/cpp-modern/README.md`](../themes/mpe/released/cpp-modern/README.md). Other families: README under each `original/<family>/` and each MPE package folder. Regenerate with `node scripts/update-palette-readmes.mjs`.

---

## 3. Dark — CSS custom properties catalog

Declared on `.markdown-body, .markdown-preview, body`.

### Surfaces and chrome (`--cpp-*`)

| Variable | Dark value | Purpose | Consumed by |
| -------- | ---------- | ------- | ----------- |
| `--cpp-bg` | `var(--vscode-editor-background, #1f1f1f)` | Page background | base, `--md-bg` |
| `--cpp-fg` | `var(--vscode-editor-foreground, #cccccc)` | Default prose / h1 | `p`, `strong`, h1, tables |
| `--cpp-muted` | `var(--vscode-descriptionForeground, #9d9d9d)` | De-emphasized text | h5/h6, `del`, front matter |
| `--cpp-panel` | `#2b2b2b` | Recessed surfaces | `blockquote`, `pre`, `details` |
| `--cpp-panel-raised` | `#333333` | Slightly lighter chrome | `th` |
| `--cpp-border` | `#3c3c3c` | Visible edges | code, tables, hr, images, details |
| `--cpp-border-subtle` | `color-mix(… fg 12%)` | Soft separators | `--md-border` |
| `--cpp-primary` | `#4ec9b0` | Main accent | h1 underline, h2, list bullets, ol numbers, `pre` left bar |
| `--cpp-secondary` | `#569cd6` | Secondary accent | h3/h4 mixes, nested bullets, blockquote border, `summary` |
| `--cpp-link` | `#4daafc` | Links | `a` |
| `--cpp-link-hover` | `#6cb6ff` | Link hover | `a:hover` |
| `--cpp-accent` | `#0078d4` | Controls | checkbox `accent-color` |
| `--cpp-code-fg` | `#d4d4d4` | Default code text in fences | `pre code` |
| `--cpp-code-inline` | `#9cdcfe` | Inline `` `code` `` | `:not(pre) > code` |
| `--cpp-code-bg` | `#3c3c3c` | Inline code chip bg | `:not(pre) > code` |
| `--cpp-syntax-string` | `#ce9178` | Optional helper class | `.cpp-string` |
| `--cpp-syntax-number` | `#b5cea8` | Optional helper class | `.cpp-number` |
| `--cpp-syntax-comment` | `#6a9955` | Optional helper class | `.cpp-comment` |

### Semantic aliases (`--md-*`)

| Variable | Maps to | Purpose |
| -------- | ------- | ------- |
| `--md-bg` | `--cpp-bg` | Page bg alias for shared rules |
| `--md-text` | `--cpp-fg` | Body color alias |
| `--md-border` | `--cpp-border-subtle` | Generic border |
| `--md-accent` | `--cpp-link` | Generic accent |
| `--md-panel` | `--cpp-panel` | Panel alias |
| `--md-code-bg` | `--cpp-code-bg` | Code surface |
| `--md-code-text` | `--cpp-code-inline` | Inline code color |
| `--md-font-body` | VS Code / Segoe UI stack | Prose font |
| `--md-font-mono` | Cascadia / Consolas stack | Code + ol markers |
| `--md-line-height` | `1.8` | Body leading |
| `--md-padding` | `22px 30px` | Preview padding |

### Prism / hljs tokens (`--md-syntax-*`)

Used only by [`_syntax-tokens.css`](../themes/addons/vscode-preview/_syntax-tokens.css) (appended at build). Color + weight/style only — **no backgrounds**.

| Variable | Dark hex | Typical Prism / meaning |
| -------- | -------- | ----------------------- |
| `--md-syntax-comment` | `#6a9955` | comments, prolog, doctype |
| `--md-syntax-keyword` | `#569cd6` | keywords |
| `--md-syntax-control` | `#c586c0` | control-flow token (when present) |
| `--md-syntax-type` | `#4ec9b0` | types, builtins, class-name |
| `--md-syntax-function` | `#dcdcaa` | functions |
| `--md-syntax-string` | `#ce9178` | strings, chars, regex |
| `--md-syntax-number` | `#b5cea8` | numbers, booleans |
| `--md-syntax-variable` | `#9cdcfe` | variables, params, properties |
| `--md-syntax-constant` | `#4fc1ff` | constants, symbols |
| `--md-syntax-preprocessor` | `#569cd6` | macros, directives |
| `--md-syntax-operator` | `#d4d4d4` | operators |
| `--md-syntax-punctuation` | `#d4d4d4` | punctuation |
| `--md-syntax-deleted` | `#f44747` | diff deleted |
| `--md-syntax-inserted` | `#89d185` | diff inserted |

---

## 4. Dark — selector / section inventory

Notation: selectors are abbreviated; in CSS they are repeated under `.markdown-body`, `.markdown-preview`, and often `body`.

### Base

| Selector | Key properties | Tokens | Why |
| -------- | -------------- | ------ | --- |
| scope root | `color`, `background`, `font-family`, `line-height` | `--md-*` | Preview canvas |
| `.markdown-body` / `.markdown-preview` | `padding` | `--md-padding` | Readable margins |
| `p, ul, ol, blockquote, table, pre, hr` | bottom margin `1.15rem` | — | Vertical rhythm |
| `p` | `color` | `--cpp-fg` | Prose |

### Headings

Shared: `font-weight: 600`, `line-height: 1.3`, top margin `1.75em`. Hierarchy stays in the **blue–teal family** (no rainbow headings).

| Level | Color / chrome | Why |
| ----- | -------------- | --- |
| `h1` | `--cpp-fg` + 2px `--cpp-primary` underline | Title = body text; accent only on rule |
| `h2` | `--cpp-primary` + 1px `--cpp-border` underline | Strongest colored heading |
| `h3` | mix `secondary` 80% + `fg` | Softer blue |
| `h4` | mix `secondary` 55% + `fg` | Further muted |
| `h5` | `--cpp-muted`, uppercase, tracking | Section labels |
| `h6` | `--cpp-muted` | Least emphasis |

### Inline text

| Selector | Behavior |
| -------- | -------- |
| `strong` | `--cpp-fg`, weight 700 |
| `em` | mix primary into fg (teal tint), italic |
| `del` | muted + border-colored decoration |
| `a` | `--cpp-link`, soft underline; hover → `--cpp-link-hover` |

### Lists

| Selector / pattern | Behavior |
| ------------------ | -------- |
| `ul` | `list-style: none`; custom `::before` bullet |
| top-level bullet | 6px disc, `--cpp-primary` |
| nested `ul` bullet | smaller, `--cpp-secondary` |
| deeper nest | mix secondary + muted |
| `ol` | CSS counter `cpp-ol`; mono number in `--cpp-primary` |
| `li.task-list-item` | no custom bullet (`::before` hidden) |
| `input[type=checkbox]` | `accent-color: --cpp-accent` |

Exclude GFM task lists from bullet rules via `:not(.contains-task-list)` / `:not(.task-list-item)`.

### Blockquotes

| Property | Value | Why |
| -------- | ----- | --- |
| left border | 3px `--cpp-secondary` | Callout edge |
| background | `--cpp-panel` | Recessed note |
| color | mix fg + muted | Slightly softer than body |
| `font-style` | `normal` | Avoid italic walls of text |

### Inline code

`:not(pre) > code` — padding, radius, mono font, `--cpp-code-inline` on `--cpp-code-bg` with `--cpp-border`. Distinct from fenced blocks so prose snippets stay chip-like.

### Code blocks (`pre`)

| Rule | Why |
| ---- | --- |
| Panel bg `--cpp-panel`, border + **3px left `--cpp-primary`** | Matches “technical” fence chrome |
| `pre::before { display: none }` | Kill theme decoration bars if any |
| `pre code` transparent bg, `--cpp-code-fg` | Token colors paint on clean panel |
| Extra padding from `_scope` (`+ 12px` left) | Room for accent bar |

### Tables

| Part | Style |
| ---- | ----- |
| `table` | full width, collapsed borders, `--cpp-border` |
| `th` | `--cpp-panel-raised`, `--cpp-fg`, bottom 2px `--cpp-primary` |
| even `td` | mix panel into bg |
| `tr:hover td` | 5% primary tint |
| last row | no bottom border |

### Divider / images / details

| Element | Style |
| ------- | ----- |
| `hr` | 1px `--cpp-border`, large vertical margin |
| `img` | `max-width: 100%`, radius, border |
| `details` | panel + border |
| `summary` | `--cpp-secondary`, bold, pointer |

### Optional helper classes

For ad-hoc HTML in Markdown (not Prism):

- `.cpp-string` → `--cpp-syntax-string`
- `.cpp-number` → `--cpp-syntax-number`
- `.cpp-comment` → `--cpp-syntax-comment`

### Task lists & front matter

Primarily from shared `_scope.css` (also inlined into family file when copied historically):

| Class | Role |
| ----- | ---- |
| `ul.contains-task-list` | GFM checklist container; no list markers |
| `li.task-list-item` | Checklist row; suppress custom bullets |
| `.front-matter` | YAML metadata block (VS Code `.markdown-body` and MPE `.markdown-preview`) — muted text, left border, soft panel |

### Fenced-block chip strip (`_scope`)

Critical for readability: MPE `codeBlockTheme` paints gray backgrounds on operators. Rules force `pre *` (and high-specificity `.markdown-preview.markdown-preview pre …`) to **transparent backgrounds**, no shadows/borders on tokens. Diff helpers: `[data-diff-start|end] { display: contents }`.

---

## 5. Shared layers (appended by build)

### `_scope.css`

- Task-list / front-matter helpers (above)
- Fence padding + chip stripping
- Does **not** set syntax colors

### `_syntax-tokens.css`

Maps highlighter classes → `--md-syntax-*`:

| Prism `.token.*` | Variable |
| ---------------- | -------- |
| `comment`, `prolog`, `doctype`, `cdata` | `--md-syntax-comment` (+ italic) |
| `keyword` | `--md-syntax-keyword` (+ weight 600) |
| `control` | `--md-syntax-control` |
| `operator` / `punctuation` | operator / punctuation vars |
| `string`, `char`, `attr-value`, `regex` | `--md-syntax-string` |
| `number`, `boolean` | `--md-syntax-number` |
| `function` | `--md-syntax-function` |
| `class-name`, `builtin` | `--md-syntax-type` |
| `constant`, `symbol` | `--md-syntax-constant` |
| `variable`, `parameter`, `property`, `attr-name` | `--md-syntax-variable` |
| `macro`, `directive`, `directive-hash`, `important` | `--md-syntax-preprocessor` |
| `deleted` / `inserted` | deleted / inserted |

Highlight.js fallbacks: `.hljs-comment`, `.hljs-keyword`, `.hljs-string`, `.hljs-number`, `.hljs-title`, `.hljs-type`, `.hljs-built_in`, `.hljs-variable`, `.hljs-meta`, `.hljs-operator`, etc. → same variables.

Optional build flags (not used by released cpp-modern dark): `appendDiagramTokens` (`_diagram-tokens.css`), `appendSyntaxRefine` (Graphite Code refine).

---

## 6. Dark — Crossnote `config.js`

Paste-ready script: [`config.js`](../themes/mpe/released/cpp-modern/config.js).

### Top level

| Key | Role |
| --- | ---- |
| `katexConfig` | KaTeX macros (default empty) |
| `mathjaxConfig` | MathJax tex/options/loader (enrichment off) |
| `mermaidConfig` | All Mermaid theming + layout |

Install: paste the package [`config.js`](../themes/mpe/released/cpp-modern/config.js) over `%USERPROFILE%\.crossnote\config.js`. Keep `"startOnLoad": false` inside `mermaidConfig`. Settings: `"markdown-preview-enhanced.mermaidTheme": "default"` (not `"dark"`).

### Preview ↔ Mermaid color map

| Preview role | Mermaid `themeVariables` (examples) |
| ------------ | ----------------------------------- |
| Page `#1f1f1f` | `background`, `pieStrokeColor` |
| Node / actor fill `#2d2d30` | `primaryColor`, `mainBkg`, `actorBkg`, `stateBkg`, ER odd |
| Alt surface `#252526` | `tertiaryColor`, ER even, `excludeBkgColor` |
| Raised `#333333` | `secondaryColor`, `commitLabelBackground` |
| Blue stroke `#569cd6` | `primaryBorderColor`, `nodeBorder`, `actorBorder`, `pie1`, `git0`, `taskBkgColor` |
| Teal accent `#4ec9b0` | `arrowheadColor`, `clusterBorder`, `titleColor`, `signalColor`, `pie2`, `git1` |
| Edge gray `#b0b0b0` | `lineColor`, `transitionColor` |
| Label text | mostly `#ffffff` / `#e8e8e8` on dark fills |
| Transparent labels | `edgeLabelBackground`, `labelBackground`, `labelBackgroundColor`, `relationLabelBackground` |

Also: pie/git/gantt/mindmap/quadrant/journey palettes reuse syntax hues (`#6a9955`, `#ce9178`, `#c586c0`, `#dcdcaa`, …) so charts match code tokens.

### `themeCSS` groups (why they exist)

Variables alone often lose to Mermaid’s baked SVG CSS / inline HSL. Groups in `themeCSS`:

| Group | Purpose |
| ----- | ------- |
| ER `.row-rect-odd/even` + legacy `.er.attributeBox*` | Zebra attribute rows on dark |
| Entity / relationship labels | Readable ER text; hide opaque label boxes |
| `.edgeLabel .background` | Dark pill behind edge words when needed |
| Gantt `.section*` / `.task*` | Force section/task fills when vars ignored |
| Pie title/slice + legend text | White labels on slices |
| Journey `.task-type-*`, `.actor-*`, `.face` | Section fills + actor dots + faces |
| Mindmap `.section-N` / `.section-root` | Dark nodes + white labels |
| Quadrant / data-point text | Light axis and point labels |

Layout tweaks (not colors): `flowchart.htmlLabels: false`, spacing; `gantt.todayMarker: "off"`; journey margins. Details: [`mermaid-styling.md`](mermaid-styling.md).

---

## 7. Light — C++ Modern peer

| Status | Detail |
| ------ | ------ |
| Package | Experimental: [`themes/mpe/experimental/cpp-modern-light/`](../themes/mpe/experimental/cpp-modern-light/) |
| Source | [`vscode-preview-cpp-modern-light.css`](../themes/addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern-light.css) |
| Crossnote | **No** released `config.js` yet (`darkMode: false` when promoting) |

Same selector / role inventory as dark (§2–§5). Hex values are **hardcoded** for paper contrast — do **not** bind `--cpp-bg` / `--cpp-fg` to `--vscode-editor-*`, or a dark IDE theme produces a dark page with light panels (illegible blockquotes and inline code).

### Role → hex (light)

| Role | Light hex | Token(s) |
| ---- | --------- | -------- |
| Page background | `#f7f9fc` | `--cpp-bg`, `--md-bg` |
| Body / heading text | `#1f2937` | `--cpp-fg`, `--md-text` |
| Muted / meta | `#64748b` | `--cpp-muted` |
| Panel | `#eef2f7` | `--cpp-panel`, `--md-panel` |
| Raised panel | `#ffffff` | `--cpp-panel-raised` |
| Hard border | `#d0d7e2` | `--cpp-border` |
| Primary accent (teal) | `#0f766e` | `--cpp-primary` |
| Secondary accent (blue) | `#1d4ed8` | `--cpp-secondary` |
| Link | `#1d4ed8` / hover `#1e40af` | `--cpp-link`, `--cpp-link-hover` |
| Checkbox accent | `#2563eb` | `--cpp-accent` |
| Inline code text | `#1d4ed8` | `--cpp-code-inline` |
| Fenced code default text | `#1e293b` | `--cpp-code-fg` |
| Inline code chip bg | `#e2e8f0` | `--cpp-code-bg` |

Exhaustive tables: package / family README (regen: `node scripts/update-palette-readmes.mjs`).

---

## 8. Recipe: new theme from this reference

1. **Copy** nearest family under `original/<family>/` (cpp-modern for technical dark).
2. **Retune roles, not random hex**: change `--cpp-*` surfaces/accents first; keep the same jobs (primary = hierarchy, secondary = secondary chrome, link = links only).
3. **Align `--md-syntax-*`** to the new accent set (or keep Dark+ if the family is “same code, new chrome”).
4. **Register** in `build-mpe-global.mjs` with `tier: "experimental"`; rebuild.
5. **Check** `examples/theme-preview.md`, `code-showcase.md` (C++ fences), and lists/tables contrast.
6. **Promote to released**: copy `released/cpp-modern/config.js`, set palette hex to match preview roles, keep transparent label backgrounds + ER `themeCSS` patterns; verify `examples/mermaid-showcase.md` in MPE.
7. **Commit** the theme unit; update package / index READMEs.

Do not invent parallel token systems or duplicate `_syntax-tokens.css` into the family file. Prefer `config.js` for Mermaid over fighting SVG from `style.less`.
