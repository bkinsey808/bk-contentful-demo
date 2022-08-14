import tokens from '../../figma/tokens.json';

export const getTokenStyles = () => {
  const themes = Object.keys(tokens);

  return `${themes
    .map((theme) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const themeTokens = Object.keys((tokens as any)[theme]);
      // eslint-disable-next-line sonarjs/no-nested-template-literals
      return `\n${
        theme === 'Global' ? ':root' : `.theme--${theme}`
      } {\n${themeTokens
        .map((token) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const value = (tokens as any)[theme][token].value;
          return `  --token--${token}: ${value};\n`;
        })
        .join(
          ''
        )}  color: var(--token--primary);\n  background-color: var(--token--primary-background);}\n`;
    })
    .join('')}`;
};
