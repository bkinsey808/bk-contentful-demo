import {
  NavigationMenuContent,
  NavigationMenuItem as NavigationMenuItemRadix,
  NavigationMenuList, // NavigationMenuLink,
  NavigationMenuSub,
  NavigationMenuTrigger, // NavigationMenuContent,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { FC } from 'react';

import { NavigationMenuItem as NavigationMenuItemType } from '@/generated/graphql';
import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

const NavigationMenuItem: FC<{
  componentName: string;
  state?: AppContextState;
  level: number;
}> = ({ componentName, state, level }) => {
  const navigationMenuItem = useComponent<NavigationMenuItemType>(
    'NavigationMenuItem',
    componentName,
    state
  );

  const subMenuItems = navigationMenuItem?.navigationMenuItemsCollection?.items;

  return (
    <NavigationMenuItemRadix
      key={navigationMenuItem?.componentName}
      className={`relative bg-gray-300`}
    >
      <NavigationMenuTrigger>
        <Link href={navigationMenuItem?.url ?? '#'}>
          <a className={`whitespace-nowrap`}>{navigationMenuItem?.label}</a>
        </Link>
      </NavigationMenuTrigger>
      {subMenuItems?.length ? (
        <NavigationMenuContent
          className={`absolute z-10
            ${level < 2 ? 'top-[100%]' : 'top-0 left-[100%]'} 
          `}
        >
          <NavigationMenuSub>
            <NavigationMenuList className={`[&>*]:border-2`}>
              {subMenuItems.map((subMenuItem) => (
                <NavigationMenuItem
                  key={subMenuItem?.componentName}
                  componentName={
                    subMenuItem?.componentName ?? 'NavigationMenuItem'
                  }
                  state={state}
                  level={level + 1}
                />
              ))}
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      ) : null}
    </NavigationMenuItemRadix>
  );
};

export default NavigationMenuItem;
