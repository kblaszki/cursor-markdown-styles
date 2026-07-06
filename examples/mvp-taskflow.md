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
┌─────────────┐     HTTPS      ┌─────────────┐
│  Web App    │ ◄────────────► │  API (Node) │
│  (React)    │                │  Express    │
└─────────────┘                └──────┬──────┘
                                      │
                               ┌──────▼──────┐
                               │ PostgreSQL  │
                               └─────────────┘
```

### Stos technologiczny

| Warstwa | Technologia | Uzasadnienie |
|---------|-------------|--------------|
| Frontend | React + Vite | Szybki dev, znany zespolowi |
| Backend | Node.js 20 + Express | Proste REST, jeden jezyk z FE |
| Baza | PostgreSQL 16 | Relacje, JSONB na przyszlosc |
| Auth | JWT + bcrypt | Wystarczajace na MVP |
| Deploy | Docker + Fly.io | Niski koszt, szybki start |

---

## Model danych

```typescript
// src/types/domain.ts

export type TaskStatus = "todo" | "in_progress" | "done";

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  ownerId: string;
  createdAt: Date;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string;
  status: TaskStatus;
  assigneeId?: string;
  dueDate?: string; // ISO 8601
  createdAt: Date;
  updatedAt: Date;
}
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

```typescript
// src/routes/tasks.ts
import { Router } from "express";
import { z } from "zod";
import { requireAuth } from "../middleware/auth";
import { taskService } from "../services/taskService";

const createTaskSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  status: z.enum(["todo", "in_progress", "done"]).default("todo"),
  assigneeId: z.string().uuid().optional(),
  dueDate: z.string().datetime().optional(),
});

export const taskRouter = Router({ mergeParams: true });

taskRouter.post("/", requireAuth, async (req, res, next) => {
  try {
    const body = createTaskSchema.parse(req.body);
    const projectId = req.params.id;

    const task = await taskService.create({
      projectId,
      ...body,
      createdBy: req.user!.id,
    });

    res.status(201).json(task);
  } catch (err) {
    next(err);
  }
});
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

- Node.js **20+**
- Docker (opcjonalnie, do PostgreSQL)
- `npm` lub `pnpm`

### Kroki

```bash
# 1. Klonowanie
git clone https://github.com/example/taskflow.git
cd taskflow

# 2. Zaleznosci
npm install

# 3. Baza danych (Docker)
docker compose up -d postgres

# 4. Konfiguracja
cp .env.example .env
# Edytuj .env — ustaw DATABASE_URL i JWT_SECRET

# 5. Migracje
npm run db:migrate

# 6. Seed (dane demo)
npm run db:seed

# 7. Uruchomienie dev
npm run dev
```

Aplikacja:

- **API:** `http://localhost:3000`
- **Web:** `http://localhost:5173`
- **OpenAPI:** `http://localhost:3000/docs`

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
| `NODE_ENV` | nie | `development` | `development` / `production` |
| `PORT` | nie | `3000` | Port API |
| `DATABASE_URL` | **tak** | — | Connection string PostgreSQL |
| `JWT_SECRET` | **tak** | — | Min. 32 znaki, losowy |
| `JWT_EXPIRES_IN` | nie | `7d` | Czas zycia tokenu |
| `CORS_ORIGIN` | nie | `http://localhost:5173` | Dozwolony origin FE |

Przyklad `.env`:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://taskflow:taskflow@localhost:5432/taskflow_dev
JWT_SECRET=zmien_to_na_losowy_ciag_min_32_znaki
CORS_ORIGIN=http://localhost:5173
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
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

</details>

---

## Kontakt

- **Product:** product@taskflow.example
- **Repozytorium:** [github.com/example/taskflow](https://github.com/example/taskflow)
- **Status API:** [status.taskflow.example](https://status.taskflow.example)

---

*Ostatnia aktualizacja dokumentacji: 2026-03-20 · Wersja API: 0.1.0*
