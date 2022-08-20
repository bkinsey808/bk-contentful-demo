import { CSSProperties } from 'react';

import { Token } from '@/generated/types';

export const getTokenStyle = (tokens: { [key in Token]?: string }) => {
  return {
    ...tokens,
    ...(tokens['--token--primary'] ? { color: 'var(--token--primary)' } : {}),
    ...(tokens['--token--primary-background']
      ? { backgroundColor: 'var(--token--primary-background)' }
      : {}),
    ...(tokens['--token--accent']
      ? { accentColor: 'var(--token--accent)' }
      : {}),
  } as CSSProperties;
};
