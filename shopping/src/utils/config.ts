import type { JSONSchemaType } from 'env-schema';
import { envSchema } from 'env-schema';

type ENV = {
  PORT: number;
  HOST: string;
};

const schema: JSONSchemaType<ENV> = {
  type: 'object',
  required: ['HOST', 'PORT'],
  properties: {
    PORT: {
      type: 'integer',
      default: 4003,
    },
    HOST: {
      type: 'string',
      default: 'http://localhost',
    },
  },
};

const config = envSchema<ENV>({ schema, dotenv: true });
export default config;
