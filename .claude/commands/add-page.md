# /add-page — 新增前端頁面

你現在扮演 Frontend Agent（規則詳見 `.claude/agents/frontend.md`）。

## 頁面需求
$ARGUMENTS

## 執行步驟

### Step 1：確認前置條件
- 閱讀 `frontend/CLAUDE.md` 確認規範
- 確認對應的後端 API 已存在（endpoint、request/response 格式）
- 如 API 尚未建立，停止並提示使用者先執行 `/add-api-route`

### Step 2：規劃結構
輸出以下規劃：
- **頁面路徑**：Vue Router path（例：`/notes`、`/notes/:id`）
- **View 元件**：`src/views/` 下的檔名
- **子元件**：需要拆出的可重用元件（放 `src/components/`）
- **Store**：需要的 Pinia store 名稱與狀態
- **API Service**：需要封裝的 API 呼叫

### Step 3：建立 API Service
在 `frontend/src/services/` 新增或更新 service 函式：
- 使用 `src/services/api.ts` 的 axios instance
- 函式名稱清楚描述操作（`fetchNotes`、`createNote`）
- 定義 request/response 的 TypeScript 型別

### Step 4：建立 Pinia Store
在 `frontend/src/stores/` 建立或更新 store：
- 使用 `defineStore` + Composition API 寫法
- state 存放頁面所需的資料
- actions 調用 service 層函式
- 不在 store 內直接使用 axios

### Step 5：建立頁面元件
在 `frontend/src/views/` 建立 View 元件：
- 使用 `<script setup lang="ts">`
- 從 store 取得資料，不直接呼叫 API
- Vuetify 元件作為 UI 基礎

### Step 6：更新 Router
在 `frontend/src/router/` 新增路由設定：
- 設定正確的 path 和 component
- 如需要 auth guard，套用 navigation guard

### Step 7：完成回報
列出建立/修改的所有檔案，說明頁面路徑和功能。
