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
    .join(
      ''
    )}  color: var(--token--primary);\n  background-color: var(--token--primary-background);\n`;
};

export const getTokenStyles = () => {
  const themes = Object.keys(tokens);

  return `${themes
    .map((theme) => {
      return `\n${
        theme === 'Global' ? ':root' : `.theme--${theme}`
      } {\n${getThemeProperties(theme)}}\n`;
    })
    .join('')}
${themes
  .filter((theme) => theme !== 'Global')
  .map((theme) => {
    return `.dark .theme-dark--${theme} {\n${getThemeProperties(theme)}}\n\n`;
  })
  .join('')}
  `;
};
