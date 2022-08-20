import tokens from '../../figma/tokens.json';

const DEFAULT_ACCENT = 'blue';
const DEFAULT_ACCENT_BACKGROUND = 'lightgray';

interface Tokens {
  [key: string]: {
    [key: string]: {
      value: string;
    };
  };
}

const getThemeTokenValues = (theme: string) => {
  const themeTokenValues = (tokens as Tokens)[theme];

  // set default values for accent tokens
  if (!themeTokenValues.accent) {
    themeTokenValues.accent = { value: DEFAULT_ACCENT };
  }
  if (!themeTokenValues['accent-background']) {
    themeTokenValues['accent-background'] = {
      value: DEFAULT_ACCENT_BACKGROUND,
    };
  }

  return themeTokenValues;
};

/** could be customized per theme */
const getThemeProperties = (theme: string) => {
  const themeTokenValues = getThemeTokenValues(theme);
  const themeTokens = Object.keys(themeTokenValues);

  return `${themeTokens
    .map((token: string) => {
      const value = themeTokenValues[token].value;
      return `  --token--${token}: ${value};\n`;
    })
    .join('')}  color: var(--token--primary);
  background-color: var(--token--primary-background);
  accent-color: var(--token--accent);\n`;
};

/** could be customized per theme */
const getThemeRules = (theme: string, dark?: boolean) => {
  const themeSelector = `${dark ? '.dark ' : ''}${
    theme === 'Global' ? '' : `.theme--${theme} `
  }`;
  return `${themeSelector}:focus-visible { outline-color: var(--token--accent); }
${themeSelector}::selection { background-color: var(--token--accent); }
${themeSelector}::marker { color: var(--token--accent); }
${themeSelector}:is(
  ::-webkit-calendar-picker-indicator,
  ::-webkit-clear-button,
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button
) {
  color: var(--token--accent);
}\n`;
};

export const getThemeTokenStyles = () => {
  const themes = Object.keys(tokens);

  return `${themes
    .map((theme) => {
      return `${
        theme === 'Global' ? ':root' : `.theme--${theme}`
      } {\n${getThemeProperties(theme)}}\n\n${getThemeRules(theme)}\n`;
    })
    .join('')}${themes
    .filter((theme) => theme !== 'Global')
    .map((theme) => {
      return `.dark .theme-dark--${theme} {\n${getThemeProperties(
        theme
      )}}\n\n${getThemeRules(theme, true)}\n`;
    })
    .join('')}
  `;
};
