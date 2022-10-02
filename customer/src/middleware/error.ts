import type { ErrorRequestHandler, RequestHandler } from 'express';

import { HttpError } from '@utils/models';
import logger from 'logger';

/**
 * It creates a new error with the message 'Could not found this route' and passes it to the next
 * function
 * @param _ - The Request object
 * @param __ - The response object
 * @param next - The next function is a function that you call when you are done with your middleware.
 */
export const notFoundHandler: RequestHandler = (_, __, next) => {
  next(new HttpError('Could not found this route', 404));
};

/**
 * If the response headers have already been sent, then log a warning and call the next error handler.
 * Otherwise, log the error message and send a 500 response with the error message
 * @param err - The error object
 * @param _ - The Request object
 * @param res - The response object
 * @param next - The next middleware function in the stack.
 * @returns A function that takes in 4 parameters.
 */
export const errorHandler: ErrorRequestHandler = (err, __, res, next) => {
  if (res.headersSent) {
    logger.warn('Header already sent');
    return next(err);
  }

  if (err instanceof HttpError) {
    logger.error(err.message);
    res.status(err.code).json(err.toObj());
    return;
  }

  logger.error(err.message);

  const result = new HttpError(
    'Something went wrong',
    500,
    'An unknown error occurs',
  ).toObj();

  res.status(500).json(result);
};
