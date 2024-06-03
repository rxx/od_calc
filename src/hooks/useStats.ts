import { useState, useEffect } from 'react';

const useStats = () => {
  const [jsonStats, setJsonStats] = useState<string>(null);
  const [stats, setStats] = useState<any>(null);
  
  useEffect(() => {
    if(jsonStats) {
      try {
        const stats = JSON.parse(jsonStats);
        setStats(stats);
      } catch(err) {
        console.error("Error on parsing json:", err);
      }
    }
  }, [jsonStats])
  
  return [jsonStats, setJsonStats, stats] as const;
}

export default useStats;