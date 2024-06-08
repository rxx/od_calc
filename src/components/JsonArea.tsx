import { useStore } from '@nanostores/react';
import { $stats } from '../store/stats';
import { useState } from 'react';

function JsonArea() {
  const stats = useStore($stats);
  const name: string = stats?.status?.name || ''
  const [jsonValue, setValue] = useState('')

  const setStats = (json: string) => {
    setValue(json);

    if (!json) {
      $stats.set(null);
    }

    if (json) {
      try {
        const parsedData = JSON.parse(json);
        $stats.set(parsedData);
      } catch (err) {
        console.error("Error on parsing json:", err);
      }
    }
  }

  return (
    <>
      <div className="mb-2 w-40 bg-gray-800 text-white">{name}</div>
      <div className="flex flex-row gap-3">
        <textarea
          value={jsonValue}
          onChange={(e) => setStats(e.target.value)}
          className="h-10 w-20 resize-none rounded-md bg-gray-800 p-2 text-white"
        />

        <button onClick={() => setStats('')}
          className="h-10 w-20 rounded-md bg-gray-600 
          text-white hover:bg-gray-700"
        >
          Clear
        </button>
      </div>
    </>
  )
}

export default JsonArea;
