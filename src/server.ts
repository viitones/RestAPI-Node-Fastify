import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { env } from './env'
import { transactionRoutes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333')
  })
