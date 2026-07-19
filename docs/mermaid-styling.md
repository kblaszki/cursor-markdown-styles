# Mermaid diagram styling

How Markdown Preview Enhanced (MPE) / Crossnote paints Mermaid SVGs, what ends up in the DOM, and how to theme diagrams for **dark and light** previews (C++ Modern).

Fixture: [`examples/mermaid-showcase.md`](../examples/mermaid-showcase.md)  
Config source of truth (dark): [`themes/mpe/released/cpp-modern/config.js`](../themes/mpe/released/cpp-modern/config.js)  
Light peer: [`themes/mpe/released/cpp-modern-light/config.js`](../themes/mpe/released/cpp-modern-light/config.js) (`darkMode: false`)  
Setup steps: [`themes/mpe/README.md` — Configure Mermaid](../themes/mpe/README.md#configure-mermaid-open-config-script)  
Contrast lessons (preview + Mermaid): [`mpe-theme-reference.md` §8](mpe-theme-reference.md#8-dark-vs-light--lessons-and-authoring-checklist)

## How MPE renders a diagram

1. The markdown fence `` ```mermaid `` becomes a preview node: `<div class="mermaid">…</div>`.
2. Mermaid generates an SVG with a unique id, e.g. `id="mermaid-1784296037433-0"`.
3. **All theme colors are baked into a `<style>` block inside that SVG**, scoped to the diagram id:

```css
#mermaid-…-0 {
  font-family: Segoe UI, Inter, system-ui, sans-serif;
  font-size: 14px;
  fill: #ffffff;
}
#mermaid-…-0 .node rect,
#mermaid-…-0 .node circle,
#mermaid-…-0 .node polygon,
#mermaid-…-0 .node path {
  fill: #2d2d30;
  stroke: #569cd6;
}
#mermaid-…-0 .flowchart-link {
  stroke: #b0b0b0;
}
/* …plus themeCSS rules appended below… */
```

4. Geometry (`<path>`, `<rect>`, markers) lives under `<g class="root">` with groups like `.nodes`, `.edgePaths`, `.edgeLabels`, `.clusters`.

Because fills/strokes are decided at **init time**, external `style.less` often loses to Mermaid’s embedded rules (and to inline `fill="hsl(…)"` on some paths). Prefer `mermaidConfig` in `%USERPROFILE%\.crossnote\config.js`.

## Three styling layers

| Layer | Where | Wins when |
| ----- | ----- | --------- |
| `theme` + `themeVariables` | `mermaidConfig` | Most node/edge/actor colors across diagram types |
| `themeCSS` | `mermaidConfig` string | Selectors Mermaid does not expose as variables (ER zebra rows, label boxes) |
| Preview CSS (`style.less`) | Crossnote | Page chrome; optional `--md-diagram-*` tokens in v3 bundles — **secondary** to config |

Recommended VS Code setting:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default"
}
```

Use `"default"`, not `"dark"`. The built-in dark Mermaid CSS often restores light-gray edge-label backgrounds.

## Color tokens (C++ Modern)

Mapped from a live preview with `theme: "base"` and `darkMode: true`:

| Role | Hex | Typical CSS / variable |
| ---- | --- | ---------------------- |
| Page / diagram bg | `#1f1f1f` | `background` |
| Node / actor fill | `#2d2d30` | `primaryColor`, `mainBkg`, `actorBkg` |
| Alt / tertiary surface | `#252526` | `tertiaryColor`, ER even rows |
| Cluster fill | `#2f3634` | `clusterBkg` |
| Primary stroke (VS Blue) | `#569cd6` | `primaryBorderColor`, `nodeBorder` |
| Accent / arrows / titles (Teal) | `#4ec9b0` | `arrowheadColor`, `clusterBorder`, `titleColor`, sequence signals |
| Edges / transitions | `#b0b0b0` | `lineColor`, `transitionColor` |
| Text | `#ffffff` | `primaryTextColor`, `nodeTextColor`, labels |

Pie / git branch accents reuse the same palette (`pie1`…`pie3`, `git0`…`git3`).

## SVG anatomy by diagram type

Observed from the showcase preview HTML.

### Flowchart (`aria-roledescription="flowchart-v2"`)

| Element | DOM | Styled by |
| ------- | --- | --------- |
| Node box | `.node .label-container` (`rect` / `polygon` / `path`) | `.node rect` … → `mainBkg` / `nodeBorder` |
| Node text | `.nodeLabel` inside `foreignObject` | `nodeTextColor` / `themeCSS` `.nodeLabel` |
| Edge | `.edgePaths .flowchart-link` | `lineColor` |
| Arrow tip | `marker` / `.marker` | `lineColor`; `.arrowheadPath` → `arrowheadColor` |
| Edge label | `.edgeLabel` + `.background` rect | `edgeLabelBackground` → prefer `transparent`; `themeCSS` can set `.edgeLabel .background` |
| Subgraph | `.cluster rect` + `.cluster-label` | `clusterBkg` / `clusterBorder` / `titleColor` |

