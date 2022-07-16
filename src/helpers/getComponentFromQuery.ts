import { ComponentType, Query } from '@/types';

import { lowerCaseFirstLetter } from './lowerCaseFirstLetter';

export const getComponentFromQuery = ({
  query,
  componentType,
}: {
  query: Query;
  componentType: ComponentType;
}) => {
  const key = `${lowerCaseFirstLetter(
    componentType
  )}Collection` as unknown as keyof typeof query;
  const collection = query?.[key];

  return typeof collection === 'string'
    ? undefined
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (collection as any)?.items?.[0] ?? undefined;
};
