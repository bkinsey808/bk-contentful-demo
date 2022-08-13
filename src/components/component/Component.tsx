// import dynamic from 'next/dynamic';
import { FC } from 'react';

import {
  ComponentReference,
  BannerProps,
  PageProps,
  NavigationMenuProps,
} from '@/generated/types';

import Banner from '../banner/Banner';
import NavigationMenu from '../navigationMenu/NavigationMenu';
import Page from '../page/Page';
import { getComponentProps } from './getComponentProps';

// Storybook does not seem to support dynamic
// @see https://github.com/storybookjs/storybook/issues/17831

// const Page = dynamic(() => import('../page/Page'), {
//   suspense: true,
// });
// const Banner = dynamic(() => import('../banner/Banner'), {
//   suspense: true,
// });
// const NavigationMenu = dynamic(
//   () => import('../navigationMenu/NavigationMenu'),
//   {
//     suspense: true,
//   }
// );

const getComponent = ({ id, type }: ComponentReference) => {
  const props = getComponentProps({ id, type });
  console.log({ props });
  if (!props) {
    return null;
  }

  switch (type) {
    case 'Page':
      return <Page {...(props as PageProps)} />;
    case 'Banner':
      return <Banner {...(props as BannerProps)} />;
    case 'NavigationMenu':
      return <NavigationMenu {...(props as NavigationMenuProps)} />;
  }
};

export const Component: FC<ComponentReference> = ({ id, type }) => {
  return (
    // <Suspense fallback={`Loading...`}>{getComponent({ type, id })}</Suspense>
    <>{getComponent({ type, id })}</>
  );
};
