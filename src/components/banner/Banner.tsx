import { FC } from 'react';

import { BannerProps } from '@/generated/types';
import { getThemeClass } from '@/helpers/getThemeClass';

const Banner: FC<BannerProps> = ({ content_height, theme }) => {
  return (
    <div className={getThemeClass(theme)}>
      Height:
      <span className="font-bold">{content_height}</span>
    </div>
  );
};

export default Banner;
