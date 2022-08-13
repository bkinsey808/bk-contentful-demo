import {
  NavigationMenuContent,
  NavigationMenuItem as NavigationMenuItemRadix,
  NavigationMenuList, // NavigationMenuLink,
  NavigationMenuSub,
  NavigationMenuTrigger, // NavigationMenuContent,
} from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import { FC } from 'react';

import { NavigationMenuItemProps } from '@/generated/types';

import { getComponentProps } from '../component/getComponentProps';

const NavigationMenuItem: FC<
  NavigationMenuItemProps & {
    level: number;
  }
> = ({ content_label, content_url, content_navigationMenuItems, level }) => {
  return (
    <NavigationMenuItemRadix className={`relative bg-gray-300`}>
      <NavigationMenuTrigger>
        <Link href={content_url ?? '#'}>
          <a className={`whitespace-nowrap`}>{content_label}</a>
        </Link>
      </NavigationMenuTrigger>
      {content_navigationMenuItems?.length ? (
        <NavigationMenuContent
          className={`absolute z-10
            ${level < 2 ? 'top-[100%]' : 'top-0 left-[100%]'} 
          `}
        >
          <NavigationMenuSub>
            <NavigationMenuList className={`[&>*]:border-2`}>
              {content_navigationMenuItems.map(({ type, id }) => {
                const props = getComponentProps<NavigationMenuItemProps>({
                  type,
                  id,
                });

                return props ? (
                  <NavigationMenuItem key={id} {...props} level={level + 1} />
                ) : null;
              })}
            </NavigationMenuList>
          </NavigationMenuSub>
        </NavigationMenuContent>
      ) : null}
    </NavigationMenuItemRadix>
  );
};

export default NavigationMenuItem;
