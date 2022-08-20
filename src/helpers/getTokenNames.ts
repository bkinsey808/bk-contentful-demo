import tokens from '../../figma/tokens.json';

export const getTokenNames = (type?: string) =>
  Array.from(
    Object.keys(tokens).reduce((acc: Set<string>, themeName: string) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const theme = (tokens as any)[themeName];
      const themeTokens = Object.keys(theme);
      themeTokens.forEach((tokenName: string) => {
        if (!type || theme[tokenName].type === type) {
          acc.add(tokenName);
        }
      });
      return acc;
    }, new Set())
  ).map((tokenName: string) => `--token--${tokenName}`);
