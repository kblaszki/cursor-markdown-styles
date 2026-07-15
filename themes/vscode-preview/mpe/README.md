# Markdown Preview Enhanced — Global CSS

Ready-to-paste bundles for **Markdown Preview Enhanced: Customize CSS (Global)**.

## Files

| File | Theme |
|------|-------|
| [global-cpp-modern.less](global-cpp-modern.less) | C++ Modern (recommended) |
| [global-cpp-modern-v1-syntax.less](global-cpp-modern-v1-syntax.less) | C++ Modern v1 Syntax |
| [global-cpp-modern-v2-readable.less](global-cpp-modern-v2-readable.less) | C++ Modern v2 Readable |

Each file contains install instructions in the header comment plus the full inlined theme CSS.

## Install step by step (Windows)

### 1. Open the global style file

1. Press `Ctrl+Shift+P` (Command Palette).
2. Type: `Markdown Preview Enhanced: Customize CSS (Global)`
3. Press Enter.

VS Code opens (or creates):

```text
C:\Users\<YourUser>\.crossnote\style.less
```

If the command fails, create the folder manually:

```text
%USERPROFILE%\.crossnote\
```

Then run the command again.

### 2. Replace the file content

1. In `style.less`, press `Ctrl+A` (select all).
2. Press `Delete`.
3. Open this file from the repo in VS Code:

```text
themes/vscode-preview/mpe/global-cpp-modern.less
```

4. Press `Ctrl+A` → `Ctrl+C` (copy entire file).
5. Switch back to `%USERPROFILE%\.crossnote\style.less`.
6. Press `Ctrl+V` (paste).
7. Press `Ctrl+S` (save).

### 3. Optional MPE settings

Add to user or workspace `settings.json`:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.codeBlockTheme": "auto.css"
}
```

This reduces conflicts with MPE's built-in `github-light.css` theme.

### 4. Open preview

1. Open any `.md` file (e.g. `examples/theme-preview.md`).
2. `Ctrl+Shift+P` → **Markdown Preview Enhanced: Open Preview to the Side**
3. If styles do not appear, click the **refresh** button in the preview toolbar.

### 5. Verify

You should see:

- dark background (`#1f1f1f`)
- teal `h2` headings
- blue-teal list bullets
- styled code blocks with left accent bar

## Regenerate bundles

After editing inline or vscode-preview themes:

```bash
node themes/vscode-preview/build-from-inline.mjs
node themes/vscode-preview/build-mpe-global.mjs
```

## Workspace vs global

| Scope | Command | File |
|-------|---------|------|
| Global (all projects) | Customize CSS **(Global)** | `%USERPROFILE%\.crossnote\style.less` |
| Workspace (this repo only) | Customize CSS **(Workspace)** | `.crossnote/style.less` |

For workspace-only install, paste the same bundle into `.crossnote/style.less` at the repo root.

## Troubleshooting

**Styles not applied**

- Confirm you replaced the **entire** `style.less` content, not just appended.
- Set `markdown-preview-enhanced.previewTheme` to `none.css`.
- Refresh the MPE preview after saving.

**Wrong file location**

- Global config: `~/.crossnote/` (Windows: `%USERPROFILE%\.crossnote\`)
- Old MPE versions used `~/.mume/` — re-run **Customize CSS (Global)** to migrate.

**Built-in VS Code preview unchanged**

- MPE global CSS affects **MPE preview only**.
- For built-in preview, use `markdown.styles` — see [../README.md](../README.md).
