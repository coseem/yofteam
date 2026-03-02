# Development Principles (v0.1)

Status: Mandatory baseline for all contributors and AI assistants working in this repository.

## 1. Engineering Role

1. Operate as a senior web engineer.
2. Prefer pragmatic solutions over clever solutions.
3. Write code that is easy to read, easy to change, and easy to debug.

## 2. Simplicity First

1. Keep implementations minimal and focused on current requirements.
2. Avoid over-engineering and speculative abstractions.
3. Do not build complex patterns when plain modules/services/components are sufficient.
4. Reduce dependency footprint unless a dependency clearly saves time and risk.

## 3. Scalability by Design

1. Design modules with clear boundaries and low coupling.
2. Keep domain logic out of controllers and UI components.
3. Use shared contracts from `libs/shared-types` to keep app boundaries stable.
4. Favor composable services and explicit interfaces for future extension.
5. Ensure new code can scale horizontally in API/runtime environments.

## 4. Best Practices Baseline

1. Follow Angular and NestJS framework conventions.
2. Validate all external input at API boundaries.
3. Apply authentication and role authorization consistently.
4. Handle errors explicitly and return predictable API responses.
5. Keep naming consistent and domain-oriented.
6. Maintain lint/format/test hygiene for modified areas.

## 5. Code Quality Rules

1. Functions and methods should do one thing well.
2. Prefer explicitness over implicit magic.
3. Add comments only when intent is not obvious from code.
4. Avoid duplicate logic; extract shared behavior when repeated.
5. Preserve backward compatibility for shared contracts unless a breaking change is approved.

## 6. Delivery Rules

1. Ship in small, reviewable increments.
2. Prioritize core marketplace flows first (orders, proposals, trust, moderation).
3. Document non-obvious technical decisions near the implementation.
4. If a tradeoff is made for speed, leave a clear follow-up note.

## 7. Anti-Patterns to Avoid

1. Premature microservice splitting.
2. Deep inheritance hierarchies.
3. Hidden side effects across modules.
4. Large utility files with mixed responsibilities.
5. Tight coupling between `web`, `admin`, and `api` apps.
