import pino from 'pino'
import { LOGGER_PROVIDER } from '@/constants/logger'
import { loggerInstanceType, loggerOptionsType } from '@/types/logger'

export function loggerFactory(
  loggerType: string,
  loggerOptions: loggerOptionsType
): loggerInstanceType {
  let logger!: loggerInstanceType

  if (loggerType === LOGGER_PROVIDER.PINO) {
    logger = pino({
      formatters: {
        level: (label) => {
          return { level: label }
        }
      },
      timestamp: pino.stdTimeFunctions.isoTime,
      level: process.env.LOG_LEVEL
    }).child(loggerOptions)
  }

  return logger
}
