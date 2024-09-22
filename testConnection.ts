// testConnection.ts

import connection from "./src/server/clickhouse";

async function testConnection() {
  try {
    const result = await connection.query('SELECT version()').toPromise();
    console.log('Connection successful. ClickHouse version:', result);
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

testConnection();
