import { createClient } from '@clickhouse/client';

const connection = createClient({
  url: 'http://localhost:8123',
  username: 'default',
  password: 'your_password',
  database: 'helloworld',
});

export default connection;
