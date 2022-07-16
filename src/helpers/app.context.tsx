import { createContext, FC } from 'react';

import { PageItemQuery } from '@/generated/graphql';
import { Component, ComponentType } from '@/types';

export type Page = NonNullable<PageItemQuery['pageCollection']>['items'][0];

export interface AppContextState {
  pages: {
    [slug: string]: Page;
  };
  components: {
    [key in ComponentType]?: {
      [componentName: string]: Component;
    };
  };
}

export const appContextDefaultState: AppContextState = {
  pages: {},
  components: {},
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
