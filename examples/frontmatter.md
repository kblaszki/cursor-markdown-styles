---
title: Cursor Theme Notes
description: Example of YAML front matter properties in Markdown
tags:
  - cursor
  - markdown
  - css
theme: cpp-modern
draft: false
---

# Front Matter Example

This file demonstrates YAML front matter at the top of a Markdown document.

## Notes

- Front matter is a common ecosystem extension.
- It is not part of standard Markdown or CommonMark.
- Cursor's inline `Preview | Markdown` mode may render it as plain text.
- Installed inline themes include heuristic CSS that mutes blocks before the first `h1` (gold/amber tint for testing).
- Side preview is usually a better way to inspect this pattern.

## Example Content

Use this file to compare how different renderers treat document properties before the Markdown body.

```yaml
title: Cursor Theme Notes
theme: cpp-modern
draft: false
```

```cpp
#include <iostream>

int main() {
    std::cout << "Front matter example\n";
    return 0;
}
```
