import { useContext } from 'react';

import { AppContext, AppContextState } from '@/helpers/app.context';

export const useStateContext = (state: AppContextState) => {
  const appContext = useContext(AppContext);
  for (const key in state) {
    appContext[key as keyof typeof state] = state[
      key as keyof typeof state
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ] as any;
  }
};
