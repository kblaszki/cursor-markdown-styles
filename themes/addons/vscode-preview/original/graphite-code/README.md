# Graphite Code

A hybrid theme family: **Graphite** styling with **C++ Modern / Dark+** syntax colors and a Graphite-Code-only refine layer.

## Files

- `vscode-preview-graphite-code.css` - dark hybrid
- `vscode-preview-graphite-code-light.css` - light hybrid
- `_cpp-syntax-refine.css` - stronger C++ token splits (appended after shared syntax tokens)

## MPE Bundles

- `themes/mpe/experimental/graphite-code/style.less`
- `themes/mpe/experimental/graphite-code-light/style.less`

## Notes

- The full visual style stays aligned with Graphite, including inline code and fenced block chrome.
- Syntax colors follow VS Code Dark+ / C++ Modern.
- The refine layer strengthens mapping for:
  - `boolean` as keyword (not number)
  - types / class names / builtins
  - functions
  - macros / directives / nested macro tokens
  - constants, variables, escapes
  - quieter punctuation vs operators
- Control-flow purple (`--md-syntax-control`) applies when the highlighter emits `.token.control` / `.keyword.control`. Plain Prism C++ still paints most keywords blue, which matches stock Dark+.
- Light fences use a recessed warm panel (`#ebe2d6`) and a higher-chroma Light+ token palette for clearer C++ contrast.
- Best fixtures: `examples/code-showcase.md`.
