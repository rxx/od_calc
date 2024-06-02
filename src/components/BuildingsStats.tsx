import React from 'react';

interface BuildingsProps {
  jsonData: string;
}

const BuildingsStats: React.FC<BuildingsProps> = ({ jsonData }) => {
  let data = JSON.parse(jsonData);
  let buildingsData = data.survey.constructed;

  const totalConstructed = Object.values(buildingsData).reduce((sum, val) => sum + val, 0);

  const buildingNames = Object.keys(buildingsData);

  return (
    <div className="text-white bg-gray-800 shadow-md rounded px-1 pt-1 pb-1 mb-4">
      <h3 className="mb-2">Constructed Buildings <span>Barren Land: 0 (0.00%)</span></h3>
      <div className="flex flex-col">
        <div className="flex bg-gray-900 text-left font-bold uppercase text-xs px-1 py-2">
          <div className="w-1/3">Building Type</div>
          <div className="w-1/3 text-center">Constructed</div>
          <div className="w-1/3 text-center">With Incoming</div>
        </div>

        {buildingNames.map(buildingName => {
          const constructed = buildingsData[buildingName];
          const percentage = ((constructed / totalConstructed) * 100).toFixed(2);

          return (
            <div key={buildingName} className="flex border-b border-gray-900 text-left text-sm px-1 py-1">
              <div className="w-1/3">{buildingName}</div>
              <div className="w-1/3 text-center">{constructed} ({percentage}%)</div>
              <div className="w-1/3 text-center">{constructed} ({percentage}%)</div>
            </div>
          );
        })}

        <div className="flex bg-gray-900 text-left font-bold text-sm px-1 py-1">
          <div className="w-1/3">Total</div>
          <div className="w-1/3 text-center">{totalConstructed} (100.00%)</div>
          <div className="w-1/3 text-center">{totalConstructed} (100.00%)</div>
        </div>
      </div>
    </div>
  );
};

export default BuildingsStats;
