import tokens from '../../figma/tokens.json';

interface Tokens {
  [key: string]: {
    [key: string]: {
      value: string;
    };
  };
}

const getThemeProperties = (theme: string) => {
  const themeTokens = Object.keys((tokens as Tokens)[theme]);

  return `${themeTokens
    .map((token: string) => {
      const value = (tokens as Tokens)[theme][token].value;
      return `  --token--${token}: ${value};\n`;
    })
    .join('')}  color: var(--token--primary);
  background-color: var(--token--primary-background);
  accent-color: var(--token--accent);\n`;
};

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

export const getTokenStyles = () => {
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
