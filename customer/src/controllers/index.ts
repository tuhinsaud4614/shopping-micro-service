import type { RequestHandler } from 'express';

export const hello: RequestHandler = async (_, res) => {
  res.json('Hello from customer');
};
