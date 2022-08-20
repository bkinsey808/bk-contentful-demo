import { FC } from 'react';

import { BannerProps } from '@/generated/types';
import { getThemeClass } from '@/helpers/getThemeClass';
import { getTokenStyle } from '@/helpers/getTokenStyle';

const Banner: FC<BannerProps> = ({
  content_height,
  theme,
  type: _type,
  content_componentName: _content_componentName,
  content_componentType: _content_componentType,
  children: _children,
  ...tokens
}) => {
  return (
    <div className={getThemeClass(theme)} style={getTokenStyle(tokens)}>
      Height:
      <span className="font-bold">{content_height}</span>
    </div>
  );
};

export default Banner;
