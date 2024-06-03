import React from 'react';

interface LandStatsProps {
  stats: {
    land: {
      totalLand: number;
      totalBarrenLand: number;
      explored: { 
        [landType: string]: { 
            amount: number;
            barren:number 
          }
        };
    };
  };
}

const LandStats: React.FC<LandStatsProps> = ({ stats }) => {
  const landData = stats.land.explored;

  const totalLand = stats.land.totalLand;
  const barrenLand = stats.land.totalBarrenLand;

  const landTypes = Object.keys(landData);

  return (
    <div className="text-white bg-gray-800 shadow-md rounded px-1 pt-1 pb-1 mb-4">
      <h3 className="mb-2">Land Overview</h3>

      <div className="flex flex-col">
        <div className="flex text-left font-bold uppercase text-xs px-1 py-2">
          <div className="w-1/4">Land Type</div>
          <div className="w-1/4 text-center">Barren</div>
          <div className="w-1/4 text-center">Total</div>
          <div className="w-1/4 text-center">With Incoming</div>
        </div>

        {landTypes.map(landType => {
          const landInfo = landData[landType];
          const barrenPercentage = ((landInfo.barren / totalLand) * 100).toFixed(2);
          const totalPercentage = ((landInfo.amount / totalLand) * 100).toFixed(2);

          return (
            <div key={landType} className="flex border-b text-left text-sm px-1 py-1">
              <div className="w-1/4">{landType === 'plain' ? `${landType} (home)` : landType}</div>
              <div className="w-1/4 text-center">{landInfo.barren} ({barrenPercentage}%)</div>
              <div className="w-1/4 text-center">{landInfo.amount} ({totalPercentage}%)</div>
              <div className="w-1/4 text-center">{landInfo.amount} ({totalPercentage}%)</div>
            </div>
          );
        })}

        <div className="flex bg-gray-900 text-left font-bold text-sm px-1 py-1">
          <div className="w-1/4">Total</div>
          <div className="w-1/4 text-center">{barrenLand}</div>
          <div className="w-1/4 text-center">{totalLand}</div>
          <div className="w-1/4 text-center">{totalLand}</div>
        </div>
      </div>
    </div>
  );
};

export default LandStats;
