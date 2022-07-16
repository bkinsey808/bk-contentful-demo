import {
  Banner,
  BannerQuery,
  NavigationMenuItem,
  NavigationMenuItemQuery,
  NavigationMenuRoot,
  NavigationMenuRootQuery,
} from './generated/graphql';
import { sdk } from './helpers/sdk';

export type ComponentType = keyof Omit<typeof sdk, 'PageItem' | 'Pages'>;

export type Query =
  | BannerQuery
  | NavigationMenuRootQuery
  | NavigationMenuItemQuery;

export type Component = Banner | NavigationMenuRoot | NavigationMenuItem;
