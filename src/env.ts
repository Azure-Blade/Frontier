import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// https://env.t3.gg/docs/introduction
export const ENV = createEnv({
  server: {
    CLICKHOUSE_FQDN: z.string().url(),
    CLICKHOUSE_USER: z.string(),
    CLICKHOUSE_PASSWORD: z.string(),

    CLICKHOUSE_DATABASE: z.string(),

    NODE_ENV: z.enum(['development', 'test', 'production']).default('development')
  },

  client: {
    //NEXT_PUBLIC_EXAMPLE: z.string(),
  },

  runtimeEnv: {
    CLICKHOUSE_FQDN: process.env.CLICKHOUSE_FQDN,
    CLICKHOUSE_USER: process.env.CLICKHOUSE_USER,
    CLICKHOUSE_PASSWORD: process.env.CLICKHOUSE_PASSWORD,
    CLICKHOUSE_DATABASE: process.env.CLICKHOUSE_DATABASE,

    //NEXT_PUBLIC_EXAMPLE: process.env.NEXT_PUBLIC_EXAMPLE,

    NODE_ENV: process.env.NODE_ENV
  },

  /*
   * If you want to skip the validation of the environment variables, you can set the SKIP_ENV_VALIDATION to true
   * This is useful for CI/CD environments where you don't want to set all the environment variables
   * */
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
  emptyStringAsUndefined: true
});
