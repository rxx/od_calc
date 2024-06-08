import { useStore } from '@nanostores/react';
import { $stats } from '../store/stats';

interface LandStatsProps {
  land: {
    totalLand: number,
    totalBarrenLand: number,
    explored: {
      [landType: string]: {
        amount: number;
        barren: number
      }
    },
    incoming: {
      [landType: string]: {
        [hour: string]: number
      }
    },
  },
}

const LandStats = () => {
  const stats = useStore($stats) as LandStatsProps;
  if (!stats?.land) { return null }

  const landData = stats.land.explored;

  const totalLand = stats.land.totalLand;
  const barrenLand = stats.land.totalBarrenLand;

  const landTypes = Object.keys(landData);

  return (
    <div className="mb-4 rounded bg-gray-800 px-1 pb-1 pt-1 text-white shadow-md">
      <h3 className="mb-2">Land</h3>

      <div className="flex flex-col">
        <div className="flex px-1 py-2 text-left text-xs font-bold uppercase">
          <div className="w-1/4">Land Type</div>
          <div className="w-1/4 text-center">Barren</div>
          <div className="w-1/4 text-center">Total</div>
          <div className="w-1/4 text-center">With Incoming</div>
        </div>

        {landTypes.map(landType => {
          const landInfo = landData[landType];
          const totalPercentage = ((landInfo.amount / totalLand) * 100).toFixed(2);

          return (
            <div key={landType} className="flex border-b px-1 py-1 text-left text-sm">
              <div className="w-1/4">{landType}</div>
              <div className="w-1/4 text-center">{landInfo.barren}</div>
              <div className="w-1/4 text-center">{landInfo.amount} ({totalPercentage}%)</div>
              <div className="w-1/4 text-center">{landInfo.amount} ({totalPercentage}%)</div>
            </div>
          );
        })}

        <div className="flex bg-gray-900 px-1 py-1 text-left text-sm font-bold">
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
