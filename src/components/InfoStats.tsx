import React from 'react';

interface InfoStatsProps {
  jsonData: string;
}

const InfoStats: React.FC<InfoStatsProps> = ({ jsonData }) => {
  const data = JSON.parse(jsonData);
  const { status, revelation } = data;

  const totalMilitary = Object.keys(status)
    .filter(key => key.startsWith('military_'))
    .reduce((sum, key) => sum + status[key], 0);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 className="text-xl mb-4">Overview</h3>
      <div className="grid grid-cols-2 gap-4"> 
        <div>
          <div className="mb-2">
            <span className="font-bold">Ruler:</span> {status.ruler_name}
          </div>
          <div className="mb-2">
            <span className="font-bold">Race:</span> {status.race_name}
          </div>
          <div className="mb-2">
            <span className="font-bold">Land:</span> {status.land} ({((status.land / status.land) * 100).toFixed(0)}%)
          </div>
          <div className="mb-2">
            <span className="font-bold">Networth:</span> {status.networth.toLocaleString()}
          </div>
          <div className="mb-2">
            <span className="font-bold">Peasants:</span> {status.peasants.toLocaleString()}
          </div>
          <div className="mb-2">
            <span className="font-bold">Employment:</span> {status.employment.toFixed(2)}%
          </div>
          <div className="mb-2">
            <span className="font-bold">Prestige:</span> {status.prestige}
          </div>
          <div>
            <span className="font-bold">Spy Mastery:</span> {status.spy_mastery}
          </div>
          <div>
            <span className="font-bold">Wizard Mastery:</span> {status.wizard_mastery}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div>
            <h4 className="text-lg font-bold mb-2">Resources</h4>
            {Object.keys(status)
              .filter(key => key.startsWith('resource_'))
              .map(key => (
                <div key={key} className="mb-2">
                  <span className="font-bold capitalize">{key.replace('resource_', '')}:</span> {status[key].toLocaleString()}
                </div>
              ))}
            <div>
              <span className="font-bold">Resilience:</span> {status.resilience}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-2">Military</h4>
            <div className="mb-2">
              <span className="font-bold">Morale:</span> {status.morale}%
            </div>
            {Object.keys(status)
              .filter(key => key.startsWith('military_') && key !== 'military_spies' && key !== 'military_assassins' && key !== 'military_wizards' && key !== 'military_archmages')
              .map(key => {
                const unitName = key.replace('military_', '');
                const unitDisplayName = unitName === 'draftees' ? unitName : unitName.charAt(0).toUpperCase() + unitName.slice(1); // Capitalize unit names
                return (
                  <div key={key} className="mb-2">
                    <span className="font-bold">{unitDisplayName}:</span> {status[key].toLocaleString()}
                  </div>
                );
              })}
              {Object.keys(status)
              .filter(key => key === 'military_spies' || key === 'military_assassins' || key === 'military_wizards' || key === 'military_archmages')
              .map(key => {
                const unitName = key.replace('military_', '');
                const unitDisplayName = unitName === 'draftees' ? unitName : unitName.charAt(0).toUpperCase() + unitName.slice(1); // Capitalize unit names
                return (
                  <div key={key} className="mb-2">
                    <span className="font-bold">{unitDisplayName}:</span> {status[key].toLocaleString()}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoStats;
