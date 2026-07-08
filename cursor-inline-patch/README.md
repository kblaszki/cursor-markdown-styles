# Cursor Inline Task List Patch

Unsupported workaround for missing GFM task list checkboxes in Cursor's **Preview | Markdown** inline editor.

The patch injects a small JavaScript runtime and CSS helper into Cursor's `workbench.html`. It:

1. reads markdown from the inline editor handle,
2. finds `- [ ]` / `- [x]` task lists that Cursor rendered as plain bullets,
3. injects clickable checkbox UI,
4. writes `[x]` / `[ ]` changes back into the markdown source.

This does **not** modify `workbench.desktop.main.js`. It follows the same general approach as external workbench HTML patches.

## Files

| File | Purpose |
|------|---------|
| `task-list-patch.js` | Runtime patch (MutationObserver + checkbox UI) |
| `task-list-patch.css` | Minimal layout rules for inline preview |
| `patch.ps1` | Install / update the patch on Windows |
| `rollback.ps1` | Restore the latest backed-up `workbench.html` |

## Install (Windows)

Run PowerShell **as Administrator** if Cursor is installed under `C:\Program Files\cursor`.

```powershell
cd D:\work\github\markdown\cursor-inline-patch
.\patch.ps1
```

Optional explicit install path:

```powershell
.\patch.ps1 -CursorRoot "C:\Program Files\cursor"
```

Dry run:

```powershell
.\patch.ps1 -WhatIf
```

Then reload Cursor: **Developer: Reload Window**.

## Rollback

```powershell
.\rollback.ps1
```

Or restore a specific backup:

```powershell
.\rollback.ps1 -BackupPath "$env:LOCALAPPDATA\Cursor\markdown-task-list-patch-backups\cursor-20260708-120000\workbench.html"
```

Backups are stored under:

```text
%LOCALAPPDATA%\Cursor\markdown-task-list-patch-backups\
```

## What Gets Modified

The installer copies assets next to Cursor's workbench HTML:

```text
resources\app\out\vs\code\electron-sandbox\workbench\
  workbench.html
  task-list-patch.js
  task-list-patch.css
```

And injects a managed block into `workbench.html`:

```html
<!-- !! MARKDOWN-TASK-LIST-PATCH-START !! -->
<link rel="stylesheet" href="./task-list-patch.css?v=..." />
<script src="./task-list-patch.js?v=..."></script>
<!-- !! MARKDOWN-TASK-LIST-PATCH-END !! -->
```

## Test In Cursor

1. Open `examples/checkboxes.md`.
2. Switch to **Preview | Markdown**.
3. Confirm checkboxes appear instead of plain bullets.
4. Click a checkbox and verify the source markdown toggles between `[ ]` and `[x]`.

Your theme CSS from `themes/cursor-inline/` can still style checkbox accent colors after you copy it into `workbench.desktop.main.css`.

## Limitations

- Unsupported Cursor modification; updates may remove the patch.
- Cursor may show a corrupt-installation warning after patching app resources.
- Nested task lists are best-effort.
- If Cursor changes the inline editor internals, the React handle lookup may need updating.
- Side preview (`Ctrl+Shift+V`) already supports GFM task lists without this patch.

## Reapply After Cursor Updates

Run `patch.ps1` again after Cursor updates. The script replaces the managed block and refreshes the copied JS/CSS assets.

## Manual Install (optional)

If you prefer not to use the script:

1. Back up `workbench.html`.
2. Copy `task-list-patch.js` and `task-list-patch.css` into the workbench directory shown above.
3. Paste the managed HTML block into `<head>` before `</head>`.
4. Reload Cursor.
