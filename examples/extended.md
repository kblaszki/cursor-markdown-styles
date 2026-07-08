# Extended Markdown Examples

## Table

| Column A | Column B | Column C |
|----------|----------|----------|
| 1        | 2        | 3        |
| text     | **bold** | `code`   |

## Image

![Placeholder](https://via.placeholder.com/640x180.png?text=Markdown+Preview)

## Quote With A List

> You can also place a list inside a quote:
> - one
> - two
> - three

## HTML In Markdown

<details>
  <summary>Click to expand</summary>

This is an example of embedded HTML inside Markdown.

</details>

## C++ Code

```cpp
// Example header with an include guard-style directive and [[nodiscard]]
#pragma once

#include <string>
#include <vector>

[[nodiscard]] std::vector<std::string> split(std::string_view text, char delim);
```

```bash
cmake -S . -B build && cmake --build build
```
