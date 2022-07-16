import { FC } from 'react';

import { AppContextState } from '@/helpers/app.context';

import Banner from '../banner/Banner';
import NavigationMenuItem from '../navigationMenuItem/NavigationMenuItem';
import NavigationMenuRoot from '../navigationMenuRoot/NavigationMenuRoot';

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
    case 'NavigationMenuRoot':
      return <NavigationMenuRoot componentName={name} state={state} />;
    case 'NavigationMenuItem':
      return <NavigationMenuItem componentName={name} state={state} />;
  }
  return null;
};

export default Component;
