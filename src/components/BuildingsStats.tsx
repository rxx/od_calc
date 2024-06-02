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
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl mb-4">Constructed Buildings <span className="text-gray-500">Barren Land: 0 (0.00%)</span></h3>
      <div className="flex flex-col">
        <div className="flex bg-gray-200 text-left font-bold uppercase text-xs px-4 py-2">
          <div className="w-1/4">Building Type</div>
          <div className="w-1/4 text-center">Constructed</div>
          <div className="w-1/4 text-center">With Incoming</div>
        </div>

        {buildingNames.map(buildingName => {
          const constructed = buildingsData[buildingName];
          const percentage = ((constructed / totalConstructed) * 100).toFixed(2);

          return (
            <div key={buildingName} className="flex border-b border-gray-200 text-left text-sm px-4 py-2">
              <div className="w-1/4">{buildingName}</div>
              <div className="w-1/4 text-center">{constructed} ({percentage}%)</div>
              <div className="w-1/4 text-center">{constructed} ({percentage}%)</div>
            </div>
          );
        })}

        <div className="flex bg-gray-200 text-left font-bold text-sm px-4 py-2">
          <div className="w-1/4">Total</div>
          <div className="w-1/4 text-center">{totalConstructed} (100.00%)</div>
          <div className="w-1/4 text-center">{totalConstructed} (100.00%)</div>
        </div>
      </div>
    </div>
  );
};

export default BuildingsStats;
