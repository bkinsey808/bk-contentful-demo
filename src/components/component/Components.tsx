import { FC } from 'react';

import { AppContextState } from '@/helpers/app.context';

import Component from './Component';

const Components: FC<{
  items?: ({
    componentType?: string | null;
    componentName?: string | null;
  } | null)[];
  state?: AppContextState;
}> = ({ items, state }) => (
  <>
    {items?.map((item) => {
      if (!item) {
        return null;
      }
      return (
        <Component
          key={item?.componentName}
          name={item?.componentName}
          type={item?.componentType}
          state={state}
        />
      );
    })}
  </>
);

export default Components;
