import pino from 'pino'
import { randomUUID } from 'crypto'

let logger: pino.Logger

try {
  const transport = process.env.NODE_ENV !== 'production' ? {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname'
    }
  } : undefined

  logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    base: { pid: false },
    timestamp: pino.stdTimeFunctions?.isoTime,
    // cast to any to avoid TypeScript transport typing issues
    transport: transport as any
  })
} catch (err) {
  // If pino-pretty isn't installed or transport setup fails, fall back
  // to a plain pino logger and warn the developer.
  // eslint-disable-next-line no-console
  console.warn('pino pretty transport unavailable — install `pino-pretty` for colored logs')
  logger = pino({
    level: process.env.LOG_LEVEL || 'info',
    base: { pid: false },
    timestamp: pino.stdTimeFunctions?.isoTime
  })
}

type Meta = Record<string, any> | undefined

export function info(message: string, meta?: Meta) {
  if (meta) logger.info(meta, message)
  else logger.info(message)
}

export function warn(message: string, meta?: Meta) {
  if (meta) logger.warn(meta, message)
  else logger.warn(message)
}

export function error(message: string, meta?: Meta) {
  if (meta) logger.error(meta, message)
  else logger.error(message)
}

export function newRequestId() {
  return typeof randomUUID === 'function' ? randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2,8)}`
}

export default logger