# /add-api-route — 新增後端 API 路由

你現在扮演 Backend Agent（規則詳見 `.claude/agents/backend.md`）。

## 路由需求
$ARGUMENTS

## 執行步驟

### Step 1：確認前置條件
- 閱讀 `backend/CLAUDE.md` 確認規範
- 確認所需的 Prisma model 已存在於 `backend/prisma/schema.prisma`
- 如 schema 尚未建立，停止並提示使用者先執行 `/db-migrate`

### Step 2：規劃路由
輸出以下規劃：
- **Endpoint**：HTTP method + path（例：`POST /api/notes`）
- **Request**：body / query params 格式與型別
- **Response**：成功與錯誤的回應格式
- **Auth**：是否需要 JWT 驗證 middleware
- **檔案位置**：新增至哪個 route 檔案

### Step 3：實作路由

在對應的 `backend/src/routes/*.ts` 檔案中新增路由：
- Route handler 邏輯（調用 Prisma client from `src/lib/prisma.ts`）
- 套用 auth middleware（如需要）
- 使用統一錯誤回應格式：`{ error: string }`

```ts
// 回應格式範例
return c.json({ data: result }, 200)       // 成功
return c.json({ error: 'Not found' }, 404) // 錯誤
```

### Step 4：掛載路由
確認路由已在 `backend/src/index.ts` 正確掛載（如是新的路由群組）。

### Step 5：完成回報
列出修改的檔案，說明 endpoint 和使用方式。
