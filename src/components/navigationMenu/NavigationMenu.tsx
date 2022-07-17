import {
  NavigationMenu as NavigationMenuRadix,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { FC } from 'react';

import { NavigationMenu as NavigationMenuType } from '@/generated/graphql';
import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

import NavigationMenuItem from '../navigationMenuItem/NavigationMenuItem';

const NavigationMenu: FC<{
  componentName: string;
  state?: AppContextState;
}> = ({ componentName, state }) => {
  const navigationMenu = useComponent<NavigationMenuType>(
    'NavigationMenu',
    componentName,
    state
  );

  return (
    <NavigationMenuRadix>
      <NavigationMenuList
        className={`flex [&>*]:border-2 [&>*]:border-red-300 [&>*]:p-2`}
      >
        {navigationMenu?.navigationMenuItemsCollection?.items?.map((item) => (
          <NavigationMenuItem
            key={item?.componentName}
            componentName={item?.componentName ?? 'NavigationMenuItem'}
            state={state}
            level={1}
          />
        ))}
      </NavigationMenuList>
    </NavigationMenuRadix>
  );
};

export default NavigationMenu;
