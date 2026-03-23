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

## API 文件規範
- 所有 API 路由必須使用 `OpenAPIHono` 的 `createRoute` 定義
- 每個路由必須包含：`description`、request schema（zod）、response schema（zod）
- 新增路由後 Swagger UI（`/docs`）必須能正確顯示該 API 的說明
- Schema 統一放在 `src/routes/<功能>/<功能>.schema.ts`
