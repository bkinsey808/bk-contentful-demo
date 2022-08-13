import { FC } from 'react';

import { PageTemplateProps, ThemeProps } from '@/generated/types';

import { getComponentProps } from '../component/getComponentProps';

const PageTemplate: FC<
  PageTemplateProps & {
    children: JSX.Element;
  }
> = ({ content_theme, children }) => {
  const content_id = (getComponentProps(content_theme) as ThemeProps)
    ?.content_id;
  const themeClass = `theme--${content_id}`;

  return (
    <div
      className={`${themeClass} h-[100vh] w-[100vw]`}
      style={{
        color: 'var(--primary)',
        backgroundColor: 'var(--primary-background)',
      }}
    >
      {children}
    </div>
  );
};

export default PageTemplate;
