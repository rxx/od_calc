import { onMount } from 'nanostores';

import { persistentAtom } from '@nanostores/persistent'

export const jsonStats = persistentAtom<string>('stats', '', '')


export const statsStore = persistentMap<any>('stats:', null); 

onMount(jsonStatsStore, () => { 
  const jsonStats = jsonStatsStore.get();

  if (!jsonStats) {
      statsStore.set(null);
    }

    if (jsonStats) {
      try {
        const stats = JSON.parse(jsonStats);
        statsStore.set(null);
      } catch (err) {
        console.error("Error on parsing json:", err);
      }
    }
});
