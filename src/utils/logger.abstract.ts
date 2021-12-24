import { loggerInstanceType, loggerOptionsType } from '@/types/logger'
import { loggerFactory } from '@/utils/logger.factory'

export abstract class ALogger {
  protected loggerInstance: loggerInstanceType
  protected loggerOptions: loggerOptionsType

  constructor(batchName: string, loggerType: string) {
    this.loggerOptions = {
      batchName
    }
    this.loggerInstance = loggerFactory(loggerType, this.loggerOptions)
  }

  public debug(message: string): void {}
  public info(message: string): void {}
  public warn(message: string): void {}
  public error(message: string): void {}
  public fatal(message: string): void {}
}
