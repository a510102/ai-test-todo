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

## 環境需求

| 項目 | 版本 |
|------|------|
| Node.js | 24.14.0 LTS (Krypton) |
| npm | 11.9.0 |

> 專案根目錄有 `.node-version` 檔案，記錄所需的 Node.js 版本。
> 進入專案後在 `frontend/` 或 `backend/` 目錄下執行 `npm run switch:node`，可透過 nvs auto 自動切換到正確版本。

### Frontend 主要套件
| 套件 | 版本 |
|------|------|
| vue | ^3.3.4 |
| vuetify | ^3.12.3 |
| pinia | ^3.0.4 |
| vue-router | ^4.6.4 |
| axios | ^1.13.6 |
| vite | ^4.4.5 |
| typescript | ^5.0.2 |

### Backend 主要套件
| 套件 | 版本 |
|------|------|
| hono | ^4.12.8 |
| @hono/node-server | ^1.12.0 |
| @prisma/client | ^5.22.0 |
| jose | ^6.2.2 |
| typescript | ^5.9.3 |
| ts-node | ^10.9.2 |

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
| QA Agent | .claude/agents/qa.md | Code 品質檢查、邏輯驗證、Playwright E2E 測試 |

## 開發流程

### 分支策略
- main：穩定版本，只接受來自 dev 的 merge
- dev：開發主線
- feature/*：各功能分支，開發完 merge 回 dev

### 功能開發流程
1. 從 dev 建立 feature/* 分支
2. PM Agent 拆解需求，依序派工給 DB → Backend → Frontend Agent
3. 功能完成後，QA Agent 執行：
   - Code 品質檢查
   - 功能邏輯驗證
   - Playwright E2E 測試
4. QA 全部通過後 merge 回 dev
5. dev 測試穩定後 merge 到 main

## Skills

| 指令 | 用途 |
|---|---|
| /add-feature | 新增完整功能（PM 統籌） |
| /add-api-route | 新增後端 API 路由 |
| /add-page | 新增前端頁面 + store |
| /db-migrate | 修改 schema + migration |
| /commit | 產出 git commit message |
| /debug | 找出問題根因並修復 |
