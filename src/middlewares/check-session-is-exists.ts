/* eslint-disable camelcase */
import { FastifyRequest, FastifyReply } from 'fastify'

export async function checkSessionIdExists(
  req: FastifyRequest,
  rep: FastifyReply,
) {
  const session_id = req.cookies.session_id

  if (!session_id) {
    return rep.status(401).send({ message: 'Unauthorized' })
  }
}
