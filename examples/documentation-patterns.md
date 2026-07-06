# Wzorce dokumentacji technicznej

Przyklady typowych sekcji z dokumentacji bibliotek, API i narzedzi wewnetrznych.

## Admonitions (cytaty jako callouty)

> **Uwaga:** Od wersji 2.0 `createClient()` jest asynchroniczne. Stary sync API zostanie usuniete w 3.0.

> **Wskazowka:** Uzyj `dry-run` przed migracja na produkcji:
> `npm run db:migrate -- --dry-run`

> **Ostrzezenie:** Endpoint `/admin/*` nie jest chroniony rate limitem w trybie dev.

## Definicje i skladnia

### Funkcja `parseConfig`

Parsuje plik konfiguracyjny i zwraca zwalidowany obiekt.

**Parametry:**

| Nazwa | Typ | Domyslnie | Opis |
|-------|-----|-----------|------|
| `path` | `string` | — | Sciezka do pliku `.json` lub `.yaml` |
| `options.strict` | `boolean` | `true` | Rzuca blad przy nieznanych kluczach |
| `options.env` | `Record<string, string>` | `process.env` | Mapowanie zmiennych srodowiskowych |

**Zwraca:** `Promise<AppConfig>`

**Rzuca:** `ConfigError` gdy plik nie istnieje lub schema jest niepoprawna

```typescript
import { parseConfig } from "@taskflow/config";

const config = await parseConfig("./config/app.yaml", {
  strict: true,
  env: { DATABASE_URL: process.env.DATABASE_URL! },
});

console.log(config.server.port); // 3000
```

## Changelog (fragment)

### [1.2.0] — 2026-03-01

#### Dodane

- Obsluga webhookow `task.created` i `task.updated`
- Flaga `--json` w CLI `taskflow list`

#### Zmienione

- **Breaking:** pole `userId` w odpowiedzi API przemianowane na `assigneeId`
- Domyslny timeout HTTP zwiekszony z 5s do 10s

#### Naprawione

- `#142` — duplikaty zadan przy rownoleglym `POST`
- `#156` — wyciek polaczen do bazy przy restarcie workera

## Diagram sekwencji (tekstowy)

```
Klient          API             Baza
  │              │                │
  │── POST /tasks ──────────────►│
  │              │── INSERT ─────►│
  │              │◄── OK ─────────│
  │◄── 201 ──────│                │
  │              │                │
  │── GET /tasks ───────────────►│
  │              │── SELECT ─────►│
  │              │◄── rows ───────│
  │◄── 200 ──────│                │
```

## Tabela kompatybilnosci

| Wersja Node | TaskFlow API | Status |
|-------------|--------------|--------|
| 18.x | 0.1.x | Wspierane |
| 20.x | 0.1.x | **Zalecane** |
| 22.x | 0.1.x | Wspierane |
| 16.x | 0.1.x | Nie wspierane |

## Snippety konfiguracyjne

### ESLint (flat config)

```javascript
// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }
);
```

### Nginx (reverse proxy)

```nginx
server {
    listen 443 ssl http2;
    server_name api.taskflow.example;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Kubernetes (probe)

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 10
  periodSeconds: 15

readinessProbe:
  httpGet:
    path: /ready
    port: 3000
  initialDelaySeconds: 5
  periodSeconds: 10
```

## Lista kontrolna przed release

- [x] Testy jednostkowe przechodza (`npm test`)
- [x] Migracje przetestowane na staging
- [x] CHANGELOG zaktualizowany
- [x] Wersja w `package.json` podbita
- [ ] Tag git `v1.2.0`
- [ ] Deploy na produkcje
- [ ] Post na #releases w Slacku

## Porownanie opcji

| Aspekt | REST | GraphQL | gRPC |
|--------|------|---------|------|
| Prostota MVP | ★★★★★ | ★★★ | ★★ |
| Dokumentacja | OpenAPI | Schema | Proto |
| Cache HTTP | Tak | Ograniczony | Nie |
| Typowanie | Czesciowe | Silne | Bardzo silne |

## Kod z komentarzami (tutorial)

```python
# pipeline/etl.py — uproszczony ETL dzienny

import pandas as pd
from sqlalchemy import create_engine

def run_etl(source_csv: str, db_url: str) -> int:
    """Laduje CSV, czysci dane, zapisuje do PostgreSQL."""
    df = pd.read_csv(source_csv)

    # Normalizacja kolumn
    df.columns = df.columns.str.strip().str.lower()
    df = df.dropna(subset=["email"])
    df["email"] = df["email"].str.lower()

    engine = create_engine(db_url)
    rows = df.to_sql("contacts_staging", engine, if_exists="replace", index=False)
    return rows or len(df)
```

## Linki i odniesienia

- [OpenAPI Specification](https://swagger.io/specification/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- Wewnetrzny runbook: `docs/runbooks/incident-response.md`
- Kod zrodlowy modulu auth: `src/middleware/auth.ts`
