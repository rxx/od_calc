import React from 'react';
import useStats from "../hooks/useStats";

import BuildingsStats from "./BuildingsStats";
import LandStats from "./LandStats";
import InfoStats from "./InfoStats";

function StatsCalculator() {
  const [jsonStats, setJsonStats, stats] = useStats();

  return (
    <>
      <div className="flex flex-row gap-1">
      <textarea
        value={jsonStats}
        onChange={(e) => setJsonStats(e.target.value)}
        className="h-10 w-10 p-2 bg-gray-800 text-white rounded-md resize-none" 
      />

      <button onClick={() => setJsonStats('')}
        className="h-10 w-10 mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 bt-4"
      >
        Clear
      </button>
    </div>
      {stats && (
        <>
          <InfoStats stats={stats} />
          
          <BuildingsStats stats={stats} />
      
          <LandStats stats={stats} />
        </>
        )}
    </>
  );
}

export default StatsCalculator;
