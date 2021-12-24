import { Prisma } from '@/models/public/index'

export const PRISMA_LOG_OPTION: {
  [key: string]: Prisma.LogLevel[] | Prisma.LogDefinition[]
} = {
  test: ['query', 'info', 'warn', 'error'],
  debug: ['query', 'info', 'warn', 'error'],
  info: ['info', 'warn', 'error'],
  warn: ['warn', 'error'],
  error: ['error'],
  fatal: ['error']
}
export type PRISMA_LOG_OPTION_TYPE =
  typeof PRISMA_LOG_OPTION[keyof typeof PRISMA_LOG_OPTION]
