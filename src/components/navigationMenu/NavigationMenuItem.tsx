import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
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
import { getCustomClickHandler } from './getCustomClickHandler';

const NavigationMenuItem: FC<
  NavigationMenuItemProps & {
    level: number;
  }
> = ({
  content_label,
  content_url,
  content_navigationMenuItems,
  level,
  content_componentName,
}) => {
  return (
    <NavigationMenuItemRadix
      className={`relative bg-accent text-accent-background [&>button]:w-full`}
    >
      <NavigationMenuTrigger>
        <Link href={content_url ?? '#'}>
          <a
            className={`flex h-full w-full items-center gap-2 whitespace-nowrap px-4 py-2`}
            onClick={getCustomClickHandler(content_componentName)}
          >
            {content_label}
            {content_navigationMenuItems?.length ? (
              level < 2 ? (
                <ChevronDownIcon />
              ) : (
                <ChevronRightIcon />
              )
            ) : null}
          </a>
        </Link>
      </NavigationMenuTrigger>
      {content_navigationMenuItems?.length ? (
        <NavigationMenuContent
          className={`absolute z-10
            ${level < 2 ? 'top-full' : 'top-0 left-full'} 
          `}
        >
          <NavigationMenuSub>
            <NavigationMenuList
              className={`
                [&>*]:-mt-0.5 
                [&>*]:border-2 
                [&>*]:border-accent-background
              `}
            >
              {content_navigationMenuItems?.map(({ type, id }) => {
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
