import { Hono } from 'hono'

const app = new Hono()
const PORT = Bun.env.PORT || 3000

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

Bun.serve({
  fetch: app.fetch,
  port: PORT,
})

export default app
