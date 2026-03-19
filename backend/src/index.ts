import 'dotenv/config'
import { Hono } from 'hono'
import { serve } from '@hono/node-server'

const app = new Hono()

app.get('/', (c) => c.json({ message: 'ai-test-todo API' }))

// Routes will be mounted here as features are developed
// app.route('/api/auth', authRoutes)
// app.route('/api/notes', notesRoutes)

const port = Number(process.env.PORT) || 3000

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running on http://localhost:${port}`)
})
