/* eslint-disable camelcase */
import { FastifyRequest, FastifyReply } from 'fastify'

export async function checkSessionIdExists(
  req: FastifyRequest,
  rep: FastifyReply,
) {
  const sessionId = req.cookies.sessionId

  if (!sessionId) {
    return rep.status(401).send({ message: 'Unauthorized' })
  }
}
