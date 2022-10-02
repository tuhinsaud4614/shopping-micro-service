import { isDev } from '@utils/is-type';
import loggerDev from './logger.dev';
import loggerProd from './logger.prod';

export default isDev() ? loggerDev() : loggerProd();
