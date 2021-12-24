import { ALogger } from '@/utils/logger.abstract'

export class Logger extends ALogger {
  constructor(batchName: string, loggerType: string) {
    super(batchName, loggerType)
  }

  public debug(message: string) {
    this.loggerInstance.debug(message)
  }

  public info(message: string) {
    this.loggerInstance.info(message)
  }

  public warn(message: string) {
    this.loggerInstance.warn(message)
  }

  public error(message: string) {
    this.loggerInstance.error(message)
  }

  public fatal(message: string) {
    this.loggerInstance.fatal(message)
  }
}
