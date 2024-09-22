import clickhouseClient from '../../../server/clickhouse'

export default async function GET(
) {
  try {
    const result = await clickhouseClient.query({
      query: 'SELECT user_id, message, timestamp, metric FROM helloworld.my_first_table ORDER BY timestamp DESC LIMIT 10',
      format: 'JSONEachRow',
    })

    const data = await result.json()
    console.log(data)
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching data:', error)
    return Response.error()
  }
}