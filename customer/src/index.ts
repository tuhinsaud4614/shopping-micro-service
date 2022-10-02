import { SIGNALS } from '@utils/constants';
import app from 'app';
import logger from 'logger';
import config from 'utils/config';

function shutdown({
  signal,
  server,
}: {
  signal: typeof SIGNALS[number];
  server: ReturnType<typeof app.listen>;
}) {
  logger.info(`Got signal ${signal} Good bye.`);

  server.close(() => {
    process.exit(0);
  });
}

function unexpectedErrorHandler(
  error: Error | unknown,
  server: ReturnType<typeof app.listen>,
) {
  logger.error(error);
  server.close(() => {
    logger.info('Server closed');
    process.exit(1);
  });
}

async function startServer() {
  const server = app.listen(config.PORT, async () => {
    logger.info(`Customer server running on ${config.HOST}:${config.PORT}`);
  });

  try {
    // await redisClient.connect();
  } catch (error) {
    process.exit(1);
  }

  SIGNALS.forEach((signal) => {
    process.on(signal, () => shutdown({ signal, server }));
  });

  process.on('uncaughtException', (error) =>
    unexpectedErrorHandler(error, server),
  );
  process.on('unhandledRejection', (error) =>
    unexpectedErrorHandler(error, server),
  );
}

startServer();
