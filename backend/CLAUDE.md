# Backend — Standards & Conventions

## Framework & Tooling
- **Hono** + **TypeScript** (Node.js)
- **ORM**: Prisma with PostgreSQL

## Authentication
- JWT 以 `httpOnly`、`Secure`、`SameSite=Strict` cookie 傳遞

## Directory Structure
```
src/
├── routes/     # Hono 路由，依功能分組
├── middleware/ # Auth、error handler 等 middleware
└── lib/        # Prisma client singleton（prisma.ts）
```

## Error Handling
- 統一回傳 `{ error: string }` 格式

## Security
- 所有 secret 透過 `.env` 載入，不可 hardcode
