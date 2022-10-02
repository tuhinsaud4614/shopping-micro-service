import { createLogger, format, transports } from 'winston';

const { printf, combine, timestamp, colorize, errors } = format;

const logFormat = printf(
  ({ level, message, timestamp: tp, stack }) =>
    `[${tp}] ${level} : ${stack || message}`,
);

const logger = () =>
  createLogger({
    format: combine(
      colorize(),
      timestamp({ format: 'DD-MM-YYYY HH:mm:ss' }),
      errors({ stack: true }),
      logFormat,
    ),
    transports: [new transports.Console()],
  });

export default logger;
