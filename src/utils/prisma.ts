import {
  Prisma,
  PrismaClient as PrismaClientPublic
} from '@/models/public/index'
import { PrismaClient as PrismaClientSalesforce } from '@/models/salesforce/index'
import { PRISMA_LOG_OPTION } from '@/constants/prisma'

export class PrsimaClient {
  private publicSchemaInstance: PrismaClientPublic
  private salesforceSchemaInstance: PrismaClientSalesforce
  private logLevel: Prisma.LogLevel[] | Prisma.LogDefinition[] =
    PRISMA_LOG_OPTION[process.env.LOG_LEVEL || 'error']

  constructor() {
    this.publicSchemaInstance = new PrismaClientPublic({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_WITH_PUBLIC
        }
      },
      log: this.logLevel
    })
    this.salesforceSchemaInstance = new PrismaClientSalesforce({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_WITH_SALESFORCE
        }
      },
      log: this.logLevel
    })
  }

  public async connect(): Promise<void> {
    await this.publicSchemaInstance.$connect()
    await this.salesforceSchemaInstance.$connect()
    // todo: ログ
  }

  public async disConnect(): Promise<void> {
    if (!this.publicSchemaInstance || !this.salesforceSchemaInstance) {
      return
    }

    try {
      await this.publicSchemaInstance.$disconnect()
      await this.salesforceSchemaInstance.$disconnect()
    } catch (error) {
      // todo: ログ
    }
  }

  public get public(): PrismaClientPublic {
    return this.publicSchemaInstance
  }
  public get salesforce(): PrismaClientPublic {
    return this.publicSchemaInstance
  }
}
