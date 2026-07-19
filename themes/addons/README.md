# Theme Add-ons

Secondary theme paths. They are **not** split into `released` / `experimental` folders — that tiering lives under [`../mpe/`](../mpe/).

## Included Areas

- `vscode-preview/` — CSS source of truth + built-in VS Code / Cursor preview via `markdown.styles`
- `cursor-inline/` — legacy Cursor inline preview themes (`cpp-modern`, `lumina` only)

## Notes

- Primary install path: [`../mpe/released/`](../mpe/released/) (start with `cpp-modern`).
- Map each CSS family to its MPE package in [`vscode-preview/README.md`](vscode-preview/README.md).
- Prefer MPE released over cursor-inline for daily work.
- Regeneration scripts for MPE packages live under `vscode-preview/`.
