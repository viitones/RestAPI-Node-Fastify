import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionRoutes(app: FastifyInstance) {
  app.get('/transactions', async () => {
    const transaction = await knex('transactions')
      .select('*')
      .where('amount', 1000)

    return transaction
  })
}
