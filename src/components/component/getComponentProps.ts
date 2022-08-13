import contentfulState from '@/generated/contentfulState.json';
import { ComponentReference, ComponentType } from '@/generated/types';
import { getTypeId } from '@/helpers/getTypeId';

export const getComponentProps = <ComponentProps>({
  id,
  type,
}: ComponentReference) => {
  const item = (
    (
      contentfulState as unknown as {
        content: { [key in ComponentType]: { items: [] } };
      }
    )?.content[type]?.items as unknown as {
      [id: string]: ComponentProps;
    }
  )?.[id];

  const prefixedEntries = item
    ? Object.entries(item).map(([key, value]) => [
        `content_${key}`,
        typeof value === 'string'
          ? value
          : Array.isArray(value)
          ? value?.map(getTypeId)
          : getTypeId(value),
      ])
    : undefined;

  return prefixedEntries
    ? ({
        ...Object.fromEntries(prefixedEntries),
        type,
      } as ComponentProps)
    : undefined;
};
