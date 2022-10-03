import type { JSONSchemaType } from 'env-schema';
import { envSchema } from 'env-schema';
import path from 'path';

import { isDev } from '@utils/is-type';

type ENV = {
  PORT: number;
  HOST: string;
  DATABASE_URL: string;
};

const schema: JSONSchemaType<ENV> = {
  type: 'object',
  required: ['HOST', 'PORT', 'DATABASE_URL'],
  properties: {
    PORT: {
      type: 'integer',
      default: 4001,
    },
    HOST: {
      type: 'string',
      default: 'http://localhost',
    },
    DATABASE_URL: {
      type: 'string',
      default: 'postgresql://macbookair@localhost:5432/shopping_ms_customer',
    },
  },
};

const config = envSchema<ENV>({
  schema,
  dotenv: isDev() ? { path: path.join(process.cwd(), '.env.dev') } : true,
});
export default config;
