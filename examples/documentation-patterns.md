# Technical Documentation Patterns (C++)

Examples of common sections found in C++ library docs, API docs, and internal tooling guides.

## Admonitions (Quotes As Callouts)

> **Note:** Since version 2.0, `TaskRepository::connect()` requires explicit `ConnectionOptions`. The old `const char*` constructor will be removed in 3.0.

> **Tip:** Run migrations in preview mode before production:
> `taskflow-migrate --dry-run --config config/app.json`

> **Warning:** The `/admin/*` endpoint is not protected by rate limiting when `TASKFLOW_ENV=development`.

## Definitions And Syntax

### Function `parse_config`

Loads a JSON file and returns a validated configuration object.

**Parameters:**

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | `std::filesystem::path` | — | Path to the `.json` file |
| `strict` | `bool` | `true` | Throws `ConfigError` on unknown keys |
| `env_prefix` | `std::string_view` | `"TASKFLOW_"` | Environment variable prefix |

**Returns:** `AppConfig`

**Throws:** `ConfigError` when the file does not exist or the JSON is invalid

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

## Changelog (Excerpt)

### [1.2.0] — 2026-03-01

#### Added

- Support for `task.created` and `task.updated` webhooks
- `--json` flag in the `taskflow list` CLI

#### Changed

- **Breaking:** the `user_id` field in API responses was renamed to `assignee_id`
- Default HTTP timeout increased from 5s to 10s
- **C++20** is now required instead of C++17

#### Fixed

- `#142` — duplicate tasks during concurrent `POST` requests
- `#156` — PostgreSQL connection leak during worker restart

## Sequence Diagram (Text)

```
Client          API (C++)        PostgreSQL
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

## Compatibility Table

| Compiler | Standard | TaskFlow API | Status |
|----------|----------|--------------|--------|
| GCC 13+ | C++20 | 0.1.x | **Recommended** |
| Clang 17+ | C++20 | 0.1.x | Supported |
| MSVC 19.38+ | C++20 | 0.1.x | Supported |
| GCC 11 | C++17 | 0.1.x | Unsupported |

## Configuration Snippets

### CMake Build Options

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

### Nginx (Reverse Proxy)

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

### Kubernetes (Probe)

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

## Pre-Release Checklist

- [x] Unit tests pass (`ctest --test-dir build`)
- [x] Migrations tested on staging
- [x] `CHANGELOG` updated
- [x] Version bumped in `CMakeLists.txt`
- [ ] Tag git `v1.2.0`
- [ ] Production deployment
- [ ] Announcement posted to `#releases` in Slack

## Option Comparison

| Aspect | REST + Drogon | gRPC | Custom Socket |
|--------|---------------|------|---------------|
| MVP simplicity | ★★★★☆ | ★★★ | ★★ |
| Documentation | OpenAPI | Proto | None |
| Performance | High | Very high | Implementation-dependent |
| Typing | JSON + validation | Strong (proto) | Manual |

## Commented Tutorial Code

```cpp
// src/etl/import_contacts.cpp - simplified CSV import

#include <fstream>
#include <pqxx/pqxx>
#include <sstream>
#include <string>

// Loads a CSV file, normalizes the email, and writes into a staging table.
int run_etl(const std::string& source_csv, const std::string& db_url) {
    std::ifstream in{source_csv};
    if (!in) throw std::runtime_error("Cannot open CSV file");

    pqxx::connection conn{db_url};
    pqxx::work tx{conn};
    int rows = 0;

    std::string line;
    std::getline(in, line); // header

    while (std::getline(in, line)) {
        std::istringstream ss{line};
        std::string email;
        std::getline(ss, email, ',');

        // normalization
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

## Links And References

- [C++ Reference](https://en.cppreference.com/)
- [CMake Documentation](https://cmake.org/documentation/)
- Internal runbook: `docs/runbooks/incident-response.md`
- Source code for the auth module: `src/middleware/auth_filter.cpp`
