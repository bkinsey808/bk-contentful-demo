import { FC, useContext } from 'react';

import { PageTemplate as PageTemplateType, Palette } from '@/generated/graphql';
import { AppContext, AppContextState } from '@/helpers/app.context';
import { isClient } from '@/helpers/isClient';
import { maybeSetPaletteCssRules } from '@/helpers/maybeSetPaletteCssRules';
import { useComponent } from '@/hooks/useComponent';

const PageTemplate: FC<{
  componentName: string;
  state?: AppContextState;
  children: JSX.Element;
}> = ({ componentName, state, children }) => {
  const appContext = useContext(AppContext);
  const pageTemplate = useComponent<PageTemplateType>(
    'PageTemplate',
    componentName,
    state
  );

  const paletteComponentName = pageTemplate?.palette?.componentName ?? '';
  const palette = useComponent<Palette>('Palette', paletteComponentName, state);

  maybeSetPaletteCssRules({ palette, paletteComponentName, appContext });
  const ruleList = isClient() ? document.styleSheets[0].cssRules : undefined;

  console.log({
    pageTemplate,
    paletteComponentName,
    palette,
    state,
    appContext,
    ruleList,
  });

  const themeClass = `theme--${paletteComponentName}`;

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
