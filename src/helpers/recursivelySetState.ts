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
    if (!item || !item.componentName || !item.componentType) {
      continue;
    }

    const componentName = item.componentName;
    const componentType = item.componentType as ComponentType;

    if (!state.components[componentType]) {
      state.components[componentType] = {};
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (state.components[componentType]![componentName]) {
      // component already exists
      return;
    }

    const query = await sdk[componentType]({
      componentName,
    });

    const newComponent = getComponentFromQuery({ query, componentType });

    if (newComponent) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      state.components[componentType]![componentName] = newComponent;
    }

    await recursivelySetState(newComponent, state);
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
