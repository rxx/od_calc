import React, { useState } from 'react';

interface Stats {
  totalMilitaryPower: number;
  totalLand: number;
  barrenLand: number;
  constructedLand: number;
  totalResources: number;
  // Add more stats as needed
}

function StatsCalculator() {
  const [jsonData, setJsonData] = useState('');
  const [stats, setStats] = useState<Stats | null>(null);

  const calculateStats = () => {
    try {
      const data = JSON.parse(jsonData);

      // Military Calculations
      const totalMilitaryPower = 
        data.status.military_draftees +
        data.status.military_unit1 + 
        data.status.military_unit2 + 
        data.status.military_unit3 + 
        data.status.military_unit4 +
        data.status.military_spies +
        data.status.military_assassins +
        data.status.military_wizards +
        data.status.military_archmages;

      // Land Calculations
      const totalLand = data.land.totalLand;
      const barrenLand = data.land.totalBarrenLand;
      const constructedLand = data.land.totalConstructedLand;

      // Resource Calculations
      const totalResources = 
        data.status.resource_platinum +
        data.status.resource_food +
        data.status.resource_lumber +
        data.status.resource_mana +
        data.status.resource_ore +
        data.status.resource_gems +
        data.status.resource_tech;

      setStats({
        totalMilitaryPower,
        totalLand,
        barrenLand,
        constructedLand,
        totalResources,
        // Add more stats as needed
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      setStats(null); // Clear previous results on error
    }
  };

  return (
    <>
      <textarea value={jsonData} onChange={e => setJsonData(e.target.value)} />
      <button onClick={calculateStats}>Calculate</button>

      {stats && (
        <div>
          <h3>Calculated Stats:</h3>
          <p>Total Military Power: {stats.totalMilitaryPower}</p>
          <p>Total Land: {stats.totalLand}</p>
          <p>Barren Land: {stats.barrenLand}</p>
          <p>Constructed Land: {stats.constructedLand}</p>
          <p>Total Resources: {stats.totalResources}</p>
          {/* Add more stats here */}
        </div>
      )}
    </>
  );
}

export default StatsCalculator;