### Sequence (`sequence`)

| Element | DOM | Notes |
| ------- | --- | ----- |
| Participant box | `.actor` | Theme vars: `actorBkg`, `actorBorder`, `actorTextColor` |
| Lifeline | `.actor-line` | `actorLineColor` |
| Message | `.messageLine0` / `.messageLine1` | Solid vs dashed; `signalColor` |
| Message text | `.messageText` | `signalTextColor` |

Inline `fill="#eaeaea"` on actor rects can appear in the markup before CSS; the embedded `#mermaid-… .actor { fill:… }` rules override them when config is applied.

### Class (`class`)

| Element | DOM | Notes |
| ------- | --- | ----- |
| Class box | `g.classGroup` / `.node` paths | `mainBkg` + `nodeBorder` |
| Dividers | `.divider path` | Same stroke as border |
| Relations | `.relation` | `lineColor` |
| Edge labels | `.edgeLabel .background` | Same transparent / dark treatment as flowchart |

### State (`stateDiagram`)

| Element | DOM | Notes |
| ------- | --- | ----- |
| State box | `.statediagram-state rect` / `g.stateGroup rect` | `stateBkg` / `stateBorder` |
| Transition | `.transition` | `transitionColor` (match flowchart edges: `#b0b0b0`) |
| Transition label | `.edgeLabel` | Need `labelBackgroundColor: "transparent"` **and** `edgeLabelBackground: "transparent"` or gray pills return |
| Start / end | `.state-start`, end circle | Start uses line color; end often uses tertiary accent |

### ER (`er`) — important

Newer Mermaid does **not** paint attribute rows with `.er.attributeBoxOdd` / `Even` alone. Rows are:

```html
<g class="row-rect-odd">
  <path … fill="hsl(240, 3%, 93%)"></path>  <!-- nearly white without themeCSS -->
  <path … stroke="#569cd6" fill="none"></path>
</g>
<g class="row-rect-even">
  <path … fill="hsl(240, 3%, 19%)"></path>
  …
</g>
```

`attributeBackgroundColorOdd` / `Even` in `themeVariables` are not enough when Mermaid writes inline HSL on the first path. Override with **`themeCSS`**:

```css
.row-rect-odd>path:first-child{fill:#2d2d30!important}
.row-rect-even>path:first-child{fill:#252526!important}
.er.attributeBoxOdd{fill:#2d2d30!important}   /* older Mermaid */
.er.attributeBoxEven{fill:#252526!important}
.er.entityBox{fill:#2d2d30!important;stroke:#569cd6!important}
.nodeLabel,.nodeLabel p{color:#ffffff!important}
.er.relationshipLabelBox{fill:transparent!important;stroke:none!important;opacity:0!important}
.edgeLabel .background{fill:#252526!important}
```

That block is already in [`config.js`](../themes/mpe/released/cpp-modern/config.js) under `mermaidConfig.themeCSS`.

### Pie / git / gantt / journey / mindmap / quadrant / block

| Type | What config mainly controls |
| ---- | --------------------------- |
| Pie | `pie1`…`pieN`, title/legend/section text; `themeCSS` `.pieCircle{opacity:1}` |
| Git graph | `git0`…`gitN`, branch labels, commit label colors |
| Gantt | `taskBkgColor`, `sectionBkgColor` / `sectionBkgColor2`, `altSectionBkgColor`, `taskTextColor`; `gantt.todayMarker: "off"` avoids off-chart today line; `themeCSS` on `.task0`, `.section0` |
| Journey | `fillType0`…`fillTypeN` for section/task fills; actor dots via `.actor-0` / `.actor-1` in `themeCSS`. Vertical gap under faces is Mermaid score layout — tighten with `journey.taskMargin` / `bottomMarginAdj` |
| Mindmap | Explicit `cScale0`… + `cScaleLabel0`… (white on dark). Pastel defaults are unreadable — override with `themeCSS` `.section-N` fills/text |
| Quadrant | `quadrant1TextFill`…`quadrant4TextFill` for quadrant names (not `quadrantLabelFill`); axis uses `quadrantXAxisTextFill` / `quadrantYAxisTextFill`; backup `themeCSS` `.quadrant text` |
| Block | Same node/edge variables as flowchart (block reuses flowchart-like CSS) |

## Light checklist

Source of truth: [`released/cpp-modern-light/config.js`](../themes/mpe/released/cpp-modern-light/config.js).

| Check | Light expectation |
| ----- | ----------------- |
| Mode | `"darkMode": false`; paper `background` (e.g. `#f7f9fc`) |
| Nodes / actors | Light or white fills; **dark** `primaryTextColor` / `nodeTextColor` / `labelTextColor` |
| Edge labels | Transparent label backgrounds (same as dark) |
| Quadrant | Dark `quadrantPointTextFill` + `.data-point text{fill:#1f2937}` — white labels vanish on paper |
| Journey faces | `.face` = light fill (e.g. `#fef9c3`) + dark stroke; muddy brown fills hide smileys |
| Mindmap | Root: white text on saturated blue; section nodes: dark text on pastels; override `.section-root .nodeLabel` after `.mindmap-node` |
| ER zebra | Set `attributeBackgroundColorOdd/Even` **and** `themeCSS` `.row-rect-odd/even` to match; pick which row is the slate strip intentionally |
| Gantt | Task bars clearly darker/more saturated than section bands and chart background |
| Pie | Slice fills deep enough for white `%` text, or switch section text dark on pale slices |

