# Frontend — Standards & Conventions

## Framework & Tooling
- **Vue 3** + **TypeScript** bundled with **Vite**
- **Vuetify 3** for UI components
- **Pinia** for state management
- **axios** for HTTP requests (wrapped in a service layer)
- **ESLint + Prettier** for code style enforcement

## Vue Style Rules
- Use **Composition API with `<script setup>`** exclusively — no Options API.
- All components must be written in TypeScript (`.vue` files with `lang="ts"`).
- Props and emits must be explicitly typed.

```vue
<!-- Correct -->
<script setup lang="ts">
const props = defineProps<{ title: string }>()
</script>

<!-- Wrong — do not use Options API -->
<script>
export default { props: ['title'] }
</script>
```

## State Management (Pinia)
- **All global/shared state must live in a Pinia store** — no component-local state for shared data.
- Stores live in `src/stores/`.
- Name stores by feature: `useAuthStore`, `useNotesStore`, etc.

## HTTP / API Layer (axios)
- **Never use axios directly in components or stores.**
- All HTTP calls go through the centralized API service in `src/services/api.ts`.
- `api.ts` configures the axios instance (base URL, credentials, interceptors).
- Feature-specific API functions are exported from `src/services/` (e.g., `notesService.ts`).

```ts
// src/services/api.ts — axios instance (singleton)
import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // required for httpOnly cookies
})

export default api
```

## Directory Structure
```
frontend/src/
├── assets/          # Static assets
├── components/      # Reusable UI components
├── router/          # Vue Router configuration
├── services/        # API service layer (axios wrappers)
│   └── api.ts       # axios instance
├── stores/          # Pinia stores
└── views/           # Page-level components (route targets)
```

## Linting & Formatting
- Run `npm run lint` before committing.
- Prettier config is authoritative for formatting — do not override with manual formatting.
- ESLint errors must be resolved, not suppressed with `// eslint-disable`.

## Environment Variables
- All env vars prefixed with `VITE_` (required by Vite for client-side access).
- Store in `.env.local` (gitignored) — never commit `.env` files with real values.
- Example: `VITE_API_URL=http://localhost:3000`
