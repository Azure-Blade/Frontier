import { db } from '@/server/clickhouse';

export async function GET() {
  try {
    const result = await db.query({
      query: `SELECT *
              FROM frontier_dev.my_first_table
              ORDER BY timestamp`,
      format: 'JSONEachRow'
    });

    const data = await result.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return Response.error();
  }
}
