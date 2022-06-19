import { useContext, useEffect, useState } from 'react';

import { Query } from '@/generated/graphql';
import { AppContext, AppContextState, Banner } from '@/helpers/app.context';
import { getComponentFromQuery } from '@/helpers/getComponentFromQuery';
import { sdk } from '@/helpers/sdk';
import { ComponentType } from '@/types';

export const useComponent = (
  componentType: ComponentType,
  componentName: string,
  state?: AppContextState
) => {
  const [component, setComponent] = useState<
    keyof AppContextState['components']
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  >(state?.components?.[componentType]?.[componentName] as Query['banner']);
  const appContext = useContext(AppContext);
  const cached = appContext.components[componentType]?.[componentName];

  useEffect(() => {
    if (cached && component !== cached) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setComponent(cached as any);
      return;
    }

    sdk[componentType]({ componentName }).then((query) => {
      const newComponent = getComponentFromQuery({ query, componentType });
      if (newComponent) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setComponent(newComponent as any);
        appContext.components[componentType][componentName] = newComponent;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cached, componentType, componentName]);

  return component;
};
