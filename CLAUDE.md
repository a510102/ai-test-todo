# ai-test-todo — Project Overview

## Purpose
A note-taking web application built with AI assistance, covering full-stack development from database to frontend to deployment.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vue 3 + TypeScript + Vite + Vuetify 3 |
| State | Pinia |
| HTTP Client | axios |
| Backend | Hono + TypeScript (Node.js) |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | JWT (httpOnly cookies) |

## Directory Layout
```
ai-test-todo/
├── frontend/   # Vue 3 SPA — see frontend/CLAUDE.md
└── backend/    # Hono REST API — see backend/CLAUDE.md
```

## Authentication
- JWT tokens are issued by the backend and stored in **httpOnly cookies only**.
- Never store tokens in localStorage or sessionStorage.
- Cookies must be: `httpOnly`, `Secure`, `SameSite=Strict`.

## Development Workflow
- Frontend and backend are developed and run independently.
- Frontend dev server proxies API requests to the backend (configured in Vite).
- Backend runs separately; use environment variables for all config.

## Key Conventions
- All secrets go in `.env` files — never commit secrets.
- Keep frontend and backend concerns strictly separated.
- See each subdirectory's `CLAUDE.md` for language/framework-specific rules.

## Agent 分工

這個專案使用多個 subagent 分工開發，各自有明確職責：

| Agent | 檔案 | 職責 |
|---|---|---|
| PM Agent | .claude/agents/pm.md | 拆解需求、分派任務給其他 agent |
| Frontend Agent | .claude/agents/frontend.md | Vue 3 頁面、元件、store、api service |
| Backend Agent | .claude/agents/backend.md | Hono 路由、middleware、JWT 驗證 |
| DB Agent | .claude/agents/db.md | Prisma schema、migration、資料庫設計 |

## 開發流程

1. 使用者提出需求 → PM Agent 拆解成任務
2. PM Agent 派工給對應的 agent
3. DB Agent 先處理 schema
4. Backend Agent 建立 API
5. Frontend Agent 建立頁面串接 API

## Skills

| 指令 | 用途 |
|---|---|
| /add-feature | 新增完整功能（PM 統籌） |
| /add-api-route | 新增後端 API 路由 |
| /add-page | 新增前端頁面 + store |
| /db-migrate | 修改 schema + migration |
| /commit | 產出 git commit message |
| /debug | 找出問題根因並修復 |
