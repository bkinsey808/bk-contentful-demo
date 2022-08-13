import { FC } from 'react';

import { PageTemplateProps } from '@/generated/types';

const PageTemplate: FC<
  PageTemplateProps & {
    children: JSX.Element;
  }
> = ({ content_theme, children }) => {
  const themeClass = `theme--${content_theme}`;

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
