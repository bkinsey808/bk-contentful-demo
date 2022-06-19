import { FC } from 'react';

import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

const PageTemplate: FC<{ componentName: string; state?: AppContextState }> = ({
  componentName,
  state,
}) => {
  const pageTemplate = useComponent('PageTemplate', componentName, state);

  return (
    <div>
      Height:
      <span className="font-bold">{pageTemplate?.height}</span>
    </div>
  );
};

export default PageTemplate;
