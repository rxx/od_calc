import { deepMap } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export const $jsonStats = persistentAtom<string>('stats', '');
export const $stats = deepMap<any>({});

