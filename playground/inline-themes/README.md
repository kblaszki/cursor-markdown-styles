# Motywy CSS dla inline preview Cursora

Style dla widoku **Preview | Markdown** (inline preview). Kazdy plik jest samodzielny — gotowy do skopiowania do instalacji Cursora.

## Motywy

| Plik | Opis |
|------|------|
| `cursor-inline-github.css` | Klasyczny styl GitHub (light/dark) |
| `cursor-inline-notion.css` | Minimalistyczny, bez ramek pod naglowkami |
| `cursor-inline-nord.css` | Ciemny, chlodny Nord |
| `cursor-inline-dracula.css` | Ciemny Dracula (fiolet + roz) |
| `cursor-inline-solarized.css` | Solarized Light/Dark wg systemu |
| `cursor-inline-editorial.css` | Szeryf, ksiazkowy (Typora-like) |
| `cursor-inline-obsidian.css` | Ciemny z fioletowymi akcentami |
| `cursor-inline-bear.css` | Cieply, kremowe tlo (Bear Notes) |
| `cursor-inline-docs.css` | Dokumentacja techniczna (Stack Overflow) |
| `cursor-inline-catppuccin.css` | Catppuccin Mocha |
| `cursor-inline-cpp-modern.css` | **C++ Modern v2** (skrot) — czytelny, spójny niebiesko-morski |
| `cursor-inline-lumina.css` | **Lumina v4** (skrot) — Neon Blue |
| `lumina/` | Historia Lumina: v1–v4 (aktualna: v4 Neon Blue) |
| `cpp-modern/` | C++ Modern v1 Syntax, v2 Readable |

Plik `_shared-rules.css` zawiera wspolne reguly — jest juz wlaczony w kazdy motyw. Nie kopiuj go osobno.

## Instalacja w Cursorze

1. Wybierz motyw z tabeli powyzej.
2. Skopiuj plik do:
   ```
   C:\Program Files\cursor\resources\app\out\vs\workbench\cursor-inline-preview.css
   ```
3. W `workbench.html` dodaj (jesli jeszcze nie ma):
   ```html
   <link rel="stylesheet" href="../../../workbench/cursor-inline-preview.css">
   ```
   Plik: `C:\Program Files\cursor\resources\app\out\vs\code\electron-sandbox\workbench\workbench.html`
4. Zrestartuj Cursor.

**Uwaga:** Nie uzywaj zewnetrznego `file:///D:/...` — Chromium blokuje takie linki. Plik musi lezec w katalogu `workbench` Cursora.

Po aktualizacji Cursora powtorz kroki 2–4.

## Domyslny plik w repo

`playground/cursor-inline-preview.css` to kopia motywu GitHub — wygodny skrot do szybkiego kopiowania.
