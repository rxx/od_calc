import { deepMap, onMount } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';
import { parseJSON } from '../utils'

export const $jsonStats = persistentAtom<string>('stats', '');
export const $stats = deepMap<any>({});

onMount($stats, () => {
  const data = parseJSON($jsonStats.get());

  if (data) {
    $stats.set(data);
  }

  $stats.subscribe(() => {
    const json = JSON.stringify($stats.get());
    $jsonStats.set(json);
  });
});


