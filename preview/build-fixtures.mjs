import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const FIXTURES = [
  { id: "theme-preview", label: "Theme Preview", file: "theme-preview.md" },
  { id: "basic", label: "Basic", file: "basic.md" },
  { id: "extended", label: "Extended", file: "extended.md" },
  { id: "checkboxes", label: "Checklists", file: "checkboxes.md" },
  { id: "code-showcase", label: "Code", file: "code-showcase.md" },
  { id: "documentation-patterns", label: "Docs", file: "documentation-patterns.md" },
  { id: "mvp-taskflow", label: "Long Form", file: "mvp-taskflow.md" },
];

const embedded = Object.fromEntries(
  FIXTURES.map(({ file }) => [
    file,
    fs.readFileSync(path.join(root, "examples", file), "utf8"),
  ])
);

const output = `window.PREVIEW_FIXTURES = ${JSON.stringify(FIXTURES, null, 2)};

window.PREVIEW_EMBEDDED_MARKDOWN = ${JSON.stringify(embedded, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, "fixtures.js"), output, "utf8");
console.log(`Generated fixtures.js (${FIXTURES.length} examples)`);
