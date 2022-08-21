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
import { getTokenStyle } from '@/helpers/getTokenStyle';

import { getComponentProps } from '../component/getComponentProps';
import NavigationMenuItem from './NavigationMenuItem';

const NavigationMenu: FC<NavigationMenuProps> = ({
  content_navigationMenuItems,
  theme,
  content_componentName: _content_componentName,
  content_componentType: _content_componentType,
  type: _type,
  children: _children,
  ...tokens
}) => {
  return (
    <NavigationMenuRadix
      className={getThemeClass(theme)}
      style={getTokenStyle(tokens)}
    >
      <NavigationMenuList
        className={`
          flex 
          [&>li]:border-2 
          [&>li]:border-accent-background
          [&>li:first-child]:rounded-l-radius-default 
          [&>li:last-child]:rounded-r-radius-default
          [&>li:not(:first-child)]:-ml-0.5
          [&>li>*]:mt-0.5 
        `}
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
