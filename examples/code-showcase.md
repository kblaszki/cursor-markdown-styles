# Showcase fragmentow kodu C++

Plik do testowania motywu **C++ Modern** na roznych konstrukcjach jezyka.

## Klasa i szablony

```cpp
#pragma once

#include <optional>
#include <string>
#include <vector>

enum class TaskStatus { Todo, InProgress, Done };

struct Task {
    std::string id;
    std::string title;
    TaskStatus status{TaskStatus::Todo};
    std::optional<std::string> assignee_id;
};

template<typename Repository>
class TaskService {
public:
    explicit TaskService(Repository repo) : repo_{std::move(repo)} {}

    Task create(std::string project_id, std::string title) {
        return repo_.insert(Task{
            .id = repo_.next_id(),
            .title = std::move(title),
            .status = TaskStatus::Todo,
        });
    }

private:
    Repository repo_;
};
```

## Implementacja serwisu

```cpp
#include "task_service.hpp"
#include <pqxx/pqxx>
#include <stdexcept>

class PgTaskRepository {
public:
    explicit PgTaskRepository(std::string conn_string)
        : conn_string_{std::move(conn_string)} {}

    std::string next_id() {
        // generowanie ULID / UUID w warstwie aplikacji
        return "tsk_" + generate_short_id();
    }

    Task insert(Task task) {
        pqxx::connection conn{conn_string_};
        pqxx::work tx{conn};

        auto row = tx.exec_params1(
            "INSERT INTO tasks (id, title, status) "
            "VALUES ($1, $2, $3) RETURNING id, title, status",
            task.id, task.title, to_string(task.status));

        tx.commit();
        return Task{
            .id = row["id"].as<std::string>(),
            .title = row["title"].as<std::string>(),
            .status = parse_status(row["status"].as<std::string>()),
        };
    }

private:
    std::string conn_string_;
};
```

## Lambda i algorytmy STL

```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <vector>

int main() {
    std::vector<int> values{3, 1, 4, 1, 5, 9};

    auto evens = values
        | std::views::filter([](int n) { return n % 2 == 0; })
        | std::views::transform([](int n) { return n * n; });

    for (int v : evens) {
        std::cout << v << '\n';
    }
}
```

## SQL (migracja)

```sql
CREATE TYPE task_status AS ENUM ('todo', 'in_progress', 'done');

CREATE TABLE tasks (
    id          TEXT PRIMARY KEY,
    project_id  TEXT NOT NULL REFERENCES projects(id),
    title       VARCHAR(200) NOT NULL,
    status      task_status NOT NULL DEFAULT 'todo',
    assignee_id TEXT REFERENCES users(id),
    due_date    DATE,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_tasks_project ON tasks(project_id);
```

## CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.20)
project(taskflow_api VERSION 0.1.0 LANGUAGES CXX)

set(CMAKE_CXX_STANDARD 20)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

find_package(Drogon CONFIG REQUIRED)
find_package(libpqxx CONFIG REQUIRED)

add_executable(taskflow_api
    src/main.cpp
    src/routes/tasks.cpp
    src/repositories/pg_task_repository.cpp
)

target_link_libraries(taskflow_api PRIVATE Drogon::Drogon pqxx)
```

## JSON / konfiguracja

```json
{
  "app": {
    "host": "0.0.0.0",
    "port": 8080,
    "threads": 4
  },
  "database": {
    "connection_string": "postgresql://taskflow:taskflow@localhost:5432/taskflow_dev"
  },
  "jwt": {
    "secret_env": "JWT_SECRET",
    "expires_in": "7d"
  }
}
```

## Bash / budowanie

```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Debug
cmake --build build
./build/taskflow_api --config config/app.json
```

## Kod inline w akapicie

Uzyj `cmake --build build` aby skompilowac. Flaga `TASKFLOW_STRICT_CONFIG` wlacza walidacje schematu. W kodzie sprawdz `std::getenv("DATABASE_URL")`.

## Porownanie: przed / po refaktorze

**Przed:**

```cpp
Task* find_task(std::vector<Task>& tasks, const char* id) {
    for (auto& t : tasks)
        if (t.id == id) return &t;
    return nullptr;
}
```

**Po:**

```cpp
std::optional<Task> find_task(const std::vector<Task>& tasks, std::string_view id) {
    auto it = std::ranges::find(tasks, id, &Task::id);
    if (it == tasks.end()) return std::nullopt;
    return *it;
}
```

## Blok bez jezyka (HTTP)

```
POST /api/v1/tasks HTTP/1.1
Host: api.taskflow.example
Content-Type: application/json

{
  "title": "Nowe zadanie",
  "priority": "high"
}
```
