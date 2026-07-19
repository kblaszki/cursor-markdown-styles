import { readdirSync, readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { join, basename } from "node:path";

function extractHexFromCss(css) {
  const tokens = new Map(); // token -> hex
  const hexOnly = new Set();

  // --name: #hex or var(..., #hex)
  const declRe = /(--[\w-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = declRe.exec(css))) {
    const name = m[1];
    const val = m[2].trim();
    const hexMatch = val.match(/#([0-9a-fA-F]{3,8})\b/);
    if (!hexMatch) continue;
    let hex = hexMatch[0].toLowerCase();
    if (hex.length === 4) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    if (!tokens.has(name)) tokens.set(name, hex);
    hexOnly.add(hex);
  }

  // bare hex in themeCSS-like strings / mermaid
  const bare = css.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g);
  for (const h of bare) {
    let hex = h[0].toLowerCase();
    if (hex.length === 4) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    hexOnly.add(hex);
  }

  return { tokens, hexOnly };
}

function extractHexFromConfigJs(js) {
  const hexOnly = new Set();
  for (const h of js.matchAll(/#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g)) {
    let hex = h[0].toLowerCase();
    if (hex.length === 4) {
      hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`;
    }
    hexOnly.add(hex);
  }
  // also collect "key": "#hex"
  const keyed = new Map();
  for (const m of js.matchAll(/"([\w]+)"\s*:\s*"(#[0-9a-fA-F]{3,8})"/g)) {
    keyed.set(m[1], m[2].toLowerCase());
  }
  return { hexOnly, keyed };
}

function roleHint(token) {
  const t = token.toLowerCase();
  if (t.includes("bg") && !t.includes("code")) return "Background";
  if (t.includes("fg") || t.includes("text")) return "Text";
  if (t.includes("muted")) return "Muted text";
  if (t.includes("panel-raised")) return "Raised panel";
  if (t.includes("panel")) return "Panel";
  if (t.includes("border")) return "Border";
  if (t.includes("primary")) return "Primary accent";
  if (t.includes("secondary")) return "Secondary accent";
  if (t.includes("link-hover")) return "Link hover";
  if (t.includes("link") || t.includes("accent") && t.includes("md-accent")) return "Link / accent";
  if (t.includes("accent")) return "UI accent";
  if (t.includes("code-inline") || t.includes("code-text")) return "Inline code";
  if (t.includes("code-bg")) return "Code surface";
  if (t.includes("code-fg")) return "Code text";
  if (t.includes("syntax-comment") || t.includes("comment")) return "Syntax: comment";
  if (t.includes("syntax-keyword") || t.includes("keyword")) return "Syntax: keyword";
  if (t.includes("syntax-control") || t.includes("control")) return "Syntax: control";
  if (t.includes("syntax-type") || t.includes("type")) return "Syntax: type";
  if (t.includes("syntax-function") || t.includes("function")) return "Syntax: function";
  if (t.includes("syntax-string") || t.includes("string")) return "Syntax: string";
  if (t.includes("syntax-number") || t.includes("number")) return "Syntax: number";
  if (t.includes("syntax-variable") || t.includes("variable")) return "Syntax: variable";
  if (t.includes("syntax-constant") || t.includes("constant")) return "Syntax: constant";
  if (t.includes("preprocessor")) return "Syntax: preprocessor";
  if (t.includes("operator") || t.includes("punctuation")) return "Syntax: operator/punct";
  if (t.includes("deleted")) return "Syntax: deleted";
  if (t.includes("inserted")) return "Syntax: inserted";
  return "Theme token";
}

function swatch(hex) {
  // GitHub markdown doesn't render color chips; show hex prominently
  return `\`${hex}\``;
}

function tokenTable(tokens, title) {
  if (!tokens.size) return "";
  const rows = [...tokens.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, hex]) => `| \`${name}\` | ${swatch(hex)} | ${roleHint(name)} |`)
    .join("\n");
  return `### ${title}\n\n| Token | Color | Role |\n| ----- | ----- | ---- |\n${rows}\n`;
}

function uniqueHexTable(hexSet, title) {
  const rows = [...hexSet]
    .sort()
    .map((hex) => `| ${swatch(hex)} |`)
    .join("\n");
  return `### ${title}\n\n| Color |\n| ----- |\n${rows}\n`;
}

function upsertPaletteSection(readmePath, sectionMd) {
  const markerStart = "<!-- palette:start -->";
  const markerEnd = "<!-- palette:end -->";
  const block = `${markerStart}\n## Color palette\n\n${sectionMd.trim()}\n\n${markerEnd}`;
  let text = existsSync(readmePath) ? readFileSync(readmePath, "utf8") : "";
  if (text.includes(markerStart) && text.includes(markerEnd)) {
    text = text.replace(
      new RegExp(`${markerStart}[\\s\\S]*?${markerEnd}`),
      block,
    );
  } else {
    text = text.trimEnd() + "\n\n" + block + "\n";
  }
  writeFileSync(readmePath, text.endsWith("\n") ? text : text + "\n");
}

// --- original families ---
const originalRoot = "themes/addons/vscode-preview/original";
for (const fam of readdirSync(originalRoot)) {
  const dir = join(originalRoot, fam);
  if (!statSync(dir).isDirectory()) continue;
  const cssFiles = readdirSync(dir).filter(
    (f) => f.endsWith(".css") && !f.startsWith("_"),
  );
  const primary =
    cssFiles.find((f) => f === `vscode-preview-${fam}.css`) ||
    cssFiles.find((f) => !f.includes("-light") && !f.includes("-v") && !f.includes("amber")) ||
    cssFiles[0];
  const light = cssFiles.find((f) => f.includes("-light"));
  const peer =
    fam === "phosphor"
      ? cssFiles.find((f) => f.includes("amber"))
      : null;

  const parts = [];
  if (primary) {
    const { tokens, hexOnly } = extractHexFromCss(
      readFileSync(join(dir, primary), "utf8"),
    );
    parts.push(`Source: \`${primary}\`.\n`);
    parts.push(tokenTable(tokens, "Tokens (literal hex)"));
    parts.push(uniqueHexTable(hexOnly, "Unique hex values"));
  }
  for (const peerFile of [light, peer].filter(Boolean)) {
    if (peerFile === primary) continue;
    const { tokens, hexOnly } = extractHexFromCss(
      readFileSync(join(dir, peerFile), "utf8"),
    );
    const label = peerFile.includes("light") ? "Light" : "Peer";
    parts.push(`\n${label} source: \`${peerFile}\`.\n`);
    parts.push(tokenTable(tokens, `${label} tokens (literal hex)`));
    parts.push(uniqueHexTable(hexOnly, `${label} unique hex values`));
  }

  const readme = join(dir, "README.md");
  if (!existsSync(readme)) {
    writeFileSync(readme, `# ${fam}\n\n`);
  }
  upsertPaletteSection(readme, parts.join("\n"));
  console.log("updated", readme);
}

// --- released cpp-modern ---
{
  const pkg = "themes/mpe/released/cpp-modern";
  const css = readFileSync(
    "themes/addons/vscode-preview/original/cpp-modern/vscode-preview-cpp-modern.css",
    "utf8",
  );
  const { tokens, hexOnly } = extractHexFromCss(css);
  const config = readFileSync(join(pkg, "config.js"), "utf8");
  const { hexOnly: mermaidHex, keyed } = extractHexFromConfigJs(config);
  const allHex = new Set([...hexOnly, ...mermaidHex]);

  const mermaidRows = [...keyed.entries()]
    .filter(([, v]) => v.startsWith("#"))
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([k, v]) => `| \`${k}\` | ${swatch(v)} |`)
    .join("\n");

  const parts = [
    "Full palette for the released dark package (preview CSS + Mermaid in `config.js`). See also [`docs/mpe-theme-reference.md`](../../../../docs/mpe-theme-reference.md).\n",
    tokenTable(tokens, "Preview CSS tokens"),
    `### Mermaid \`themeVariables\` (hex)\n\n| Variable | Color |\n| -------- | ----- |\n${mermaidRows}\n`,
    uniqueHexTable(allHex, "Complete unique hex set (preview + Mermaid)"),
  ];
  upsertPaletteSection(join(pkg, "README.md"), parts.join("\n"));
  console.log("updated", join(pkg, "README.md"));
}

// --- experimental packages: ensure README with palette from style.less ---
const expRoot = "themes/mpe/experimental";
for (const slug of readdirSync(expRoot)) {
  const dir = join(expRoot, slug);
  if (!statSync(dir).isDirectory()) continue;
  const lessPath = join(dir, "style.less");
  if (!existsSync(lessPath)) continue;
  const { tokens, hexOnly } = extractHexFromCss(readFileSync(lessPath, "utf8"));
  const configPath = join(dir, "config.js");
  const parts = [
    "Extracted literal hex tokens from generated `style.less`" +
      (existsSync(configPath) ? " (+ Mermaid hex from `config.js`)" : "") +
      ".\n",
    tokenTable(tokens, "Tokens (literal hex)"),
  ];
  if (existsSync(configPath)) {
    const { hexOnly: mermaidHex, keyed } = extractHexFromConfigJs(
      readFileSync(configPath, "utf8"),
    );
    const mermaidRows = [...keyed.entries()]
      .filter(([, v]) => v.startsWith("#"))
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([k, v]) => `| \`${k}\` | ${swatch(v)} |`)
      .join("\n");
    if (mermaidRows) {
      parts.push(
        `### Mermaid \`themeVariables\` (hex)\n\n| Variable | Color |\n| -------- | ----- |\n${mermaidRows}\n`,
      );
    }
    for (const hex of mermaidHex) hexOnly.add(hex);
  }
  parts.push(uniqueHexTable(hexOnly, "Unique hex values"));
  const readme = join(dir, "README.md");
  if (!existsSync(readme)) {
    writeFileSync(
      readme,
      `# ${slug} (experimental)\n\nPaste [\`style.less\`](style.less) into Crossnote global CSS.\n\n`,
    );
  }
  upsertPaletteSection(readme, parts.join("\n"));
  console.log("updated", readme);
}