Also see [`mpe-theme-reference.md` §8](mpe-theme-reference.md#8-dark-vs-light--lessons-and-authoring-checklist).

## Inspecting a live diagram

1. Open the MPE preview of `examples/mermaid-showcase.md`.
2. Open DevTools on the preview webview (or copy the preview HTML).
3. Find `div.mermaid > svg > style` — that is the effective theme.
4. Confirm your `themeCSS` selectors appear at the end of that block (e.g. `.row-rect-odd>path:first-child`).
5. For broken contrast, check whether the element uses:
   - a class rule in that `<style>`, or
   - an **inline** `fill="…"` / `stroke="…"` (needs `!important` in `themeCSS` or a variable Mermaid honors).

## Minimal Crossnote `config.js` shape

Replace the whole `%USERPROFILE%\.crossnote\config.js` with the package file (paste as-is). Source of truth: [`config.js`](../themes/mpe/released/cpp-modern/config.js).

```js
({
  katexConfig: {
    "macros": {}
  },
  mathjaxConfig: {
    "tex": {},
    "options": {
      "enableEnrichment": false
    },
    "loader": {}
  },
  mermaidConfig: {
    "startOnLoad": false,
    "theme": "base",
    "themeVariables": {
      "darkMode": true
      // …see themes/mpe/released/cpp-modern/config.js → mermaidConfig
    },
    "themeCSS": "/* ER + edge label overrides */"
    // flowchart, sequence, class, state, gantt, journey, pie, gitGraph
  }
})
```

Full paste-ready script: [`themes/mpe/released/cpp-modern/config.js`](../themes/mpe/released/cpp-modern/config.js).

Light / v3 CSS overlays remain under [`themes/mpe/experimental/`](../themes/mpe/experimental/). Released light Mermaid: [`themes/mpe/released/cpp-modern-light/config.js`](../themes/mpe/released/cpp-modern-light/config.js) (`"darkMode": false`).

## CSS vs config (what we learned)

| Approach | Result |
| -------- | ------ |
| Only `style.less` / v3 diagram tokens | Partial; edge labels and ER zebra often stay wrong |
| `mermaidTheme: "dark"` | Often fights your `themeVariables` |
| `theme: "base"` + full `themeVariables` | Flowchart, sequence, class, state, pie, git look correct |
| + `themeCSS` for `.row-rect-*` | ER attribute rows readable on dark background |

## Troubleshooting

| Symptom | Fix |
| ------- | --- |
| Gray boxes behind `yes` / `no` / `assign` | `edgeLabelBackground` / `labelBackground` / (state) `labelBackgroundColor` → `transparent`; `mermaidTheme: "default"` |
| ER rows white / unreadable | Update `themeCSS` for `.row-rect-odd/even>path:first-child` |
| Gantt / pie / mindmap off-palette | Re-merge latest matching released `config.js` (dark or light) |
| Quadrant names / point labels wrong | Dark: light fills on dark bg; Light: dark `quadrantPointTextFill` + `.data-point text` |
| Journey faces unreadable | Light: pale `.face` fill + dark stroke (not muddy brown) |
| Journey large empty bottom | Expected score-face band; reduce `taskMargin` / `bottomMarginAdj` |
| Config ignored | Edit via **Open Config Script (Global)** → `%USERPROFILE%\.crossnote\config.js`, then refresh preview |
| Diagrams only show as code | MPE only — browser workbench does not run Mermaid |
| Block diagram missing | Needs a recent Mermaid; update MPE |

## Related files

| Path | Role |
| ---- | ---- |
| [`themes/mpe/released/cpp-modern/config.js`](../themes/mpe/released/cpp-modern/config.js) | Full Crossnote config (dark) |
| [`themes/mpe/released/cpp-modern-light/config.js`](../themes/mpe/released/cpp-modern-light/config.js) | Full Crossnote config (light) |
| [`themes/mpe/released/cpp-modern/style.less`](../themes/mpe/released/cpp-modern/style.less) | Dark preview theme |
| [`themes/mpe/released/cpp-modern-light/style.less`](../themes/mpe/released/cpp-modern-light/style.less) | Light preview theme |
| [`themes/mpe/experimental/cpp-modern-v3-diagrams/`](../themes/mpe/experimental/cpp-modern-v3-diagrams/) | Optional CSS token overlay for diagrams |
| [`examples/mermaid-showcase.md`](../examples/mermaid-showcase.md) | Visual regression fixture |
| [`themes/mpe/README.md`](../themes/mpe/README.md) | Install + full config walkthrough |