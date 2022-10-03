import compression from 'compression';
import cors from 'cors';
import type { Application } from 'express';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';
import path from 'path';

import { errorHandler, notFoundHandler } from 'middleware';
import routes from 'routes';

const app: Application = express();

app.use(helmet());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(cors());

app.use('/', routes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
