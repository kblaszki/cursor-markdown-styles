import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const scopeRules = readFileSync(join(root, "_scope.css"), "utf8").trim();
const frontMatterMarker = "/* Shared front matter heuristic rules";

const mappings = [
  {
    source: join(root, "../cursor-inline/original/cpp-modern/cursor-inline-cpp-modern.css"),
    target: join(root, "original/cpp-modern/vscode-preview-cpp-modern.css"),
    title: "C++ Modern - readable, blue-teal palette",
    subtitle: "VS Code / Cursor side preview and Markdown Preview Enhanced",
  },
  {
    source: join(root, "../cursor-inline/original/cpp-modern/cursor-inline-cpp-modern-v1-syntax.css"),
    target: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v1-syntax.css"),
    title: "C++ Modern v1 - Syntax (faithful mapping of C++ syntax tokens)",
    subtitle: "VS Code / Cursor side preview and Markdown Preview Enhanced",
  },
  {
    source: join(root, "../cursor-inline/original/cpp-modern/cursor-inline-cpp-modern-v2-readable.css"),
    target: join(root, "original/cpp-modern/vscode-preview-cpp-modern-v2-readable.css"),
    title: "C++ Modern v2 - Readable (consistency and blue-teal palette)",
    subtitle: "VS Code / Cursor side preview and Markdown Preview Enhanced",
  },
];

function convertInlineToVscodePreview(source, title, subtitle) {
  const markerIndex = source.indexOf(frontMatterMarker);
  let css = markerIndex >= 0 ? source.slice(0, markerIndex).trimEnd() : source.trimEnd();

  css = css
    .replace(
      /\/\*[\s\S]*?Cursor inline preview: Preview \| Markdown\s*\*\//,
      `/* ${title}\n * ${subtitle}\n * Copyright (c) 2026 kblaszki\n * SPDX-License-Identifier: MIT\n */`
    )
    .replace(
      /\.anysphere-markdown-container-root,\s*\n\.markdown-editor-react__richtext-content/g,
      ".markdown-body,\n.markdown-preview,\nbody"
    )
    .replace(/\.markdown-editor-react__richtext-content/g, ".markdown-preview")
    .replace(/\.anysphere-markdown-container-root/g, ".markdown-body");

  css = css.replace(
    /\.markdown-body ([^{,\n]+),\s*\n\.markdown-preview \1,\s*\nbody \1/g,
    ".markdown-body $1,\n.markdown-preview $1,\nbody $1"
  );

  css = css.replace(
    /\.markdown-body ([^{,\n]+),\s*\nbody \1/g,
    ".markdown-body $1,\n.markdown-preview $1,\nbody $1"
  );

  css = css.replace(
    /\.markdown-body \{\s*\n\s*padding: var\(--md-padding\) !important;\s*\n\}/,
    `.markdown-body {\n  padding: var(--md-padding) !important;\n}\n\n.markdown-preview {\n  padding: var(--md-padding) !important;\n}\n\nbody {\n  background: var(--md-bg) !important;\n  color: var(--md-text) !important;\n}`
  );

  css = css.replace(
    /\.markdown-body ([^{,\n]+),\s*\n\.markdown-preview \1 \{/g,
    ".markdown-body $1,\n.markdown-preview $1,\nbody $1 {"
  );

  const listReplacements = [
    [/\.markdown-body ul > li::before/g, ".markdown-body ul:not(.contains-task-list) > li:not(.task-list-item)::before"],
    [/\.markdown-preview ul > li::before/g, ".markdown-preview ul:not(.contains-task-list) > li:not(.task-list-item)::before"],
    [/body ul > li::before/g, "body ul:not(.contains-task-list) > li:not(.task-list-item)::before"],
    [/\.markdown-body ul ul > li::before/g, ".markdown-body ul:not(.contains-task-list) ul > li:not(.task-list-item)::before"],
    [/\.markdown-preview ul ul > li::before/g, ".markdown-preview ul:not(.contains-task-list) ul > li:not(.task-list-item)::before"],
    [/body ul ul > li::before/g, "body ul:not(.contains-task-list) ul > li:not(.task-list-item)::before"],
    [/\.markdown-body ul ul ul > li::before/g, ".markdown-body ul:not(.contains-task-list) ul ul > li:not(.task-list-item)::before"],
    [/\.markdown-preview ul ul ul > li::before/g, ".markdown-preview ul:not(.contains-task-list) ul ul > li:not(.task-list-item)::before"],
    [/body ul ul ul > li::before/g, "body ul:not(.contains-task-list) ul ul > li:not(.task-list-item)::before"],
    [/\.markdown-body ul > li/g, ".markdown-body ul:not(.contains-task-list) > li:not(.task-list-item)"],
    [/\.markdown-preview ul > li/g, ".markdown-preview ul:not(.contains-task-list) > li:not(.task-list-item)"],
    [/body ul > li/g, "body ul:not(.contains-task-list) > li:not(.task-list-item)"],
    [/\.markdown-body ul ul > li/g, ".markdown-body ul:not(.contains-task-list) ul > li:not(.task-list-item)"],
    [/\.markdown-preview ul ul > li/g, ".markdown-preview ul:not(.contains-task-list) ul > li:not(.task-list-item)"],
    [/body ul ul > li/g, "body ul:not(.contains-task-list) ul > li:not(.task-list-item)"],
    [/\.markdown-body ul ul ul > li/g, ".markdown-body ul:not(.contains-task-list) ul ul > li:not(.task-list-item)"],
    [/\.markdown-preview ul ul ul > li/g, ".markdown-preview ul:not(.contains-task-list) ul ul > li:not(.task-list-item)"],
    [/body ul ul ul > li/g, "body ul:not(.contains-task-list) ul ul > li:not(.task-list-item)"],
    [/\.markdown-body li:has\(input\[type="checkbox"\]\)/g, ".markdown-body li.task-list-item"],
    [/\.markdown-preview li:has\(input\[type="checkbox"\]\)/g, ".markdown-preview li.task-list-item"],
    [/body li:has\(input\[type="checkbox"\]\)/g, "body li.task-list-item"],
    [/\.markdown-body li\.task-list-item::before/g, ".markdown-body li.task-list-item::before"],
    [/\.markdown-preview li\.task-list-item::before/g, ".markdown-preview li.task-list-item::before"],
    [/body li\.task-list-item::before/g, "body li.task-list-item::before"],
    [/\.markdown-body input\[type="checkbox"\]/g, ".markdown-body input[type=\"checkbox\"]"],
    [/\.markdown-preview input\[type="checkbox"\]/g, ".markdown-preview input[type=\"checkbox\"]"],
    [/body input\[type="checkbox"\]/g, "body input[type=\"checkbox\"]"],
  ];

  for (const [pattern, replacement] of listReplacements) {
    css = css.replace(pattern, replacement);
  }

  return `${css}\n\n${scopeRules}\n`;
}

for (const { source, target, title, subtitle } of mappings) {
  const converted = convertInlineToVscodePreview(readFileSync(source, "utf8"), title, subtitle);
  writeFileSync(target, converted, "utf8");
  console.log(`wrote ${target}`);
}
