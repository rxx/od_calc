import React, { useState } from 'react';
import BuildingsStats from "./BuildingsStats";

function StatsCalculator() {
  const [jsonData, setJsonData] = useState('');


  return (
    <>
      <textarea
        value={jsonData}
        onChange={(e) => setJsonData(e.target.value)}
        className="w-full h-40 p-2 bg-gray-800 text-white rounded-md resize-none" 
      />

      <button
        className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Calculate
      </button>
      
      {jsonData && <BuildingsStats client:load jsonData={jsonData} />}
    </>
  );
}

export default StatsCalculator;
