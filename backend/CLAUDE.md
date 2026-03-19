# Backend — Standards & Conventions

## Framework & Tooling
- **Hono** + **TypeScript** running on Node.js
- **Prisma ORM** with **PostgreSQL**
- **JWT** for authentication (delivered via httpOnly cookies)
- **dotenv** for environment variable loading

## Directory Structure
```
backend/src/
├── lib/
│   └── prisma.ts    # Prisma client singleton
├── middleware/      # Hono middleware (auth, error handling, etc.)
├── routes/          # Route handlers grouped by feature
└── index.ts         # App entry point
```

## Prisma Client
- Use a **singleton** Prisma client to avoid connection pool exhaustion.

```ts
// src/lib/prisma.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default prisma
```

- Import from `../lib/prisma` — never instantiate `new PrismaClient()` elsewhere.

## Authentication (JWT + httpOnly Cookies)
- JWT tokens are **set and validated server-side only**.
- Set cookies with: `httpOnly: true`, `secure: true` (in production), `sameSite: 'strict'`.
- Never return the raw JWT in the response body.
- Auth middleware lives in `src/middleware/auth.ts` and is applied per-route or per-group.

```ts
// Cookie settings (production)
setCookie(c, 'token', jwt, {
  httpOnly: true,
  secure: true,
  sameSite: 'Strict',
  path: '/',
})
```

## Error Handling
- Use **centralized Hono error middleware** — do not write try/catch in every route.
- All error responses use a consistent JSON shape: `{ "error": "<message>" }`.
- HTTP status codes must be semantically correct (400 for validation, 401 for auth, 404 for not found, 500 for server errors).

```ts
// Consistent error response shape
return c.json({ error: 'Unauthorized' }, 401)
```

## Route Organization
- Group routes by feature (e.g., `authRoutes`, `notesRoutes`).
- Mount route groups in `index.ts` with a prefix: `/api/auth`, `/api/notes`.

## Environment Variables
- All configuration via `.env` — never hardcode secrets or connection strings.
- Required variables:
  - `DATABASE_URL` — PostgreSQL connection string
  - `JWT_SECRET` — secret for signing JWTs
  - `PORT` — server port (default: `3000`)
- `.env` is gitignored; provide `.env.example` with placeholder values.

## TypeScript
- Strict mode enabled (`"strict": true` in tsconfig).
- No use of `any` — use proper types or `unknown` with type guards.
