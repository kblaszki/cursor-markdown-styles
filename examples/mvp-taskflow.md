# TaskFlow — dokumentacja MVP

> **TaskFlow** to lekki system zarzadzania zadaniami dla malych zespolow.
> Ten dokument opisuje wersje **0.1.0 (MVP)** — minimum do walidacji produktu.

---

## Spis tresci

1. [Cel produktu](#cel-produktu)
2. [Zakres MVP](#zakres-mvp)
3. [Architektura](#architektura)
4. [Model danych](#model-danych)
5. [API REST](#api-rest)
6. [Instalacja](#instalacja)
7. [Zmienne srodowiskowe](#zmienne-srodowiskowe)
8. [Roadmapa](#roadmapa)

---

## Cel produktu

Zespoly developerskie traca czas na przełaczanie sie miedzy Jira, Slackiem i notatkami.
**TaskFlow MVP** ma rozwiazac jeden problem:

> *Jedno miejsce na zadania zespolu z prostym API i widokiem w przegladarce.*

### Metryki sukcesu (MVP)

| Metryka | Cel | Sposob pomiaru |
|---------|-----|----------------|
| Time-to-first-task | < 5 min | onboarding w panelu |
| Aktywne zespoly | 10 | rejestracje w 30 dni |
| Retencja 7-dniowa | 40% | logowania po tygodniu |

---

## Zakres MVP

### W zakresie

- [x] Rejestracja i logowanie (e-mail + haslo)
- [x] CRUD zadan w ramach projektu
- [x] Statusy: `todo`, `in_progress`, `done`
- [x] REST API z dokumentacja OpenAPI
- [x] Prosty dashboard webowy

### Poza zakresem (v0.2+)

- [ ] Integracja ze Slackiem
- [ ] Kanban z drag & drop
- [ ] Role i uprawnienia per projekt
- [ ] Aplikacja mobilna

---

## Architektura

```
┌─────────────┐     HTTPS      ┌─────────────────┐
│  Web App    │ ◄────────────► │  API (C++20)    │
│  (React)    │                │  Drogon + pqxx  │
└─────────────┘                └────────┬────────┘
                                        │
                                 ┌──────▼──────┐
                                 │ PostgreSQL  │
                                 └─────────────┘
```

### Stos technologiczny

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| Frontend | React + Vite | Szybki dev, znany zespolowi |
| Backend | C++20 + Drogon | Wydajnosc, niskie opoznienia REST |
| Baza | PostgreSQL 16 + libpqxx | Sprawdzone transakcje, JSONB |
| Auth | JWT (jwt-cpp) | Lekka biblioteka header-only |
| Build | CMake + vcpkg | Reprodukowalne zaleznosci |
| Deploy | Docker + Fly.io | Niski koszt, szybki start |

---

## Model danych

```cpp
// include/taskflow/domain.hpp

#pragma once

#include <chrono>
#include <optional>
#include <string>

namespace taskflow {

enum class TaskStatus { Todo, InProgress, Done };

struct User {
    std::string id;
    std::string email;
    std::string name;
    std::chrono::system_clock::time_point created_at;
};

struct Project {
    std::string id;
    std::string name;
    std::string owner_id;
    std::chrono::system_clock::time_point created_at;
};

struct Task {
    std::string id;
    std::string project_id;
    std::string title;
    std::optional<std::string> description;
    TaskStatus status{TaskStatus::Todo};
    std::optional<std::string> assignee_id;
    std::optional<std::string> due_date; // ISO 8601
    std::chrono::system_clock::time_point created_at;
    std::chrono::system_clock::time_point updated_at;
};

} // namespace taskflow
```

### Relacje (uproszczone)

```
User 1───* Project
Project 1───* Task
User 1───* Task (assignee, opcjonalnie)
```

---

## API REST

Bazowy URL: `https://api.taskflow.example/v1`

### Endpointy

| Metoda | Sciezka | Opis | Auth |
|--------|---------|------|------|
| `POST` | `/auth/register` | Rejestracja uzytkownika | — |
| `POST` | `/auth/login` | Logowanie, zwrot JWT | — |
| `GET` | `/projects` | Lista projektow uzytkownika | Bearer |
| `POST` | `/projects` | Nowy projekt | Bearer |
| `GET` | `/projects/:id/tasks` | Zadania w projekcie | Bearer |
| `POST` | `/projects/:id/tasks` | Utworz zadanie | Bearer |
| `PATCH` | `/tasks/:id` | Aktualizacja zadania | Bearer |
| `DELETE` | `/tasks/:id` | Usuniecie zadania | Bearer |

### Przyklad: utworzenie zadania

**Request:**

```http
POST /v1/projects/prj_7xk2/tasks HTTP/1.1
Host: api.taskflow.example
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json

{
  "title": "Zaimplementowac endpoint PATCH /tasks",
  "description": "Obsluga zmiany statusu i assignee",
  "status": "todo",
  "dueDate": "2026-04-15"
}
```

**Response `201 Created`:**

```json
{
  "id": "tsk_m9f3a",
  "projectId": "prj_7xk2",
  "title": "Zaimplementowac endpoint PATCH /tasks",
  "description": "Obsluga zmiany statusu i assignee",
  "status": "todo",
  "assigneeId": null,
  "dueDate": "2026-04-15",
  "createdAt": "2026-03-20T14:32:00.000Z",
  "updatedAt": "2026-03-20T14:32:00.000Z"
}
```

### Handler (fragment backendu)

```cpp
// src/routes/tasks.cpp
#include <drogon/drogon.h>
#include <nlohmann/json.hpp>

#include "taskflow/auth.hpp"
#include "taskflow/services/task_service.hpp"

using json = nlohmann::json;

void create_task(
    const drogon::HttpRequestPtr& req,
    std::function<void(const drogon::HttpResponsePtr&)>&& respond,
    const std::string& project_id) {

    const auto user = taskflow::require_auth(req);
    if (!user) {
        respond(drogon::HttpResponse::newHttpJsonResponse(
            json{{"error", "unauthorized"}}));
        return;
    }

    const auto body = json::parse(req->body());
    if (!body.contains("title") || body["title"].get<std::string>().empty()) {
        respond(drogon::HttpResponse::newHttpJsonResponse(
            json{{"error", "title is required"}}));
        return;
    }

    taskflow::CreateTaskRequest request{
        .project_id = project_id,
        .title = body["title"].get<std::string>(),
        .description = body.value("description", std::optional<std::string>{}),
        .status = body.value("status", "todo"),
        .created_by = user->id,
    };

    auto task = taskflow::TaskService::instance().create(request);

    auto res = drogon::HttpResponse::newHttpJsonResponse(task.to_json());
    res->setStatusCode(drogon::k201Created);
    respond(res);
}
```

### Kody bledow

| Kod | Znaczenie | Przyklad |
|-----|-----------|----------|
| `400` | Niepoprawne dane | Brak `title` |
| `401` | Brak lub wygasly token | — |
| `403` | Brak dostepu do projektu | Cudzy `projectId` |
| `404` | Nie znaleziono | Nieistniejace zadanie |
| `409` | Konflikt | Duplikat e-maila przy rejestracji |

---

## Instalacja

### Wymagania

- **C++20** (GCC 13+, Clang 17+ lub MSVC 19.38+)
- **CMake** 3.20+
- **vcpkg** lub Conan (zaleznosci)
- Docker (opcjonalnie, do PostgreSQL)

### Kroki

```bash
# 1. Klonowanie
git clone https://github.com/example/taskflow.git
cd taskflow

# 2. Zaleznosci (vcpkg)
vcpkg install drogon libpqxx nlohmann-json jwt-cpp

# 3. Baza danych (Docker)
docker compose up -d postgres

# 4. Konfiguracja
cp config/app.example.json config/app.json
export JWT_SECRET=$(openssl rand -hex 32)

# 5. Migracje
./build/taskflow-migrate --config config/app.json

# 6. Seed (dane demo)
./build/taskflow-seed --config config/app.json

# 7. Kompilacja i uruchomienie
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=$VCPKG_ROOT/scripts/buildsystems/vcpkg.cmake
cmake --build build
./build/taskflow_api --config config/app.json
```

Aplikacja:

- **API:** `http://localhost:8080`
- **Web:** `http://localhost:5173`
- **OpenAPI:** `http://localhost:8080/docs`

### Docker Compose (fragment)

```yaml
services:
  postgres:
    image: postgres:16-alpine
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: taskflow
      POSTGRES_PASSWORD: taskflow
      POSTGRES_DB: taskflow_dev
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

---

## Zmienne srodowiskowe

| Zmienna | Wymagana | Domyslnie | Opis |
|---------|----------|-----------|------|
| `TASKFLOW_ENV` | nie | `development` | `development` / `production` |
| `TASKFLOW_PORT` | nie | `8080` | Port API |
| `DATABASE_URL` | **tak** | — | Connection string PostgreSQL |
| `JWT_SECRET` | **tak** | — | Min. 32 znaki, losowy |
| `JWT_EXPIRES_IN` | nie | `7d` | Czas zycia tokenu |
| `CORS_ORIGIN` | nie | `http://localhost:5173` | Dozwolony origin FE |

Przyklad `config/app.json`:

```json
{
  "server": { "host": "0.0.0.0", "port": 8080 },
  "database": {
    "url": "postgresql://taskflow:taskflow@localhost:5432/taskflow_dev"
  },
  "jwt": {
    "secret_env": "JWT_SECRET",
    "expires_in": "7d"
  },
  "cors": { "origin": "http://localhost:5173" }
}
```

---

## Roadmapa

### Q2 2026 — MVP (biezacy)

1. Stabilizacja API v1
2. Dashboard z lista zadan
3. Deploy na produkcje (Fly.io)
4. Onboarding 3 beta-zespolow

### Q3 2026 — v0.2

1. Kanban board
2. Komentarze przy zadaniach
3. Webhooki (Slack, Discord)
4. Eksport CSV

### Q4 2026 — v1.0

1. Role: owner / member / viewer
2. Billing (Stripe)
3. SLA i monitoring (Sentry + uptime)

---

## FAQ

<details>
  <summary>Czy MVP wspiera wielu uzytkownikow w jednym projekcie?</summary>

Tak — kazdy projekt moze miec wielu czlonkow, ale w MVP wszyscy maja te same uprawnienia.
Role pojawia sie w v1.0.

</details>

<details>
  <summary>Jak wygenerowac JWT_SECRET?</summary>

```bash
openssl rand -hex 32
```

</details>

---

## Kontakt

- **Product:** product@taskflow.example
- **Repozytorium:** [github.com/example/taskflow](https://github.com/example/taskflow)
- **Status API:** [status.taskflow.example](https://status.taskflow.example)

---

*Ostatnia aktualizacja dokumentacji: 2026-03-20 · Wersja API: 0.1.0*
