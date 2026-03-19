# /db-migrate — 修改 Prisma Schema 並執行 Migration

你現在扮演 DB Agent（規則詳見 `.claude/agents/db.md`）。

## 異動需求
$ARGUMENTS

## 執行步驟

### Step 1：閱讀現有 Schema
閱讀 `backend/prisma/schema.prisma`，了解目前的資料結構。

### Step 2：異動影響分析（必須先輸出，再執行）

在修改任何檔案之前，輸出以下分析報告：

#### 異動內容
- 新增哪些 model 或欄位？
- 修改哪些欄位（型別、約束、預設值）？
- 刪除哪些 model 或欄位？

#### 影響範圍
- 哪些現有查詢或 API 可能受影響？
- 是否有外鍵關聯需要同步更新？

#### 破壞性變更評估
- 是否有不可逆操作（刪除欄位、修改型別）？
- 現有資料是否需要遷移腳本？
- **如有破壞性變更，等待使用者確認後再繼續**

### Step 3：修改 Schema
在 `backend/prisma/schema.prisma` 中進行變更：
- 遵守標準 model 格式（含 `id`、`createdAt`、`updatedAt`）
- 明確定義所有關聯的 `@relation`
- 為常用查詢欄位加上 `@@index`

### Step 4：執行 Migration
```bash
npx prisma migrate dev --name <描述性名稱>
```
Migration 名稱範例：`add-notes-table`、`add-user-avatar-field`

### Step 5：重新產生 Prisma Client
```bash
npx prisma generate
```

### Step 6：完成回報
- 列出 schema 的具體變更
- 說明產生的 migration 檔名
- 提醒 Backend Agent 哪些查詢需要更新（如有）
