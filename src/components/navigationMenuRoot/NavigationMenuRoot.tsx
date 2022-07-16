import { FC } from 'react';

import { NavigationMenuRoot as NavigationMenuRootType } from '@/generated/graphql';
import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

import NavigationMenuItem from '../navigationMenuItem/NavigationMenuItem';

const NavigationMenuRoot: FC<{
  componentName: string;
  state?: AppContextState;
}> = ({ componentName, state }) => {
  const navigationMenuRoot = useComponent<NavigationMenuRootType>(
    'NavigationMenuRoot',
    componentName,
    state
  );

  return (
    <div>
      Navigation Menu Root
      {navigationMenuRoot?.navigationMenuItemsCollection?.items?.map((item) => {
        <NavigationMenuItem
          componentName={item?.componentName ?? 'NavigationMenuItem'}
          state={state}
        />;
      })}
    </div>
  );
};

export default NavigationMenuRoot;
