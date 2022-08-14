import {
  NavigationMenu as NavigationMenuRadix,
  NavigationMenuList,
} from '@radix-ui/react-navigation-menu';
import { FC } from 'react';

import {
  NavigationMenuItemProps,
  NavigationMenuProps,
} from '@/generated/types';
import { getThemeClass } from '@/helpers/getThemeClass';

import { getComponentProps } from '../component/getComponentProps';
import NavigationMenuItem from '../navigationMenuItem/NavigationMenuItem';

const NavigationMenu: FC<NavigationMenuProps> = ({
  content_navigationMenuItems,
  theme,
}) => {
  return (
    <NavigationMenuRadix className={getThemeClass(theme)}>
      <NavigationMenuList
        className={`flex [&>*]:border-2 [&>*]:border-red-300 [&>*]:p-2`}
      >
        {content_navigationMenuItems?.map(({ id, type }) => {
          const props = getComponentProps<NavigationMenuItemProps>({
            id,
            type,
          });
          return props ? (
            <NavigationMenuItem key={id} {...props} level={1} />
          ) : null;
        })}
      </NavigationMenuList>
    </NavigationMenuRadix>
  );
};

export default NavigationMenu;
