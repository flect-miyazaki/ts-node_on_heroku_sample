import pino from 'pino'

export type loggerInstanceType = pino.Logger
export type loggerOptionsType = {
  batchName: string
}
