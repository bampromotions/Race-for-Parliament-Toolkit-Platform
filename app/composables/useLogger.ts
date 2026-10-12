import pino from 'pino'

const isDevelopment = import.meta.dev
const environment = isDevelopment ? 'development' : 'production'

const logger = pino({
  level: isDevelopment ? 'debug' : 'warn',
  redact: {
    paths: [
      'password',
      '*.password',
      'email',
      '*.email',
      'accessToken',
      '*.accessToken',
      'refreshToken',
      '*.refreshToken',
      'idToken',
      '*.idToken',
      'authorization',
      '*.authorization',
      'cookie',
      '*.cookie',
      'serviceAccount',
      '*.serviceAccount',
      'firebaseServiceAccountJson',
      '*.firebaseServiceAccountJson',
    ],
    censor: '[REDACTED]',
  },
})

type LogLevel = 'debug' | 'info' | 'warn' | 'error'

export function useLogger() {
  function log(level: LogLevel, message: string, details: Record<string, unknown> = {}) {
    logger[level](details, message)
  }

  return { environment, isDevelopment, log }
}
