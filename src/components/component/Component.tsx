import dynamic from 'next/dynamic';
import { FC, Suspense } from 'react';

import { ComponentReference, BannerProps } from '@/generated/types';

import { getComponentProps } from './getComponentProps';

// const Page = dynamic(() => import('../page/Page'), {
//   suspense: true,
// });
const Banner = dynamic(() => import('../banner/Banner'), {
  suspense: true,
});

const getComponent = ({ id, type }: ComponentReference) => {
  const props = getComponentProps({ id, type });
  if (!props) {
    return null;
  }

  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    // case 'Page':
    //   return <Page {...getProps<PageProps>({ id, type })} />;
    case 'Banner':
      return <Banner {...(props as BannerProps)} />;
  }
};

export const Component: FC<ComponentReference> = ({ id, type }) => {
  return (
    <Suspense fallback={`Loading...`}>{getComponent({ type, id })}</Suspense>
  );
};
