import { FC } from 'react';

import { AppContextState } from '@/helpers/app.context';

import Banner from '../banner/Banner';
import NavigationMenu from '../navigationMenu/NavigationMenu';

const Component: FC<{
  name?: string | null;
  type?: string | null;
  state?: AppContextState;
}> = ({ name, type, state }) => {
  if (!name || !type) {
    return null;
  }

  // eslint-disable-next-line sonarjs/no-small-switch
  switch (type) {
    case 'Banner':
      return <Banner componentName={name} state={state} />;
    case 'NavigationMenu':
      return <NavigationMenu componentName={name} state={state} />;
    // note that NavigationMenuItem doesn't have to be listed here since it will never be called via this file since it only exists under a NavigationMenu
  }
  return null;
};

export default Component;
