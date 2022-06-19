import { ComponentType } from '@/types';

import { AppContextState } from './app.context';
import { getComponentFromQuery } from './getComponentFromQuery';
import { sdk } from './sdk';

type Item = Record<string, unknown>;

const setStateFromItem = async (item: Item, state: AppContextState) => {
  console.log('got item', { item });

  if (!item || !item.componentName || !item.componentType) {
    return;
  }

  const componentName = item.componentName as string;
  const componentType = item.componentType as ComponentType;

  console.log({ componentType, componentName });

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
};

const setStateFromItemsArray = async (
  items: Item[],
  state: AppContextState
) => {
  for (const item of items) {
    setStateFromItem(item, state);
  }
};

/** this function spiders through contentful components and recursively fetches the entire component tree (at build time) */
export const recursivelySetState = async (
  item: Record<string, unknown>,
  state: AppContextState
) => {
  if (!item) {
    return;
  }
  for (const [key, value] of Object.entries(item)) {
    if (key === 'items' && Array.isArray(value)) {
      await setStateFromItemsArray(value, state);
    } else if (typeof value === 'object') {
      if (key.endsWith('Component')) {
        await setStateFromItem(value as Item, state);
      } else {
        await recursivelySetState(value as Item, state);
      }
    }
  }
};
