# yofteam Nx Monorepo Scaffold

This repository contains an **Nx monorepo** with:

- `web` Angular app (client + executor UI)
- `admin` Angular app (admin UI)
- `api` NestJS app (JWT auth, role guards, PostgreSQL)
- `shared-types` library (DTOs, enums, shared contracts)
- `ui` Angular library (shared UI components)

## Project Structure

```text
apps/
  api/
  web/
  admin/
libs/
  shared-types/
  ui/
```

## Local development

1. Install dependencies:

```bash
yarn install
```

2. Run apps:

```bash
yarn nx serve api
yarn nx serve web
yarn nx serve admin
```

3. Build all:

```bash
yarn nx run-many -t build
```

## Environment files

- `.env.example` - template
- `.env.development` - local dev defaults
- `.env.production` - production-style defaults

Required keys:

- `API_JWT_SECRET`
- `DB_HOST`
- `DB_PORT`
- `DB_USER`
- `DB_PASS`
- `DB_NAME`

## Docker

Build and run the full stack:

```bash
docker compose up --build
```

Services:

- API: http://localhost:3000/api
- Web: http://localhost:4200
- Admin: http://localhost:4300
- PostgreSQL: `localhost:5432`

Stop containers:

```bash
docker compose down
```
