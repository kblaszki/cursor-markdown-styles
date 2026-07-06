# C++ Modern — motyw inline preview

Styl inspirowany **Default Dark Modern** i tokenami **Dark+** (Better C++ Syntax).

## Wersje

| Plik | Opis |
|------|------|
| `cursor-inline-cpp-modern-v1-syntax.css` | v1 — wierne mapowanie tokenow skladni na elementy MD |
| `cursor-inline-cpp-modern-v2-readable.css` | v2 — czytelnosc i spójna paleta **(rekomendowana)** |

## Skrot

`../cursor-inline-cpp-modern.css` = kopia **v2**.

## v2 — zasady

- **Jedna rodzina kolorow**: morski `#4EC9B0` + niebieski `#569CD6` + neutral `#CCCCCC`
- Naglowki bez zolci/fioletu — hierarchia przez rozmiar i nasycenie, nie teczke
- **Bez glow** na listach i gradientow w tabelach
- Bloki kodu: panel `#2B2B2B`, jedna obwódka morska, tekst `#D4D4D4`
- Cytaty: neutralne tlo, niebieska kreska (nie zielony komentarz)
- Kolory skladni (string, number, comment) tylko przez klasy `.cpp-string` itd.

## Mapowanie v2

| Element | Kolor / styl |
|---------|----------------|
| H1 | `#CCCCCC` + morska kreska |
| H2 | `#4EC9B0` |
| H3–H4 | odcienie niebieskiego zmieszane z tekstem |
| H5–H6 | `#9D9D9D` |
| Linki | `#4daafc` |
| Kod inline | `#9CDCFE` na `#3C3C3C` |
| `pre` | `#2B2B2B`, lewa obwódka `#4EC9B0` |

## Instalacja

```
playground/inline-themes/cursor-inline-cpp-modern.css
  -> C:\Program Files\cursor\resources\app\out\vs\workbench\cursor-inline-preview.css
```

Zrestartuj Cursor.
