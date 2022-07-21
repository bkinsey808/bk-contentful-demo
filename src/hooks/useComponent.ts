import { useContext, useEffect, useState } from 'react';

import { AppContext, AppContextState } from '@/helpers/app.context';
import { getComponentFromQuery } from '@/helpers/getComponentFromQuery';
import { sdk } from '@/helpers/sdk';
import { Component, ComponentType } from '@/types';

export const useComponent = <T extends Component>(
  componentType: ComponentType,
  componentName: string,
  state?: AppContextState
) => {
  const [component, setComponent] = useState<Component | undefined>(
    state?.components?.[componentType]?.[componentName]
  );
  const appContext = useContext(AppContext);
  const cached = appContext.components[componentType]?.[componentName];

  useEffect(() => {
    if (component) {
      return;
    }
    if (cached) {
      setComponent(cached);
      return;
    }

    sdk[componentType]({ componentName }).then((query) => {
      const newComponent = getComponentFromQuery({ query, componentType });
      if (newComponent) {
        setComponent(newComponent);
        if (!appContext.components[componentType]) {
          appContext.components[componentType] = {};
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        appContext.components[componentType]![componentName] = newComponent;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cached, componentType, componentName]);

  return component as T | undefined;
};
