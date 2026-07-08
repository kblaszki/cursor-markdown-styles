import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const themesDir = path.resolve(__dirname, "..", "themes", "cursor-inline");
const taskListRules = fs.readFileSync(
  path.join(themesDir, "_task-list-rules.css"),
  "utf8"
);

const marker = "/* === Task lists (GFM checkboxes) === */";

function accentRule(filePath) {
  const base = path.basename(filePath);
  if (base.includes("lumina")) {
    return "accent-color: var(--neon-blue, var(--md-accent, currentColor)) !important;\n  transform: scale(1.15) !important;";
  }
  if (base.includes("cpp-modern")) {
    return "accent-color: var(--cpp-accent, var(--md-accent, currentColor)) !important;";
  }
  return "accent-color: var(--md-accent, currentColor) !important;";
}

function patchThemeFile(filePath) {
  let css = fs.readFileSync(filePath, "utf8");
  if (css.includes(marker)) {
    return false;
  }

  const themedRules = taskListRules.replace(
    "accent-color: var(--md-accent, currentColor) !important;",
    accentRule(filePath)
  );

  css = `${css.trim()}\n\n${marker}\n\n${themedRules.trim()}\n`;
  fs.writeFileSync(filePath, css, "utf8");
  return true;
}

const themeFiles = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
      continue;
    }
    if (entry.name.endsWith(".css") && !entry.name.startsWith("_")) {
      themeFiles.push(fullPath);
    }
  }
}

walk(themesDir);

let updated = 0;
for (const file of themeFiles) {
  if (patchThemeFile(file)) {
    updated += 1;
    console.log(`Updated ${path.relative(themesDir, file)}`);
  }
}

const sharedPath = path.join(themesDir, "_shared-rules.css");
let shared = fs.readFileSync(sharedPath, "utf8");
if (!shared.includes(marker)) {
  shared = `${shared.trim()}\n\n${marker}\n\n${taskListRules.trim()}\n`;
  fs.writeFileSync(sharedPath, shared, "utf8");
  console.log("Updated _shared-rules.css");
}

console.log(`Patched ${updated} theme files.`);
