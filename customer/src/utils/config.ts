import envSchema from 'env-schema';

const properties = {
  PORT: {
    type: 'number',
    default: 4000,
  },
  HOST: {
    type: 'string',
    default: 'http://localhost',
  },
};

type ENV = {
  PORT: number;
  HOST: string;
};

const schema = {
  type: 'object',
  required: Object.keys(properties),
  properties,
};

const config = envSchema<ENV>({ schema, dotenv: true });
export default config;
