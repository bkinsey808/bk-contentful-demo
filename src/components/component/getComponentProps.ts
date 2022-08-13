import contentfulState from '@/generated/contentfulState.json';
import { ComponentReference } from '@/generated/types';

export const getComponentProps = <ComponentProps>({
  id,
  type,
}: ComponentReference) => {
  const item = (
    contentfulState.content[type]?.items as {
      [id: string]: ComponentProps;
    }
  )?.[id];

  const prefixedEntries = item
    ? Object.entries(item).map(([key, value]) => [`content_${key}`, value])
    : undefined;

  return prefixedEntries
    ? ({
        ...Object.fromEntries(prefixedEntries),
        type,
      } as ComponentProps)
    : undefined;
};
