import {
  Banner,
  BannerQuery,
  NavigationMenuItem,
  NavigationMenuItemQuery,
  NavigationMenu,
  NavigationMenuQuery,
} from './generated/graphql';
import { sdk } from './helpers/sdk';

export type ComponentType = keyof Omit<typeof sdk, 'PageItem' | 'Pages'>;

export type Query = BannerQuery | NavigationMenuQuery | NavigationMenuItemQuery;

export type Component = Banner | NavigationMenu | NavigationMenuItem;
