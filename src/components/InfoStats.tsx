import { useStore } from '@nanostores/react';
import { $stats } from '../store/stats';

interface InfoStatsProps {
  status: {
    ruler_name: string,
    race_name: string,
    name: string,
    realm: number,
  };
}

const InfoStats = () => {
  const stats = useStore($stats) as InfoStatsProps;
  if (!stats?.status) { return null }

  const { status } = stats;

  return (
    <div className="mb-4 rounded bg-gray-800 px-1 pb-1 pt-1 text-white shadow-md">
      <h3 className="mb-2">Overview</h3>
      <div className="grid grid-cols-2 gap-2">
        <div className="mb-2">
          <span className="font-bold">Dominion:</span> {status.name}#{status.realm}[{status.ruler_name}]
        </div>
        <div className="mb-2">
          <span className="font-bold">Race:</span> {status.race_name}
        </div>
      </div>
    </div>
  );
};

export default InfoStats;
