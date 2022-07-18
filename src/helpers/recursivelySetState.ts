import { ComponentType } from '@/types';

import { AppContextState } from './app.context';
import { getComponentFromQuery } from './getComponentFromQuery';
import { sdk } from './sdk';

type Item = { componentName: string; componentType: ComponentType };

const fetchComponent = async (item: Item, state: AppContextState) => {
  const { componentType, componentName } = item;

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
};

const setStateFromItemsArray = async (
  items: Item[],
  state: AppContextState
) => {
  for (const item of items) {
    if (!item || !item.componentName || !item.componentType) {
      continue;
    }

    await fetchComponent(item, state);
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
    } else if (
      (value as Item)?.componentName &&
      (value as Item)?.componentType
    ) {
      await fetchComponent(value as Item, state);
    } else if (typeof value === 'object') {
      await recursivelySetState(value as Record<string, unknown>, state);
    }
  }
};
