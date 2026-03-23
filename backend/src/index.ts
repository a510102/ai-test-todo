import 'dotenv/config'
import { OpenAPIHono } from '@hono/zod-openapi'
import { swaggerUI } from '@hono/swagger-ui'
import { serve } from '@hono/node-server'

const app = new OpenAPIHono()

app.get('/', (c) => c.json({ message: 'ai-test-todo API' }))

// Routes will be mounted here as features are developed
// app.route('/api/auth', authRoutes)
// app.route('/api/notes', notesRoutes)

app.doc('/api-spec', {
  openapi: '3.0.0',
  info: { title: 'ai-test-todo API', version: '1.0.0' },
})

app.get('/docs', swaggerUI({ url: '/api-spec' }))

const port = Number(process.env.PORT) || 3000

serve({ fetch: app.fetch, port }, () => {
  console.log(`Server running on http://localhost:${port}`)
  console.log(`Swagger docs:  http://localhost:${port}/docs`)
})
