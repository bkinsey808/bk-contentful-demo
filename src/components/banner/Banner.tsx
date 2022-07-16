import { FC } from 'react';

import { Banner as BannerType } from '@/generated/graphql';
import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

const Banner: FC<{ componentName: string; state?: AppContextState }> = ({
  componentName,
  state,
}) => {
  const banner = useComponent<BannerType>('Banner', componentName, state);

  return (
    <div>
      Height:
      <span className="font-bold">{banner?.height}</span>
    </div>
  );
};

export default Banner;
