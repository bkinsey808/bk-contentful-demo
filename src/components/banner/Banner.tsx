import { FC } from 'react';

import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

const Banner: FC<{ componentName: string; state?: AppContextState }> = ({
  componentName,
  state,
}) => {
  const banner = useComponent('Banner', componentName, state);

  return (
    <div>
      Height:
      <span className="font-bold">{banner?.height}</span>
    </div>
  );
};

export default Banner;
