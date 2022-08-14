import { Theme } from '@/generated/types';

export const getThemeClass = (theme?: Theme) =>
  theme ? `theme--${theme}` : undefined;
