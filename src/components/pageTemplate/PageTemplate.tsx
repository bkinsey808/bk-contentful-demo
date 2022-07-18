import { FC } from 'react';

import { PageTemplate as PageTemplateType, Palette } from '@/generated/graphql';
import { AppContextState } from '@/helpers/app.context';
import { useComponent } from '@/hooks/useComponent';

const PageTemplate: FC<{
  componentName: string;
  state?: AppContextState;
  children: JSX.Element;
}> = ({ componentName, state, children }) => {
  const pageTemplate = useComponent<PageTemplateType>(
    'PageTemplate',
    componentName,
    state
  );

  const paletteComponentName = pageTemplate?.palette?.componentName ?? '';

  const palette = useComponent<Palette>('Palette', paletteComponentName, state);

  console.log({ pageTemplate, paletteComponentName, palette, state });

  return <div>{children}</div>;
};

export default PageTemplate;
