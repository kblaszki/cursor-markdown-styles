# Markdown Playground

Repozytorium do testowania:

- roznych wariantow skladni Markdown,
- wlasnego CSS dla tresci renderowanej z Markdown,
- roznych elementow typowo generowanych przez parsery Markdown.

## Struktura

- `examples/` - surowe pliki `.md` z przykladami:
  - `basic.md` — skladnia podstawowa
  - `extended.md` — tabele, obrazy, HTML
  - `code-showcase.md` — fragmenty kodu C++ (szablony, CMake, SQL)
  - `mvp-taskflow.md` — dokumentacja MVP projektu (backend C++)
  - `documentation-patterns.md` — wzorce dokumentacji C++
- `playground/index.html` - strona testowa z wyrenderowanymi elementami HTML.
- `playground/markdown.css` - style dla przegladarki.
- `playground/cursor-preview.css` - style dla bocznego podgladu Cursora (`Ctrl+K V`).
- `playground/cursor-inline-preview.css` - domyslny motyw GitHub dla inline preview.
- `playground/inline-themes/cpp-modern/` - C++ Modern v1/v2 (v2 Readable = domyslny)
- `playground/inline-themes/lumina/` - wersje motywu Lumina (v4 Neon Blue = aktualny Lumina)

## Jak tego uzywac

1. Otworz dowolny plik z `examples/` w podgladzie Markdown.
2. Otworz `playground/index.html` w przegladarce.
3. Edytuj `playground/markdown.css` i odswiezaj strone, aby testowac style.
4. Dla inline preview w Cursorze skopiuj wybrany motyw z `playground/inline-themes/` — szczegoly w `playground/inline-themes/README.md`.

## Co jest w srodku

Przykladowe pliki zawieraja m.in.:

- naglowki, cytaty, listy, checklisty,
- tabele, kod inline i bloki kodu,
- obrazki, separatory, linki,
- elementy HTML osadzane w Markdown,
- dokumentacje API, architekture, roadmape (MVP TaskFlow w C++),
- snippety C++20, CMake, SQL, JSON, Docker i bash.
