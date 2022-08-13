import { FC } from 'react';

import { BannerProps } from '@/generated/types';

const Banner: FC<BannerProps> = ({ content_height }) => {
  return (
    <div>
      Height:
      <span className="font-bold">{content_height}</span>
    </div>
  );
};

export default Banner;
