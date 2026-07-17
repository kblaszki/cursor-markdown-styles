# Mermaid Diagram Showcase

A fixture for testing **C++ Modern v3 Diagrams** against the full range of Mermaid diagram types used in technical documentation.

> **Note:** Diagrams render in **Markdown Preview Enhanced (MPE)** only. The browser workbench shows ```mermaid blocks as source code.

## Setup (MPE)

1. Paste [`themes/mpe/global-cpp-modern-v3-diagrams.less`](../themes/mpe/global-cpp-modern-v3-diagrams.less) into `%USERPROFILE%\.crossnote\style.less`.
2. Add to `settings.json`:

```json
{
  "markdown-preview-enhanced.previewTheme": "none.css",
  "markdown-preview-enhanced.mermaidTheme": "default"
}
```

Use `"default"`, not `"dark"` — the dark Mermaid CSS often restores light-gray edge-label backgrounds.

3. Open **Markdown Preview Enhanced: Open Config Script (Global)** — this opens `%USERPROFILE%\.crossnote\config.js`.
4. Inside `mermaidConfig`, keep `"startOnLoad": false` and merge in every field from [`themes/mpe/mermaid-config-cpp-modern.json`](../themes/mpe/mermaid-config-cpp-modern.json) (`theme`, `themeVariables`, `flowchart`, …). That JSON is the **contents** of `mermaidConfig`, not a replacement for the whole `config.js`.
5. Save `config.js` and refresh the MPE preview.

Full copy-paste example and troubleshooting: [themes/mpe/README.md — Configure Mermaid](../themes/mpe/README.md#configure-mermaid-open-config-script).

For the light variant use `global-cpp-modern-v3-diagrams-light.less` and set `"darkMode": false` in `themeVariables`.

---

## Flowchart (CI Pipeline)

Build, test, and deploy pipeline for the taskflow service.

```mermaid
flowchart LR
  push[Git push] --> build[CMake build]
  build --> unit[Unit tests]
  unit --> lint[clang-tidy]
  lint --> deploy{main branch?}
  deploy -->|yes| prod[Deploy API]
  deploy -->|no| skip[Skip deploy]
```

## Flowchart with Subgraphs (Layered Architecture)

Three-tier layout: HTTP API, domain services, and PostgreSQL persistence.

```mermaid
flowchart TB
  subgraph apiLayer [API Layer]
    router[HttpRouter]
    auth[AuthMiddleware]
  end

  subgraph serviceLayer [Service Layer]
    taskSvc[TaskService]
    userSvc[UserService]
  end

  subgraph dataLayer [Data Layer]
    pgRepo[PgTaskRepository]
    db[(PostgreSQL)]
  end

  router --> auth
  auth --> taskSvc
  auth --> userSvc
  taskSvc --> pgRepo
  userSvc --> pgRepo
  pgRepo --> db
```

## Sequence Diagram (REST API)

Same scenario as the ASCII sequence in `documentation-patterns.md`.

```mermaid
sequenceDiagram
  participant Client
  participant API as API C++
  participant PG as PostgreSQL

  Client->>API: POST /tasks
  API->>PG: INSERT
  PG-->>API: OK
  API-->>Client: 201 Created

  Client->>API: GET /tasks
  API->>PG: SELECT
  PG-->>API: rows
  API-->>Client: 200 OK
```

## Class Diagram (Domain Model)

Core types from the taskflow C++ codebase.

```mermaid
classDiagram
  class Task {
    +string id
    +string title
    +TaskStatus status
    +optional~string~ assignee_id
  }

  class TaskService {
    -Repository repo_
    +Task create(string project_id, string title)
  }

  class PgTaskRepository {
    -string conn_string_
    +string next_id()
    +Task insert(Task task)
  }

  class TaskStatus {
    <<enumeration>>
    Todo
    InProgress
    Done
  }

  TaskService --> PgTaskRepository : uses
  TaskService ..> Task : creates
  Task --> TaskStatus
```

## State Diagram (Task Lifecycle)

```mermaid
stateDiagram-v2
  direction LR
  [*] --> Todo
  Todo --> InProgress : assign
  InProgress --> Done : complete
  InProgress --> Todo : unassign
  Done --> [*]
