import { Color, Palette } from '@/generated/graphql';

import { AppContextState } from './app.context';
import { isClient } from './isClient';

const alreadySet = {} as { [paletteComponentName: string]: boolean };

export const maybeSetPaletteCssRules = ({
  palette,
  paletteComponentName,
  appContext,
}: {
  palette?: Palette;
  paletteComponentName?: string;
  appContext: AppContextState;
}) => {
  console.log('called1');
  if (
    !palette ||
    !paletteComponentName ||
    alreadySet[paletteComponentName] ||
    !isClient()
  ) {
    return;
  }
  console.log('called2');

  const colorComponentNames = palette?.colorsCollection?.items?.map(
    (color) => color?.componentName
  );
  const colorComponents = colorComponentNames?.map(
    (colorComponentName) =>
      appContext.components?.Color?.[colorComponentName ?? ''] as Color
  );

  const themeClass = `theme--${paletteComponentName}`;

  const lightModeRule = `.${themeClass} {
    ${colorComponents
      ?.map(
        (colorComponent) =>
          `--${colorComponent?.paletteRole?.code}: ${colorComponent?.lightModeColor};`
      )
      .join('\n')}
    }`;

  const darkModeRule = `.dark .${themeClass} {
    ${colorComponents
      ?.map(
        (colorComponent) =>
          `--${colorComponent?.paletteRole?.code}: ${colorComponent?.darkModeColor};`
      )
      .join('\n')}
  }`;

  console.log(darkModeRule);

  document.styleSheets[0].insertRule(lightModeRule);
  document.styleSheets[0].insertRule(darkModeRule);

  alreadySet[paletteComponentName] = true;
};
