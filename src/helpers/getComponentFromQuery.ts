import { ComponentType, Query } from '@/types';

export const getComponentFromQuery = ({
  query,
  componentType,
}: {
  query: Query;
  componentType: ComponentType;
}) => {
  const collection =
    query?.[
      `${componentType.toLowerCase()}Collection` as unknown as keyof typeof query
    ];
  return typeof collection === 'string'
    ? undefined
    : // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (collection as any)?.items?.[0] ?? undefined;
};
