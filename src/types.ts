import { BannerQuery } from './generated/graphql';
import { sdk } from './helpers/sdk';

export type ComponentType = keyof Omit<typeof sdk, 'Page'>;

export type Query = BannerQuery;
