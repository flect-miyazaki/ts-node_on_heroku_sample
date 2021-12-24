import { Logger } from '@/utils/logger'
import { LOGGER_PROVIDER } from '@/constants/logger'
const logger = new Logger('sample', LOGGER_PROVIDER.PINO)

logger.info('テスト')
