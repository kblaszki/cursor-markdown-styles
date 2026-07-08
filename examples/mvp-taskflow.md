# TaskFlow - MVP Documentation

> **TaskFlow** is a lightweight task management system for small teams.
> This document describes version **0.1.0 (MVP)**, the smallest scope needed for product validation.

---

## Table of Contents

1. [Product Goal](#product-goal)
2. [MVP Scope](#mvp-scope)
3. [Architecture](#architecture)
4. [Data Model](#data-model)
5. [API REST](#api-rest)
6. [Installation](#installation)
7. [Environment Variables](#environment-variables)
8. [Roadmap](#roadmap)

---

## Product Goal

Development teams lose time switching between Jira, Slack, and scattered notes.
**TaskFlow MVP** is meant to solve one problem:

> *One place for team tasks with a simple API and a browser-based view.*

### Success Metrics (MVP)

| Metric | Goal | Measurement |
|--------|------|-------------|
| Time-to-first-task | < 5 min | onboarding flow in the dashboard |
| Active teams | 10 | signups within 30 days |
| 7-day retention | 40% | logins after one week |

---

## MVP Scope

### Included

- [x] Registration and login (email + password)
- [x] Project task CRUD
- [x] Statuses: `todo`, `in_progress`, `done`
- [x] REST API with OpenAPI documentation
- [x] Simple web dashboard

### Out Of Scope (v0.2+)

- [ ] Slack integration
- [ ] Kanban board with drag and drop
- [ ] Roles and permissions per project
- [ ] Mobile app

---

## Architecture

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

### Technology Stack

| Layer | Technology | Reason |
|-------|------------|--------|
| Frontend | React + Vite | Fast development, familiar to the team |
| Backend | C++20 + Drogon | High performance, low REST latency |
| Database | PostgreSQL 16 + libpqxx | Reliable transactions, JSONB support |
| Auth | JWT (`jwt-cpp`) | Lightweight header-only library |
| Build | CMake + vcpkg | Reproducible dependencies |
| Deploy | Docker + Fly.io | Low cost, quick setup |

---

## Data Model

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

### Relationships (Simplified)

```
User 1───* Project
Project 1───* Task
User 1───* Task (assignee, optional)
```

---

## API REST

Base URL: `https://api.taskflow.example/v1`

### Endpoints

| Method | Path | Description | Auth |
|--------|------|-------------|------|
| `POST` | `/auth/register` | Register a user | — |
| `POST` | `/auth/login` | Log in and return a JWT | — |
| `GET` | `/projects` | List the user's projects | Bearer |
| `POST` | `/projects` | Create a project | Bearer |
| `GET` | `/projects/:id/tasks` | List tasks in a project | Bearer |
| `POST` | `/projects/:id/tasks` | Create a task | Bearer |
| `PATCH` | `/tasks/:id` | Update a task | Bearer |
| `DELETE` | `/tasks/:id` | Delete a task | Bearer |

### Example: Create A Task

**Request:**

```http
POST /v1/projects/prj_7xk2/tasks HTTP/1.1
Host: api.taskflow.example
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Content-Type: application/json

{
  "title": "Implement PATCH /tasks endpoint",
  "description": "Handle status and assignee updates",
  "status": "todo",
  "dueDate": "2026-04-15"
}
```

**Response `201 Created`:**

```json
{
  "id": "tsk_m9f3a",
  "projectId": "prj_7xk2",
  "title": "Implement PATCH /tasks endpoint",
  "description": "Handle status and assignee updates",
  "status": "todo",
  "assigneeId": null,
  "dueDate": "2026-04-15",
  "createdAt": "2026-03-20T14:32:00.000Z",
  "updatedAt": "2026-03-20T14:32:00.000Z"
}
```

### Handler (Backend Excerpt)

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

### Error Codes

| Code | Meaning | Example |
|------|---------|---------|
| `400` | Invalid data | Missing `title` |
| `401` | Missing or expired token | — |
| `403` | No access to the project | Someone else's `projectId` |
| `404` | Not found | Nonexistent task |
| `409` | Conflict | Duplicate email during registration |

---

## Installation

### Requirements

- **C++20** (GCC 13+, Clang 17+ lub MSVC 19.38+)
- **CMake** 3.20+
- **vcpkg** or Conan (dependencies)
- Docker (optional, for PostgreSQL)

### Steps

```bash
# 1. Clone
git clone https://github.com/example/taskflow.git
cd taskflow

# 2. Dependencies (vcpkg)
vcpkg install drogon libpqxx nlohmann-json jwt-cpp

# 3. Database (Docker)
docker compose up -d postgres

# 4. Configuration
cp config/app.example.json config/app.json
export JWT_SECRET=$(openssl rand -hex 32)

# 5. Migrations
./build/taskflow-migrate --config config/app.json

# 6. Seed (demo data)
./build/taskflow-seed --config config/app.json

# 7. Build and run
cmake -S . -B build -DCMAKE_TOOLCHAIN_FILE=$VCPKG_ROOT/scripts/buildsystems/vcpkg.cmake
cmake --build build
./build/taskflow_api --config config/app.json
```

Application URLs:

- **API:** `http://localhost:8080`
- **Web:** `http://localhost:5173`
- **OpenAPI:** `http://localhost:8080/docs`

### Docker Compose (Excerpt)

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

## Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `TASKFLOW_ENV` | no | `development` | `development` / `production` |
| `TASKFLOW_PORT` | no | `8080` | API port |
| `DATABASE_URL` | **yes** | — | PostgreSQL connection string |
| `JWT_SECRET` | **yes** | — | Minimum 32 random characters |
| `JWT_EXPIRES_IN` | no | `7d` | Token lifetime |
| `CORS_ORIGIN` | no | `http://localhost:5173` | Allowed frontend origin |

Example `config/app.json`:

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

## Roadmap

### Q2 2026 - MVP (Current)

1. Stabilize API v1
2. Dashboard with a task list
3. Production deployment on Fly.io
4. Onboard 3 beta teams

### Q3 2026 - v0.2

1. Kanban board
2. Task comments
3. Webhooks (Slack, Discord)
4. CSV export

### Q4 2026 - v1.0

1. Role: owner / member / viewer
2. Billing (Stripe)
3. SLA i monitoring (Sentry + uptime)

---

## FAQ

<details>
  <summary>Does the MVP support multiple users in one project?</summary>

Yes. Each project can have multiple members, but in the MVP they all share the same permissions.
Roles arrive in v1.0.

</details>

<details>
  <summary>How do I generate `JWT_SECRET`?</summary>

```bash
openssl rand -hex 32
```

</details>

---

## Contact

- **Product:** product@taskflow.example
- **Repository:** [github.com/example/taskflow](https://github.com/example/taskflow)
- **Status API:** [status.taskflow.example](https://status.taskflow.example)

---

*Last documentation update: 2026-03-20 · API version: 0.1.0*
