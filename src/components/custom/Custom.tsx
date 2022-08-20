import { FC } from 'react';

import { CustomProps } from '@/generated/types';
import { getThemeClass } from '@/helpers/getThemeClass';
import { getTokenStyle } from '@/helpers/getTokenStyle';

import AccentColorDisplay from './AccentColorDisplay';

const getComponent = (contentName: string) => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (contentName) {
    case 'Accent Color Display':
      return <AccentColorDisplay />;
  }
};

export const Custom: FC<CustomProps> = ({
  content_name,
  theme,
  type: _type,
  children: _children,
  ...tokens
}) => {
  return (
    <div className={getThemeClass(theme)} style={getTokenStyle(tokens)}>
      {getComponent(content_name)}
    </div>
  );
};

export default Custom;
