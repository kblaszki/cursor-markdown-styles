import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { basename, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const mpeDir = join(root, "../../mpe");

const variants = [
  {
    css: join(root, "original/cpp-modern/vscode-preview-cpp-modern.css"),
    out: join(mpeDir, "global-cpp-modern.less"),
    label: "C++ Modern",
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

for (const { css, out, label } of variants) {
  const themeCss = readFileSync(css, "utf8").trim();
  const bundle = `${header(label, basename(out))}\n${themeCss}\n`;
  writeFileSync(out, bundle, "utf8");
  console.log(`wrote ${out}`);
}
