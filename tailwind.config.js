const tokens = require('./figma/tokens.json');

const getConfig = (type) =>
  Object.fromEntries(
    Array.from(
      Object.keys(tokens).reduce((acc, themeName) => {
        const theme = tokens[themeName];
        const themeTokens = Object.keys(theme);
        themeTokens.forEach((tokenName) => {
          if (!type || theme[tokenName].type === type) {
            acc.add(tokenName);
          }
        });
        return acc;
      }, new Set())
    ).map((tokenName) => [tokenName, `var(--token--${tokenName})`])
  );

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: getConfig('color'),
      borderRadius: getConfig('borderRadius'),
    },
  },
  darkMode: 'class',
};
