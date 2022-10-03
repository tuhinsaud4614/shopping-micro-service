import compression from 'compression';
import cors from 'cors';
import type { Application } from 'express';
import express, { json, urlencoded } from 'express';
import proxy from 'express-http-proxy';
import helmet from 'helmet';
import path from 'path';

import config from '@utils/config';
import { errorHandler, notFoundHandler } from 'middleware';

const app: Application = express();

app.use(helmet());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(cors());

app.use('/api/v1/customer', proxy(config.CUSTOMER_ORIGIN));
app.use('/api/v1/shopping', proxy(config.SHOPPING_ORIGIN));
app.use('/api/v1/', proxy(config.PRODUCTS_ORIGIN));

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
