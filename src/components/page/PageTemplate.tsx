import { FC } from 'react';

import { PageTemplateProps, ThemeProps } from '@/generated/types';

import { getComponentProps } from '../component/getComponentProps';

const PageTemplate: FC<
  PageTemplateProps & {
    children: JSX.Element;
  }
> = ({ content_theme, content_darkModeTheme, children }) => {
  const lightModeTheme = (getComponentProps(content_theme) as ThemeProps)
    ?.content_id;

  const darkModeTheme = (getComponentProps(content_darkModeTheme) as ThemeProps)
    ?.content_id;

  return (
    <div
      className={`theme--${lightModeTheme} theme-dark--${darkModeTheme} h-[100vh] w-[100vw]`}
    >
      {children}
    </div>
  );
};

export default PageTemplate;
