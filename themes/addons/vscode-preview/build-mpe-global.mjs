import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const mpeDir = join(root, "../../mpe");
const scopeRules = readFileSync(join(root, "_scope.css"), "utf8").trim();
const scopeMarker = "Shared scope and VS Code / MPE preview helpers";
const syntaxRules = readFileSync(join(root, "_syntax-tokens.css"), "utf8").trim();
const syntaxMarker = "Shared C++-first Prism / hljs token colors";
const diagramRules = readFileSync(join(root, "_diagram-tokens.css"), "utf8").trim();
const diagramMarker = "Shared Mermaid / diagram colors";
const graphiteCodeRefine = readFileSync(
  join(root, "original/graphite-code/_cpp-syntax-refine.css"),
  "utf8",
).trim();
const graphiteCodeRefineMarker = "Graphite Code — stronger C++ Dark+";

const variants = [
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern.css"),
    out: join(mpeDir, "global-cpp-modern.less"),
    label: "C++ Modern",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-light.css"),
    out: join(mpeDir, "global-cpp-modern-light.less"),
    label: "C++ Modern Light",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v1-syntax.css"),
    out: join(mpeDir, "global-cpp-modern-v1-syntax.less"),
    label: "C++ Modern v1 Syntax",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v2-readable.css"),
    out: join(mpeDir, "global-cpp-modern-v2-readable.less"),
    label: "C++ Modern v2 Readable",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v3-diagrams.css"),
    out: join(mpeDir, "global-cpp-modern-v3-diagrams.less"),
    label: "C++ Modern v3 Diagrams",
    appendDiagramTokens: true,
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v3-diagrams-light.css"),
    out: join(mpeDir, "global-cpp-modern-v3-diagrams-light.less"),
    label: "C++ Modern v3 Diagrams Light",
    appendDiagramTokens: true,
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina.css"),
    out: join(mpeDir, "global-lumina.less"),
    label: "Lumina",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-light.css"),
    out: join(mpeDir, "global-lumina-light.less"),
    label: "Lumina Light",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v1-neon.css"),
    out: join(mpeDir, "global-lumina-v1-neon.less"),
    label: "Lumina v1 Neon",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v2-muted.css"),
    out: join(mpeDir, "global-lumina-v2-muted.less"),
    label: "Lumina v2 Muted",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v3-balanced.css"),
    out: join(mpeDir, "global-lumina-v3-balanced.less"),
    label: "Lumina v3 Balanced",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v4-neon-blue.css"),
    out: join(mpeDir, "global-lumina-v4-neon-blue.less"),
    label: "Lumina v4 Neon Blue",
  },
  {
    css: join(root, "original/graphite/vscode-preview-graphite.css"),
    out: join(mpeDir, "global-graphite.less"),
    label: "Graphite",
  },
  {
    css: join(root, "original/graphite/vscode-preview-graphite-light.css"),
    out: join(mpeDir, "global-graphite-light.less"),
    label: "Graphite Light",
  },
  {
    css: join(root, "original/graphite-code/vscode-preview-graphite-code.css"),
    out: join(mpeDir, "global-graphite-code.less"),
    label: "Graphite Code",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/graphite-code/vscode-preview-graphite-code-light.css"),
    out: join(mpeDir, "global-graphite-code-light.less"),
    label: "Graphite Code Light",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/meridian/vscode-preview-meridian.css"),
    out: join(mpeDir, "global-meridian.less"),
    label: "Meridian",
  },
  {
    css: join(root, "original/meridian/vscode-preview-meridian-light.css"),
    out: join(mpeDir, "global-meridian-light.less"),
    label: "Meridian Light",
  },
  {
    css: join(root, "original/blueprint/vscode-preview-blueprint.css"),
    out: join(mpeDir, "global-blueprint.less"),
    label: "Blueprint",
  },
  {
    css: join(root, "original/blueprint/vscode-preview-blueprint-light.css"),
    out: join(mpeDir, "global-blueprint-light.less"),
    label: "Blueprint Light",
  },
  {
    css: join(root, "original/phosphor/vscode-preview-phosphor.css"),
    out: join(mpeDir, "global-phosphor.less"),
    label: "Phosphor",
  },
  {
    css: join(root, "original/phosphor/vscode-preview-phosphor-amber.css"),
    out: join(mpeDir, "global-phosphor-amber.less"),
    label: "Phosphor Amber",
  },
  {
    css: join(root, "original/matcha/vscode-preview-matcha.css"),
    out: join(mpeDir, "global-matcha.less"),
    label: "Matcha",
  },
  {
    css: join(root, "original/matcha/vscode-preview-matcha-light.css"),
    out: join(mpeDir, "global-matcha-light.less"),
    label: "Matcha Light",
  },
  {
    css: join(root, "original/beacon/vscode-preview-beacon.css"),
    out: join(mpeDir, "global-beacon.less"),
    label: "Beacon",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/beacon/vscode-preview-beacon-light.css"),
    out: join(mpeDir, "global-beacon-light.less"),
    label: "Beacon Light",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/studio/vscode-preview-studio.css"),
    out: join(mpeDir, "global-studio.less"),
    label: "Studio",
    appendSyntaxRefine: true,
  },
];

