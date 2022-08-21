import { FC, useEffect, useState } from 'react';

import { PageTemplateProps, ThemeProps } from '@/generated/types';
import { isClient } from '@/helpers/isClient';

import { getComponentProps } from '../component/getComponentProps';

const PageTemplate: FC<
  PageTemplateProps & {
    children: JSX.Element;
  }
> = ({ content_theme, content_darkModeTheme, children }) => {
  const [localStorageThemeClass, setSelectedThemeClass] = useState<
    string | undefined
  >();

  // Unfortunately, there is a brief flash, because we can only check localStorage at runtime
  useEffect((): void => {
    if (isClient()) {
      setSelectedThemeClass(
        localStorage.theme ? `theme--${localStorage.theme}` : undefined
      );
    }
  }, []);

  const lightModeTheme = (getComponentProps(content_theme) as ThemeProps)
    ?.content_id;

  const darkModeTheme = (getComponentProps(content_darkModeTheme) as ThemeProps)
    ?.content_id;

  return (
    <div
      className={`theme--${lightModeTheme} theme-dark--${darkModeTheme} h-[100vh] w-[100vw]`}
    >
      {/* local storage theme takes precedence over light/dark mode themes, so it is nested under */}
      <div id="localStorageThemeWrapper" className={localStorageThemeClass}>
        {children}
      </div>
    </div>
  );
};

export default PageTemplate;
