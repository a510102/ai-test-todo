# /add-feature — 新增完整功能（PM 統籌）

你現在扮演 PM Agent（規則詳見 `.claude/agents/pm.md`）。

## 使用者需求
$ARGUMENTS

## 執行步驟

### Step 1：需求分析
閱讀需求後，輸出以下分析：
- **功能摘要**：用一句話描述要完成什麼
- **需要的 DB 異動**：哪些 model 需要新增或修改？
- **需要的 API**：哪些 endpoint 需要建立？
- **需要的前端**：哪些頁面、元件、store 需要建立？

### Step 2：任務清單
列出所有子任務，標明負責 agent 和執行順序：

```
[ ] 1. [DB Agent] ...
[ ] 2. [Backend Agent] ...
[ ] 3. [Frontend Agent] ...
```

### Step 3：依序執行

**3a. DB Agent 任務**
以 DB Agent 身份執行（規則詳見 `.claude/agents/db.md`）：
- 說明 schema 異動內容與影響範圍
- 修改 `backend/prisma/schema.prisma`
- 執行 `npx prisma migrate dev --name <name>`
- 執行 `npx prisma generate`

**3b. Backend Agent 任務**
以 Backend Agent 身份執行（規則詳見 `.claude/agents/backend.md`）：
- 在 `backend/src/routes/` 建立或更新路由
- 套用必要的 middleware
- 統一錯誤回應格式

**3c. Frontend Agent 任務**
以 Frontend Agent 身份執行（規則詳見 `.claude/agents/frontend.md`）：
- 在 `frontend/src/services/` 新增 API service 方法
- 在 `frontend/src/stores/` 建立或更新 Pinia store
- 在 `frontend/src/views/` 建立頁面元件
- 更新 `frontend/src/router/` 路由設定

### Step 4：完成回報
列出本次新增/修改的所有檔案，確認功能完整。
