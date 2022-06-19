import { BannerQuery } from './generated/graphql';
import { sdk } from './helpers/sdk';

export type ComponentType = keyof Omit<typeof sdk, 'PageItem' | 'Pages'>;

export type Query = BannerQuery;
