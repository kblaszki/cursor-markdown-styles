# Theme Preview Fixture

Use this document as the fixed comparison source when generating screenshots for GitHub previews.

## Typography

This paragraph includes **bold text**, *italic text*, ~~strikethrough~~, [a link](https://www.markdownguide.org/), and `inline code`.

> A blockquote should feel distinct without becoming visually noisy.
>
> It is a good place to compare border, background, and spacing decisions.

## Lists

- Primary bullet
- Nested content
  - Secondary bullet
  - Another nested bullet

1. First ordered step
2. Second ordered step
3. Third ordered step

## Checklist

- [x] Baseline sample created
- [x] Shared preview path defined
- [ ] Screenshots exported

## Code

```cpp
#include <iostream>
#include <string_view>

int main() {
    std::string_view label = "Markdown";
    std::cout << "Previewing " << label << '\n';
}
```

## Table

| Element | What to check | Expected |
| --- | --- | --- |
| Headings | Scale and spacing | Clear hierarchy |
| Code | Contrast and padding | Easy to scan |
| Tables | Borders and density | Stable layout |

## Details

<details>
  <summary>Expandable HTML element</summary>

This checks how the theme treats less common Markdown-adjacent HTML.

</details>
