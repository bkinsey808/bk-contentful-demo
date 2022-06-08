import { useContext, useEffect, useState } from 'react';

import { AppContext, AppContextState, Banner } from '@/helpers/app.context';
import { getComponentFromQuery } from '@/helpers/getComponentFromQuery';
import { sdk } from '@/helpers/sdk';
import { ComponentType } from '@/types';

export const useComponent = (
  componentType: ComponentType,
  componentName: string,
  state?: AppContextState
) => {
  const [component, setComponent] = useState<Banner | undefined>(
    state?.components?.[componentType]?.[componentName]
  );
  const appContext = useContext(AppContext);
  const cached = appContext.components[componentType]?.[componentName];

  useEffect(() => {
    if (cached && component !== cached) {
      setComponent(cached);
      return;
    }

    sdk[componentType]({ componentName }).then((query) => {
      const newComponent = getComponentFromQuery({ query, componentType });
      if (newComponent) {
        setComponent(newComponent);
        appContext.components[componentType][componentName] = newComponent;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cached, componentType, componentName]);

  return component;
};
