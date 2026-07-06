# Wzorce dokumentacji technicznej (C++)

Przyklady typowych sekcji z dokumentacji bibliotek C++, API i narzedzi wewnetrznych.

## Admonitions (cytaty jako callouty)

> **Uwaga:** Od wersji 2.0 `TaskRepository::connect()` wymaga jawnego `ConnectionOptions`. Stary konstruktor z `const char*` zostanie usuniety w 3.0.

> **Wskazowka:** Uruchom migracje w trybie podgladu przed produkcja:
> `taskflow-migrate --dry-run --config config/app.json`

> **Ostrzezenie:** Endpoint `/admin/*` nie jest chroniony rate limitem w trybie `TASKFLOW_ENV=development`.

## Definicje i skladnia

### Funkcja `parse_config`

Laduje plik JSON i zwraca zwalidowany obiekt konfiguracji.

**Parametry:**

| Nazwa | Typ | Domyslnie | Opis |
|-------|-----|-----------|------|
| `path` | `std::filesystem::path` | — | Sciezka do pliku `.json` |
| `strict` | `bool` | `true` | Rzuca `ConfigError` przy nieznanych kluczach |
| `env_prefix` | `std::string_view` | `"TASKFLOW_"` | Prefiks zmiennych srodowiskowych |

**Zwraca:** `AppConfig`

**Rzuca:** `ConfigError` gdy plik nie istnieje lub JSON jest niepoprawny

```cpp
#include "taskflow/config.hpp"
#include <iostream>

int main() {
    auto config = taskflow::parse_config("config/app.json", {
        .strict = true,
        .env_prefix = "TASKFLOW_",
    });

    std::cout << "Port: " << config.server.port << '\n'; // 8080
}
```

## Changelog (fragment)

### [1.2.0] — 2026-03-01

#### Dodane

- Obsluga webhookow `task.created` i `task.updated`
- Flaga `--json` w CLI `taskflow list`

#### Zmienione

- **Breaking:** pole `user_id` w odpowiedzi API przemianowane na `assignee_id`
- Domyslny timeout HTTP zwiekszony z 5s do 10s
- Wymagany **C++20** (wczesniej C++17)

#### Naprawione

- `#142` — duplikaty zadan przy rownoleglym `POST`
- `#156` — wyciek polaczen PostgreSQL przy restarcie workera

## Diagram sekwencji (tekstowy)

```
Klient          API (C++)        PostgreSQL
  │              │                    │
  │── POST /tasks ────────────────►│
  │              │── INSERT ────────►│
  │              │◄── OK ─────────────│
  │◄── 201 ──────│                    │
  │              │                    │
  │── GET /tasks ─────────────────►│
  │              │── SELECT ──────────►│
  │              │◄── rows ───────────│
  │◄── 200 ──────│                    │
```

## Tabela kompatybilnosci

| Kompilator | Standard | TaskFlow API | Status |
|------------|----------|--------------|--------|
| GCC 13+ | C++20 | 0.1.x | **Zalecane** |
| Clang 17+ | C++20 | 0.1.x | Wspierane |
| MSVC 19.38+ | C++20 | 0.1.x | Wspierane |
| GCC 11 | C++17 | 0.1.x | Nie wspierane |

## Snippety konfiguracyjne

### CMake — opcje kompilacji

```cmake
# CMakeLists.txt (fragment)
target_compile_features(taskflow_api PRIVATE cxx_std_20)

target_compile_options(taskflow_api PRIVATE
    $<$<CXX_COMPILER_ID:GNU,Clang>:-Wall -Wextra -Wpedantic>
    $<$<CXX_COMPILER_ID:MSVC>:/W4 /permissive->
)

option(TASKFLOW_BUILD_TESTS "Build unit tests" ON)
option(TASKFLOW_ENABLE_ASAN "Address sanitizer" OFF)
```

### Nginx (reverse proxy)

```nginx
server {
    listen 443 ssl http2;
    server_name api.taskflow.example;

    location / {
        proxy_pass http://127.0.0.1:8080;
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
    port: 8080
  initialDelaySeconds: 10
  periodSeconds: 15

readinessProbe:
  httpGet:
    path: /ready
    port: 8080
  initialDelaySeconds: 5
  periodSeconds: 10
```

## Lista kontrolna przed release

- [x] Testy jednostkowe przechodza (`ctest --test-dir build`)
- [x] Migracje przetestowane na staging
- [x] CHANGELOG zaktualizowany
- [x] Wersja w `CMakeLists.txt` podbita
- [ ] Tag git `v1.2.0`
- [ ] Deploy na produkcje
- [ ] Post na #releases w Slacku

## Porownanie opcji

| Aspekt | REST + Drogon | gRPC | Wlasny socket |
|--------|---------------|------|---------------|
| Prostosc MVP | ★★★★☆ | ★★★ | ★★ |
| Dokumentacja | OpenAPI | Proto | Brak |
| Wydajnosc | Wysoka | Bardzo wysoka | Zalezna od impl. |
| Typowanie | JSON + walidacja | Silne (proto) | Reczne |

## Kod z komentarzami (tutorial)

```cpp
// src/etl/import_contacts.cpp — uproszczony import CSV

#include <fstream>
#include <pqxx/pqxx>
#include <sstream>
#include <string>

// Laduje CSV, czysci e-mail i zapisuje do tabeli stagingowej.
int run_etl(const std::string& source_csv, const std::string& db_url) {
    std::ifstream in{source_csv};
    if (!in) throw std::runtime_error("Nie mozna otworzyc pliku CSV");

    pqxx::connection conn{db_url};
    pqxx::work tx{conn};
    int rows = 0;

    std::string line;
    std::getline(in, line); // naglowek

    while (std::getline(in, line)) {
        std::istringstream ss{line};
        std::string email;
        std::getline(ss, email, ',');

        // normalizacja
        for (auto& c : email) c = static_cast<char>(std::tolower(c));
        if (email.empty()) continue;

        tx.exec_params(
            "INSERT INTO contacts_staging (email) VALUES ($1)", email);
        ++rows;
    }

    tx.commit();
    return rows;
}
```

## Linki i odniesienia

- [C++ Reference](https://en.cppreference.com/)
- [CMake Documentation](https://cmake.org/documentation/)
- Wewnetrzny runbook: `docs/runbooks/incident-response.md`
- Kod zrodlowy modulu auth: `src/middleware/auth_filter.cpp`
