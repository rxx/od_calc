import { useStore } from '@nanostores/react';
import { $stats } from '../store/stats';
import { useState } from 'react';

function JsonArea() {
  const stats = useStore($stats);
  const name: string = stats?.status?.name || 'dominion name'
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
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-full rounded-md bg-gray-800 p-2 text-center
        align-middle font-bold capitalize text-indigo-400 shadow-md">
        {name}
      </div>
      <textarea className="h-10 rounded-md bg-gray-800 p-2 text-white"
        value={jsonValue} placeholder="Put ops here" spellCheck="false"
        onChange={(e) => setStats(e.target.value)}
      />

      <button className="h-10 rounded-md bg-gray-600 text-white
          hover:bg-gray-700" onClick={() => setStats('')}
      >
        Clear
      </button>
    </div>
  )
}

export default JsonArea;
