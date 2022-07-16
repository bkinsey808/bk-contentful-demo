import { FC } from 'react';

import { NavigationMenuItem as NavigationMenuItemType } from '@/generated/graphql';
import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

const NavigationMenuItem: FC<{
  componentName: string;
  state?: AppContextState;
}> = ({ componentName, state }) => {
  const navigationMenuItem = useComponent<NavigationMenuItemType>(
    'NavigationMenuItem',
    componentName,
    state
  );

  return (
    <div>
      Item Label: {navigationMenuItem?.label}
      URL: {navigationMenuItem?.url}
    </div>
  );
};

export default NavigationMenuItem;
