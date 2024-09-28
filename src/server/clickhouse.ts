import { ENV } from '@/env';
import { createClient } from '@clickhouse/client';

const db = createClient({
  url: ENV.CLICKHOUSE_FQDN,
  username: ENV.CLICKHOUSE_USER,
  password: ENV.CLICKHOUSE_PASSWORD,
  database: ENV.CLICKHOUSE_DATABASE
});

export { db };
