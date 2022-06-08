import { ComponentType } from '@/types';

import { AppContextState } from './app.context';
import { getComponentFromQuery } from './getComponentFromQuery';
import { sdk } from './sdk';

/** this function spiders through contentful components and recursively fetches the entire component tree (at build time) */
export const recursivelySetState = async (
  item: Record<string, unknown>,
  state: AppContextState
  // eslint-disable-next-line sonarjs/cognitive-complexity
) => {
  for (const [key, value] of Object.entries(item)) {
    if (key === 'items' && Array.isArray(value)) {
      for (const arrayElement of value) {
        if (
          !arrayElement ||
          !arrayElement.componentName ||
          !arrayElement.__typename
        ) {
          continue;
        }

        const componentName = arrayElement.componentName;
        const componentType = arrayElement.__typename as ComponentType;
        const query = await sdk[componentType]({
          componentName,
        });

        const newComponent = getComponentFromQuery({ query, componentType });

        if (newComponent) {
          state.components[componentType][componentName] = newComponent;
        }

        await recursivelySetState(query, state);
      }

      return;
    }

    if (typeof value === 'object') {
      await recursivelySetState(value as Record<string, unknown>, state);
    }
  }
};