```

## Entity-Relationship Diagram

```mermaid
erDiagram
  PROJECT ||--o{ TASK : contains
  USER ||--o{ TASK : assigned
  PROJECT {
    string id PK
    string name
    datetime created_at
  }
  TASK {
    string id PK
    string title
    string status
    string project_id FK
    string assignee_id FK
  }
  USER {
    string id PK
    string email
    string display_name
  }
```

## Gantt Chart (MVP Phases)

```mermaid
gantt
  title Taskflow MVP
  dateFormat YYYY-MM-DD
  section Foundation
  Database migrations     :a1, 2026-01-01, 14d
  Auth middleware         :a2, after a1, 10d
  section API
  Task CRUD endpoints     :b1, after a2, 21d
  Webhook dispatch        :b2, after b1, 14d
  section Frontend
  Dashboard MVP           :c1, after b1, 28d
```

## Pie Chart (Task Status Distribution)

```mermaid
pie title Tasks by Status
  "Todo" : 42
  "In Progress" : 28
  "Done" : 30
```

## Git Graph (Feature Branch)

```mermaid
gitGraph
  commit id: "init"
  branch feature/webhooks
  checkout feature/webhooks
  commit id: "add webhook model"
  commit id: "dispatch events"
  checkout main
  merge feature/webhooks id: "merge webhooks"
  commit id: "release 1.2.0"
```

## User Journey (Onboarding)

```mermaid
journey
  title Developer Onboarding
  section Setup
    Clone repo: 5: Dev
    Run migrations: 3: Dev
    Seed database: 4: Dev
  section First task
    Create task via API: 5: Dev
    Verify in dashboard: 4: Dev
  section Production
    Deploy to staging: 3: Dev, Ops
    Smoke test: 5: Ops
```

## Mindmap (Documentation Structure)

```mermaid
mindmap
  root((Taskflow Docs))
    Getting Started
      Install
      Configuration
      First API call
    Architecture
      API layer
      Services
      PostgreSQL
    API Reference
      Tasks
      Users
      Webhooks
    Operations
      Migrations
      Monitoring
      Runbooks
```

## Quadrant Chart (Backlog Prioritization)

```mermaid
quadrantChart
  title Feature Prioritization
  x-axis Low Effort --> High Effort
  y-axis Low Impact --> High Impact
  quadrant-1 Quick wins
  quadrant-2 Strategic
  quadrant-3 Fill-ins
  quadrant-4 Reconsider
  Webhook retries: [0.3, 0.85]
  Dark mode dashboard: [0.6, 0.4]
  Bulk task import: [0.75, 0.7]
  Custom emoji picker: [0.9, 0.15]
```

## Block Diagram (Module Layout)

Requires a recent MPE / Mermaid version. If the diagram fails to render, update the extension.

Vertical layout avoids overlapping connectors in narrow preview panes.

```mermaid
block-beta
  columns 1

  block:api:2
    columns 2
    router["HttpRouter"]
    auth["AuthMiddleware"]
  end

  block:svc:2
    columns 2
    taskSvc["TaskService"]
    userSvc["UserService"]
  end

  block:data:2
    columns 2
    pgRepo["PgTaskRepository"]
    db[("PostgreSQL")]
  end

  router --> taskSvc
  auth --> userSvc
  taskSvc --> pgRepo
  pgRepo --> db
```

## Frontmatter Theme Variables (Optional)

Per-diagram `themeVariables` support depends on your MPE / Mermaid version. Use only if the block below renders correctly.

```mermaid
---
title: Per-diagram theme override
config:
  theme: base
  themeVariables:
    primaryColor: "#2d2d30"
    primaryTextColor: "#d4d4d4"
    primaryBorderColor: "#569cd6"
    lineColor: "#9d9d9d"
    secondaryColor: "#333333"
    tertiaryColor: "#2b2b2b"
---
flowchart LR
  readConfig[Read config] --> validate[Validate JSON]
  validate --> connect[Connect DB]
  connect --> ready[Service ready]
```
