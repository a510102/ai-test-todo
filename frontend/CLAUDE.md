# Frontend — Standards & Conventions

## Framework & Tooling
- **Vue 3** + **TypeScript** (Vite)
- **UI**: Vuetify 3
- **State**: Pinia（所有 global state 必須通過 store）
- **HTTP**: axios，封裝在 `src/services/api.ts`（元件不可直接使用 axios）

## API & Composition
- 只使用 **Composition API + `<script setup>`**，禁止 Options API

## Code Quality
- ESLint + Prettier 強制格式
- commit 前必須執行 `yarn lint`

## Directory Structure
```
src/
├── views/        # 頁面元件（對應路由）
├── components/   # 可複用 UI 元件
├── stores/       # Pinia stores
├── services/     # API 封裝（axios）
└── router/       # Vue Router 設定
```