const header = (label, filename) => `/* =============================================================================
 * Markdown Preview Enhanced — Global style.less (${label})
 * =============================================================================
 *
 * INSTALL (Windows):
 * 1. Ctrl+Shift+P
 * 2. Run: "Markdown Preview Enhanced: Customize CSS (Global)"
 * 3. VS Code opens: %USERPROFILE%\\.crossnote\\style.less
 * 4. Select ALL content in that file and DELETE it
 * 5. Paste THIS ENTIRE FILE from the repo:
 *    themes/mpe/${filename}
 * 6. Save (Ctrl+S)
 * 7. Restart the editor if you just enabled "Previews Only"
 * 8. Open any .md file in MPE preview
 *
 * OPTIONAL — add to settings.json to reduce MPE built-in theme conflicts:
 *   "markdown-preview-enhanced.previewTheme": "none.css"
 *
 * NOTE: This bundle inlines the full theme CSS (no @import) for reliable loading.
 * ============================================================================= */

`;

mkdirSync(mpeDir, { recursive: true });

for (const { css, out, label, appendSyntaxRefine = false, appendDiagramTokens = false } of variants) {
  let themeCss = readFileSync(css, "utf8").trim();
  if (!themeCss.includes(scopeMarker)) {
    themeCss = `${themeCss}\n\n${scopeRules}`;
  }

  const refineIndex = themeCss.indexOf(graphiteCodeRefineMarker);
  if (refineIndex >= 0) {
    const commentStart = themeCss.lastIndexOf("/*", refineIndex);
    themeCss = themeCss.slice(0, commentStart >= 0 ? commentStart : refineIndex).trimEnd();
  }

  const diagramIndex = themeCss.indexOf(diagramMarker);
  if (diagramIndex >= 0) {
    const commentStart = themeCss.lastIndexOf("/*", diagramIndex);
    themeCss = themeCss.slice(0, commentStart >= 0 ? commentStart : diagramIndex).trimEnd();
  }

  const syntaxIndex = themeCss.indexOf(syntaxMarker);
  if (syntaxIndex >= 0) {
    const commentStart = themeCss.lastIndexOf("/*", syntaxIndex);
    themeCss = themeCss.slice(0, commentStart >= 0 ? commentStart : syntaxIndex).trimEnd();
  }
  themeCss = `${themeCss}\n\n${syntaxRules}`;
  if (appendSyntaxRefine) {
    themeCss = `${themeCss}\n\n${graphiteCodeRefine}`;
  }
  if (appendDiagramTokens) {
    themeCss = `${themeCss}\n\n${diagramRules}`;
  }

  const bundle = `${header(label, basename(out))}\n${themeCss}\n`;
  writeFileSync(out, bundle, "utf8");
  console.log(`wrote ${out}`);
}
