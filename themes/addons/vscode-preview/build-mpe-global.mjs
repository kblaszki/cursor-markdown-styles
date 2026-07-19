import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
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

/** @typedef {"released" | "experimental"} Tier */

/**
 * @param {string} slug
 * @param {Tier} tier
 */
const packageOut = (slug, tier) => join(mpeDir, tier, slug, "style.less");

/**
 * @param {string} slug
 * @param {Tier} tier
 */
const packageRelPath = (slug, tier) => `themes/mpe/${tier}/${slug}/style.less`;

const variants = [
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern.css"),
    slug: "cpp-modern",
    tier: "released",
    label: "C++ Modern",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-light.css"),
    slug: "cpp-modern-light",
    tier: "released",
    label: "C++ Modern Light",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v1-syntax.css"),
    slug: "cpp-modern-v1-syntax",
    tier: "experimental",
    label: "C++ Modern v1 Syntax",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v2-readable.css"),
    slug: "cpp-modern-v2-readable",
    tier: "experimental",
    label: "C++ Modern v2 Readable",
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v3-diagrams.css"),
    slug: "cpp-modern-v3-diagrams",
    tier: "experimental",
    label: "C++ Modern v3 Diagrams",
    appendDiagramTokens: true,
  },
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v3-diagrams-light.css"),
    slug: "cpp-modern-v3-diagrams-light",
    tier: "experimental",
    label: "C++ Modern v3 Diagrams Light",
    appendDiagramTokens: true,
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina.css"),
    slug: "lumina",
    tier: "experimental",
    label: "Lumina",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-light.css"),
    slug: "lumina-light",
    tier: "experimental",
    label: "Lumina Light",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v1-neon.css"),
    slug: "lumina-v1-neon",
    tier: "experimental",
    label: "Lumina v1 Neon",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v2-muted.css"),
    slug: "lumina-v2-muted",
    tier: "experimental",
    label: "Lumina v2 Muted",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v3-balanced.css"),
    slug: "lumina-v3-balanced",
    tier: "experimental",
    label: "Lumina v3 Balanced",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v4-neon-blue.css"),
    slug: "lumina-v4-neon-blue",
    tier: "experimental",
    label: "Lumina v4 Neon Blue",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v5-aurora.css"),
    slug: "lumina-v5-aurora",
    tier: "experimental",
    label: "Lumina v5 Aurora",
  },
  {
    css: join(root, "original/lumina/vscode-preview-lumina-v5-aurora-light.css"),
    slug: "lumina-v5-aurora-light",
    tier: "experimental",
    label: "Lumina v5 Aurora Light",
  },
  {
    css: join(root, "original/graphite/vscode-preview-graphite.css"),
    slug: "graphite",
    tier: "experimental",
    label: "Graphite",
  },
  {
    css: join(root, "original/graphite/vscode-preview-graphite-light.css"),
    slug: "graphite-light",
    tier: "experimental",
    label: "Graphite Light",
  },
  {
    css: join(root, "original/graphite-code/vscode-preview-graphite-code.css"),
    slug: "graphite-code",
    tier: "experimental",
    label: "Graphite Code",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/graphite-code/vscode-preview-graphite-code-light.css"),
    slug: "graphite-code-light",
    tier: "experimental",
    label: "Graphite Code Light",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/meridian/vscode-preview-meridian.css"),
    slug: "meridian",
    tier: "experimental",
    label: "Meridian",
  },
  {
    css: join(root, "original/meridian/vscode-preview-meridian-light.css"),
    slug: "meridian-light",
    tier: "experimental",
    label: "Meridian Light",
  },
  {
    css: join(root, "original/blueprint/vscode-preview-blueprint.css"),
    slug: "blueprint",
    tier: "experimental",
    label: "Blueprint",
  },
  {
    css: join(root, "original/blueprint/vscode-preview-blueprint-light.css"),
    slug: "blueprint-light",
    tier: "experimental",
    label: "Blueprint Light",
  },
  {
    css: join(root, "original/phosphor/vscode-preview-phosphor.css"),
    slug: "phosphor",
    tier: "experimental",
    label: "Phosphor",
  },
  {
    css: join(root, "original/phosphor/vscode-preview-phosphor-amber.css"),
    slug: "phosphor-amber",
    tier: "experimental",
    label: "Phosphor Amber",
  },
  {
    css: join(root, "original/matcha/vscode-preview-matcha.css"),
    slug: "matcha",
    tier: "experimental",
    label: "Matcha",
  },
  {
    css: join(root, "original/matcha/vscode-preview-matcha-light.css"),
    slug: "matcha-light",
    tier: "experimental",
    label: "Matcha Light",
  },
  {
    css: join(root, "original/beacon/vscode-preview-beacon.css"),
    slug: "beacon",
    tier: "experimental",
    label: "Beacon",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/beacon/vscode-preview-beacon-light.css"),
    slug: "beacon-light",
    tier: "experimental",
    label: "Beacon Light",
    appendSyntaxRefine: true,
  },
  {
    css: join(root, "original/studio/vscode-preview-studio.css"),
    slug: "studio",
    tier: "experimental",
    label: "Studio",
    appendSyntaxRefine: true,
  },
];

const header = (label, relPath) => `/* =============================================================================
 * Markdown Preview Enhanced — Global style.less (${label})
 * =============================================================================
 *
 * INSTALL (Windows):
 * 1. Ctrl+Shift+P
 * 2. Run: "Markdown Preview Enhanced: Customize CSS (Global)"
 * 3. VS Code opens: %USERPROFILE%\\.crossnote\\style.less
 * 4. Select ALL content in that file and DELETE it
 * 5. Paste THIS ENTIRE FILE from the repo:
 *    ${relPath}
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

for (const {
  css,
  slug,
  tier,
  label,
  appendSyntaxRefine = false,
  appendDiagramTokens = false,
} of variants) {
  const out = packageOut(slug, tier);
  mkdirSync(dirname(out), { recursive: true });

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

  const relPath = packageRelPath(slug, tier);
  const bundle = `${header(label, relPath)}\n${themeCss}\n`;
  writeFileSync(out, bundle, "utf8");
  console.log(`wrote [${tier}] ${relPath}`);
}
