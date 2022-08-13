import contentfulState from '../../src/generated/contentfulState.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTypeId = (item: any) => {
  const componentReferenceId = item?.sys?.id;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (contentfulState.componentReferences as any)[componentReferenceId];
};
