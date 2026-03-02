# yofteam Project Rules (v0.1)

Status: Living document. This is the initial baseline and should be refined during development.

Companion document:
- `DEVELOPMENT_PRINCIPLES.md` defines mandatory coding behavior (simple implementations, best practices, scalable architecture decisions).

## 1. Product Rules

1. yofteam is a service marketplace platform with three first-class roles: `client`, `executor`, `admin`.
2. Every feature must map to one or more core marketplace goals:
- trust
- transparency
- structured execution
- scalability
3. Platform surfaces in scope:
- `apps/web` for client and executor workflows
- `apps/admin` for moderation and system integrity workflows
- `apps/api` as the canonical backend API
4. Features that do not improve marketplace flow, safety, or operations should be deferred.

## 2. Core Domain Rules

1. Order flow is the primary system backbone and must remain explicit:
- client creates order
- executors submit proposals
- client selects executor
- order progresses through lifecycle states
- both sides can review after completion
2. No order may skip lifecycle transitions without role-based authorization.
3. Reviews and ratings must be bound to completed orders only.
4. Profile verification state must be visible and auditable.
5. Dispute-relevant actions must be traceable for admin moderation.

## 3. Architecture Rules

1. Monorepo standard: Nx workspace with isolated apps and shared libs.
2. Frontend apps (`web`, `admin`) must not duplicate shared contracts; shared DTOs/types live in `libs/shared-types`.
3. Backend modules in `apps/api` must be domain-oriented (auth, users, orders, etc.) and avoid cross-module tight coupling.
4. New cross-app reusable UI must go to `libs/ui`.
5. API contracts must be versionable and backward-aware for frontend consumers.

## 4. Security & Trust Rules

1. JWT-based authentication is required for protected API routes.
2. Role-based access control is mandatory for role-specific actions.
3. Admin permissions must be explicit and least-privilege.
4. Sensitive configuration must come from environment variables; no secrets in source code.
5. All trust-impacting actions (verification, moderation, disputes) should produce auditable records.

## 5. Data & Integrity Rules

1. PostgreSQL is the source of truth for transactional domain data.
2. Domain entities must include lifecycle status fields where applicable (for example, orders and proposals).
3. Soft-delete or archival strategy should be preferred over destructive deletes for moderation-sensitive entities.
4. Validation must exist at API boundary (DTO/class-validator or equivalent).

## 6. Development Workflow Rules

1. Build features incrementally with production readiness in mind.
2. Keep modules small and purpose-driven; avoid "god services".
3. Add tests for domain logic and guard/permission behavior where risk is high.
4. Keep Docker-based local development functional (`docker-compose.yml` is part of the contract).
5. Changes to shared contracts require coordinated updates across consumers.

## 7. UX & Role Experience Rules

1. Client UX must prioritize clarity of order creation and proposal comparison.
2. Executor UX must prioritize discoverability of relevant orders and proposal submission speed.
3. Admin UX must prioritize moderation efficiency, verification decisions, and dispute handling visibility.
4. Trust signals (rating, review count, verification status) should be visible where decisions are made.

## 8. Scaling Direction Rules

1. Design new features with future support for:
- payments
- escrow
- mobile clients
- multilingual interfaces
- AI-assisted matching
2. Avoid assumptions that lock the system to one city/language/currency.
3. Region expansion features should be additive, not breaking.

## 9. Documentation Rules

1. This file is a baseline governance file and may evolve by version.
2. Significant domain or architecture rule changes must be documented in this file in the same PR as implementation.
3. If implementation conflicts with these rules, either:
- update implementation to comply, or
- update the rule with explicit rationale

## 10. Current Non-Goals (Initial Stage)

1. Full payment/escrow implementation.
2. Native mobile app delivery.
3. Advanced AI matching in production.

These are roadmap items and should not block core marketplace MVP execution.
