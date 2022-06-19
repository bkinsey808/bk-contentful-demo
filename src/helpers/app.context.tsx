import { createContext, FC } from 'react';

import {
  PageTemplateQuery,
  BannerQuery,
  PageItemQuery,
} from '@/generated/graphql';

export type Page = NonNullable<PageItemQuery['pageCollection']>['items'][0];
export type PageTemplate = NonNullable<
  PageTemplateQuery['pageTemplateCollection']
>['items'][0];
export type Banner = NonNullable<BannerQuery['bannerCollection']>['items'][0];

export interface AppContextState {
  pages: {
    [slug: string]: Page;
  };
  components: {
    PageTemplate: {
      [componentName: string]: PageTemplate;
    };
    Banner: {
      [componentName: string]: Banner;
    };
  };
}

export const appContextDefaultState: AppContextState = {
  pages: {},
  components: {
    PageTemplate: {},
    Banner: {},
  },
};

export const AppContext = createContext<AppContextState>(
  appContextDefaultState
);

export const AppContextProvider: FC = ({ children }) => {
  return (
    <AppContext.Provider value={appContextDefaultState}>
      {children}
    </AppContext.Provider>
  );
};
