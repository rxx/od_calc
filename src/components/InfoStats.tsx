import React from 'react';

interface InfoStatsProps {
  stats: {
    status: {
       ruler_name: string,
       race_name: string,
       name: string,
       realm: number,
    };
  };
}

const InfoStats: React.FC<InfoStatsProps> = ({ stats }) => {
  const { status } = stats;

  return (
    <div className="text-white bg-gray-800 shadow-md rounded px-1 pt-1 pb-1 mb-4">
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
