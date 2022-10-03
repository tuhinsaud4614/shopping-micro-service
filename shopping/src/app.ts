import compression from 'compression';
import cors from 'cors';
import type { Application } from 'express';
import express, { json, urlencoded } from 'express';
import helmet from 'helmet';

const app: Application = express();

app.use(helmet());
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(compression());
app.use(cors());

app.use('/', (_, res) => {
  res.json('hello from shopping');
});

export default app;
