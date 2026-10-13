import type { IncomingMessage, ServerResponse } from 'node:http'
import { defineEventHandler } from 'h3'
import pino from 'pino'
import pinoHttp from 'pino-http'

const isDevelopment = process.env.NODE_ENV === 'development'

const logger = pino({
  level: isDevelopment ? 'debug' : 'info',
  serializers: {
    req: (request: IncomingMessage) => ({
      method: request.method,
      url: request.url?.split('?')[0],
      remoteAddress: request.socket.remoteAddress,
    }),
    res: (response: ServerResponse) => ({
      statusCode: response.statusCode,
    }),
    err: (error: Error) => isDevelopment
      ? { type: error.name, message: error.message, stack: error.stack }
      : { type: error.name },
  },
})

const httpLogger = pinoHttp({
  logger,
  customLogLevel: (_request, response, error) => {
    if (error || response.statusCode >= 500) return 'error'
    if (response.statusCode >= 400) return 'warn'
    return isDevelopment ? 'debug' : 'info'
  },
})

export default defineEventHandler((event) => {
  httpLogger(event.node.req, event.node.res, () => {})
})
