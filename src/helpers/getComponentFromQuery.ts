import { ComponentType, Query } from '@/types';

export const getComponentFromQuery = ({
  query,
  componentType,
}: {
  query: Query;
  componentType: ComponentType;
}) => {
  const collection =
    query?.[`${componentType.toLowerCase()}Collection` as keyof typeof query];
  return typeof collection === 'string'
    ? undefined
    : collection?.items?.[0] ?? undefined;
};
