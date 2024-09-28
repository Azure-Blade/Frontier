'use client';

import type { DataItem } from '@/types';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getData');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Data from ClickHouse</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">Message</th>
            <th className="px-4 py-2">Timestamp</th>
            <th className="px-4 py-2">Metric</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="border px-4 py-2">{item.user_id}</td>
              <td className="border px-4 py-2">{item.message}</td>
              <td className="border px-4 py-2">{new Date(item.timestamp).toLocaleString()}</td>
              <td className="border px-4 py-2">{item.metric.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
