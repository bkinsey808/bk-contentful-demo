import { ComponentType } from '@/types';

import { AppContextState } from './app.context';
import { getComponentFromQuery } from './getComponentFromQuery';
import { sdk } from './sdk';

const setStateFromItemsArray = async (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[],
  state: AppContextState
) => {
  for (const item of items) {
    if (!item || !item.componentName || !item.__typename) {
      continue;
    }

    const componentName = item.componentName;
    const componentType = item.__typename as ComponentType;

    // component already exists
    if (state.components[componentType][componentName]) {
      return;
    }

    const query = await sdk[componentType]({
      componentName,
    });

    const newComponent = getComponentFromQuery({ query, componentType });

    if (newComponent) {
      state.components[componentType][componentName] = newComponent;
    }

    await recursivelySetState(query, state);
  }
};

/** this function spiders through contentful components and recursively fetches the entire component tree (at build time) */
export const recursivelySetState = async (
  item: Record<string, unknown>,
  state: AppContextState
) => {
  for (const [key, value] of Object.entries(item)) {
    if (key === 'items' && Array.isArray(value)) {
      await setStateFromItemsArray(value, state);
    } else if (typeof value === 'object') {
      await recursivelySetState(value as Record<string, unknown>, state);
    }
  }
};
