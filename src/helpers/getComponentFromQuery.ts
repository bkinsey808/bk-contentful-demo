import { ComponentType, Query } from '@/types';

type Item = Record<string, unknown>;
type QueryWithItems = Query & { items?: Item[] };

export const getComponentFromQuery = ({
  query,
  componentType,
}: {
  query: Query;
  componentType: ComponentType;
}) => {
  const collection = query?.[
    `${componentType.toLowerCase()}Collection` as unknown as keyof Query
  ] as unknown as QueryWithItems;

  return typeof collection === 'string'
    ? undefined
    : collection?.items?.[0] ?? undefined;
};
