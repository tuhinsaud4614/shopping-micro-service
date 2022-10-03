import type { JSONSchemaType } from 'env-schema';
import { envSchema } from 'env-schema';

type ENV = {
  PORT: number;
  HOST: string;
  CUSTOMER_ORIGIN: string;
  PRODUCTS_ORIGIN: string;
  SHOPPING_ORIGIN: string;
};

const schema: JSONSchemaType<ENV> = {
  type: 'object',
  required: [
    'HOST',
    'PORT',
    'CUSTOMER_ORIGIN',
    'PRODUCTS_ORIGIN',
    'SHOPPING_ORIGIN',
  ],
  properties: {
    PORT: {
      type: 'integer',
      default: 4000,
    },
    HOST: {
      type: 'string',
      default: 'http://localhost',
    },
    CUSTOMER_ORIGIN: {
      type: 'string',
      default: 'http://localhost:4001',
    },
    PRODUCTS_ORIGIN: {
      type: 'string',
      default: 'http://localhost:4002',
    },
    SHOPPING_ORIGIN: {
      type: 'string',
      default: 'http://localhost:4003',
    },
  },
};

const config = envSchema<ENV>({ schema, dotenv: true });
export default config;
